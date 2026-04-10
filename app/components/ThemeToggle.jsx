'use client'

import { useContext } from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext)

  return (
    <button
      type='button'
      aria-label='Cambiar tema'
      className='relative flex h-7 w-14 cursor-pointer items-center justify-between rounded-full border border-slate-200 px-1.5 shadow-sm transition hover:border-blue-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400/50 dark:border-slate-600 dark:hover:border-blue-500'
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: '#1e293b' }
          : { backgroundColor: 'white' }
      }
    >
      <IconMoon size={14} className='z-10 text-slate-200' aria-hidden='true' />
      <span
        className={`absolute top-0.75 h-5 w-5 rounded-full transition-transform duration-300 ${
          theme === 'dark'
            ? 'left-0.75 bg-blue-400 shadow-[0_0_0_2px_rgba(30,41,59,0.5)]'
            : 'left-8.25 bg-slate-800 shadow-[0_0_0_2px_rgba(59,130,246,0.2)]'
        }`}
      />
      <IconSun size={14} className='z-10 text-amber-500' aria-hidden='true' />
    </button>
  )
}

export default ThemeToggle
