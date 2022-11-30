import fs from 'fs-extra'

const readme = await fs.readFile('./README.md', 'utf-8')
const start = readme.indexOf('### ')

const cleaned = readme
  .slice(start)
  .replaceAll('### ', '## ')
  .replaceAll('#### ', '### ')
  .replaceAll('##### ', '#### ')
  .replaceAll('**[⬆ Volver a índice](#índice)**', '')
  .replaceAll('](#', '](/')

const book = `# Preguntas típicas de React

${cleaned}`

fs.outputFile('./manuscript/book.md', book, { encoding: 'utf-8' })
