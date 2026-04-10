'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'

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

  const progress = useMemo(() => {
    if (!total) return 0
    const answeredCount = Object.keys(answers).length
    return Math.round((answeredCount / total) * 100)
  }, [answers, total])

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

  // Helper: asegura máximo 5 alternativas incluyendo la correcta
  function prepareAlternatives(full = []) {
    if (!Array.isArray(full) || full.length === 0) return []
    const correct = full.find(a => a.is_correct) || full[0]
    const incorrect = full.filter(a => a !== correct)
    // Mezclar incorrectas
    const shuffledIncorrect = [...incorrect].sort(() => Math.random() - 0.5)
    const needed = Math.max(0, 5 - 1) // 4 incorrectas máximo si existen
    const pickedIncorrect = shuffledIncorrect.slice(0, needed)
    const subset = [correct, ...pickedIncorrect]
    // Si por algún motivo hay menos de 5 (porque no hay suficientes incorrectas) queda así.
    return subset.sort(() => Math.random() - 0.5)
  }

  if (status === 'loading') {
    return (
      <div className='py-6 text-center text-sm opacity-80'>
        Cargando preguntas…
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className='py-6 text-center text-sm text-red-600 dark:text-red-400'>
        No se encontró un quiz para este contenido todavía.
      </div>
    )
  }
  if (status === 'finished') {
    const percent = Math.round((score / total) * 100)
    return (
      <div className='space-y-6 animate-fade-in'>
        <header className='text-center'>
          <p className='text-xs tracking-wide uppercase font-semibold text-blue-700 dark:text-blue-300'>
            Resultado
          </p>
          <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-50 pt-2'>
            Tu puntuación
          </h3>
        </header>
        <div className='flex justify-center'>
          <div className='relative w-40 h-40'>
            <svg viewBox='0 0 100 100' className='w-full h-full'>
              <circle
                cx='50'
                cy='50'
                r='45'
                className='stroke-blue-200 dark:stroke-blue-800 stroke-[10] fill-none'
              />
              <circle
                cx='50'
                cy='50'
                r='45'
                className='stroke-blue-600 dark:stroke-blue-400 stroke-[10] fill-none stroke-linecap-round'
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - percent / 100)}
                style={{ transition: 'stroke-dashoffset 0.8s ease' }}
              />
              <text
                x='50'
                y='54'
                textAnchor='middle'
                className='fill-blue-800 dark:fill-blue-100 font-bold text-xl'
              >
                {percent}%
              </text>
            </svg>
          </div>
        </div>
        <p className='text-center text-sm md:text-base'>
          {percent === 100
            ? '¡Perfecto! Dominio total.'
            : percent >= 70
              ? 'Buen trabajo, solo afina algunos detalles.'
              : 'Sigue practicando, puedes intentarlo de nuevo.'}
        </p>
        <div className='flex flex-wrap gap-3 justify-center'>
          <button
            onClick={handleRestart}
            className='rounded-lg px-5 py-2.5 text-sm font-semibold bg-white text-slate-800 hover:bg-blue-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 transition-colors'
          >
            Reintentar
          </button>
        </div>
        <div className='pt-4'>
          <details className='group'>
            <summary className='cursor-pointer text-xs opacity-70 group-open:opacity-100'>
              Ver resumen de respuestas
            </summary>
            <ul className='pt-2 space-y-2 text-xs'>
              {questions.map(q => {
                const userAlt = q.alternatives.find(a => a.id === answers[q.id])
                const correctAlt = q.alternatives.find(a => a.is_correct)
                return (
                  <li
                    key={q.id}
                    className='border border-slate-200 dark:border-slate-700 rounded-lg p-3'
                  >
                    <p className='font-semibold mb-1'>{q.question}</p>
                    <p>
                      Tu respuesta:{' '}
                      <strong
                        className={
                          userAlt?.is_correct
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-red-600 dark:text-red-400'
                        }
                      >
                        {userAlt?.text || '—'}
                      </strong>
                    </p>
                    {!userAlt?.is_correct && (
                      <p>
                        Correcta:{' '}
                        <strong className='text-green-600 dark:text-green-400'>
                          {correctAlt?.text}
                        </strong>
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          </details>
        </div>
      </div>
    )
  }

  if (status !== 'ready' || !question) return null

  return (
    <div className='space-y-6 animate-fade-in'>
      <div>
        <div className='flex items-center justify-between mb-1'>
          <span className='text-[10px] font-semibold tracking-wide uppercase'>
            Progreso
          </span>
          <span className='text-[10px]'>
            {current + 1}/{total}
          </span>
        </div>
        <div className='h-2 rounded-full bg-blue-100 dark:bg-slate-700 overflow-hidden'>
          <div
            className='h-full bg-blue-600 dark:bg-blue-400 transition-all'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div>
        <h3 className='text-lg font-bold text-slate-900 dark:text-slate-50 leading-snug'>
          {question.question}
        </h3>
      </div>
      <ul className='space-y-2'>
        {question.alternatives.map(alt => {
          const selected = answered === alt.id
          const correctness = answered && alt.is_correct
          const isWrongSelection = answered && selected && !alt.is_correct
          return (
            <li key={alt.id}>
              <button
                onClick={() => handleSelect(alt)}
                disabled={!!answered}
                className={[
                  'w-full text-left rounded-lg border px-4 py-3 text-sm md:text-base transition-colors duration-200',
                  'bg-white hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-700',
                  selected
                    ? 'ring-2 ring-blue-400 border-blue-400'
                    : 'border-slate-200 dark:border-slate-600',
                  correctness &&
                    'bg-green-50 dark:bg-green-900/30 border-green-400 dark:border-green-500 ring-2 ring-green-400',
                  isWrongSelection &&
                    'bg-red-50 dark:bg-red-900/30 border-red-400 dark:border-red-500 ring-2 ring-red-400',
                  'disabled:cursor-default',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className='flex items-start gap-3'>
                  <span className='mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold bg-blue-50 text-blue-700 border-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500'>
                    {selected
                      ? correctness
                        ? '✓'
                        : '✕'
                      : String.fromCharCode(
                          65 + question.alternatives.indexOf(alt)
                        )}
                  </span>
                  <span className='flex-1'>{alt.text}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      {answered && !isLast && (
        <div className='flex justify-end pt-2'>
          <button
            onClick={handleNext}
            className='text-xs font-semibold rounded-lg px-4 py-2 bg-white text-slate-700 hover:bg-blue-50 border border-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-600 transition-colors'
          >
            Siguiente →
          </button>
        </div>
      )}
      {answered && isLast && (
        <div className='flex justify-end pt-2'>
          <button
            onClick={() => setStatus('finished')}
            className='text-xs font-semibold border rounded px-3 py-2 bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400'
          >
            Ver resultado
          </button>
        </div>
      )}
      <div className='flex justify-between pt-2'>
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className='text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-slate-200 disabled:opacity-30 bg-white text-slate-600 hover:bg-blue-50 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600 transition-colors'
        >
          ← Anterior
        </button>
        <button
          onClick={handleRestart}
          className='text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600 transition-colors'
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}
