export interface Post {
  slug: string
  title: string
  summary: string
  published: string
  tags: string[]
}

export const posts: Post[] = [
  {
    slug: 'launch-lessons',
    title: '10 Lessons From Shipping 3 Micro SaaS Products',
    summary: 'What worked, what flopped, and the frameworks I now use to validate ideas faster.',
    published: '2025-01-12',
    tags: ['Indie hacking', 'SaaS']
  },
  {
    slug: 'next-tailwind-patterns',
    title: 'Reusable UI Patterns with Next.js & Tailwind',
    summary: 'Extracting layout primitives, composition patterns, and theme tokens to speed up builds.',
    published: '2025-02-04',
    tags: ['Next.js', 'UI']
  },
  {
    slug: 'pricing-strategies',
    title: 'Simple Pricing Strategies That Convert',
    summary: 'Position tiers, reduce decision friction, and test value metrics without overthinking.',
    published: '2025-03-08',
    tags: ['Business', 'Growth']
  }
]
