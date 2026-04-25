import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Ali – Portfolio',
    template: '%s | Ali'
  },
  description: 'Personal portfolio showcasing projects, writing, and tools.',
  openGraph: {
    title: 'Ali – Portfolio',
    description: 'Projects, writing, and tools I build.',
    url: 'https://example.com',
    siteName: 'Ali',
    locale: 'en_US',
    type: 'website'
  },
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="portfoolio" className="font-sans">
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
