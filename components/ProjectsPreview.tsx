import Link from 'next/link'
import { projects } from '../data/projects'

export default function ProjectsPreview() {
  return (
    <section id="projects" className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
        <Link href="/projects" className="link link-primary">All projects →</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0,3).map(p => (
          <div key={p.slug} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">{p.name}</h3>
              <p className="text-sm opacity-80 line-clamp-3">{p.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link href={`/projects/${p.slug}`} className="btn btn-sm btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
