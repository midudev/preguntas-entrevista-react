/**
 * Export Leanpub manuscript from README.md + quiz JSON.
 *
 * Layout per question:
 *   1. Title + explanation (from README)
 *   2. "Pon a prueba" block with 4 stable MCQ options (no spoilers)
 * Solucionario at the end of each level chapter.
 *
 * Usage:  node scripts/exportBook.mjs
 * Output: manuscript/
 */
import fs from 'fs-extra'
import path from 'node:path'
import slugify from '@sindresorhus/slugify'

const ROOT = process.cwd()
const README_PATH = path.join(ROOT, 'README.md')
const QUIZ_DIR = path.join(ROOT, 'public/quiz/qa')
const OUT_DIR = path.join(ROOT, 'manuscript')

const LEVELS = [
  { key: 'principiante', heading: 'Principiante', file: '01-principiante.md' },
  { key: 'intermedio', heading: 'Intermedio', file: '02-intermedio.md' },
  { key: 'experto', heading: 'Experto', file: '03-experto.md' },
  {
    key: 'errores típicos en react',
    heading: 'Errores típicos en React',
    file: '04-errores-tipicos.md',
  },
]

const LETTERS = ['a', 'b', 'c', 'd']
/** 1 correct + 3 distractors — readable on paper / ebook */
const OPTIONS_PER_QUESTION = 4

// ─── Deterministic RNG (stable builds, not always answer "a") ───

function hashString(input) {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle(items, seed) {
  const arr = [...items]
  const rand = mulberry32(seed)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// ─── Quiz helpers ───

function loadQuiz(slug) {
  const file = path.join(QUIZ_DIR, `${slug}.json`)
  if (!fs.existsSync(file)) return null
  try {
    const data = fs.readJsonSync(file)
    return Array.isArray(data) && data.length > 0 ? data : null
  } catch {
    return null
  }
}

/**
 * Pick 1 correct + (n-1) incorrect, shuffle deterministically by question id.
 * Returns { options: [{letter, text, isCorrect}], answerLetter, answerText }
 */
function prepareBookQuestion(quizItem) {
  const alts = Array.isArray(quizItem.alternatives) ? quizItem.alternatives : []
  if (alts.length === 0) return null

  const correct = alts.find(a => a.is_correct) ?? alts[0]
  const incorrect = alts.filter(a => a !== correct)
  const seed = hashString(quizItem.id || quizItem.question || '')
  const pickedIncorrect = seededShuffle(incorrect, seed).slice(
    0,
    OPTIONS_PER_QUESTION - 1
  )
  const subset = seededShuffle([correct, ...pickedIncorrect], seed ^ 0x9e3779b9)

  const options = subset.map((alt, i) => ({
    letter: LETTERS[i],
    text: cleanText(alt.text),
    isCorrect: Boolean(alt.is_correct) || alt === correct,
  }))

  const answer = options.find(o => o.isCorrect) ?? options[0]
  return {
    prompt: cleanText(quizItem.question),
    options,
    answerLetter: answer.letter,
    answerText: answer.text,
  }
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function formatQuizBlock(preparedList) {
  if (!preparedList.length) return ''

  const lines = [
    '',
    '##### Pon a prueba',
    '',
    '*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*',
    '',
  ]

  preparedList.forEach((q, i) => {
    lines.push(`**${i + 1}.** ${q.prompt}`)
    lines.push('')
    for (const opt of q.options) {
      lines.push(`- **${opt.letter})** ${opt.text}`)
    }
    lines.push('')
  })

  return lines.join('\n')
}

function formatChapterSolutions(entries) {
  if (!entries.length) return ''

  const lines = [
    '',
    '{pagebreak}',
    '',
    '## Solucionario',
    '',
    '*Comprueba tus respuestas cuando hayas terminado las preguntas del capítulo.*',
    '',
  ]

  for (const entry of entries) {
    lines.push(`### ${entry.title}`)
    lines.push('')
    entry.answers.forEach((a, i) => {
      lines.push(
        `${i + 1}. **${a.letter})** ${a.text}`
      )
    })
    lines.push('')
  }

  return lines.join('\n')
}

// ─── README parsing ───

/**
 * Split README into level chapters and questions (#### headings).
 * Returns [{ levelKey, levelHeading, questions: [{ title, slug, body }] }]
 */
function parseReadme(readme) {
  const start = readme.indexOf('\n### ')
  if (start === -1) throw new Error('No se encontró el primer heading ### en README.md')

  const body = readme.slice(start + 1) // keep leading ###
  const levelChunks = body.split(/\n(?=### )/g)

  const chapters = []

  for (const chunk of levelChunks) {
    const firstLineEnd = chunk.indexOf('\n')
    const firstLine = (firstLineEnd === -1 ? chunk : chunk.slice(0, firstLineEnd)).trim()
    if (!firstLine.startsWith('### ')) continue

    const levelHeading = firstLine.replace(/^###\s+/, '').trim()
    const levelKey = levelHeading.toLowerCase()
    const rest = firstLineEnd === -1 ? '' : chunk.slice(firstLineEnd + 1)

    // Split by #### questions
    const parts = rest.split(/\n(?=#### )/g)
    const questions = []

    for (const part of parts) {
      if (!part.trim().startsWith('#### ')) continue
      const nl = part.indexOf('\n')
      const titleLine = (nl === -1 ? part : part.slice(0, nl)).trim()
      const title = titleLine.replace(/^####\s+/, '').trim()
      let content = nl === -1 ? '' : part.slice(nl + 1)

      content = content
        .replace(/\*\*\[⬆ Volver a índice\]\(#índice\)\*\*/g, '')
        .replace(/\n---\s*$/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim()

      if (!title) continue
      questions.push({
        title,
        slug: slugify(title),
        body: content,
      })
    }

    chapters.push({ levelKey, levelHeading, questions })
  }

  return chapters
}

// ─── Build manuscript ───

function buildIntro() {
  return `# Preguntas típicas de React

De cero a experto. Con respuestas detalladas en español.

Este libro reúne las preguntas que más se repiten en entrevistas técnicas de React, con respuestas claras, ejemplos de código y **bloques para poner a prueba** lo aprendido.

## Cómo usar este libro

1. Lee la pregunta y la explicación con calma.
2. Cuando llegues a **Pon a prueba**, responde sin mirar el solucionario.
3. Al final de cada capítulo encontrarás el **solucionario** con las respuestas correctas.
4. Si quieres practicar en formato interactivo, visita [reactjs.wiki](https://www.reactjs.wiki).
`
}

function buildQuestionMarkdown(question, preparedQuiz) {
  const lines = [`## ${question.title}`, '']

  if (question.body) {
    lines.push(question.body)
    lines.push('')
  }

  if (preparedQuiz?.length) {
    lines.push(formatQuizBlock(preparedQuiz).trimEnd())
    lines.push('')
  }

  // Soft separation between topics (not a hard page break — the book is long)
  lines.push('---')
  lines.push('')
  return lines.join('\n')
}

async function main() {
  const readme = await fs.readFile(README_PATH, 'utf-8')
  const parsed = parseReadme(readme)

  await fs.emptyDir(OUT_DIR)

  const bookTxt = [
    'frontmatter:',
    '00-introduccion.md',
    'mainmatter:',
  ]

  await fs.outputFile(path.join(OUT_DIR, '00-introduccion.md'), buildIntro())

  let totalQuestions = 0
  let withQuiz = 0
  let totalQuizItems = 0

  for (const level of LEVELS) {
    const chapter = parsed.find(
      c =>
        c.levelKey === level.key ||
        c.levelHeading.toLowerCase() === level.heading.toLowerCase()
    )

    if (!chapter || chapter.questions.length === 0) {
      console.warn(`⚠ Capítulo sin contenido: ${level.heading}`)
      continue
    }

    const solutionEntries = []
    const sections = [
      `# ${level.heading}`,
      '',
      `Preguntas de nivel **${level.heading}**. Tras cada explicación puedes encontrar un bloque *Pon a prueba*; las respuestas están al final del capítulo.`,
      '',
      '---',
      '',
    ]

    for (const q of chapter.questions) {
      totalQuestions++
      const quiz = loadQuiz(q.slug)
      let prepared = []

      if (quiz) {
        prepared = quiz
          .map(prepareBookQuestion)
          .filter(Boolean)
        if (prepared.length) {
          withQuiz++
          totalQuizItems += prepared.length
          solutionEntries.push({
            title: q.title,
            answers: prepared.map(p => ({
              letter: p.answerLetter,
              text: p.answerText,
            })),
          })
        }
      }

      sections.push(buildQuestionMarkdown(q, prepared))
    }

    sections.push(formatChapterSolutions(solutionEntries).trimEnd())
    sections.push('')

    await fs.outputFile(path.join(OUT_DIR, level.file), sections.join('\n'))
    bookTxt.push(level.file)
  }

  await fs.outputFile(path.join(OUT_DIR, 'Book.txt'), `${bookTxt.join('\n')}\n`)

  // Small helper for Leanpub uploaders
  await fs.outputFile(
    path.join(OUT_DIR, 'README.md'),
    `# Manuscript (generado)

No edites estos ficheros a mano. Se regeneran con:

\`\`\`bash
pnpm book
\`\`\`

Fuente: \`README.md\` + \`public/quiz/qa/*.json\`.

Sube la carpeta \`manuscript/\` a Leanpub (o sincroniza con Dropbox/Git según tu flujo).
`
  )

  console.log('✓ Manuscript generado en manuscript/')
  console.log(`  Preguntas:        ${totalQuestions}`)
  console.log(`  Con quiz:         ${withQuiz}`)
  console.log(`  Ítems de prueba:  ${totalQuizItems}`)
  console.log(`  Book.txt + ${LEVELS.length} capítulos + intro`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
