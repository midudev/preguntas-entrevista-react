export async function Footer () {
  return (
    <footer className='w-full'>
      <section className='max-w-6xl px-4 m-auto text-center md:text-right'>
        <p>
          <a className='text-blue-900 hover:underline' href='https://github.com/midudev/preguntas-entrevista-react/issues/new' target='_blank' rel='noreferrer'>¿Echas en falta una pregunta? ¡Avísanos!</a>
        </p>
      </section>

      <div className='mt-4 border-t md:py-4 dark:bg-primary dark:text-white bg-slate-100 dark:border-t-secondry border-t-slate-100'>
        <section className='flex flex-col items-center justify-between w-full max-w-6xl gap-3 px-4 m-auto mx-auto md:flex-row'>
          <p className='flex items-center text-sm opacity-75 gap-x-2'>Desarrollado con ❤️ por <a className='underline' href='https://midu.dev/' target='_blank' rel='noreferrer'>midudev</a></p>
          <div className='flex gap-x-2'>
            <p className='flex items-center justify-center gap-x-2'>
              <a className='text-blue-900 hover:underline' href='https://github.com/midudev/preguntas-entrevista-react/blob/main/CONTRIBUTING.md' target='_blank' rel='noreferrer'>
                ¡Contribuye!
              </a>
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
}
