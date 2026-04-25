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
    slug: 'nextlife',
    name: 'NextLife',
    description: 'A modern financial tracking application for managing personal finances and budgeting in the digital age.',
    tags: ['Next.js', 'TypeScript', 'Finance']
  },
  {
    slug: 'affly',
    name: 'Affly',
    description: 'An affiliate marketing platform that simplifies link management, tracking, and performance analytics.',
    tags: ['React', 'Node.js', 'Marketing']
  },
  {
    slug: 'sbot',
    name: 'SBot',
    description: 'An intelligent chatbot powered by AI for automating conversations and customer support workflows.',
    tags: ['AI', 'Python', 'Chatbot']
  },
  {
    slug: 'lumi',
    name: 'Lumi',
    description: 'A smart home device integration platform that makes controlling and automating your home effortless.',
    tags: ['IoT', 'React', 'Smart Home']
  }
]
