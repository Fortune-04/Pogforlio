import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-base-300/50 py-12 mt-auto">
      <div className="container mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-semibold gradient-text text-lg">Ali</p>
          <p className="text-sm text-base-content/50">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="https://github.com/" target="_blank" className="text-base-content/50 hover:text-primary transition-colors">GitHub</Link>
          <Link href="https://linkedin.com/" target="_blank" className="text-base-content/50 hover:text-primary transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  )
}
