import Link from 'next/link'
import { posts } from '../data/posts'

export default function BlogPreview() {
  return (
    <section id="blog" className="mt-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Latest Writing</h2>
        <Link href="/blog" className="link link-primary">All posts →</Link>
      </div>
      <ul className="space-y-4">
        {posts.slice(0,3).map(post => (
          <li key={post.slug} className="border-b border-base-300 pb-4">
            <Link href={`/blog/${post.slug}`} className="font-medium hover:text-primary transition-colors">{post.title}</Link>
            <p className="text-sm opacity-70 mt-1 line-clamp-2">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
