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
/** Prefer WebP: Cloudflare hotlink protection blocks .jpg/.png with external Referer. */
export const OG_IMAGE_PATH = '/og.webp'
export const OG_IMAGE_TYPE = 'image/webp'
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

/** Build absolute URL without trailing slash (except empty path → origin). */
export function absoluteUrl(path = '/'): string {
  const normalized =
    !path || path === '/'
      ? '/'
      : path.startsWith('/')
        ? path
        : `/${path}`
  const url = new URL(normalized, `${SITE_URL}/`)
  // Drop trailing slash to match trailingSlash: 'never'
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
  }
  // Root: never trailing slash
  if (url.pathname === '/') {
    return SITE_URL
  }
  return `${SITE_URL}${url.pathname}${url.search}${url.hash}`
}
