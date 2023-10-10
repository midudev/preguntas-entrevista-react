'use client'

import { BookCover } from './BookCover.tsx'
import Image from 'next/image.js'

export const BuyBook = () => {
  return (
    <div className='fixed m-4 bottom-4 right-4'>
      <div className='relative'>
        <a href='https://leanpub.com/react-preguntas-tipicas' target='_blank' rel='noreferrer'>
          <strong className='block p-2 text-xs dark:bg-secondry dark:text-white bg-white rounded-full'>Compra el libro</strong>
          <BookCover>
            <Image
              alt='Portada del libro de Preguntas de React'
              src='/book.png'
              width='136'
              height='176'
            />
          </BookCover>
        </a>
      </div>
    </div>
  )
}
