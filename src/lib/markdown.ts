import { marked } from 'marked'

/**
 * Renders inline Markdown (code, emphasis, bold) to HTML.
 * Safe for titles and short labels — no block-level elements.
 */
export function renderInlineMarkdown(text: string): string {
  if (!text) return ''
  return marked.parseInline(text, { async: false }) as string
}

/**
 * Strips Markdown/HTML to plain text (for meta tags, aria-labels, etc.).
 */
export function stripMarkdown(text: string): string {
  if (!text) return ''
  return decodeEntities(
    renderInlineMarkdown(text)
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  )
}

function decodeEntities(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}
