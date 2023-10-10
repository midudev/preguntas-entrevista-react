'use client'

import { useCallback, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import debounce from 'just-debounce-it'
import Link from 'next/link'
import { Combobox } from '@headlessui/react'
import counter from '../../dist/counter.json'

import { ReactLogo } from './ReactLogo.jsx'
import { SearchIcon } from './SearchIcon.jsx'
import { Title } from './Title.jsx'
import { Stars } from './Stars.jsx'
import ThemeToggle from "./ThemeToggle";

export function Header ({ stars }) {
  const pathname = usePathname()
  const [read, setRead] = useState(0)
  const [results, setResults] = useState([])
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const isHome = pathname === '/'
  const literal = isHome ? ' ' : '← Volver al inicio'

  const debouncedHandleChange = useCallback(
    debounce((event) => {
      fetch(`/api/search?q=${event.target.value}`)
        .then(res => res.json())
        .then(resultsFromApi => {
          setResults(resultsFromApi)
        })
    }, 200),
    []
  )

  useEffect(() => {
    setOpen(false)
    setResults([])
  }, [pathname])

  useEffect(() => {
    const readStorage = JSON.parse(localStorage.getItem('read')) || []
    setRead(readStorage.length)
  })

  const handleSelect = (result) => {
    if (result) router.push(`/${result.id}/#content`)
  }

  return (
    <header className='relative pt-20 pb-10'>

      {
        isHome && (
          <div className='absolute right-0 flex items-center gap-x-2 top-1'>
            <ThemeToggle/>
            <Stars stars={stars} />
            <button
              className='border uppercase mix rounded-[4px] font-bold inline-block p-2 text-[10px]'
            >
              Leidas {read}/{counter.total}
            </button>
          </div>
        )
      }

      <div className={`relative ${isHome ? 'block' : 'flex flex-col md:flex-row justify-between md:items-center'}`}>

        <Link className='hover:underline' href='/'>{literal}</Link>

        <div className='flex gap-x-2'>
          <Title isHome={isHome} />

          {
            !isHome && <ReactLogo animated={false} size='small' />
          }

          {
            isHome && (
              <div className='absolute p-2 overflow-hidden -right-4 md:right-0 top-6'>
                <div className='translate-x-1/3 sm:translate-x-0'>
                  <ReactLogo />
                </div>
              </div>
            )
          }
        </div>

      </div>

      <Combobox as='form' className='relative' onChange={handleSelect} onSubmit={e => e.preventDefault()} nullable>
        <label className='relative w-full'>
          <div className='absolute px-4 py-3 text-gray-300'>
            <SearchIcon className='w-8 h-8 md:w-12 md:h-12' />
          </div>
          <Combobox.Input
            autoFocus
            className={`search-input z-10 block w-full p-4 md:p-6 pl-14 md:pl-20 text-base md:text-xl font-bold dark:bg-secondry bg-white border dark:border-[#a9a9a9] border-gray-300 rounded-3xl outline-none appearance-none dark:hover:shadow-darkbox hover:shadow-lg dark:focus:shadow-darkbox focus:shadow-blue-100 focus:border-blue-300 ${
              results.length && 'focus:border-b-0 focus:rounded-b-none'
            }`}
            onChange={debouncedHandleChange}
            placeholder='Introduce aquí tu pregunta sobre React'
            type='search'
            displayValue={(element) => element?.text}
          />
        </label>

        {
          results.length > 0 && (
            <Combobox.Options className='absolute z-10 w-full overflow-hidden bg-white border border-gray-300 rounded-t-none shadow-lg rounded-3xl'>
              {results.map(result => {
                const { item, matches } = result
                const { id, text } = item
                const [{ indices }] = matches

                const [bestMatch] = indices.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))
                const html = text.slice(0, bestMatch[0]) + '<span class="bg-yellow-200">' + text.slice(bestMatch[0], bestMatch[1] + 1) + '</span>' + text.slice(bestMatch[1] + 1)

                return (
                  <Combobox.Option key={id} value={{ id, text }}>
                    {({ active, selected }) => (
                      <span className={`block p-4 hover:bg-gray-100 ${active ? 'bg-gray-100' : 'bg-white'}`} href={`/${id}/#content`}>
                        {selected && <span className='sr-only'>Seleccionado</span>}
                        <strong dangerouslySetInnerHTML={{ __html: html }} />
                      </span>
                    )}

                  </Combobox.Option>
                )
              })}

            </Combobox.Options>
          )
        }

      </Combobox>
    </header>
  )
}
