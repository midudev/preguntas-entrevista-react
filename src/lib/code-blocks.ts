/**
 * Wrap Prism-highlighted <pre><code> blocks with a polished shell:
 * language label + sticky line numbers.
 *
 * Important: do NOT split the code HTML into per-line wrappers. Prism JSX
 * (and other grammars) emit token spans that cross newlines; wrapping each
 * line would produce invalid HTML and the browser would "fix" it by
 * collapsing indentation and mis-aligning the gutter.
 */
export function enhanceCodeBlocks(html: string): string {
  return html.replace(
    /<pre(?:\s[^>]*)?>\s*<code(?:\s+class="([^"]*)")?>([\s\S]*?)<\/code>\s*<\/pre>/gi,
    (_full, className = '', codeHtml: string) => {
      const langMatch = String(className).match(/language-([\w+-]+)/i)
      const lang = langMatch?.[1]?.toLowerCase() ?? ''
      const langLabel = formatLangLabel(lang)
      const lineCount = countLines(codeHtml)

      const gutter = Array.from({ length: lineCount }, (_, i) => {
        return `<span class="code-line-number">${i + 1}</span>`
      }).join('')

      const classAttr = className ? ` class="${className}"` : ''
      const langAttr = lang ? ` data-lang="${escapeAttr(lang)}"` : ''
      const linesLabel =
        lineCount === 1 ? '1 línea' : `${lineCount} líneas`
      const header = langLabel
        ? `<div class="code-block-header"><span class="code-block-lang">${escapeHtml(langLabel)}</span><span class="code-block-meta" aria-hidden="true">${escapeHtml(linesLabel)}</span></div>`
        : ''

      const regionLabel = langLabel
        ? `Bloque de código ${langLabel}, ${linesLabel}`
        : `Bloque de código, ${linesLabel}`

      return (
        `<div class="code-block"${langAttr} role="group" aria-label="${escapeAttr(regionLabel)}">` +
        header +
        `<div class="code-block-body">` +
        `<div class="code-gutter" aria-hidden="true">${gutter}</div>` +
        // Keep Prism HTML intact (including cross-line token spans).
        // tabindex allows keyboard users to scroll wide code with arrows.
        `<pre class="code-block-pre" tabindex="0" aria-label="${escapeAttr(regionLabel)}"><code${classAttr}>${codeHtml}</code></pre>` +
        `</div></div>`
      )
    }
  )
}

function countLines(codeHtml: string): number {
  let lines = codeHtml.split('\n')
  // Drop a single trailing empty line from a final newline in the source
  if (lines.length > 1 && lines[lines.length - 1] === '') {
    lines = lines.slice(0, -1)
  }
  return Math.max(lines.length, 1)
}

function formatLangLabel(lang: string): string {
  if (!lang || lang === 'txt' || lang === 'text' || lang === 'plain') return ''
  const map: Record<string, string> = {
    js: 'JavaScript',
    jsx: 'JSX',
    ts: 'TypeScript',
    tsx: 'TSX',
    html: 'HTML',
    css: 'CSS',
    json: 'JSON',
    bash: 'Bash',
    sh: 'Shell',
    shell: 'Shell',
    md: 'Markdown',
    markdown: 'Markdown',
    diff: 'Diff',
    yml: 'YAML',
    yaml: 'YAML',
  }
  return map[lang] ?? lang.toUpperCase()
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replace(/'/g, '&#39;')
}
