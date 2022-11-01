import { LEVELS } from '../constants.js'

const LITERALS = {
  [LEVELS.EASY]: 'Principiante',
  [LEVELS.MEDIUM]: 'Intermedio',
  [LEVELS.HARD]: 'Avanzado',
  [LEVELS.ERRORS]: 'Errores típicos de React'
}

const COLORS = {
  [LEVELS.EASY]: 'bg-green-100 text-green-800',
  [LEVELS.MEDIUM]: 'bg-yellow-100 text-yellow-800',
  [LEVELS.HARD]: 'bg-blue-100 text-blue-800',
  [LEVELS.ERRORS]: 'bg-red-100 text-red-800'
}

export function Pill ({ level }) {
  const color = COLORS[level] ?? COLORS[LEVELS.EASY]
  const literal = LITERALS[level] ?? LITERALS[LEVELS.EASY]

  return (
    <div className='absolute top-3 right-3'>
      <span className={`${color} border uppercase mix rounded-[4px] font-bold font-grotesk inline-block p-[3px] text-[10px]`}>
        {literal}
      </span>
    </div>
  )
}
