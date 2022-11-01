'use client'

import { useId } from 'react'
import { usePathname } from 'next/navigation'

import { ReactLogo } from './ReactLogo.jsx'
import { SearchIcon } from './SearchIcon.jsx'
import { Title } from './Title.jsx'

export function Header () {
  const searchId = useId('search-id')
  const pathname = usePathname()

  const literal = pathname === '/' ? ' ' : '← Volver atrás'

  return (
    <header className='pt-20 pb-20'>
      <div className='relative'>
        <a className='hover:underline' href='/'>{literal}</a>
        <Title />

        <span className='absolute right-0 p-2 overflow-hidden top-6'>
          <ReactLogo />
        </span>

      </div>
      <form className='relative'>

        <label className='absolute px-4 py-3 text-gray-300' htmlFor={searchId}>
          <SearchIcon />
        </label>

        <input
          autoFocus
          id={searchId}
          className='z-10 block w-full p-6 pl-20 text-xl font-bold transition-shadow bg-white border border-gray-300 rounded-full outline-none appearance-none hover:shadow-lg focus:shadow-blue-100 focus:border-blue-300'
          placeholder='Introduce aquí tu pregunta sobre React'
          type='search'
        />

      </form>
    </header>
  )
}
