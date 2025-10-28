'use client'
import { formatMRR, products } from '../data/products'

export function ProfileSidebar() {
  const totalMrr = products.reduce((sum, p) => sum + p.mrr, 0)
  const subscribers = 42851 // placeholder
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      <div className="w-48 h-48 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-5xl font-bold select-none text-white">
        M
      </div>
      <div className="space-y-6 flex-1">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">Fortune04</h1>
          <div className="flex flex-wrap gap-4 text-base text-gray-700">
            <div className="flex items-center gap-1.5">📍 Malaysia</div>
            <div className="flex items-center gap-1.5">💰 {formatMRR(totalMrr)}</div>
          </div>
        </div>
        <p className="italic text-base text-gray-700">Balance in all things.</p>
        <p className="text-base text-gray-900"><span className="font-semibold">{subscribers.toLocaleString()} entrepreneurs</span> read <span className="text-amber-600 underline underline-offset-4 decoration-2">Just Ship It</span>:</p>
        <p className="text-base text-gray-700">I share how to find startup ideas, launch fast, and get profitable. 👇</p>
        <div className="flex gap-4 pt-4">
          <a aria-label="Twitter" className="w-10 h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors" href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-gray-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a aria-label="YouTube" className="w-10 h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors" href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-gray-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
            </svg>
          </a>
          <a aria-label="LinkedIn" className="w-10 h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors" href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-gray-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a aria-label="Instagram" className="w-10 h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors" href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-gray-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}