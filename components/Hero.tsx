export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Building useful products & sharing what I learn.</h1>
      <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 mb-8">
        I design, code, and write about web development, indie hacking, and tools that boost productivity.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#blog" className="btn btn-outline">Read Blog</a>
      </div>
    </section>
  )
}
