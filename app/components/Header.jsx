'use client'

import { useCallback, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import debounce from 'just-debounce-it'
import Link from 'next/link'
import { Combobox } from '@headlessui/react'

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
  const router = useRouter()

  const isHome = pathname === '/'
  const literal = isHome ? ' ' : '← Volver al inicio'

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
    const readStorage = JSON.parse(window.localStorage.getItem('read')) || []
    setRead(readStorage.length)
  }, [])

  const handleSelect = result => {
    if (result) router.push(`/${result.id}/#content`)
  }

  return (
    <header className='relative pt-20 pb-10'>
      {isHome && (
        <div className='absolute right-0 flex items-center gap-x-2 top-1'>
          <ThemeToggle />
          {children}
          <Link href='/questions'>
            <button className='border uppercase mix rounded-sm font-bold inline-block p-2 text-[10px]'>
              Leidas {read}/{counter.total}
            </button>
          </Link>
        </div>
      )}

      <div
        className={`relative ${isHome ? 'block' : 'flex flex-col md:flex-row justify-between md:items-center'}`}
      >
        <Link className='hover:underline' href='/'>
          {literal}
        </Link>

        <div className='flex gap-x-2'>
          <Title isHome={isHome} />

          {!isHome && <ReactLogo animated={false} size='small' />}

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
        className='relative'
        onChange={handleSelect}
        onSubmit={e => e.preventDefault()}
        nullable
      >
        <label className='relative w-full'>
          <div className='absolute px-4 py-3 text-gray-300'>
            <SearchIcon className='w-8 h-8 md:w-12 md:h-12' />
          </div>
          <Combobox.Input
            autoFocus
            className={`search-input z-10 block w-full p-4 md:p-6 pl-14 md:pl-20 text-base md:text-xl font-bold bg-white dark:bg-secondry border border-gray-200 dark:border-white/10 rounded-3xl outline-hidden appearance-none transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(59,130,246,0.28)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_14px_55px_rgba(0,0,0,0.65),0_0_45px_rgba(59,130,246,0.32)] focus:ring-2 focus:ring-blue-400/50 dark:focus:ring-blue-300/40 focus:border-blue-300/60 ${
              results.length && 'focus:border-b-0 focus:rounded-b-none'
            }`}
            onChange={debouncedHandleChange}
            placeholder='Introduce aquí tu pregunta sobre React'
            type='search'
            displayValue={element => element?.text}
          />
        </label>

        {results.length > 0 && (
          <Combobox.Options className='absolute z-50 w-full overflow-hidden bg-white/98 dark:bg-[#0f172a]/92 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 rounded-t-none shadow-xl shadow-black/20 dark:shadow-black/50 rounded-3xl backdrop-blur-md'>
            {results.map(result => {
              const { item, matches } = result
              const { id, text } = item
              const [{ indices }] = matches

              const [bestMatch] = indices.sort(
                (a, b) => b[1] - b[0] - (a[1] - a[0])
              )
              const html =
                text.slice(0, bestMatch[0]) +
                '<span class="bg-yellow-300 dark:text-black">' +
                text.slice(bestMatch[0], bestMatch[1] + 1) +
                '</span>' +
                text.slice(bestMatch[1] + 1)

              return (
                <Combobox.Option key={id} value={{ id, text }}>
                  {({ active, selected }) => (
                    <span
                      className={`block p-4 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 ${active ? 'bg-gray-100 dark:bg-white/10' : 'bg-white/0 dark:bg-transparent'}`}
                      href={`/${id}/#content`}
                    >
                      {selected && (
                        <span className='sr-only'>Seleccionado</span>
                      )}
                      <strong
                        className='text-black dark:text-white'
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
