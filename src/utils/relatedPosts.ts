import type { CollectionEntry } from "astro:content";
import { getPath } from "./getPath";
// Import pre-computed similarities directly (no dynamic import)
import similaritiesData from "@/assets/similarities.json";

// Type for the similarities structure
type SimilarityMap = Record<string, Array<{ id: string; similarity: number }>>;

// Use the imported data directly
const similarities: SimilarityMap = similaritiesData as SimilarityMap;

/**
 * Get related posts for a given post using pre-computed semantic similarities.
 *
 * The similarities are computed by scripts/generate-similarities.ts which uses
 * transformers.js to create embeddings and calculate cosine similarity.
 *
 * This approach avoids running transformers.js during the Astro build,
 * which would fail on Cloudflare due to native module dependencies.
 */
export async function getRelatedPosts(
  currentPost: CollectionEntry<"blog">,
  allPosts: CollectionEntry<"blog">[],
  limit = 3
): Promise<CollectionEntry<"blog">[]> {
  // Build the lookup key: locale/slug format
  const postPath = getPath(currentPost.id, currentPost.filePath, false);
  const locale = currentPost.id.split("/")[0];

  // Try different key formats
  const possibleKeys = [`${locale}/${postPath}`, currentPost.id, postPath];

  let similarIds: string[] = [];

  for (const key of possibleKeys) {
    if (similarities[key]) {
      similarIds = similarities[key].slice(0, limit).map(s => s.id);
      break;
    }
  }

  // If no pre-computed similarities, return empty array
  if (similarIds.length === 0) {
    return [];
  }

  // Map similarity IDs back to actual posts
  const relatedPosts: CollectionEntry<"blog">[] = [];

  for (const simId of similarIds) {
    // simId format is "locale/slug"
    const [simLocale, ...slugParts] = simId.split("/");
    const simSlug = slugParts.join("/");

    const matchingPost = allPosts.find(post => {
      const postLocale = post.id.split("/")[0];
      const postSlug = getPath(post.id, post.filePath, false);

      return (
        postLocale === simLocale &&
        (postSlug === simSlug || post.id.includes(simSlug))
      );
    });

    if (matchingPost && matchingPost.id !== currentPost.id) {
      relatedPosts.push(matchingPost);
    }
  }

  return relatedPosts.slice(0, limit);
}
