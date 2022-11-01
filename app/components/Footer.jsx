'use client'

import { NextLogo } from './NextLogo.jsx'
import GitHubButton from 'react-github-btn'

export function Footer () {
  return (
    <footer className='fixed bottom-0 left-0 right-0 w-full py-2 border-t border-t-gray-300 bg-gray-50 font-grotesk'>
      <section className='flex items-center justify-between w-full max-w-5xl m-auto mx-auto'>
        <p className='flex items-center opacity-75 gap-x-2'>Construido con <a href='https://nextjs.org/' target='_blank' rel='noreferrer'><NextLogo /></a></p>

        <p>
          <a className='text-blue-900 hover:underline' href='https://github.com/midudev/preguntas-entrevista-react/issues/new' target='_blank' rel='noreferrer'>¿Echas en falta una pregunta? ¡Avísanos!</a>
        </p>

        <p className='flex items-center justify-center gap-x-2'>
          <a className='text-blue-900 hover:underline' href='https://github.com/midudev/preguntas-entrevista-react/blob/main/CONTRIBUTING.md' target='_blank' rel='noreferrer'>
            ¡Contribuye!
          </a>
        </p>

        <GitHubButton href='https://github.com/midudev/preguntas-entrevista-react' data-icon='octicon-star' data-size='large' data-show-count='true' aria-label='Star midudev/preguntas-entrevista-react on GitHub'>Star</GitHubButton>
      </section>
    </footer>
  )
}
