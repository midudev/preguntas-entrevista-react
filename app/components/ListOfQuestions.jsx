import { readJSON } from 'fs-extra'
import path from 'node:path'

import Link from 'next/link'

const jsonDirectory = path.join(process.cwd(), 'dist')

const getListOfQuestions = async () => {
  const questions = await readJSON(`${jsonDirectory}/index.json`)
  return questions
}

export async function ListOfQuestions () {
  const questions = await getListOfQuestions()

  return (
    <ul>
      {questions.map(({ id, text }) => (
        <li key={id}>
          <Link className='hover:underline' href={`/${id}/#content`}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
