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
      className='flex items-center justify-center h-full transition-colors dark:bg-[#a9a9a9] dark:text-white bg-gray-200 border border-gray-200 rounded-sm hover:bg-gray-200'
      href='https://github.com/midudev/preguntas-entrevista-react'
      target='_blank'
      rel='noreferrer'
    >
      <span className='flex items-center justify-center px-3 py-2 overflow-hidden text-xs font-semibold text-gray-700 border-r border-r-gray-300 gap-x-1'>
        <svg
          viewBox='0 0 16 16'
          width='16'
          height='16'
          className='octicon octicon-star'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'
          />
        </svg>
        Star
      </span>

      <span className='flex px-2 py-2 text-xs font-semibold bg-white dark:bg-secondry dark:text-white'>
        {formatNumber(stars)}
      </span>
    </a>
  )
}
