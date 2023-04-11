'use client'

import { useEffect } from 'react'

export function Title ({ children }) {
  useEffect(() => {
    document.title = children
  }, [children])

  return null
}
