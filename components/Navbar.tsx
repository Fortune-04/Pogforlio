'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#subscribe', label: 'Subscribe' }
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">Portfoolio</Link>
        <ul className="flex gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-2 py-1 rounded transition-colors ${pathname === l.href ? 'bg-primary text-primary-content' : 'hover:bg-base-200'}`}
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
