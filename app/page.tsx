import type { Metadata } from 'next'

import { Card } from './components/Card.jsx'
import { ListOfQuestions } from './components/ListOfQuestions.jsx'
import { LEVELS } from './constants.js'

export const metadata: Metadata = {
  title: 'Preguntas de React con respuestas y ejemplos',
  description:
    'Guia de React en espanol con preguntas de entrevista, conceptos clave y respuestas claras para practicar y preparar tus procesos tecnicos.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'preguntas React',
    'entrevista React',
    'React en espanol',
    'aprender React',
  ],
  openGraph: {
    url: '/',
    type: 'website',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
}

export default function Page() {
  return (
    <>
      <section className='animate-fade-in-up animate-duration-700 py-6 md:py-10'>
        <p className='mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300'>
          <span className='h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400' />
          Guia para entrevistas
        </p>
        <h2 className='font-display max-w-4xl text-4xl leading-[1.08] text-slate-950 md:text-6xl dark:text-white'>
          Domina React con preguntas reales, respuestas claras y ejemplos que te
          preparan para cualquier entrevista.
        </h2>
        <p className='mt-6 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400'>
          Seleccionamos los temas que más se repiten en procesos de selección
          para que practiques con contexto, no con definiciones memorizadas.
        </p>
      </section>

      <section className='mt-12'>
        <h2 className='font-display pb-5 text-2xl font-bold text-slate-900 animate-fade-in animate-duration-500 md:text-3xl dark:text-white'>
          Las preguntas mas buscadas
        </h2>
        <div className='grid grid-cols-1 gap-5 sm:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-3'>
          <Card
            title='¿Para qué sirve useEffect?'
            excerpt='El hook useEffect se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.'
            slug='/que-hace-el-hook-use-effect/#content'
            level={LEVELS.EASY}
          />
          <Card
            title='Cómo cancelar una petición fetch'
            excerpt='Cuando hacemos una petición a una API, podemos cancelarla para evitar que se ejecute cuando el componente se desmonte usando AbortController como hacemos en este ejemplo'
            slug='/como-puedes-cancelar-una-peticion-a-una-api-en-use-effect-correctamente/#content'
            level={LEVELS.MEDIUM}
          />
          <Card
            title='¿Qué es la hidratación?'
            excerpt='La hidratación convierte el HTML estático que devuelve el servidor en HTML interactivo que puede responder a eventos del usuario en el cliente.'
            slug='/que-es-la-hidratacion-hydration-en-react/#content'
            level={LEVELS.MEDIUM}
          />
          <Card
            title='¿Qué hace el hook useId?'
            excerpt='El hook useId nos permite crear identificadores únicos, muy útiles para formularios y otros casos.'
            slug='/que-hace-el-hook-use-id/#content'
            level={LEVELS.EASY}
          />
          <Card
            title='Es React una biblioteca o framework'
            excerpt='Existe una fina línea hoy en día entre qué es una biblioteca o un framework. Oficialmente, React se autodenomina como biblioteca.'
            slug='/es-react-una-biblioteca-o-un-framework-por-que/#content'
            level={LEVELS.HARD}
          />
          <Card
            title='¿Qué son las Render Props?'
            excerpt='Las render props son un patrón de diseño de React que nos permite inyectar información en los elementos que renderizamos.'
            slug='/que-son-las-render-props/#content'
            level={LEVELS.HARD}
          />
        </div>
      </section>

      <section className='hero-panel mt-16 animate-fade-in animate-duration-700 px-6 py-10 md:px-12 md:py-12'>
        <h2 className='font-display pb-3 text-2xl font-bold text-slate-900 md:text-3xl dark:text-white'>
          Todo el archivo de preguntas sobre React
        </h2>
        <p className='pb-6 text-slate-600 dark:text-slate-300'>
          Explora todas las preguntas disponibles y marca lo que ya has repasado
          para llevar un progreso real.
        </p>
        <ListOfQuestions showReadStatus={true} />
      </section>
    </>
  )
}
