import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://reactjs.wiki',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      filter: page => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.8,
      serialize(item) {
        if (item.url === 'https://reactjs.wiki/') {
          return { ...item, changefreq: 'daily', priority: 1 }
        }
        if (item.url.endsWith('/questions')) {
          return { ...item, changefreq: 'weekly', priority: 0.9 }
        }
        return item
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
