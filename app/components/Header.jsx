'use client'

import { useId, useCallback, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import debounce from 'just-debounce-it'
import Link from 'next/link'
import { Combobox } from '@headlessui/react'

import { ReactLogo } from './ReactLogo.jsx'
import { SearchIcon } from './SearchIcon.jsx'
import { Title } from './Title.jsx'

export function Header () {
  const searchId = useId('search-id')
  const pathname = usePathname()
  const [results, setResults] = useState([])
  const router = useRouter()

  const literal = pathname === '/' ? ' ' : '← Volver atrás'

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

  const handleSelect = (result) => {
    router.push(`/${result}/#content`)
  }

  return (
    <header className='pt-20 pb-20'>
      <div className='relative'>
        <a className='hover:underline' href='/'>{literal}</a>
        <Title />

        <span className='absolute right-0 p-2 overflow-hidden top-6'>
          <ReactLogo />
        </span>

      </div>

      <Combobox as='form' className='relative' onChange={handleSelect} onSubmit={e => e.preventDefault()} nullable>
        <label className='absolute px-4 py-3 text-gray-300' htmlFor={searchId}>
          <SearchIcon />
        </label>

        <Combobox.Input
          autoFocus
          className='z-10 block w-full p-6 pl-20 text-xl font-bold transition-shadow bg-white border border-gray-300 rounded-full outline-none appearance-none hover:shadow-lg focus:shadow-blue-100 focus:border-blue-300'
          id={searchId}
          onChange={debouncedHandleChange}
          placeholder='Introduce aquí tu pregunta sobre React'
          type='search'
        />

        {
          results.length > 0 && (
            <Combobox.Options className='absolute z-10 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg'>
              {results.map(result => {
                const { item, matches } = result
                const { id, text } = item
                const [{ indices }] = matches

                const [bestMatch] = indices.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))
                const html = text.slice(0, bestMatch[0]) + '<span class="bg-yellow-200">' + text.slice(bestMatch[0], bestMatch[1] + 1) + '</span>' + text.slice(bestMatch[1] + 1)

                return (
                  <Combobox.Option key={id} value={id}>
                    {({ active, selected }) => (
                      <Link className={`block p-4 hover:bg-gray-100 ${active ? 'bg-gray-100' : 'bg-white'}`} href={`/${id}/#content`}>
                        {selected && <span className='sr-only'>Seleccionado</span>}
                        <strong dangerouslySetInnerHTML={{ __html: html }} />
                      </Link>
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
