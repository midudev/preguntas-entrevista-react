import fs from 'fs-extra'

const readme = await fs.readFile('./README.md', 'utf-8')
const start = readme.indexOf('### ')

const cleaned = readme
  .slice(start)
  .replaceAll('**[⬆ Volver a índice](#índice)**', '')
  .replaceAll('](#', '](/')

fs.outputFile('./manuscript/book.md', cleaned, { encoding: 'utf-8' })
