import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { posts } from '../../../data/posts'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.summary
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return notFound()
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p className="lead">{post.summary}</p>
      <p><em>Published {post.published}</em></p>
      <hr />
      <p>Placeholder content. Replace with MDX integration later.</p>
    </article>
  )
}
