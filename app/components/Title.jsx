export function Title({ isHome }) {
  return (
    <h1
      className={`font-display max-w-2xl py-4 font-bold leading-[1.08] tracking-tight text-balance animate-fade-in-up animate-duration-500 ${isHome ? 'text-5xl md:text-7xl text-slate-950 dark:text-white' : 'text-2xl md:text-4xl text-slate-900 dark:text-slate-100'}`}
    >
      Preguntas típicas de React.js
    </h1>
  )
}
