export interface Project {
  slug: string
  name: string
  description: string
  website?: string
  repo?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'focus-tracker',
    name: 'Focus Tracker',
    description: 'A minimalist app to track deep work sessions and visualize focus trends over time.',
    website: 'https://example.com',
    repo: 'https://github.com/example/focus-tracker',
    tags: ['Next.js', 'Tailwind', 'Productivity']
  },
  {
    slug: 'api-saas-starter',
    name: 'API SaaS Starter',
    description: 'Starter kit for building a subscription-based JSON API with authentication & billing.',
    tags: ['Node', 'Stripe', 'Prisma']
  },
  {
    slug: 'site-analytics',
    name: 'Site Analytics',
    description: 'Lightweight privacy-friendly analytics dashboard for static sites.',
    tags: ['Edge', 'Analytics', 'TypeScript']
  },
  {
    slug: 'automation-cli',
    name: 'Automation CLI',
    description: 'Command-line tool to script common indie hacking tasks like deploying & tweeting releases.',
    tags: ['CLI', 'Productivity']
  }
]
