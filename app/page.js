import { Card } from './components/Card.jsx'
import { LEVELS } from './constants.js'

export default function Page () {
  return (
    <>
      <h2 className='pb-4 text-2xl font-bold text-blue-900 font-grotesk'>Las preguntas más buscadas...</h2>
      <section className='grid grid-cols-3 gap-8'>
        <Card
          title='¿Para qué sirve useEffect?'
          excerpt='El hook useEffect se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.'
          slug='/que-hace-el-hook-use-effect/#content'
          level={LEVELS.EASY}
        />
        <Card
          title='Cómo cancelar una petición fetch'
          excerpt='Cuando hacemos una petición a una API, podemos cancelarla para evitar que se ejecute cuando el componente se desmonte usando AbortController como hacemos en este ejemplo'
          slug='/como-puedes-cancelar-una-petición-a-una-api-en-useeffect-correctamente/#content'
          level={LEVELS.MEDIUM}
        />
        <Card
          title='¿Hay que usar siempre useMemo?'
          excerpt='No. useMemo es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos.'
          slug='/es-buena-idea-usar-siempre-usememo-para-optimizar-nuestros-componentes/#content'
          level={LEVELS.MEDIUM}
        />
        <Card
          title='¿Para qué sirve useEffect?'
          excerpt='El hook useEffect se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.'
          slug='/que-hace-hook-use-effect/#content'
          level={LEVELS.HARD}
        />
        <Card
          title='Es React una biblioteca o framework'
          excerpt='Existe una fina línea hoy en día entre qué es una biblioteca o un framework. Oficialmente, React se autodenomina como biblioteca.'
          slug='/es-react-una-biblioteca-o-un-framework-por-que/#content'
          level={LEVELS.HARD}
        />
        <Card
          title='¿Para qué sirve useEffect?'
          excerpt='El hook useEffect se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.'
          slug='/que-hace-hook-use-effect/#content'
          level={LEVELS.HARD}
        />
      </section>
    </>
  )
}
