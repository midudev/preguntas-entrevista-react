'use client'

import { useState, useEffect, useCallback } from 'react'
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react'
import { useEventListener } from '@/hooks/useEventListener'

export function ButtonRead({ title }) {
  const [isFavorite, setIsRead] = useState(false)

  useEffect(() => {
    const readStorage = JSON.parse(window.localStorage.getItem('read')) || []
    setIsRead(readStorage.includes(title))
  }, [title])

  const handlerStorageListener = useCallback(
    event => {
      const { key, newValue } = event.detail ?? event
      if (key === 'read') {
        setIsRead(JSON.parse(newValue).includes(title))
      }
    },
    [title]
  )

  useEventListener({
    eventName: 'storage',
    handler: handlerStorageListener,
  })

  useEventListener({
    eventName: 'local-storage',
    handler: handlerStorageListener,
  })

  const handleSetRead = title => {
    if (title) {
      const read = JSON.parse(window.localStorage.getItem('read')) || []
      const isFavorite = read.includes(title)
      if (isFavorite) {
        read.splice(read.indexOf(title), 1)
        setIsRead(false)
      } else {
        read.push(title)
        setIsRead(true)
      }

      const newValue = JSON.stringify(read)
      window.localStorage.setItem('read', newValue)
      window.dispatchEvent(
        new CustomEvent('local-storage', {
          detail: { key: 'read', newValue },
        })
      )
    }
  }

  return (
    <button
      onClick={() => handleSetRead(title)}
      className={`pill-tag font-bold inline-flex items-center gap-1 transition-colors ${
        isFavorite
          ? 'border-blue-500/40 bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
          : 'border-slate-300/60 bg-slate-50 text-slate-600 hover:border-blue-400/50 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-600/60 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300'
      }`}
    >
      {isFavorite ? (
        <IconCircleCheck size={13} aria-hidden='true' />
      ) : (
        <IconCircleDashed size={13} aria-hidden='true' />
      )}
      {isFavorite ? 'Leído' : 'Marcar leído'}
    </button>
  )
}
