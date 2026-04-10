import { LEVELS } from '../constants.js'

const LITERALS = {
  [LEVELS.EASY]: 'Principiante',
  [LEVELS.MEDIUM]: 'Intermedio',
  [LEVELS.HARD]: 'Experto',
  [LEVELS.ERRORS]: 'Errores típicos de React',
}

const COLORS = {
  [LEVELS.EASY]:
    'border-emerald-500/40 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  [LEVELS.MEDIUM]:
    'border-amber-500/40 bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  [LEVELS.HARD]:
    'border-violet-500/40 bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
  [LEVELS.ERRORS]:
    'border-red-500/40 bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300',
}

export function Pill({ level }) {
  const color = COLORS[level] ?? COLORS[LEVELS.EASY]
  const literal = LITERALS[level] ?? LITERALS[LEVELS.EASY]

  return (
    <div>
      <span className={`${color} pill-tag font-bold`}>{literal}</span>
    </div>
  )
}
