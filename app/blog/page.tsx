import Link from 'next/link'
import { posts } from '../../data/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on building, shipping, and learning.',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Blog</h1>
        <p className="text-base-content/50 text-lg">Thoughts on building, shipping, and learning.</p>
      </div>
      <div className="space-y-1">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-baseline justify-between gap-4 py-4 border-b border-base-300/30 hover:border-primary/30 transition-colors"
          >
            <div className="min-w-0">
              <h2 className="font-semibold group-hover:text-primary transition-colors truncate">{post.title}</h2>
              <p className="text-sm text-base-content/50 mt-1 line-clamp-1">{post.summary}</p>
            </div>
            <span className="text-xs text-base-content/30 whitespace-nowrap flex-shrink-0">{post.published}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
