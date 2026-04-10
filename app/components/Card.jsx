import Link from 'next/link'
import { Pill } from './Pill.jsx'
import { IconArrowRight } from '@tabler/icons-react'

export function Card({ title, excerpt, slug, level }) {
  return (
    <Link
      className='question-card relative z-10 h-full animate-fade-in-up animate-duration-500'
      href={slug}
    >
      <article className='flex h-full flex-col gap-y-4'>
        <Pill level={level} />
        <h2 className='font-display text-xl font-bold leading-tight text-slate-900 dark:text-white'>
          {title}
        </h2>
        <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
          {excerpt}
        </p>
        <p className='mt-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400'>
          Abrir respuesta
          <IconArrowRight size={14} aria-hidden='true' />
        </p>
      </article>
    </Link>
  )
}
