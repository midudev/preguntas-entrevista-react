import { readIndex } from '../../utils/posts.js'
import Link from 'next/link'
import { ReadStatusItem } from './ReadStatusItem.jsx'
import { LEVELS } from '../constants.js'
import { Pill } from './Pill.jsx'

const QUESTION_CATEGORIES = [
  {
    id: 'beginner',
    level: LEVELS.EASY,
    label: 'Principiante',
  },
  {
    id: 'intermediate',
    level: LEVELS.MEDIUM,
    label: 'Intermedio',
  },
  {
    id: 'expert',
    level: LEVELS.HARD,
    label: 'Experto',
  },
  {
    id: 'errors',
    level: LEVELS.ERRORS,
    label: 'Errores',
  },
]

const OTHER_CATEGORY = {
  id: 'other',
  label: 'Otras preguntas',
}

const groupQuestionsByCategory = questions => {
  const categoryByLevel = new Map(
    QUESTION_CATEGORIES.map(category => [category.level, category.id])
  )

  const categories = new Map(
    [...QUESTION_CATEGORIES, OTHER_CATEGORY].map(category => [
      category.id,
      { ...category, questions: [] },
    ])
  )

  questions.forEach(question => {
    const categoryId = categoryByLevel.get(question.level) ?? OTHER_CATEGORY.id
    categories.get(categoryId).questions.push(question)
  })

  return Array.from(categories.values()).filter(
    category => category.questions.length > 0
  )
}

const getListOfQuestions = async () => {
  const questions = await readIndex()
  return questions
}

export async function ListOfQuestions({ showReadStatus = false }) {
  const questions = await getListOfQuestions()
  const groupedQuestions = groupQuestionsByCategory(questions)

  return (
    <div className='animate-fade-in animate-duration-700 space-y-8'>
      {groupedQuestions.map(category => (
        <section key={category.id}>
          <div className='mb-3 flex items-center justify-between gap-3'>
            {category.level !== undefined ? (
              <Pill level={category.level} />
            ) : (
              <h3 className='font-display text-xl font-bold text-slate-900 dark:text-white md:text-2xl'>
                {category.label}
              </h3>
            )}
            <span className='rounded-full border border-slate-300/80 bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-500/60 dark:bg-slate-800/65 dark:text-slate-200'>
              {category.questions.length}
            </span>
          </div>

          <ul className='questions-list'>
            {category.questions.map(({ id, text }) => (
              <li key={id}>
                {showReadStatus ? (
                  <ReadStatusItem id={id} text={text} />
                ) : (
                  <Link
                    className='question-row leading-snug text-slate-800 dark:text-slate-100'
                    href={`/${id}/#content`}
                  >
                    {text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
