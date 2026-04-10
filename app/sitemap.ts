import type { MetadataRoute } from 'next'

import { listPosts } from '@/utils/posts.js'

const SITE_URL = 'https://reactjs.wiki'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPosts()
  const now = new Date()

  const postUrls: MetadataRoute.Sitemap = posts.map(({ post }) => ({
    url: `${SITE_URL}/${post}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
  ]
}
