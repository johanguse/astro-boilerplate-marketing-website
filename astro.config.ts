import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import { SITE } from "./src/config";
import {
  DEFAULT_LOCALE,
  LOCALES_TO_LANG,
  SUPPORTED_LOCALES,
} from "./src/i18n/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  site: SITE.website,
  i18n: {
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => SITE.showArchives || !page.endsWith("/archives"),
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALES_TO_LANG,
      },
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading:
            "(table[ -]of[ -])?contents?|toc|محتويات|المحتويات|جدول المحتويات",
        },
      ],
      [remarkCollapse, { test: "Table of contents" }],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    ssr: {
      // Mark native Node.js modules as external to prevent bundling
      external: [
        "@resvg/resvg-js",
        // Node.js built-ins (suppress Vite warnings for Cloudflare adapter)
        "node:fs",
        "node:path",
        "node:url",
        "node:fs/promises",
        "fs",
        "path",
        "url",
        "module",
      ],
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/compile",
    },
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
      TURNSTILE_SITE_KEY: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
      TURNSTILE_SECRET_KEY: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
    },
  },
  experimental: {
    preserveScriptOrder: true,
  },
});
