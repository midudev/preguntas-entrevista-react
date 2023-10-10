import Link from 'next/link'
import { Pill } from './Pill.jsx'

export function Card ({ title, excerpt, slug, level }) {
  return (
    <Link className='relative h-full p-6 transition-all rounded-lg dark:hover:scale-105 dark:hover:bg-primary dark:shadow-darkbox hover:scale-105 hover:bg-sky-100 shadow-box' href={slug}>
      <article className='flex flex-col justify-center gap-y-4'>
        <Pill level={level} />
        <h2 className='text-xl font-bold md:text-2xl'>{title}</h2>
        <p>{excerpt}</p>
        <p className='text-sm italic text-right text-sky-500'>Leer más...</p>
      </article>
    </Link>

  )
}
