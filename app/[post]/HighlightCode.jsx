'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'
import 'prismjs/components/prism-jsx'
import './HighlightCode.css'

export function HighlightCode () {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return null
}
