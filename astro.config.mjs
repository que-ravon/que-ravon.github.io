// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://namangoyal.me",
  trailingSlash: "ignore",
  devToolbar: { enabled: false },

  // old urls keep working. /resume is the link to hand out for the pdf.
  redirects: {
    "/resume": "/Naman_Goyal_Resume.pdf",
    "/projects": "/experience/#projects",
  },

  integrations: [
    sitemap({
      filter: (page) => !/\/(resume|projects)\/?$/.test(page),
    }),
  ],

  // self-hosted, subset to latin, with a size-matched fallback so text does not jump when it loads
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-sans",
      provider: fontProviders.local(),
      fallbacks: ["system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      optimizedFallbacks: true,
      display: "swap",
      options: {
        variants: [
          {
            src: ["./node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],

  markdown: {
    // math in posts is rendered to html at build time, so no katex javascript reaches the browser
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },

  // everything is small enough to inline, so a page is one request plus the font and photo
  build: { inlineStylesheets: "always", format: "directory" },

  // prerender a page as soon as the pointer is on its link (speculation rules in chromium, prefetch elsewhere)
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  experimental: { clientPrerender: true },
});
