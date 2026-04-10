import {
  IconHeartFilled,
  IconMessagePlus,
  IconBrandGithub,
} from '@tabler/icons-react'

export async function Footer() {
  return (
    <footer
      className='mt-14 w-full animate-fade-in animate-duration-700'
      role='contentinfo'
    >
      <section className='mx-auto max-w-6xl px-4'>
        <a
          className='group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-blue-200/60 bg-linear-to-r from-blue-50 via-white to-indigo-50 px-6 py-5 shadow-sm transition-all hover:border-blue-300/80 hover:shadow-md md:px-8 dark:border-blue-500/15 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/30 dark:hover:border-blue-500/30'
          href='https://github.com/midudev/preguntas-entrevista-react/issues/new'
          target='_blank'
          rel='noreferrer'
          aria-label='Reportar pregunta faltante en GitHub (abre en nueva ventana)'
        >
          <div className='flex items-center gap-3'>
            <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:group-hover:bg-blue-500/25'>
              <IconMessagePlus size={18} aria-hidden='true' />
            </span>
            <div>
              <p className='font-display text-base font-bold text-slate-900 dark:text-white'>
                ¿Echas en falta una pregunta?
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Abre un issue en GitHub y la añadimos
              </p>
            </div>
          </div>
          <span className='hidden shrink-0 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white sm:inline-flex dark:border-blue-500/25 dark:bg-slate-800 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white'>
            ¡Avísanos!
          </span>
        </a>
      </section>

      <div className='mt-6 border-t border-slate-200/80 py-5 dark:border-slate-800'>
        <section className='mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row'>
          <p className='flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400'>
            Desarrollado con
            <IconHeartFilled
              size={12}
              className='text-rose-500'
              aria-hidden='true'
            />
            por{' '}
            <a
              className='font-bold text-slate-700 underline decoration-blue-400/40 underline-offset-3 transition-colors hover:text-blue-600 hover:decoration-blue-400 dark:text-slate-300 dark:hover:text-blue-400'
              href='https://midu.dev/'
              target='_blank'
              rel='noreferrer'
            >
              midudev
            </a>
          </p>
          <a
            className='inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400'
            href='https://github.com/midudev/preguntas-entrevista-react/blob/main/CONTRIBUTING.md'
            target='_blank'
            rel='noreferrer'
            aria-label='Guia para contribuir al proyecto (abre en nueva ventana)'
          >
            <IconBrandGithub size={13} aria-hidden='true' />
            ¡Contribuye!
          </a>
        </section>
      </div>
    </footer>
  )
}
