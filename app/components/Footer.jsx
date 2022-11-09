import { NextLogo } from './NextLogo.jsx'

const fetchGitHubStars = () => {
  return fetch('https://api.github.com/repos/midudev/preguntas-entrevista-react')
    .then(res => res.json())
    .then(response => response.stargazers_count)
}

export async function Footer () {
  const stars = await fetchGitHubStars()

  return (
    <footer className='w-full py-2'>
      <section className='max-w-6xl px-4 m-auto text-center md:text-right'>
        <p>
          <a className='text-blue-900 hover:underline' href='https://github.com/midudev/preguntas-entrevista-react/issues/new' target='_blank' rel='noreferrer'>¿Echas en falta una pregunta? ¡Avísanos!</a>
        </p>
      </section>

      <div className='py-3 mt-2 border-t md:py-2 bg-slate-100 border-t-slate-100'>
        <section className='flex flex-col items-center justify-between w-full max-w-6xl gap-3 px-4 m-auto mx-auto md:flex-row'>
          <p className='flex items-center text-sm opacity-75 gap-x-2'>Construido con <a href='https://nextjs.org/' target='_blank' rel='noreferrer'><NextLogo /></a></p>
          <div className='flex gap-x-2'>
            <p className='flex items-center justify-center gap-x-2'>
              <a className='text-blue-900 hover:underline' href='https://github.com/midudev/preguntas-entrevista-react/blob/main/CONTRIBUTING.md' target='_blank' rel='noreferrer'>
                ¡Contribuye!
              </a>
            </p>

            <a className='flex items-center justify-center transition-colors bg-gray-100 border border-gray-200 rounded hover:bg-gray-200' href='https://github.com/midudev/preguntas-entrevista-react' target='_blank' rel='noreferrer'>
              <span className='flex items-center justify-center px-3 py-1 overflow-hidden text-xs font-semibold text-gray-700 border-r border-r-gray-300 gap-x-1'>
                <svg viewBox='0 0 16 16' width='16' height='16' className='octicon octicon-star' aria-hidden='true'><path fillRule='evenodd' d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z' /></svg>
                Star
              </span>

              <span className='flex px-2 py-2 text-xs font-semibold bg-white'>
                {stars}
              </span>
            </a>

          </div>
        </section>
      </div>
    </footer>
  )
}
