import { IconStarFilled } from '@tabler/icons-react'

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
      <IconStarFilled size={14} className='text-amber-500' aria-hidden='true' />
      <span className='tabular-nums'>{formatNumber(stars)}</span>
    </a>
  )
}
