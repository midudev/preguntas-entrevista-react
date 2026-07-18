import { useState, useEffect, useCallback, useRef } from 'react'
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

export function Quiz({ slug }: { slug: string }) {
  const [questions, setQuestions] = useState([])
  const [status, setStatus] = useState(slug ? 'loading' : 'error')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [focusOption, setFocusOption] = useState(0)
  const nextBtnRef = useRef(null)
  const resultBtnRef = useRef(null)
  const questionHeadingRef = useRef(null)

  useEffect(() => {
    if (!slug) {
      setStatus('error')
      return
    }

    let cancelled = false
    setStatus('loading')

    fetch(`/quiz/qa/${slug}.json`)
      .then(r => {
        if (!r.ok) throw new Error('NOT_FOUND')
        return r.json()
      })
      .then(json => {
        if (cancelled) return
        if (!Array.isArray(json) || json.length === 0) {
          setStatus('error')
          return
        }
        const withPrepared = json.map(q => ({
          ...q,
          allAlternatives: q.alternatives,
          alternatives: prepareAlternatives(q.alternatives),
        }))
        setQuestions(withPrepared)
        setCurrent(0)
        setAnswers({})
        setScore(0)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  const total = questions.length
  const question = questions[current]
  const answered = answers[question?.id]
  const isLast = current === total - 1

  // After answering, move focus to the primary action (no auto-advance —
  // better for keyboard / screen-reader control).
  useEffect(() => {
    if (!answered) return
    const id = window.setTimeout(() => {
      if (isLast) resultBtnRef.current?.focus()
      else nextBtnRef.current?.focus()
    }, 50)
    return () => window.clearTimeout(id)
  }, [answered, isLast, current])

  // Announce question changes by focusing the heading when the index changes
  // (not on first mount of each load to avoid fighting the page).
  const prevCurrent = useRef(null)
  useEffect(() => {
    if (status !== 'ready') return
    if (prevCurrent.current === null) {
      prevCurrent.current = current
      return
    }
    if (prevCurrent.current !== current) {
      prevCurrent.current = current
      setFocusOption(0)
      questionHeadingRef.current?.focus({ preventScroll: false })
    }
  }, [current, status])

  const handleSelect = useCallback(
    alternative => {
      if (answered) return
      const isCorrect = alternative.is_correct
      setAnswers(prev => ({ ...prev, [question.id]: alternative.id }))
      if (isCorrect) setScore(s => s + 1)
    },
    [answered, question]
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
    setFocusOption(0)
    setQuestions(qs =>
      qs.map(q => ({
        ...q,
        alternatives: prepareAlternatives(q.allAlternatives || q.alternatives),
      }))
    )
    setStatus('ready')
  }

  const handleRadioKeyDown = (e, index) => {
    if (answered) return
    const count = question?.alternatives?.length ?? 0
    if (!count) return

    let next = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      next = (index + 1) % count
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      next = (index - 1 + count) % count
    } else if (e.key === 'Home') {
      e.preventDefault()
      next = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      next = count - 1
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleSelect(question.alternatives[index])
      return
    } else {
      return
    }
    setFocusOption(next)
    // Focus the button after state update
    requestAnimationFrame(() => {
      document.getElementById(`quiz-option-${question.id}-${next}`)?.focus()
    })
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
      <div
        className='flex items-center justify-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400'
        role='status'
        aria-live='polite'
      >
        <IconLoader2 size={18} className='animate-spin' aria-hidden='true' />
        Cargando preguntas…
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div
        className='flex flex-col items-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400'
        role='status'
      >
        <IconCircleDashed
          size={28}
          className='text-slate-300 dark:text-slate-600'
          aria-hidden='true'
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
    const resultTitle =
      percent === 100
        ? '¡Perfecto!'
        : percent >= 70
          ? '¡Buen trabajo!'
          : 'Sigue practicando'

    return (
      <div className='space-y-8 animate-fade-in' role='region' aria-label='Resultado del quiz'>
        <div className='flex flex-col items-center gap-4 pt-4'>
          <div className='relative' role='img' aria-label={`Puntuación: ${percent} por ciento`}>
            <svg viewBox='0 0 120 120' className='h-36 w-36' aria-hidden='true'>
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
              <ResultIcon size={28} className={resultColor} aria-hidden='true' />
              <span className='mt-1 text-2xl font-bold text-slate-900 dark:text-white'>
                {percent}%
              </span>
            </div>
          </div>
          <div className='text-center'>
            <p className='text-lg font-bold text-slate-900 dark:text-white' role='status' aria-live='polite'>
              {resultTitle}
            </p>
            <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
              {score} de {total} respuestas correctas
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            type='button'
            onClick={handleRestart}
            className='inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.97] dark:bg-blue-500 dark:shadow-blue-500/20 dark:hover:bg-blue-400'
          >
            <IconRefresh size={16} aria-hidden='true' />
            Reintentar
          </button>
        </div>

        <details className='group rounded-xl border border-slate-200 dark:border-slate-700/80 overflow-hidden'>
          <summary className='flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:bg-slate-800/60'>
            <IconChevronDown
              size={16}
              className='transition-transform group-open:rotate-180'
              aria-hidden='true'
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
                        aria-hidden='true'
                      />
                    ) : (
                      <IconX
                        size={14}
                        className='mt-0.5 shrink-0 text-red-500'
                        aria-hidden='true'
                      />
                    )}
                    <span
                      className={
                        isCorrect
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-red-600 dark:text-red-400'
                      }
                    >
                      <span className='sr-only'>
                        {isCorrect ? 'Correcta: ' : 'Tu respuesta: '}
                      </span>
                      {userAlt?.text || '—'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div className='mt-1 ml-5 flex items-start gap-1.5 text-emerald-600 dark:text-emerald-400'>
                      <IconCheck
                        size={14}
                        className='mt-0.5 shrink-0'
                        aria-hidden='true'
                      />
                      <span>
                        <span className='sr-only'>Respuesta correcta: </span>
                        {correctAlt?.text}
                      </span>
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
  const questionHeadingId = `quiz-question-${question.id}`
  const feedbackId = `quiz-feedback-${question.id}`
  const selectedAlt = question.alternatives.find(a => a.id === answered)
  const feedbackText = answered
    ? selectedAlt?.is_correct
      ? 'Respuesta correcta'
      : `Respuesta incorrecta. La correcta es: ${
          question.alternatives.find(a => a.is_correct)?.text || ''
        }`
    : ''

  return (
    <div
      className='space-y-6 animate-fade-in'
      role='group'
      aria-labelledby={questionHeadingId}
    >
      <div className='flex items-center gap-3'>
        <div
          className='flex gap-1'
          role='progressbar'
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={current + 1}
          aria-label={`Pregunta ${current + 1} de ${total}`}
        >
          {questions.map((_, i) => (
            <div
              key={i}
              aria-hidden='true'
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
          <span className='sr-only'>Pregunta </span>
          {current + 1}
          <span aria-hidden='true'> / </span>
          <span className='sr-only'> de </span>
          {total}
        </span>
      </div>

      <h3
        id={questionHeadingId}
        ref={questionHeadingRef}
        tabIndex={-1}
        className='text-xl font-bold leading-snug text-slate-900 outline-none dark:text-white md:text-2xl'
      >
        {question.question}
      </h3>

      <div
        role='radiogroup'
        aria-labelledby={questionHeadingId}
        className='space-y-2.5'
      >
        {question.alternatives.map((alt, idx) => {
          const selected = answered === alt.id
          const correctness = answered && alt.is_correct
          const isWrongSelection = answered && selected && !alt.is_correct
          const letter = LETTERS[idx] || String.fromCharCode(65 + idx)
          const isFocused = focusOption === idx

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
            icon = <IconCheck size={14} strokeWidth={3} aria-hidden='true' />
          } else if (isWrongSelection) {
            optionStyle =
              'border-red-400 bg-red-50 ring-1 ring-red-400/50 dark:border-red-500/70 dark:bg-red-500/10 dark:ring-red-500/30'
            letterStyle =
              'bg-red-500 text-white border-red-500 dark:bg-red-500 dark:border-red-500'
            icon = <IconX size={14} strokeWidth={3} aria-hidden='true' />
          } else if (selected) {
            optionStyle =
              'border-blue-400 bg-blue-50 ring-1 ring-blue-400/50 dark:border-blue-500/70 dark:bg-blue-500/10 dark:ring-blue-500/30'
            letterStyle =
              'bg-blue-500 text-white border-blue-500 dark:bg-blue-500 dark:border-blue-500'
          }

          return (
            <div key={alt.id}>
              <button
                type='button'
                id={`quiz-option-${question.id}-${idx}`}
                role='radio'
                aria-checked={!!selected}
                aria-describedby={answered ? feedbackId : undefined}
                tabIndex={answered ? -1 : isFocused ? 0 : -1}
                onClick={() => {
                  setFocusOption(idx)
                  handleSelect(alt)
                }}
                onKeyDown={e => handleRadioKeyDown(e, idx)}
                onFocus={() => setFocusOption(idx)}
                disabled={!!answered}
                className={`group flex min-h-12 w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-default md:text-base ${optionStyle}`}
              >
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold transition-all ${letterStyle}`}
                  aria-hidden='true'
                >
                  {icon || letter}
                </span>
                <span className='flex-1 text-slate-700 dark:text-slate-200'>
                  <span className='sr-only'>Opción {letter}: </span>
                  {alt.text}
                </span>
              </button>
            </div>
          )
        })}
      </div>

      {answered && (
        <p
          id={feedbackId}
          className='rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200'
          role='status'
          aria-live='polite'
        >
          {feedbackText}
        </p>
      )}

      {answered && !isLast && (
        <div className='flex justify-end'>
          <button
            ref={nextBtnRef}
            type='button'
            onClick={handleNext}
            className='inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.97] dark:bg-blue-500 dark:hover:bg-blue-400'
          >
            Siguiente
            <IconArrowRight size={16} aria-hidden='true' />
          </button>
        </div>
      )}
      {answered && isLast && (
        <div className='flex justify-end'>
          <button
            ref={resultBtnRef}
            type='button'
            onClick={() => setStatus('finished')}
            className='inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.97] dark:bg-blue-500 dark:hover:bg-blue-400'
          >
            <IconTrophy size={16} aria-hidden='true' />
            Ver resultado
          </button>
        </div>
      )}

      <div className='flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800'>
        <button
          type='button'
          onClick={handlePrev}
          disabled={current === 0}
          className='inline-flex min-h-9 items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        >
          <IconArrowLeft size={14} aria-hidden='true' />
          Anterior
        </button>
        <button
          type='button'
          onClick={handleRestart}
          className='inline-flex min-h-9 items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        >
          <IconRefresh size={14} aria-hidden='true' />
          Reiniciar
        </button>
      </div>
    </div>
  )
}
