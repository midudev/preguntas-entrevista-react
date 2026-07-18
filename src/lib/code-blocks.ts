/**
 * Wrap Prism-highlighted <pre><code> blocks with a polished shell:
 * language label + sticky line numbers.
 */
export function enhanceCodeBlocks(html: string): string {
  return html.replace(
    /<pre(?:\s[^>]*)?>\s*<code(?:\s+class="([^"]*)")?>([\s\S]*?)<\/code>\s*<\/pre>/gi,
    (_full, className = '', codeHtml: string) => {
      const langMatch = String(className).match(/language-([\w+-]+)/i)
      const lang = langMatch?.[1]?.toLowerCase() ?? ''
      const langLabel = formatLangLabel(lang)

      // Preserve Prism token HTML; split only on real newlines.
      let lines = codeHtml.split('\n')
      // Drop a single trailing empty line from a final newline in the source.
      if (lines.length > 1 && lines[lines.length - 1].trim() === '') {
        lines = lines.slice(0, -1)
      }
      if (lines.length === 0) lines = ['']

      const lineCount = lines.length
      const gutter = Array.from({ length: lineCount }, (_, i) => {
        const n = i + 1
        return `<span class="code-line-number">${n}</span>`
      }).join('')

      // Join without newlines: each .code-line is display:block, and a
      // literal \n between spans would double the vertical spacing in <pre>.
      const body = lines
        .map(line => {
          // Keep empty lines selectable / non-collapsing via CSS min-height
          const content = line.length === 0 ? '' : line
          return `<span class="code-line">${content}</span>`
        })
        .join('')

      const classAttr = className ? ` class="${className}"` : ''
      const langAttr = lang ? ` data-lang="${escapeAttr(lang)}"` : ''
      const header = langLabel
        ? `<div class="code-block-header"><span class="code-block-lang">${escapeHtml(langLabel)}</span><span class="code-block-meta" aria-hidden="true">${lineCount} ${lineCount === 1 ? 'línea' : 'líneas'}</span></div>`
        : ''

      return (
        `<div class="code-block"${langAttr}>` +
        header +
        `<div class="code-block-body">` +
        `<div class="code-gutter" aria-hidden="true">${gutter}</div>` +
        `<pre class="code-block-pre" tabindex="0"><code${classAttr}>${body}</code></pre>` +
        `</div></div>`
      )
    }
  )
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
