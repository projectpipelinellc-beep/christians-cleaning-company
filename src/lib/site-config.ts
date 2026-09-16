/**
 * Central content file for the Christian's Cleaning Company website.
 *
 * Edit this file to update business details, copy, reviews, and imagery
 * without touching component code. Fields marked "NEEDS VERIFICATION"
 * are supplied snapshot data and should be confirmed by the business
 * owner before launch.
 */

export const business = {
  name: "Christian's Cleaning Company",
  shortName: "CCC",
  tagline: "Home & Commercial Cleaning • Hudson Valley, NY",
  phone: "(845) 814-1020",
  phoneHref: "tel:+18458141020",
  email: "christianmadsenjr@gmail.com",
  emailHref: "mailto:christianmadsenjr@gmail.com",
  address: {
    line1: "2295 NY-82",
    city: "Lagrangeville",
    state: "NY",
    zip: "12540",
  },
  facebookUrl: "https://www.facebook.com/christianscleaningcompany/",
  mission:
    "Our mission here at CCC is to provide our clients with the BEST Experience possible!",
} as const;

export const serviceAreas = [
  "Dutchess County",
  "Putnam County",
  "Westchester County",
  "Ulster County",
  "Orange County",
] as const;

/**
 * NEEDS VERIFICATION: supplied as a snapshot from the business's Google
 * listing at the time this site was built. This is not a live feed —
 * confirm the current rating and review count before launch and update
 * the values below (or wire up a live source later).
 */
export const googleRating = {
  rating: 4.9,
  reviewCount: 113,
  asOf: "supplied at build time — reverify before launch",
} as const;

export type Review = {
  quote: string;
  name: string;
};

export const reviews: Review[] = [
  {
    quote:
      "I was promised exceptional service and Christian's Cleaning Service delivered!!",
    name: "Beth Vought",
  },
  {
    quote:
      "The staff is very thorough and doing an excellent job with cleaning.",
    name: "Tara Donohue",
  },
  {
    quote:
      "It was clear they genuinely cared about the quality of their work.",
    name: "Ashley DiAngelo",
  },
];

export const approachPoints = [
  {
    title: "A high standard of clean",
    body: "Every visit is guided by one goal: a home that looks and feels genuinely cared for, not just tidied up.",
  },
  {
    title: "Your priorities come first",
    body: "Tell us what matters most in your home, and that's where our attention goes first.",
  },
  {
    title: "A better experience from the start",
    body: "From your first message to the finished clean, we want the whole experience to feel easy and respectful of your time.",
  },
] as const;

/**
 * Site-wide flags. Toggle NEXT_PUBLIC_ALLOW_INDEXING=true once the
 * business has approved the site for public launch.
 */
export const siteFlags = {
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;
