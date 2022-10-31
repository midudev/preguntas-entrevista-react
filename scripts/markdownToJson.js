import fs from 'fs-extra'
import slugify from '@sindresorhus/slugify'
import { marked } from 'marked'

const readme = await fs.readFile('./README.md', 'utf-8')
const start = readme.indexOf('###')

const cleaned = readme
  .replaceAll('**[⬆ Volver a índice](#índice)**', '')
  .replaceAll('](#', '](/')
  .slice(start)

fs.outputFile('./dist/README.md', cleaned, { encoding: 'utf-8' })

const tree = marked.lexer(cleaned)

let previousId = null
let index = {}
let level = 'Principiante'
let stack = []

const promises = tree.map((item) => {
  const { depth, type, text } = item

  const isHeading = type === 'heading'
  const isLevel = depth === 3

  if (isLevel) {
    level = text.toLowerCase()
    return null
  }
  
  if (isHeading) {
    const id = slugify(text)
    index[id] = { text }
    
    if (previousId === null) previousId = id

    if (previousId !== id) {
      fs.outputJSON(
        `./dist/${previousId}.json`,
        {id: previousId, level, content: marked.parser(stack)}
      )
      
      stack = []
      previousId = id
    }
  }

  stack.push(item)
}).filter(Boolean)

Promise.all(promises).then(() => {
  fs.outputJSON('./dist/index.json', index)
  console.log('All files generated')
})