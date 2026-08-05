// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Default keeps the upstream /m3 sub-path; deploys at a domain root set
  // ASTRO_BASE=/ at build time.
  base: process.env.ASTRO_BASE || '/m3',
  trailingSlash: 'always',
});
