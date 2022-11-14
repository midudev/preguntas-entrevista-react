import fs from 'fs-extra'
import slugify from '@sindresorhus/slugify'
import { marked } from 'marked'
import Prism from 'prismjs'

const LEVELS = {
  EASY: 0,
  MEDIUM: 1,
  HARD: 2,
  ERRORS: -1
}

const MAP_LEVELS = {
  principiante: LEVELS.EASY,
  intermedio: LEVELS.MEDIUM,
  avanzado: LEVELS.HARD,
  'errores típicos en react': LEVELS.ERRORS
}

const addCodeHighlight = async (markdown) => {
  const codeBlockRegex = /^```(\w+)\n([a-z]*[\s\S]*?)\n```/gm
  for (const match of markdown.matchAll(codeBlockRegex)) {
    let lang = match[1]
    const isPrismLanguageLoaded = Object.keys(Prism.languages).filter(id => typeof Prism.languages[id] === 'object').includes(lang)
    if (!isPrismLanguageLoaded) {
      try {
        // dynamically import the required component for languague
        const component = `prismjs/components/prism-${lang}.js`
        await import(component)
      } catch (error) {
        if (error instanceof Error && error.code === 'ERR_MODULE_NOT_FOUND') {
          lang = 'txt' // fallback to plain text if the language component is not found
        } else {
          throw error
        }
      }
    }
    const code = Prism.highlight(match[2], Prism.languages[lang], lang)
    const block = `<pre><code class="language-${lang}">${code}</code></pre>`
    markdown = markdown.replace(match[0], block)
  }
  return markdown
}

const readme = await fs.readFile('./README.md', 'utf-8')
const start = readme.indexOf('### ')

const cleaned = (await addCodeHighlight(readme))
  .replaceAll('**[⬆ Volver a índice](#índice)**', '')
  .replaceAll('](#', '](/')
  .slice(start)

fs.outputFile('./dist/README.md', cleaned, { encoding: 'utf-8' })

const tree = marked.lexer(cleaned)

let previousId = null
let previousTitle = ''
const index = []
let levelLiteral = 'principiante'
let stack = []

const counter = {
  total: 0
}

const promises = tree.map((item, i) => {
  const { depth, type, text } = item

  const isHeading = type === 'heading' && depth === 4
  const isLevel = depth === 3
  const isLast = i === tree.length - 1

  if (isLevel) {
    levelLiteral = text.toLowerCase()
    return null
  }

  if (isHeading || isLast) {
    let id
    let level

    if (!isLast) {
      id = slugify(text)
      level = MAP_LEVELS[levelLiteral]
      index.push({ id, text, level })
    }

    counter.total++

    // only for the first one
    if (previousId === null) {
      previousId = id
      previousTitle = text
    }

    if (previousId !== id || isLast) {
      const content = marked.parser(stack)

      content
        .replace('<h4 ', '<h1 ')
        .replace('</h4', '</h1')
        .replace('<hr>', '')

      const promise = fs.outputJSON(
        `./dist/${previousId}.json`,
        { id: previousId, level, title: previousTitle, content }
      )

      stack = []
      previousId = id
      previousTitle = text

      return promise
    }
  }

  stack.push(item)
  return null
}).filter(Boolean)

Promise.all(promises).then(() => {
  fs.outputJSON('./dist/counter.json', counter)
  fs.outputJSON('./dist/index.json', index)
  console.log('All files generated')
})
