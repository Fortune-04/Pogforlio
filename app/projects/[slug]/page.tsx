import { notFound } from 'next/navigation'
import { projects } from '../../../data/projects'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.name,
    description: project.description
  }
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="max-w-prose opacity-80">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(t => <span key={t} className="badge badge-outline">{t}</span>)}
      </div>
      <div className="space-x-4 mt-4">
        {project.website && <a href={project.website} className="btn btn-primary" target="_blank">Website</a>}
        {project.repo && <a href={project.repo} className="btn btn-outline" target="_blank">Repository</a>}
      </div>
    </div>
  )
}
