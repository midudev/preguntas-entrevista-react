'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  IconCheck,
  IconX,
  IconArrowLeft,
  IconArrowRight,
  IconRefresh,
  IconTrophy,
  IconLoader2,
  IconCircleDashed,
  IconChevronDown,
  IconFlame,
  IconMoodSad,
} from '@tabler/icons-react'

export function Quiz({ slug }) {
  const [questions, setQuestions] = useState([])
  const [status, setStatus] = useState('idle')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (!slug) return
    setStatus('loading')
    fetch(`/quiz/qa/${slug}.json`)
      .then(r => {
        if (!r.ok) throw new Error('NOT_FOUND')
        return r.json()
      })
      .then(json => {
        const withPrepared = json.map(q => ({
          ...q,
          allAlternatives: q.alternatives,
          alternatives: prepareAlternatives(q.alternatives),
        }))
        setQuestions(withPrepared)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [slug])

  const total = questions.length
  const question = questions[current]
  const answered = answers[question?.id]
  const isLast = current === total - 1

  const handleSelect = useCallback(
    alternative => {
      if (answered) return
      const isCorrect = alternative.is_correct
      setAnswers(prev => ({ ...prev, [question.id]: alternative.id }))
      if (isCorrect) setScore(s => s + 1)
      setTimeout(() => {
        if (!isLast) setCurrent(c => c + 1)
        else setStatus('finished')
      }, 900)
    },
    [answered, question, isLast]
  )

  const handleNext = () => {
    if (isLast) {
      setStatus('finished')
    } else {
      setCurrent(c => c + 1)
    }
  }

  const handlePrev = () => {
    setCurrent(c => Math.max(0, c - 1))
  }

  const handleRestart = () => {
    setAnswers({})
    setScore(0)
    setCurrent(0)
    setQuestions(qs =>
      qs.map(q => ({
        ...q,
        alternatives: prepareAlternatives(q.allAlternatives || q.alternatives),
      }))
    )
    setStatus('ready')
  }

  function prepareAlternatives(full = []) {
    if (!Array.isArray(full) || full.length === 0) return []
    const correct = full.find(a => a.is_correct) || full[0]
    const incorrect = full.filter(a => a !== correct)
    const shuffledIncorrect = [...incorrect].sort(() => Math.random() - 0.5)
    const needed = Math.max(0, 5 - 1)
    const pickedIncorrect = shuffledIncorrect.slice(0, needed)
    const subset = [correct, ...pickedIncorrect]
    return subset.sort(() => Math.random() - 0.5)
  }

  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400'>
        <IconLoader2 size={18} className='animate-spin' />
        Cargando preguntas…
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className='flex flex-col items-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400'>
        <IconCircleDashed
          size={28}
          className='text-slate-300 dark:text-slate-600'
        />
        No se encontró un quiz para este contenido todavía.
      </div>
    )
  }

  if (status === 'finished') {
    const percent = Math.round((score / total) * 100)
    const ResultIcon =
      percent === 100 ? IconTrophy : percent >= 70 ? IconFlame : IconMoodSad
    const resultColor =
      percent === 100
        ? 'text-amber-500'
        : percent >= 70
          ? 'text-orange-500'
          : 'text-slate-400 dark:text-slate-500'

    return (
      <div className='space-y-8 animate-fade-in'>
        <div className='flex flex-col items-center gap-4 pt-4'>
          <div className='relative'>
            <svg viewBox='0 0 120 120' className='h-36 w-36'>
              <circle
                cx='60'
                cy='60'
                r='52'
                className='fill-none stroke-slate-100 dark:stroke-slate-800'
                strokeWidth='8'
              />
              <circle
                cx='60'
                cy='60'
                r='52'
                className='fill-none stroke-blue-500 dark:stroke-blue-400'
                strokeWidth='8'
                strokeLinecap='round'
                strokeDasharray={2 * Math.PI * 52}
                strokeDashoffset={2 * Math.PI * 52 * (1 - percent / 100)}
                transform='rotate(-90 60 60)'
                style={{
                  transition: 'stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1)',
                }}
              />
            </svg>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <ResultIcon size={28} className={resultColor} />
              <span className='mt-1 text-2xl font-bold text-slate-900 dark:text-white'>
                {percent}%
              </span>
            </div>
          </div>
          <div className='text-center'>
            <p className='text-lg font-bold text-slate-900 dark:text-white'>
              {percent === 100
                ? '¡Perfecto!'
                : percent >= 70
                  ? '¡Buen trabajo!'
                  : 'Sigue practicando'}
            </p>
            <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
              {score} de {total} respuestas correctas
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            onClick={handleRestart}
            className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.97] dark:bg-blue-500 dark:shadow-blue-500/20 dark:hover:bg-blue-400'
          >
            <IconRefresh size={16} />
            Reintentar
          </button>
        </div>

        <details className='group rounded-xl border border-slate-200 dark:border-slate-700/80 overflow-hidden'>
          <summary className='flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'>
            <IconChevronDown
              size={16}
              className='transition-transform group-open:rotate-180'
            />
            Ver resumen de respuestas
          </summary>
          <ul className='divide-y divide-slate-100 border-t border-slate-200 dark:divide-slate-700/60 dark:border-slate-700/80'>
            {questions.map((q, i) => {
              const userAlt = q.alternatives.find(a => a.id === answers[q.id])
              const correctAlt = q.alternatives.find(a => a.is_correct)
              const isCorrect = userAlt?.is_correct
              return (
                <li key={q.id} className='px-4 py-3 text-sm'>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>
                    <span className='mr-1.5 text-xs text-slate-400'>
                      {i + 1}.
                    </span>
                    {q.question}
                  </p>
                  <div className='mt-1.5 flex items-start gap-1.5'>
                    {isCorrect ? (
                      <IconCheck
                        size={14}
                        className='mt-0.5 shrink-0 text-emerald-500'
                      />
                    ) : (
                      <IconX
                        size={14}
                        className='mt-0.5 shrink-0 text-red-500'
                      />
                    )}
                    <span
                      className={
                        isCorrect
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-red-600 dark:text-red-400'
                      }
                    >
                      {userAlt?.text || '—'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div className='mt-1 ml-5 flex items-start gap-1.5 text-emerald-600 dark:text-emerald-400'>
                      <IconCheck size={14} className='mt-0.5 shrink-0' />
                      <span>{correctAlt?.text}</span>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </details>
      </div>
    )
  }

  if (status !== 'ready' || !question) return null

  const LETTERS = ['A', 'B', 'C', 'D', 'E']

  return (
    <div className='space-y-6 animate-fade-in'>
      {/* Step indicator */}
      <div className='flex items-center gap-3'>
        <div className='flex gap-1'>
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < Object.keys(answers).length
                  ? 'w-6 bg-blue-500 dark:bg-blue-400'
                  : i === current
                    ? 'w-6 bg-blue-300 dark:bg-blue-600'
                    : 'w-1.5 bg-slate-200 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
        <span className='ml-auto text-xs tabular-nums font-medium text-slate-400 dark:text-slate-500'>
          {current + 1} / {total}
        </span>
      </div>

      {/* Question */}
      <h3 className='text-xl font-bold leading-snug text-slate-900 dark:text-white md:text-2xl'>
        {question.question}
      </h3>

      {/* Options */}
      <ul className='space-y-2.5'>
        {question.alternatives.map((alt, idx) => {
          const selected = answered === alt.id
          const correctness = answered && alt.is_correct
          const isWrongSelection = answered && selected && !alt.is_correct
          const letter = LETTERS[idx] || String.fromCharCode(65 + idx)

          let optionStyle =
            'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/5'
          let letterStyle =
            'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
          let icon = null

          if (correctness) {
            optionStyle =
              'border-emerald-400 bg-emerald-50 ring-1 ring-emerald-400/50 dark:border-emerald-500/70 dark:bg-emerald-500/10 dark:ring-emerald-500/30'
            letterStyle =
              'bg-emerald-500 text-white border-emerald-500 dark:bg-emerald-500 dark:border-emerald-500'
            icon = <IconCheck size={14} strokeWidth={3} />
          } else if (isWrongSelection) {
            optionStyle =
              'border-red-400 bg-red-50 ring-1 ring-red-400/50 dark:border-red-500/70 dark:bg-red-500/10 dark:ring-red-500/30'
            letterStyle =
              'bg-red-500 text-white border-red-500 dark:bg-red-500 dark:border-red-500'
            icon = <IconX size={14} strokeWidth={3} />
          } else if (selected) {
            optionStyle =
              'border-blue-400 bg-blue-50 ring-1 ring-blue-400/50 dark:border-blue-500/70 dark:bg-blue-500/10 dark:ring-blue-500/30'
            letterStyle =
              'bg-blue-500 text-white border-blue-500 dark:bg-blue-500 dark:border-blue-500'
          }

          return (
            <li key={alt.id}>
              <button
                onClick={() => handleSelect(alt)}
                disabled={!!answered}
                className={`group flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200 disabled:cursor-default md:text-base ${optionStyle}`}
              >
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold transition-all ${letterStyle}`}
                >
                  {icon || letter}
                </span>
                <span className='flex-1 text-slate-700 dark:text-slate-200'>
                  {alt.text}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Next / Result */}
      {answered && !isLast && (
        <div className='flex justify-end'>
          <button
            onClick={handleNext}
            className='inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-[0.97] dark:bg-blue-500 dark:hover:bg-blue-400'
          >
            Siguiente
            <IconArrowRight size={16} />
          </button>
        </div>
      )}
      {answered && isLast && (
        <div className='flex justify-end'>
          <button
            onClick={() => setStatus('finished')}
            className='inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-[0.97] dark:bg-blue-500 dark:hover:bg-blue-400'
          >
            <IconTrophy size={16} />
            Ver resultado
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className='flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800'>
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className='inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        >
          <IconArrowLeft size={14} />
          Anterior
        </button>
        <button
          onClick={handleRestart}
          className='inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        >
          <IconRefresh size={14} />
          Reiniciar
        </button>
      </div>
    </div>
  )
}
