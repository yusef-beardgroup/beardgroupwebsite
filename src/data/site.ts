export const legalName = 'Beard Group, Inc.';

export const contactEmail = 'will@beardgroup.com';

export interface NavLink {
  label: string;
  /** Path relative to the site base, with trailing slash; pass through url(). */
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: 'About', href: 'about/' },
  { label: 'Products', href: 'products/' },
  { label: 'Conferences', href: 'conferences/' },
  { label: 'Meet the Team', href: 'team/' },
  { label: 'Payments & W-9', href: 'payments/' },
];

export const contactLink: NavLink = { label: 'Contact Us', href: 'contact/' };

export const privacyLink: NavLink = { label: 'Privacy Policy', href: 'privacy-policy/' };
