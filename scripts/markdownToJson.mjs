import fs from 'fs-extra'
import slugify from '@sindresorhus/slugify'
import { marked } from 'marked'

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

const readme = await fs.readFile('./README.md', 'utf-8')
const start = readme.indexOf('###')

const cleaned = readme
  .replaceAll('**[⬆ Volver a índice](#índice)**', '')
  .replaceAll('](#', '](/')
  .slice(start)

fs.outputFile('./dist/README.md', cleaned, { encoding: 'utf-8' })

const tree = marked.lexer(cleaned)

let previousId = null
const index = []
let levelLiteral = 'principiante'
let stack = []

const promises = tree.map((item) => {
  const { depth, type, text } = item

  const isHeading = type === 'heading'
  const isLevel = depth === 3

  if (isLevel) {
    levelLiteral = text.toLowerCase()
    return null
  }

  if (isHeading) {
    const id = slugify(text)
    index.push({ id, text })

    if (previousId === null) previousId = id

    if (previousId !== id) {
      const level = MAP_LEVELS[levelLiteral]
      const promise = fs.outputJSON(
        `./dist/${previousId}.json`,
        { id: previousId, level, title: text, content: marked.parser(stack) }
      )

      stack = []
      previousId = id

      return promise
    }
  }

  stack.push(item)
  return null
}).filter(Boolean)

Promise.all(promises).then(() => {
  fs.outputJSON('./dist/index.json', index)
  console.log('All files generated')
})
