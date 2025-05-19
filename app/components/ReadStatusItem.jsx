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
      if (event.key === 'read') {
        setIsRead(JSON.parse(event.newValue).includes(text))
      }
    },
    [text]
  )

  useEventListener({
    eventName: 'storage',
    handler: handlerStorageListener,
  })

  const itemClassName = isRead
    ? 'leading-snug hover:underline text-green-600 dark:text-green-400 flex items-center'
    : 'leading-snug hover:underline flex items-center'

  return (
    <Link className={itemClassName} href={`/${id}/#content`}>
      {isRead && (
        <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
      )}
      {text}
    </Link>
  )
}