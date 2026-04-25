import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/80 border border-base-300/50 text-sm text-base-content/70 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Available for work
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
          Hi, I&apos;m <span className="gradient-text">Ali</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-xl text-base-content/60 mb-10 leading-relaxed animate-slide-up stagger-2">
          I design, code, and ship products. Passionate about web development,
          building tools, and sharing what I learn along the way.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up stagger-3">
          <Link href="/projects" className="btn btn-primary btn-lg rounded-xl gap-2 shadow-lg shadow-primary/25">
            View My Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="btn btn-outline btn-lg rounded-xl border-base-300/50 hover:bg-base-200">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
