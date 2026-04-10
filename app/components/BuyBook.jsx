'use client'

import { BookCover } from './BookCover.tsx'
import Image from 'next/image.js'
import { IconShoppingBag } from '@tabler/icons-react'

export const BuyBook = () => {
  return (
    <div className='fixed m-4 bottom-4 right-4 z-20'>
      <div className='relative'>
        <a
          href='https://leanpub.com/react-preguntas-tipicas'
          target='_blank'
          rel='noreferrer'
          aria-label='Compra el libro de preguntas tipicas de React en Leanpub'
        >
          <span className='pill-tag mb-4 gap-1 border-slate-300/60 bg-slate-50 font-bold text-slate-600 shadow-[0_8px_30px_rgb(59_130_246_/_12%)] backdrop-blur-md transition-colors hover:border-blue-400/50 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-600/60 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300'>
            <IconShoppingBag size={13} aria-hidden='true' />
            Compra el libro
          </span>
          <BookCover>
            <Image
              alt='Portada del libro de Preguntas de React'
              src='/book.webp'
              width='136'
              height='176'
              loading='lazy'
            />
          </BookCover>
        </a>
      </div>
    </div>
  )
}
