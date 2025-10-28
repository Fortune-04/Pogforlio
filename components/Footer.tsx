import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-base-300 py-8 text-sm">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="opacity-70">© {new Date().getFullYear()} Portfoolio. Built with Next.js & DaisyUI.</p>
        <div className="flex gap-4">
          <Link href="https://github.com/" target="_blank" className="link link-hover">GitHub</Link>
          <Link href="https://linkedin.com/" target="_blank" className="link link-hover">LinkedIn</Link>
          <Link href="/uses" className="link link-hover">Uses</Link>
        </div>
      </div>
    </footer>
  )
}
