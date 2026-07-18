export const LEVELS = {
  EASY: 0,
  MEDIUM: 1,
  HARD: 2,
  ERRORS: -1,
} as const

/** Canonical origin without trailing slash (matches trailingSlash: 'never'). */
export const SITE_URL = 'https://www.reactjs.wiki'
export const SITE_NAME = 'React.js Wiki'
export const DEFAULT_TITLE = 'React.js Wiki - Preguntas y respuestas de React'
export const DEFAULT_DESCRIPTION =
  'Aprende React con preguntas de entrevista y conceptos clave explicados en español con ejemplos prácticos.'
/** JPEG is the most compatible format for social crawlers (LinkedIn, iMessage, etc.). */
export const OG_IMAGE_PATH = '/og.jpg'
export const OG_IMAGE_TYPE = 'image/jpeg'
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

/**
 * Absolute URL aligned with `trailingSlash: 'never'`.
 * Root keeps a trailing slash (`https://example.com/`) because that is how
 * browsers and URL serializers represent the homepage; other paths never end
 * with `/`.
 */
export function absoluteUrl(path = '/'): string {
  const normalized =
    !path || path === '/'
      ? '/'
      : path.startsWith('/')
        ? path
        : `/${path}`
  const url = new URL(normalized, `${SITE_URL}/`)

  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
  }

  // Homepage: always https://host/ (WHATWG serialization)
  if (url.pathname === '/') {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}${url.pathname}${url.search}${url.hash}`
}
