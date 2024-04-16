import { readIndex } from '../../utils/posts.js'

import Link from 'next/link'

const getListOfQuestions = async () => {
  const questions = await readIndex()
  return questions
}

export async function ListOfQuestions () {
  const questions = await getListOfQuestions()

  return (
    <ul className='space-y-3'>
      {questions.map(({ id, text }) => (
        <li key={id}>
          <Link className='leading-snug hover:underline' href={`/${id}/#content`}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
