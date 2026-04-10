export async function Footer() {
  return (
    <footer
      className='mt-14 w-full animate-fade-in animate-duration-700'
      role='contentinfo'
    >
      <section className='mx-auto max-w-6xl px-4 text-center md:text-right'>
        <div className='hero-panel px-6 py-5 md:px-8'>
          <a
            className='font-display text-lg text-slate-800 transition hover:text-blue-600 hover:underline dark:text-slate-200 dark:hover:text-blue-400'
            href='https://github.com/midudev/preguntas-entrevista-react/issues/new'
            target='_blank'
            rel='noreferrer'
            aria-label='Reportar pregunta faltante en GitHub (abre en nueva ventana)'
          >
            ¿Echas en falta una pregunta? ¡Avísanos!
          </a>
        </div>
      </section>

      <div className='mt-6 border-t border-slate-200 bg-white/60 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60'>
        <section className='mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row'>
          <p className='flex items-center text-sm text-slate-500 gap-x-2 dark:text-slate-400'>
            Desarrollado con ❤️ por{' '}
            <a
              className='font-bold text-slate-700 underline decoration-blue-400/60 underline-offset-3 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
              href='https://midu.dev/'
              target='_blank'
              rel='noreferrer'
            >
              midudev
            </a>
          </p>
          <div className='flex gap-x-2'>
            <p className='flex items-center justify-center gap-x-2'>
              <a
                className='font-bold uppercase tracking-[0.12em] text-slate-700 hover:text-blue-600 hover:underline dark:text-slate-300 dark:hover:text-blue-400'
                href='https://github.com/midudev/preguntas-entrevista-react/blob/main/CONTRIBUTING.md'
                target='_blank'
                rel='noreferrer'
                aria-label='Guia para contribuir al proyecto (abre en nueva ventana)'
              >
                ¡Contribuye!
              </a>
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
}
