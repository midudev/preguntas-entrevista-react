import type { Metadata } from 'next'
import { ListOfQuestions } from '../components/ListOfQuestions.jsx'

export const metadata: Metadata = {
  title: 'Lista de preguntas para leer - React.js Wiki',
  description: 'Lista de todas las preguntas disponibles sobre React.js con indicación de leídas y no leídas',
}

export default function QuestionsPage() {
  return (
    <>
      <h1 className='pb-6 text-3xl font-bold text-blue-900 dark:text-blue-100'>
        Lista de preguntas
      </h1>
      <p className='pb-6 text-lg dark:text-blue-200'>
        A continuación encontrarás todas las preguntas disponibles. Las preguntas que ya has leído se muestran marcadas con un punto verde.
      </p>
      <ListOfQuestions showReadStatus={true} />
    </>
  )
}