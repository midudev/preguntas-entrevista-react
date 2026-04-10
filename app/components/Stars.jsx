let cached = null

const fetchGitHubStars = () => {
  if (cached) return cached

  return fetch(
    'https://api.github.com/repos/midudev/preguntas-entrevista-react'
  )
    .then(res => res.json())
    .then(response => {
      cached = response.stargazers_count
      return response.stargazers_count
    })
}

export async function Stars({ empty }) {
  const stars = empty ? 0 : await fetchGitHubStars()

  const formatNumber = number => {
    if (number === 0) return '0.0K'
    if (number >= 1000) return `${(number / 1000).toFixed(1)}K`
    return number
  }

  return (
    <a
      className='flex items-center gap-x-1 rounded-full px-1 py-0.5 text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
      href='https://github.com/midudev/preguntas-entrevista-react'
      target='_blank'
      rel='noreferrer'
      aria-label={`${formatNumber(stars)} estrellas en GitHub`}
    >
      <svg
        viewBox='0 0 16 16'
        width='14'
        height='14'
        className='text-amber-500'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z' />
      </svg>
      <span className='tabular-nums'>{formatNumber(stars)}</span>
    </a>
  )
}
