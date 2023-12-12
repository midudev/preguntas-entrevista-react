'use client'

import { useState, useEffect } from 'react'

export function ButtonRead ({ title }) {
  const [read, setRead] = useState([])
  const [isFavorite, setIsRead] = useState(false)

  useEffect(() => {
    const readStorage = JSON.parse(localStorage.getItem('read')) || []
    setRead(readStorage)
    setIsRead(readStorage.includes(title))
  }, [title])

  const handleSetRead = (title) => {
    if (title) {
      const isFavorite = read.includes(title)
      if (!isFavorite) {
        read.push(title)
        setIsRead(true)
      } else {
        read.splice(read.indexOf(title), 1)
        setIsRead(false)
      }
      localStorage.setItem('read', JSON.stringify(read))
    }
  }

  const color = !isFavorite ? 'dark:bg-secondry bg-white' : 'dark:text-primary bg-green-200'
  return (
    <div>
      <button
        onClick={() => handleSetRead(title)}
        className={`${color} border dark:border-white uppercase mix rounded-[4px] font-bold inline-block p-[3px] text-[10px]`}
      >
        {!isFavorite ? 'Marcar leído' : 'Marcar no leído'}
      </button>
    </div>
  )
}
