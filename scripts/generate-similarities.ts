/**
 * Pre-compute semantic similarities between blog posts using transformers.js
 * Run this script before building: `bun run generate:similarities`
 *
 * This generates a JSON file that can be imported during Astro build,
 * avoiding native module issues with Cloudflare Workers.
 */

import {
  pipeline,
  type FeatureExtractionPipeline,
} from "@xenova/transformers";
import fs from "node:fs";
import path from "node:path";
import { glob } from "tinyglobby";

// --------- Configurations ---------
const CONTENT_GLOB = "src/data/blog/**/*.md";
const OUTPUT_FILE = "src/assets/similarities.json";
const TOP_N = 5; // Number of similar docs to keep per post
const MODEL = "Xenova/all-MiniLM-L6-v2";

// --------- Type Definitions ---------
interface Document {
  id: string;
  locale: string;
  title: string;
  content: string;
  tags: string[];
}

interface SimilarityResult {
  id: string;
  similarity: number;
}

// --------- Utils ---------

/**
 * Normalizes a vector to unit length (L2 norm == 1)
 */
function normalize(vec: Float32Array): Float32Array {
  const len = Math.hypot(...vec);
  if (!len) return vec;
  return new Float32Array(vec.map(x => x / len));
}

/**
 * Computes dot product of two same-length normalized vectors (cosine similarity)
 */
function dot(a: Float32Array, b: Float32Array): number {
  return a.reduce((sum, ai, i) => sum + ai * b[i], 0);
}

/**
 * Extract locale from file path
 * e.g., "src/data/blog/es/post.md" -> "es"
 * e.g., "src/data/blog/post.md" -> "en"
 */
function getLocaleFromPath(filePath: string): string {
  const parts = filePath.split("/");
  const blogIndex = parts.indexOf("blog");
  if (blogIndex === -1) return "en";

  const afterBlog = parts[blogIndex + 1];
  // Check if it's a locale folder (2-letter code) or a file
  if (afterBlog && afterBlog.length === 2 && !afterBlog.includes(".")) {
    return afterBlog;
  }
  return "en";
}

/**
 * Simple frontmatter parser (avoids gray-matter dependency)
 */
function parseFrontmatter(content: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const [, frontmatter, body] = match;
  const data: Record<string, unknown> = {};

  // Simple YAML parsing for common fields
  for (const line of frontmatter.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: unknown = line.slice(colonIndex + 1).trim();

    // Handle quoted strings
    if (
      (value as string).startsWith('"') &&
      (value as string).endsWith('"')
    ) {
      value = (value as string).slice(1, -1);
    }
    // Handle arrays (simple format: [item1, item2])
    else if (
      (value as string).startsWith("[") &&
      (value as string).endsWith("]")
    ) {
      value = (value as string)
        .slice(1, -1)
        .split(",")
        .map(s => s.trim().replace(/^["']|["']$/g, ""));
    }
    // Handle booleans
    else if (value === "true") value = true;
    else if (value === "false") value = false;

    data[key] = value;
  }

  return { data, content: body };
}

/**
 * Parse a markdown file and extract relevant content
 */
async function processFile(filePath: string): Promise<Document | null> {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const { data, content: body } = parseFrontmatter(content);

    // Skip drafts
    if (data.draft) return null;

    const locale = getLocaleFromPath(filePath);

    // Create text for embedding: title + description + tags + first part of content
    const plainContent = body
      .replace(/^import .*?$/gm, "")
      .replace(/^export .*?$/gm, "")
      .replace(/```[\s\S]*?```/g, "") // Remove code blocks
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
      .replace(/[#*_`]/g, "") // Remove markdown formatting
      .replace(/\n+/g, " ")
      .trim()
      .slice(0, 1000); // Limit content length for embedding

    const title = (data.title as string) || "";
    const description = (data.description as string) || "";
    const tags = (data.tags as string[]) || [];

    const textForEmbedding = [title, description, tags.join(" "), plainContent]
      .filter(Boolean)
      .join(" ");

    // Extract ID from filename
    const filename = path.basename(filePath, ".md");

    return {
      id: `${locale}/${filename}`,
      locale,
      title: title || filename,
      content: textForEmbedding,
      tags,
    };
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: CLI script
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
}

/**
 * Load all documents from markdown files
 */
async function loadDocuments(pattern: string): Promise<Document[]> {
  const files = await glob(pattern);
  const docs: Document[] = [];

  for (const file of files) {
    const doc = await processFile(file);
    if (doc) docs.push(doc);
  }

  return docs;
}

/**
 * Generate embeddings for all documents
 */
async function generateEmbeddings(
  docs: Document[],
  extractor: FeatureExtractionPipeline
): Promise<Float32Array[]> {
  const embeddings: Float32Array[] = [];

  // biome-ignore lint/suspicious/noConsole: CLI script
  console.log(`Generating embeddings for ${docs.length} documents...`);

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    process.stdout.write(`\r  Processing ${i + 1}/${docs.length}: ${doc.id}`);

    const output = (await extractor(doc.content, {
      pooling: "mean",
      normalize: false,
    })) as { data: Float32Array; dims: number[] };

    embeddings.push(normalize(output.data));
  }

  // biome-ignore lint/suspicious/noConsole: CLI script
  console.log("\n  ✓ Embeddings generated");
  return embeddings;
}

/**
 * Find top-N similar documents for a given document
 * Only considers documents in the same locale
 */
function findSimilar(
  idx: number,
  docs: Document[],
  embeddings: Float32Array[],
  n: number
): SimilarityResult[] {
  const currentDoc = docs[idx];
  const currentEmbedding = embeddings[idx];

  return docs
    .map((doc, j) => {
      if (j === idx) return null; // Skip self
      if (doc.locale !== currentDoc.locale) return null; // Only same locale

      return {
        id: doc.id,
        similarity: +dot(currentEmbedding, embeddings[j]).toFixed(4),
      };
    })
    .filter((r): r is SimilarityResult => r !== null)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, n);
}

/**
 * Compute all similarities
 */
function computeAllSimilarities(
  docs: Document[],
  embeddings: Float32Array[],
  n: number
): Record<string, SimilarityResult[]> {
  return Object.fromEntries(
    docs.map((doc, i) => [doc.id, findSimilar(i, docs, embeddings, n)])
  );
}

// --------- Main ---------
// biome-ignore lint/suspicious/noConsole: CLI script with progress output
async function main() {
  console.log("🔍 Generating post similarities...\n");

  try {
    // 1. Load transformer model
    console.log("1. Loading model:", MODEL);
    const extractor = (await pipeline(
      "feature-extraction",
      MODEL
    )) as FeatureExtractionPipeline;
    console.log("   ✓ Model loaded\n");

    // 2. Load all documents
    console.log("2. Loading documents from:", CONTENT_GLOB);
    const docs = await loadDocuments(CONTENT_GLOB);
    if (!docs.length) {
      console.log("   ⚠ No documents found");
      return;
    }
    console.log(`   ✓ Loaded ${docs.length} documents\n`);

    // 3. Generate embeddings
    console.log("3. Generating embeddings...");
    const embeddings = await generateEmbeddings(docs, extractor);

    // 4. Compute similarities
    console.log("\n4. Computing similarities...");
    const similarities = computeAllSimilarities(docs, embeddings, TOP_N);
    console.log("   ✓ Similarities computed\n");

    // 5. Save results
    console.log("5. Saving results to:", OUTPUT_FILE);
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(similarities, null, 2));
    console.log("   ✓ Results saved\n");

    console.log("✅ Done! Similarities generated successfully.");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

main();
