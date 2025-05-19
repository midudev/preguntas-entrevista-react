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
    <ul className='space-y-3'>
      {questions.map(({ id, text }) => (
        <li key={id}>
          {showReadStatus ? (
            <ReadStatusItem id={id} text={text} />
          ) : (
            <Link
              className='leading-snug hover:underline'
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
