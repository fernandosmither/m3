// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://m3fellowship.com",
  base: process.env.ASTRO_BASE || "/",
  integrations: [
    sitemap({
      // Legal pages and lab experiments are noindex; keep the sitemap to
      // what we actually want ranked.
      filter: (page) =>
        !page.includes("/lab/") &&
        !page.includes("/privacy/") &&
        !page.includes("/terms/"),
    }),
  ],
  build: {
    assets: "assets",
  },
});
