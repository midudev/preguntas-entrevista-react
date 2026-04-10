import { readIndex } from '../../utils/posts.js'
import Link from 'next/link'
import { ReadStatusItem } from './ReadStatusItem.jsx'

const getListOfQuestions = async () => {
  const questions = await readIndex()
  return questions
}

export async function ListOfQuestions({ showReadStatus = false }) {
  const questions = await getListOfQuestions()

  return (
    <ul className='questions-list animate-fade-in animate-duration-700'>
      {questions.map(({ id, text }) => (
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
  )
}
