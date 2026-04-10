import type { Metadata } from 'next'
import { ListOfQuestions } from '../components/ListOfQuestions.jsx'

export const metadata: Metadata = {
  title: 'Lista de preguntas para leer - React.js Wiki',
  description:
    'Lista de todas las preguntas disponibles sobre React.js con indicación de leídas y no leídas',
}

export default function QuestionsPage() {
  return (
    <section className='hero-panel animate-fade-in-up animate-duration-700 px-5 py-8 md:px-10 md:py-10'>
      <h1 className='font-display pb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl'>
        Lista de preguntas
      </h1>
      <p className='pb-6 text-base text-slate-700 md:text-lg dark:text-slate-200'>
        A continuación encontrarás todas las preguntas disponibles.
      </p>

      <div className='mb-8 flex flex-wrap gap-4 text-sm'>
        <div className='flex items-center rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1.5'>
          <span className='mr-2 inline-block h-2.5 w-2.5 rounded-full bg-green-500' />
          <span>Preguntas leídas</span>
        </div>
        <div className='flex items-center rounded-full border border-slate-300/80 bg-white/70 px-3 py-1.5 dark:border-slate-500/55 dark:bg-slate-800/65'>
          <span className='mr-2 inline-block h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600' />
          <span>Preguntas por leer</span>
        </div>
      </div>

      <ListOfQuestions showReadStatus />
    </section>
  )
}
