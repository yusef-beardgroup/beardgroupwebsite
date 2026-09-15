const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/**
 * Prefix a site-relative path with the deploy base path, so links work both on
 * the GitHub Pages project URL (/beardgroupwebsite/) and on a custom domain (/).
 * Use for every internal link and asset: url('about/'), url('formw9.pdf').
 */
export function url(path = ''): string {
  return base + path.replace(/^\//, '');
}
