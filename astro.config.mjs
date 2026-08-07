// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When a custom domain arrives: set `site` to it, remove `base`, and add a
// public/CNAME file — the base-aware links below all collapse to '/' automatically.
export default defineConfig({
  site: 'https://ravisatya108.github.io',
  base: '/the-half-nobody-quotes',
  integrations: [sitemap()],
});
