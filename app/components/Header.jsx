'use client'

import { useCallback, useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import debounce from 'just-debounce-it'
import Link from 'next/link'
import { Combobox } from '@headlessui/react'
import { IconArrowLeft } from '@tabler/icons-react'

import { ReactLogo } from './ReactLogo.jsx'
import { SearchIcon } from './SearchIcon.jsx'
import { Title } from './Title.jsx'
import ThemeToggle from './ThemeToggle'

import { useEventListener } from '../../hooks/useEventListener'
import counter from '../../public/content/counter.json'

export function Header({ children }) {
  const pathname = usePathname()
  const [read, setRead] = useState(0)
  const [results, setResults] = useState([])
  const searchInputRef = useRef(null)
  const router = useRouter()

  const isHome = pathname === '/'
  const literal = isHome ? 'Inicio' : 'Volver al inicio'

  const debouncedHandleChange = useCallback(
    debounce(event => {
      fetch(`/api/search?q=${event.target.value}`)
        .then(res => res.json())
        .then(resultsFromApi => {
          setResults(resultsFromApi)
        })
    }, 200),
    []
  )

  const handlerStorageListener = useCallback(event => {
    const { key, newValue } = event.detail ?? event
    if (key === 'read') {
      setRead(JSON.parse(newValue).length)
    }
  }, [])

  useEventListener({
    eventName: 'storage',
    handler: handlerStorageListener,
  })

  useEventListener({
    eventName: 'local-storage',
    handler: handlerStorageListener,
  })

  useEffect(() => {
    setResults([])
  }, [pathname])

  useEffect(() => {
    if (isHome) {
      searchInputRef.current?.focus()
    }
  }, [isHome])

  useEffect(() => {
    const readStorage = JSON.parse(window.localStorage.getItem('read')) || []
    setRead(readStorage.length)
  }, [])

  const handleSelect = result => {
    if (result) router.push(`/${result.id}/#content`)
  }

  return (
    <header className='relative pb-10 pt-14 md:pt-16'>
      {isHome && (
        <nav
          aria-label='Acciones de la pagina'
          className='absolute right-0 top-2 z-20 flex items-center gap-x-3 rounded-full border border-slate-200/80 bg-white/80 px-2 py-1.5 shadow-sm backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/80'
        >
          <ThemeToggle />
          {children}
          <Link href='/questions'>
            <span className='inline-flex rounded-full border border-transparent px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:border-blue-500/35 dark:hover:bg-blue-500/10 dark:hover:text-blue-300'>
              Leidas {read}/{counter.total}
            </span>
          </Link>
        </nav>
      )}

      <div
        className={`relative ${isHome ? 'block' : 'flex flex-col md:flex-row justify-between md:items-center'}`}
      >
        <Link
          className='inline-flex w-fit rounded-full border border-transparent px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:border-blue-500/35 dark:hover:bg-blue-500/10 dark:hover:text-blue-300'
          href='/'
        >
          {!isHome && (
            <IconArrowLeft size={14} className='mr-1' aria-hidden='true' />
          )}
          {literal}
        </Link>

        <div className='flex gap-x-2'>
          <Title isHome={isHome} />

          {isHome && (
            <div className='absolute p-2 overflow-hidden -right-4 md:right-0 top-6 dark:invert'>
              <div className='translate-x-1/3 sm:translate-x-0'>
                <ReactLogo />
              </div>
            </div>
          )}
        </div>
      </div>

      <Combobox
        as='form'
        className='relative mt-6'
        onChange={handleSelect}
        onSubmit={e => e.preventDefault()}
        nullable
        aria-label='Buscar preguntas sobre React'
      >
        <label className='relative w-full'>
          <span className='sr-only'>Buscar preguntas</span>
          <div
            className='absolute px-4 py-3 text-slate-400 dark:text-slate-500'
            aria-hidden='true'
          >
            <SearchIcon className='w-8 h-8 md:w-12 md:h-12' />
          </div>
          <Combobox.Input
            ref={searchInputRef}
            className={`search-input z-10 block w-full appearance-none rounded-2xl border border-slate-200 bg-white p-4 pl-14 text-base font-bold text-slate-900 outline-hidden transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-blue-500/50 dark:focus:border-blue-400 dark:focus:ring-blue-400/25 md:p-6 md:pl-20 md:text-xl ${
              results.length > 0 ? 'focus:rounded-b-none focus:border-b-0' : ''
            }`}
            onChange={debouncedHandleChange}
            placeholder='Introduce aquí tu pregunta sobre React'
            type='search'
            displayValue={element => element?.text}
          />
        </label>

        {results.length > 0 && (
          <Combobox.Options className='absolute z-50 w-full overflow-hidden rounded-2xl rounded-t-none border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-black/10 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:shadow-black/50'>
            {results.map(result => {
              const { item, matches } = result
              const { id, text } = item

              let html = text
              if (matches?.length > 0) {
                const [{ indices }] = matches
                const [bestMatch] = indices.sort(
                  (a, b) => b[1] - b[0] - (a[1] - a[0])
                )
                html =
                  text.slice(0, bestMatch[0]) +
                  '<mark class="bg-yellow-300 dark:text-black">' +
                  text.slice(bestMatch[0], bestMatch[1] + 1) +
                  '</mark>' +
                  text.slice(bestMatch[1] + 1)
              }

              return (
                <Combobox.Option key={id} value={{ id, text }}>
                  {({ active, selected }) => (
                    <span
                      className={`block p-4 text-slate-900 hover:bg-blue-50 dark:text-slate-100 dark:hover:bg-blue-500/12 ${active ? 'bg-blue-50 dark:bg-blue-500/12' : 'bg-transparent dark:bg-transparent'}`}
                      href={`/${id}/#content`}
                    >
                      {selected && (
                        <span className='sr-only'>Seleccionado</span>
                      )}
                      <strong
                        className='text-slate-950 dark:text-white'
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </span>
                  )}
                </Combobox.Option>
              )
            })}
          </Combobox.Options>
        )}
      </Combobox>
    </header>
  )
}
