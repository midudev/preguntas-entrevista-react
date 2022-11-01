import Link from 'next/link.js'
import { Pill } from './Pill.jsx'

export function Card ({ title, excerpt, slug, level }) {
  return (
    <Link className='relative h-full p-6 transition-all rounded-lg hover:scale-105 hover:bg-slate-100 shadow-box' href={slug}>
      <article className='flex flex-col justify-center gap-y-4'>
        <h2 className='pt-4 text-2xl font-bold font-grotesk'>{title}</h2>
        <Pill level={level} />
        <p>{excerpt}</p>
        <p className='text-sm italic'>Leer más...</p>
      </article>
    </Link>

  )
}
