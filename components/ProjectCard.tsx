import Link from 'next/link'
import { Project } from '../data/projects'

interface Props {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  const gradients = [
    'from-primary/20 to-secondary/10',
    'from-secondary/20 to-accent/10',
    'from-accent/20 to-primary/10',
    'from-info/20 to-primary/10',
    'from-success/20 to-accent/10',
    'from-warning/20 to-secondary/10',
  ]
  const gradient = gradients[index % gradients.length]

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative rounded-2xl border border-base-300/50 bg-base-200/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-base-200 hover:glow-primary hover:scale-[1.02] hover:-translate-y-1 opacity-0 animate-slide-up stagger-${index + 1}`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center text-white text-lg font-bold">
            {project.name.charAt(0)}
          </div>
          {project.website && (
            <span className="text-xs text-base-content/40 group-hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          )}
        </div>
        <h3 className="font-bold text-lg mb-2 text-base-content group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-base-content/60 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-base-300/50 text-base-content/60 border border-base-300/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
