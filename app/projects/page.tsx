import { projects } from '../../data/projects'
import { ProjectCard } from '../../components/ProjectCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All projects I have built and shipped.',
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">All Projects</h1>
        <p className="text-base-content/50 text-lg">
          A collection of everything I&apos;ve built — from side projects to full products.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  )
}
