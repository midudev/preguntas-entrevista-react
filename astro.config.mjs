import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://www.reactjs.wiki',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      filter: page => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://www.reactjs.wiki/') {
          return { ...item, changefreq: 'daily', priority: 1 }
        }
        if (item.url.endsWith('/questions')) {
          return { ...item, changefreq: 'weekly', priority: 0.9 }
        }
        // Article/question pages
        if (
          item.url !== 'https://www.reactjs.wiki/' &&
          !item.url.endsWith('/questions')
        ) {
          return { ...item, changefreq: 'monthly', priority: 0.7 }
        }
        return item
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
