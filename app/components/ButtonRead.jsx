'use client'

import { useState, useEffect, useCallback } from 'react'
import { useEventListener } from '../../hooks/useEventListener'

export function ButtonRead ({ title }) {
  const [isFavorite, setIsRead] = useState(false)

  useEffect(() => {
    const readStorage = JSON.parse(localStorage.getItem('read')) || []
    setIsRead(readStorage.includes(title))
  }, [title])

  const handlerStorageListener = useCallback((event) => {
    if (event.key === 'read') {
      setIsRead(JSON.parse(event.newValue).includes(title))
    }
  }, [title])

  useEventListener({
    eventName: 'storage',
    handler: handlerStorageListener
  })

  const handleSetRead = (title) => {
    if (title) {
      const read = JSON.parse(localStorage.getItem('read')) || []
      const isFavorite = read.includes(title)
      if (isFavorite) {
        read.splice(read.indexOf(title), 1)
        setIsRead(false)
      } else {
        read.push(title)
        setIsRead(true)
      }
      localStorage.setItem('read', JSON.stringify(read))
    }
  }

  const color = !isFavorite
    ? 'dark:bg-secondry bg-white'
    : 'dark:text-primary bg-green-200'
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
