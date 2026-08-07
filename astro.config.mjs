// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO Phase 1: set `site` to the real domain (or the GitHub Pages URL) before first deploy.
export default defineConfig({
  site: 'https://thehalfnobodyquotes.com',
  integrations: [sitemap()],
});
