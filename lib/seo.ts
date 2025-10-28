import type { Metadata } from 'next'

interface BaseProps {
  title?: string
  description?: string
  path?: string
}

export function buildMetadata({ title, description, path }: BaseProps): Metadata {
  const baseTitle = 'Portfoolio'
  return {
    title: title ? `${title} | ${baseTitle}` : baseTitle,
    description: description || 'Portfolio showcasing projects & writing.',
    openGraph: {
      title: title ? `${title} | ${baseTitle}` : baseTitle,
      description: description || 'Portfolio showcasing projects & writing.',
      url: path ? `https://example.com${path}` : 'https://example.com',
      siteName: baseTitle,
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${baseTitle}` : baseTitle,
      description: description || 'Portfolio showcasing projects & writing.'
    }
  }
}
