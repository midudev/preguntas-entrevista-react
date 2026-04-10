'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useEventListener } from '../../hooks/useEventListener'

export function ReadStatusItem({ id, text }) {
  const [isRead, setIsRead] = useState(false)

  useEffect(() => {
    const readStorage = JSON.parse(window.localStorage.getItem('read')) || []
    setIsRead(readStorage.includes(text))
  }, [text])

  const handlerStorageListener = useCallback(
    event => {
      const { key, newValue } = event.detail ?? event
      if (key === 'read') {
        setIsRead(JSON.parse(newValue).includes(text))
      }
    },
    [text]
  )

  useEventListener({
    eventName: 'storage',
    handler: handlerStorageListener,
  })

  useEventListener({
    eventName: 'local-storage',
    handler: handlerStorageListener,
  })

  const itemClassName = isRead
    ? 'question-row question-row-read leading-snug text-green-700 dark:text-green-300'
    : 'question-row leading-snug text-slate-800 dark:text-slate-100'

  return (
    <Link
      className={itemClassName}
      href={`/${id}/#content`}
      aria-label={`${text}${isRead ? ' (leida)' : ' (no leida)'}`}
    >
      {isRead ? (
        <span className='status-dot status-dot-read' aria-hidden='true' />
      ) : (
        <span className='status-dot' aria-hidden='true' />
      )}
      {text}
    </Link>
  )
}
