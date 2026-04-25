'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="border-b border-base-300/50 bg-base-100/60 backdrop-blur-xl sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight gradient-text">
          Ali
        </Link>
        <ul className="flex gap-1 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === l.href
                    ? 'bg-primary/15 text-primary font-medium'
                    : 'text-base-content/70 hover:text-base-content hover:bg-base-300/50'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
