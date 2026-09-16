// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from beardgroup.com at the root (public/CNAME sets the
// custom domain). To build for the github.io project-page preview instead, set
// SITE_URL=https://yusef-beardgroup.github.io and BASE_PATH=/beardgroupwebsite.
const site = process.env.SITE_URL ?? 'https://beardgroup.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
