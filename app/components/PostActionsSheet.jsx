'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Quiz } from './Quiz.jsx'

export function PostActionsSheet({ postId }) {
  const [open, setOpen] = useState(null) // 'practicar' | 'evaluar' | null
  const [mounted, setMounted] = useState(false)
  const sheetRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    if (!open) return
    const onKey = e => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const handleClickOutside = e => {
      if (sheetRef.current && !sheetRef.current.contains(e.target)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, close])

  const openSheet = type => setOpen(type)

  const baseBtn =
    'border border-slate-200 dark:border-slate-600 uppercase rounded-md font-bold inline-block px-3 py-1 text-[10px] bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors'

  const sheet = (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={close}
      />
      <div
        ref={sheetRef}
        role='dialog'
        aria-modal='true'
        aria-label={open === 'practicar' ? 'Prácticar' : 'Evaluar'}
        className={`absolute bottom-0 left-0 right-0 mx-auto max-w-3xl rounded-t-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl p-6 md:p-8 transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className='flex items-start justify-between pb-4'>
          <h2 className='text-base font-bold text-slate-900 dark:text-slate-100'>
            {open === 'practicar' ? 'Prácticar' : 'Evaluar'}
          </h2>
          <button
            onClick={close}
            className='text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors'
          >
            Cerrar
          </button>
        </div>
        <div className='prose dark:prose-invert max-w-none text-sm md:text-base'>
          {open === 'practicar' && (
            <div className='space-y-4'>
              <p>
                Próximamente: área de práctica con mini retos o tarjetas
                (flashcards).
              </p>
              <p className='text-xs opacity-60'>
                Indica qué dinámica quieres y la añado.
              </p>
            </div>
          )}
          {open === 'evaluar' && (
            <div className='mt-2'>
              <Quiz slug={postId} />
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className='pt-4 flex gap-2 justify-center'>
      {/* <button onClick={() => openSheet('practicar')} className={baseBtn}>
        prácticar
      </button> */}
      <button onClick={() => openSheet('evaluar')} className={baseBtn}>
        evaluar
      </button>
      {mounted && createPortal(sheet, document.body)}
    </div>
  )
}
