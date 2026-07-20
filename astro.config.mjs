import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://www.reactjs.wiki',
  output: 'static',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    // Incrusta el CSS en el HTML en lugar de enlazarlo. El <link> obligaba a un
    // round-trip extra en serie (el navegador no descubre la hoja hasta que
    // parsea el head) que bloqueaba el primer pintado. Con el CSS dentro del
    // documento, el HTML llega listo para pintar.
    // Se pierde el cacheo de la hoja entre paginas, pero el CSS global ya se
    // dividio por ruta (global vs article) y el prefetch deja las paginas
    // calientes de todas formas.
    inlineStylesheets: 'always',
  },
  experimental: {
    // Prerender prefetched pages via the Speculation Rules API (Chromium)
    clientPrerender: true,
  },
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
