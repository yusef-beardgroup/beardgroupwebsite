// @ts-check
import { defineConfig } from 'astro/config';

// Until beardgroup.com points at this repo, GitHub Pages serves the site as a
// project page under /beardgroupwebsite/. When the custom domain goes live,
// set SITE_URL=https://www.beardgroup.com and BASE_PATH=/ (or change the
// defaults below) and add public/CNAME.
const site = process.env.SITE_URL ?? 'https://yusef-beardgroup.github.io';
const base = process.env.BASE_PATH ?? '/beardgroupwebsite';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
