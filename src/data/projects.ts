export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  tags: string[];
  width: number;
  height: number;
}

export const projects: Project[] = [
  {
    slug: 'zipa',
    title: 'Zipa',
    description:
      'Username-first crypto and naira payments for Nigerians — send to an @handle instead of a wallet address.',
    image: '/works/zipa.webp',
    imageAlt:
      'Zipa homepage with the headline Crypto banking for Nigeria and a phone showing a naira balance.',
    href: 'https://zipa-landing-page.vercel.app',
    tags: ['Fintech', 'Solana', 'Product'],
    width: 1440,
    height: 900,
  },
  {
    slug: 'rtb',
    title: 'Rania the Brand',
    description:
      'Premium fashion store for luxury bags, abayas, resort wear, perfumes, and considered gifts.',
    image: '/works/rtb.webp',
    imageAlt:
      'RTBstores homepage, a dark luxury fashion page titled Luxury, curated for you.',
    href: 'https://rtb-premium-fashion-frontend.vercel.app',
    tags: ['Fashion', 'Storefront', 'Design'],
    width: 1440,
    height: 900,
  },
  {
    slug: 'zen-homes',
    title: 'Zen Homes Compact',
    description:
      'Tiny-homes catalogue for Zen Drafting Studio — five kit homes, supplied, approved, and installed.',
    image: '/works/zen-homes.webp',
    imageAlt:
      'Zen Homes Compact homepage showing a timber cottage and the line A home for the backyard.',
    href: 'https://zen-homes-compact.vercel.app',
    tags: ['Architecture', 'Catalogue', 'Design'],
    width: 1440,
    height: 900,
  },
  {
    slug: 'nutriblend',
    title: 'Unique NutriBlend',
    description:
      'Storefront for a whole-food blend of nine superfoods, seeds, and nuts, milled fresh in Lagos.',
    image: '/works/nutriblend.webp',
    imageAlt:
      'Unique NutriBlend homepage with a golden pouch and the line Whole-food nourishment, from seeds and nuts.',
    href: 'https://uniquenutriblend.vercel.app',
    tags: ['Commerce', 'Brand', 'Design'],
    width: 1440,
    height: 900,
  },
];
