import { LEVELS } from '../constants.js'

const LITERALS = {
  [LEVELS.EASY]: 'Principiante',
  [LEVELS.MEDIUM]: 'Intermedio',
  [LEVELS.HARD]: 'Avanzado',
  [LEVELS.ERRORS]: 'Errores típicos de React'
}

const COLORS = {
  [LEVELS.EASY]: 'text-green-600',
  [LEVELS.MEDIUM]: 'text-yellow-600',
  [LEVELS.HARD]: 'text-blue-600',
  [LEVELS.ERRORS]: 'text-red-600'
}

export function Pill ({ level }) {
  const color = COLORS[level] ?? COLORS[LEVELS.EASY]
  const literal = LITERALS[level] ?? LITERALS[LEVELS.EASY]

  return (
    <div>
      <span className={`${color} tracking-widest uppercase mix rounded-[4px] font-bold inline-block text-xs`}>
        {literal}
      </span>
    </div>
  )
}
