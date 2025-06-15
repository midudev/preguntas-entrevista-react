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
        A continuación encontrarás todas las preguntas disponibles.
      </p>
      
      <div className="flex mb-8 gap-4 text-sm">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-2 bg-green-500 rounded-full"></span>
          <span>Preguntas leídas</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-2 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <span>Preguntas por leer</span>
        </div>
      </div>
      
      <ListOfQuestions showReadStatus={true} />
    </>
  )
}