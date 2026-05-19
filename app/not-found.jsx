import Link from 'next/link'
import { IconArrowLeft, IconSearch } from '@tabler/icons-react'

export const metadata = {
  title: 'Pagina no encontrada',
  description:
    'La pregunta que buscas no existe en React.js Wiki. Vuelve al inicio para encontrar preguntas reales sobre React.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <section className='hero-panel animate-fade-in-up animate-duration-700 px-6 py-12 text-center md:px-12 md:py-16'>
      <div className='relative mx-auto max-w-2xl'>
        <p className='mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300'>
          <IconSearch size={14} aria-hidden='true' />
          Error 404
        </p>
        <h1 className='font-display text-4xl font-bold leading-tight text-slate-950 md:text-6xl dark:text-white'>
          Esta pregunta no existe
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300'>
          La URL no coincide con ninguna pregunta publicada. Puedes volver al
          inicio y usar el buscador para encontrar contenido real sobre React.
        </p>
        <Link
          className='mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400'
          href='/'
        >
          <IconArrowLeft size={16} aria-hidden='true' />
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
