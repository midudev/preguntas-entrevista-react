'use client'

import { motion } from 'framer-motion'

export function Title () {
  return (
    <motion.h1
      className='py-5 text-6xl font-bold leading-tight tracking-tight'
    >Preguntas típicas de<br /> React.js
    </motion.h1>
  )
}
