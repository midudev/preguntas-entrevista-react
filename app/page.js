
import { Card } from './components/Card.jsx'
import { ListOfQuestions } from './components/ListOfQuestions.jsx'
import { LEVELS } from './constants.js'

export default function Page () {
  return (
    <>
      <h2 className='pb-4 text-2xl font-bold text-blue-900'>Las preguntas más buscadas...</h2>
      <section className='grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
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
      </section>
      <h2 className='pb-4 mt-16 text-2xl font-bold text-blue-900'>Todas las preguntas sobre React disponibles</h2>
      <ListOfQuestions />
    </>
  )
}
