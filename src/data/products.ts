// Descriptions and frequencies come from the Newsletter Publishing Roster
// (2026 Subscription Pricing PDF), lightly copyedited. Class Action Updates
// isn't on the roster; its copy is adapted from its Substack about page.
// Pricing is intentionally omitted: each title's own site carries it.

export interface Product {
  name: string;
  href: string;
  frequency: string;
  description: string;
}

/** Titles with their own site or platform. */
export const titles: Product[] = [
  {
    name: 'Class Action Reporter',
    // HTTPS on this domain currently serves the beardgroup.com certificate,
    // which browsers reject. Switch to https:// once that's fixed.
    href: 'http://classactionreporter.com/',
    frequency: 'Every weekday',
    description:
      'Definitive coverage of class action and multi-plaintiff litigation matters, including new filings, pre-trial proceedings, settlements, verdicts, court rulings, appellate proceedings, claim administration and distributions, and professional compensation.',
  },
  {
    name: 'Class Action Updates',
    href: 'https://classactionupdates.substack.com/',
    frequency: 'Weekly, on Mondays',
    description:
      'In-depth analysis and exclusive insights on the latest developments and trends shaping the class action industry, delivered weekly to plaintiff and defense attorneys, litigation funders, claims administrators, and other class action professionals.',
  },
  {
    name: 'Troubled Company Reporter',
    href: 'https://bankrupt.com/periodicals/tcr.html',
    frequency: 'Daily',
    description:
      'Reporting about North American companies experiencing business, legal and financial strain; definitive coverage of all chapter 11 bankruptcy filings; and news about ongoing corporate restructurings. Subscribers get free access to TCR Resources, an online archive of all TCR content published since 1994.',
  },
  {
    name: 'Troubled Company Prospector',
    href: 'https://troubledcompanyprospector.com/',
    frequency: 'Weekly, on Mondays',
    description:
      'Alerts about companies with more than $10 million in assets that are experiencing business, legal or financial strain and that seek chapter 11 bankruptcy protection.',
  },
  {
    name: 'Bankruptcy Prospector',
    href: 'https://bankrupt.com/periodicals/bankruptcy_prospector.html',
    frequency: 'Weekly, on Mondays',
    description: 'Profiles of companies with $1 million to $20 million in assets that file for bankruptcy.',
  },
  {
    name: 'Turnarounds & Workouts',
    href: 'https://www.turnaroundsworkouts.com/',
    frequency: 'Monthly',
    description:
      'The monthly newsletter about the corporate restructuring industry for corporate restructuring professionals, including lists of top professionals, resource lists, industry trends, professional profiles and innovative solutions.',
  },
];

/** Regional editions and specialty titles with their own page on bankrupt.com. */
export const regionalTitles: Product[] = [
  {
    name: 'Troubled Company Reporter Asia Pacific',
    href: 'https://bankrupt.com/periodicals/tcr/tcrap.html',
    frequency: 'Every weekday',
    description:
      'Coverage of companies in the Asia Pacific region experiencing business, legal and financial strain and restructuring their operations and finances under judicial supervision.',
  },
  {
    name: 'Troubled Company Reporter Europe',
    href: 'https://bankrupt.com/periodicals/tcr/tcreur.html',
    frequency: 'Every weekday',
    description:
      'Coverage of companies in the European region experiencing business, legal and financial strain and restructuring their operations and finances under judicial supervision.',
  },
  {
    name: 'Troubled Company Reporter Latin America',
    href: 'https://bankrupt.com/periodicals/tcr/tcrla.html',
    frequency: 'Every weekday',
    description:
      'Coverage of companies in the Latin American region experiencing business, legal and financial strain and restructuring their operations and finances under judicial supervision.',
  },
  {
    name: 'Plant Prospector',
    href: 'https://bankrupt.com/periodicals/pp.html',
    frequency: 'Weekly, on Mondays',
    description:
      'Identifies businesses in transition because of layoffs, plant closings, and workforce reductions.',
  },
];
