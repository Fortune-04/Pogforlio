import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Portfoolio – Creative Builder',
    template: '%s | Portfoolio'
  },
  description: 'Personal portfolio showcasing projects, writing, and uses.',
  openGraph: {
    title: 'Portfoolio',
    description: 'Projects, writing, and tools I use.',
    url: 'https://example.com',
    siteName: 'Portfoolio',
    locale: 'en_US',
    type: 'website'
  },
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="portfoolio" className="font-sans">
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
