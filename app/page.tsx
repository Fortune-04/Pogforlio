import Hero from '../components/Hero'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
            <p className="text-base-content/50">Things I&apos;ve built and shipped</p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-primary hover:text-primary/80 transition-colors hidden sm:flex items-center gap-1"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative rounded-3xl border border-base-300/50 bg-base-200/30 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s work together</h2>
            <p className="text-base-content/50 mb-8 max-w-lg mx-auto">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg rounded-xl shadow-lg shadow-primary/25">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
