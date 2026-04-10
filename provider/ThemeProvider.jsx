'use client'
import { ThemeContext } from '../context/ThemeContext'
import { useContext, useEffect } from 'react'

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <div className={theme}>{children}</div>
}

export default ThemeProvider
