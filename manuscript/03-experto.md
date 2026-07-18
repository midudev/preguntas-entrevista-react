# Experto

Preguntas de nivel **Experto**. Tras cada explicación puedes encontrar un bloque *Pon a prueba*; las respuestas están al final del capítulo.

---

## ¿Es React una biblioteca o un framework? ¿Por qué?

Existe una fina línea hoy en día entre qué es una biblioteca o un framework. Oficialmente, React se autodenomina como biblioteca. Esto es porque para poder crear una aplicación completa, necesitas usar otras bibliotecas.

Por ejemplo, _React_ no ofrece un sistema de enrutado de aplicaciones oficial. Por ello, hay que usar una biblioteca como [React Router](https://reactrouter.com/) o usar un _framework_ como [Next.js](https://nextjs.org/) que ya incluye un sistema de enrutado.

Tampoco puedes usar React para añadir las cabeceras que van en el `<head>` en tu aplicación, y también necesitarás otra biblioteca o framework para solucionar esto.

Otra diferencia es que React no está opinionado sobre qué empaquetador de aplicaciones usar. En cambio `Angular` en su propio tutorial ya te indica que debes usar `@angular/cli` para crear una aplicación, en cambio React siempre te deja la libertad de elegir qué empaquetador usar y ofrece diferentes opciones.

Aún así, existe gente que considera a React como un framework. Aunque no hay una definición oficial de qué es un framework, la mayoría de la gente considera que un framework es una biblioteca que incluye otras bibliotecas para crear una aplicación completa de forma opinionada y casi sin configuración.

Por ejemplo, **Next.js se podría considerar un framework de React** porque incluye React, un sistema de enrutado, un sistema de renderizado del lado del servidor, etc.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se autodenomina oficialmente React?

- **a)** Como un motor de renderizado.
- **b)** Como una biblioteca.
- **c)** No tiene denominacion oficial.
- **d)** Como un sistema operativo.

**2.** ¿Por que React se considera biblioteca y no framework?

- **a)** Porque solo funciona en el navegador.
- **b)** Porque necesitas otras bibliotecas para crear una aplicacion completa.
- **c)** Porque es gratuito.
- **d)** Porque es mas pequeno.

**3.** ¿Que NO incluye React de forma nativa?

- **a)** Componentes funcionales.
- **b)** Props y state.
- **c)** Sistema de enrutado de aplicaciones.
- **d)** Virtual DOM.

**4.** ¿Que se considera un framework de React?

- **a)** Next.js, porque incluye React, enrutado, SSR, etc.
- **b)** Ninguno es un framework.
- **c)** React Router, porque maneja rutas.
- **d)** Axios, porque maneja peticiones.

---

## ¿Para qué sirve el hook `useImperativeHandle`?

Nos permite definir qué propiedades y métodos queremos que sean accesibles desde el componente padre.

En el siguiente ejemplo vamos a crear un componente `TextInput` que tiene un método `focus` que cambia el foco al elemento `<input>`.

```jsx
import { useRef, useImperativeHandle } from 'react'

function TextInput(props, ref) {
  const inputEl = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus()
    },
  }))

  return <input ref={inputEl} type='text' />
}
```

Creamos una referencia `inputEl` con `useRef` y la pasamos al elemento `<input>` como prop `ref`. Cuando el componente se monta, la referencia `inputEl` apunta al elemento `<input>` del DOM.

Para acceder al elemento del DOM, usamos la propiedad `current` de la referencia.

Para que el componente padre pueda acceder al método `focus`, usamos el hook `useImperativeHandle`. Este hook recibe dos parámetros: una referencia y una función que devuelve un objeto con las propiedades y métodos que queremos que sean accesibles desde el componente padre.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve useImperativeHandle?

- **a)** Manejar el estado del componente.
- **b)** Crear contextos.
- **c)** Memorizar valores calculados.
- **d)** Definir que propiedades y metodos son accesibles desde el componente padre.

**2.** ¿Cuantos parametros recibe useImperativeHandle?

- **a)** Dos: una referencia y una funcion que devuelve un objeto.
- **b)** Uno: solo la referencia.
- **c)** Ninguno.
- **d)** Solo un string con el nombre del metodo.

**3.** ¿Con que otro hook se suele usar useImperativeHandle?

- **a)** useEffect para efectos.
- **b)** useRef para crear la referencia interna.
- **c)** useMemo para memorizacion.
- **d)** No se usa con otros hooks.

---

## ¿Para qué sirve el método `cloneElement` de React?

Te permite clonar un elemento React y añadirle o modificar las props que recibe.

```jsx
import { cloneElement } from 'react'

const Hello = ({ name }) => <h1>Hello {name}</h1>

const App = () => {
  const element = <Hello name='midudev' />

  return (
    <div>
      {cloneElement(element, { name: 'TMChein' })}
      {cloneElement(element, { name: 'Madeval' })}
      {cloneElement(element, { name: 'Gorusuke' })}
    </div>
  )
}
```

En este ejemplo, clonamos `element` que tenía la prop `midudev` y le pasamos una prop `name` diferente cada vez. Esto renderizará tres veces el componente `Hello` con los nombres `TMChein`, `Madeval` y `Gorusuke`. Sin rastro de la prop original.

Puede ser útil para modificar un elemento que ya nos viene de un componente padre y del que no tenemos posibilidad de re-crear con el componente.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-tc39vr?file=App.tsx)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que permite hacer cloneElement?

- **a)** Duplicar hooks.
- **b)** Crear una copia profunda del estado.
- **c)** Clonar un elemento React y anadir o modificar sus props.
- **d)** Duplicar el DOM del navegador.

**2.** ¿Que pasa con las props originales al usar cloneElement con props nuevas?

- **a)** Se ignoran ambas.
- **b)** Se fusionan en un array.
- **c)** Las props nuevas reemplazan a las originales.
- **d)** Se genera un error.

**3.** ¿Cuando es util usar cloneElement?

- **a)** Nunca, esta deprecado.
- **b)** Siempre que se crea un componente.
- **c)** Para modificar un elemento que viene del padre sin posibilidad de re-crearlo.
- **d)** Solo en formularios.

---

## ¿Qué son los portales en React?

Los portales nos permiten renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.

Es perfecto para ciertos casos de uso como, por ejemplo, modales:

```jsx
import { createPortal } from 'react-dom'

function Modal() {
  return createPortal(
    <div className='modal'>
      <h1>Modal</h1>
    </div>,
    document.getElementById('modal')
  )
}
```

`createPortal` acepta dos parámetros:

- El primer parámetro es el componente que queremos renderizar
- El segundo parámetro es el nodo del DOM donde queremos renderizar el componente

En este caso el modal se renderiza en el nodo `#modal` del DOM.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que permiten hacer los portales en React?

- **a)** Teletransportar datos entre componentes.
- **b)** Renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.
- **c)** Conectar con APIs externas.
- **d)** Crear rutas dinamicas.

**2.** ¿Que funcion se usa para crear un portal?

- **a)** No existe funcion especifica.
- **b)** document.createPortal().
- **c)** createPortal de react-dom.
- **d)** ReactDOM.portal().

**3.** ¿Cuantos parametros recibe createPortal?

- **a)** Dos: el componente a renderizar y el nodo del DOM destino.
- **b)** Solo un objeto de configuracion.
- **c)** Cuatro: componente, nodo, key y ref.
- **d)** Ninguno.

**4.** ¿Cual es un caso de uso perfecto para portales?

- **a)** Encabezados de pagina.
- **b)** Modales.
- **c)** Inputs de texto.
- **d)** Formularios de login.

---

## ¿Por qué `StrictMode` renderiza dos veces la aplicación?

En desarrollo, `StrictMode` fuerza ejecuciones adicionales de ciertos ciclos (incluyendo render y efectos) para ayudarte a detectar errores que en producción suelen ser más difíciles de reproducir.

No es un bug: es una herramienta de diagnóstico.

Su objetivo principal es destapar problemas como:

- Efectos con limpieza incompleta o ausente.
- Lógica no idempotente (código que se rompe si se ejecuta más de una vez).
- Side effects dentro del render.
- Posibles _race conditions_ en flujos asíncronos.

Punto importante: este comportamiento extra ocurre en desarrollo, no en producción. Si tu código falla con `StrictMode`, normalmente está señalando una fragilidad real que conviene corregir antes de publicar.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que StrictMode renderiza dos veces la aplicacion?

- **a)** Para encontrar efectos que necesitan limpieza y exponer problemas de race conditions.
- **b)** Para duplicar el estado del componente.
- **c)** Solo ocurre en produccion.
- **d)** Es un bug de React.

**2.** ¿Que se preserva cuando StrictMode monta los componentes dos veces?

- **a)** Solo el context.
- **b)** Solo las props.
- **c)** Solo los refs.
- **d)** El estado y el DOM.

**3.** ¿Que tipo de problemas ayuda a detectar el doble renderizado de StrictMode?

- **a)** Race conditions y efectos sin limpieza.
- **b)** Errores de tipado.
- **c)** Problemas de seguridad.
- **d)** Errores de sintaxis.

---

## ¿Qué problemas crees que pueden aparecer en una aplicación al querer visualizar listas de miles/millones de datos?

- **Tiempo de respuesta del servidor:** Hacer peticiones de millones de datos no es, en general, una buena estrategia. Incluso en el mejor de los casos, en el que el servidor solo debe devolver los datos sin tratarlos, hay un coste asociado al _parseo_ y _envío_ de los mismos a través de la red. Llamadas con un tamaño desmesurado pueden incurrir en interfaces lentas, e incluso en _timeouts_ en la respuesta.
- **Problemas de rendimiento:** Aunque es cierto que **React** se basa en un modelo _declarativo_ en el cual no debemos tener una exhaustivo control o gestión de cómo se _renderiza_, no hay que olvidar que malas decisiones técnicas pueden conllevar aplicaciones totalmente inestables incluso con las mejores tecnologías. No es viable _renderizar_ un _DOM_ con millones de elementos, el _navegador_ no podrá gestionarlo y, tarde o temprano, la aplicación no será usable.

Como developers, nuestra misión es encontrar el equilibrio entre rendimiento y experiencia, intentando priorizar siempre cómo el usuario sentirá la aplicación. No hay ningún caso lo suficientemente justificado para _renderizar_ en pantalla miles de datos.

**El espacio de visualización es limitado (_viewport_), al igual que deberían ser los datos que añadimos al DOM.**


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que problema puede causar hacer peticiones de millones de datos?

- **a)** Solo problemas de seguridad.
- **b)** Solo problemas visuales.
- **c)** Mejora el rendimiento.
- **d)** Interfaces lentas y posibles timeouts en la respuesta.

**2.** ¿Por que no es viable renderizar un DOM con millones de elementos?

- **a)** React lo prohibe.
- **b)** Solo afecta en dispositivos moviles.
- **c)** Solo afecta a navegadores antiguos.
- **d)** El navegador no podra gestionarlo y la aplicacion sera inusable.

**3.** ¿Que debe priorizar un developer al mostrar grandes cantidades de datos?

- **a)** Usar siempre componentes de clase.
- **b)** Solo la velocidad de carga.
- **c)** Evitar usar React.
- **d)** El equilibrio entre rendimiento y experiencia de usuario.

---

## ¿Cómo puedes abortar una petición fetch con `useEffect` en React?

Si quieres evitar que exista una _race condition_ entre una petición asíncrona y que el componente se desmonte, puedes usar la API de `AbortController` para abortar la petición cuando lo necesites:

```jsx
import { useEffect, useState } from 'react'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // creamos un controlador para abortar la petición
    const abortController = new AbortController()

    // pasamos el signal al fetch para que sepa que debe abortar
    fetchMovies({ signal: abortController.signal })
      .then(() => {
        setMovies(data.results)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })

    return () => {
      // al desmontar el componente, abortamos la petición
      // sólo funcionará si la petición sigue en curso
      abortController.abort()
    }
  })

  // ...
}

// Debemos pasarle el parámetro signal al `fetch`
// para que enlace la petición con el controlador
const fetchMovies = ({ signal }) => {
  return fetch('https://api.themoviedb.org/3/movie/popular', {
    signal, // <--- pasamos el signal
  }).then(response => response.json())
}
```

De esta forma evitamos que se produzca un error por parte de React de intentar actualizar el estado de un componente que ya no existe, además de evitar que se produzcan llamadas innecesarias al servidor.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que API se usa para abortar una peticion fetch en React?

- **a)** No se puede abortar una peticion.
- **b)** FetchCancel
- **c)** CancelToken
- **d)** AbortController

**2.** ¿Donde se llama a abort() para cancelar la peticion?

- **a)** No hay lugar especifico.
- **b)** En la funcion de limpieza (return) del useEffect.
- **c)** En el componente padre.
- **d)** En el then de la promesa.

**3.** ¿Que se pasa al fetch para enlazarlo con el AbortController?

- **a)** Un ID unico.
- **b)** La propiedad signal del controller.
- **c)** El controller completo.
- **d)** Un callback de cancelacion.

**4.** ¿Que error se lanza cuando una peticion es abortada?

- **a)** AbortError
- **b)** CancelError
- **c)** NetworkError
- **d)** RequestError

---

## ¿Qué solución/es implementarías para evitar problemas de rendimiento al trabajar con listas de miles/millones de datos?

##### Pagination

En lugar de recibir la lista en una sola llamada a la API (lo cual sería negativo tanto para el rendimiento como para el propio servidor y tiempo de respuesta de la API), podríamos implementar un sistema de paginación en el cual la API recibirá un _offset_ o _rango_ de datos deseados. En el FE nuestra responsabilidad es mostrar unos controles adecuados (interfaz de paginación) y gestionar las llamadas a petición de cambio de página para siempre limitar la cantidad de DOM renderizado evitando así una sobrecarga del _DOM_ y, por lo tanto, problemas de rendimiento.

##### Virtualization

Existe una técnica llamada _Virtualización_ que gestiona cuántos elementos de una lista mantenemos **_vivos_** en el _DOM_. El concepto se basa en solo montar los elementos que estén dentro del _viewport_ más un _buffer_ determinado (para evitar falta de datos al hacer scroll) y, en cambio, desmontar del _DOM_ todos aquellos elementos que estén fuera de la vista del usuario. De este modo podremos obtener lo mejor de los dos mundos, una experiencia integrada y un DOM liviano que evitará posibles errores de rendimiento. Con esta solución también podremos aprovechar que contamos con los datos en memoria para realizar búsquedas/filtrados sin necesidad de más llamadas al servidor.

Puedes consultar esta librería para aplicar Virtualización con React: [React Virtualized](https://github.com/bvaughn/react-virtualized).

Hay que tener en cuenta que cada caso de uso puede encontrar beneficios y/o perjuicios en ambos métodos, dependiendo de factores como capacidad de respuesta de la API, cantidad de datos, necesidad de filtros complejos, etc. Por ello es importante analizar cada caso con criterio.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que tecnica limita la cantidad de datos recibidos por llamada a la API?

- **a)** Virtualizacion.
- **b)** Memorizacion.
- **c)** Server-side rendering.
- **d)** Paginacion (Pagination).

**2.** ¿Que hace la tecnica de Virtualizacion?

- **a)** Elimina los datos duplicados.
- **b)** Carga todo en memoria.
- **c)** Solo monta los elementos visibles en el viewport mas un buffer.
- **d)** Crea una copia virtual de toda la lista.

**3.** ¿Que libreria de React se puede usar para Virtualizacion?

- **a)** react-dom-manager
- **b)** react-virtualized
- **c)** react-fast-list
- **d)** react-list-optimizer

**4.** ¿Cual es una ventaja de la Virtualizacion sobre la Paginacion?

- **a)** No tiene ninguna ventaja.
- **b)** No necesita JavaScript.
- **c)** Permite hacer busquedas/filtrados en memoria sin mas llamadas al servidor.
- **d)** Solo funciona con paginacion.

---

## ¿Qué es el hook `useDebugValue`?

`useDebugValue` es un hook pensado para mejorar la experiencia de depuración de _custom hooks_ en React DevTools.

Permite mostrar una etiqueta o valor descriptivo para entender rápidamente el estado interno de un hook mientras desarrollas.

```jsx
import { useDebugValue } from 'react'

function useCustomHook() {
  const value = 'custom value'
  useDebugValue(value)
  return value
}
```

En este ejemplo, React DevTools mostrará `custom value` como información adicional del hook.

Es especialmente útil en hooks reutilizables complejos (por ejemplo, hooks de formularios, sockets, estado remoto o sincronización).

Si quieres, también puedes formatear el valor para mostrar información más clara:

```jsx
useDebugValue(status, value => `Estado: ${value}`)
```

Aunque no suele tener impacto significativo, se usa principalmente con propósito de desarrollo y diagnóstico.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve useDebugValue?

- **a)** Mostrar errores en la consola.
- **b)** Crear breakpoints automaticos.
- **c)** Mostrar un valor personalizado en React DevTools para depurar.
- **d)** Medir el rendimiento del componente.

**2.** ¿Donde se muestra el valor de useDebugValue?

- **a)** En la pestana de React DevTools.
- **b)** En el DOM de la pagina.
- **c)** En un alert del navegador.
- **d)** En un archivo de log.

**3.** ¿Se recomienda usar useDebugValue en produccion?

- **a)** No, solo es util para depurar en desarrollo.
- **b)** Solo en componentes de clase.
- **c)** Solo con TypeScript.
- **d)** No existe ese hook.

---

## ¿Qué es el `Profiler` en React?

`Profiler` es una herramienta de React para medir el coste de renderizado de un subárbol de componentes.

Su objetivo es ayudarte a detectar cuellos de botella de rendimiento y validar si una optimización realmente mejora tiempos de render.

```jsx
import { Profiler } from 'react'

function App() {
  return (
    <Profiler
      id='App'
      onRender={(id, phase, actualDuration) => {
        console.log({ id, phase, actualDuration })
      }}
    >
      <Component />
    </Profiler>
  )
}
```

El componente `Profiler` recibe dos props clave:

- `id`: es un identificador único para el componente
- `onRender`: es una función que se ejecuta cada vez que el componente se renderiza

Con esos datos puedes saber, por ejemplo, qué componentes renderizan más de lo esperado o cuáles tardan demasiado en actualizarse.

Recomendación práctica: úsalo en desarrollo para auditar zonas críticas, y combina sus resultados con React DevTools Profiler para obtener una visión completa del rendimiento.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve el componente Profiler en React?

- **a)** Mostrar errores de la aplicacion.
- **b)** Crear tests automaticos.
- **c)** Medir el tiempo que tarda en renderizarse un componente y sus hijos.
- **d)** Validar props de componentes.

**2.** ¿Que parametros recibe el componente Profiler?

- **a)** Solo el nombre del componente.
- **b)** id (identificador unico) y onRender (funcion callback).
- **c)** Solo un objeto de configuracion.
- **d)** Una URL de reporte.

**3.** ¿Cuando se ejecuta la funcion onRender del Profiler?

- **a)** Solo cuando hay errores.
- **b)** Nunca se ejecuta automaticamente.
- **c)** Cada vez que el componente se renderiza.
- **d)** Solo al desmontar el componente.

---

## ¿Cómo puedes acceder al evento nativo del navegador en React?

En React, el manejador recibe un `SyntheticEvent`. Si necesitas acceder al evento nativo del navegador, puedes hacerlo con `event.nativeEvent`.

Esto es útil en casos avanzados donde necesitas una propiedad específica del evento nativo o integrarte con librerías que esperan ese objeto.

```jsx
function Button({ onClick }) {
  return <button onClick={e => onClick(e.nativeEvent)}>Haz clic aquí</button>
}
```

En la mayoría de escenarios no hace falta bajar al evento nativo: con la API de `SyntheticEvent` suele ser suficiente y más portable.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que objeto crea React en lugar del evento nativo del navegador?

- **a)** ReactEvent
- **b)** SyntheticEvent
- **c)** DOMEvent
- **d)** BrowserEvent

**2.** ¿Que atributo se usa para acceder al evento nativo del navegador?

- **a)** originalEvent
- **b)** rawEvent
- **c)** browserEvent
- **d)** nativeEvent

**3.** ¿Cual es la sintaxis correcta para acceder al evento nativo?

- **a)** e.target.nativeEvent
- **b)** React.nativeEvent(e)
- **c)** this.nativeEvent
- **d)** e.nativeEvent

---

## ¿Cómo puedes registrar un evento en la fase de captura en React?

En React, los eventos se manejan por defecto en fase de burbuja. Si necesitas capturarlos antes de que lleguen al objetivo o de que suban por el árbol, debes usar la versión con sufijo `Capture`.

React sigue la convención:

- Burbuja: `onClick`, `onChange`, `onFocus`, etc.
- Captura: `onClickCapture`, `onChangeCapture`, `onFocusCapture`, etc.

Ejemplo:

```jsx
function Button({ onClick }) {
  return <button onClickCapture={onClick}>Haz clic aquí</button>
}
```

Usar la fase de captura es útil cuando quieres interceptar eventos de forma temprana (por ejemplo, logging global, analítica o reglas de interacción antes de que se ejecute la lógica de componentes hijos).


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿En que fase se registran los eventos por defecto en React?

- **a)** En la fase de target.
- **b)** En la fase de captura.
- **c)** En la fase de burbuja (bubbling).
- **d)** En ambas fases.

**2.** ¿Como se registra un evento en la fase de captura?

- **a)** Usando un segundo parametro capture: true.
- **b)** No se puede en React.
- **c)** Anadiendo 'Capture' al nombre del evento (ej: onClickCapture).
- **d)** Usando useCapture hook.

**3.** ¿Cual es el nombre correcto para registrar un click en fase de captura?

- **a)** onClickCapture
- **b)** onClick.capture
- **c)** onCaptureClick
- **d)** onClick_capture

---

## ¿Cómo puedes mejorar el rendimiento del Server Side Rendering en React para evitar que bloquee el hilo principal?

Aunque puedes usar el método `renderToString` para renderizar el HTML en el servidor, este método es síncrono y bloquea el hilo principal. Para evitar que bloquee el hilo principal, debemos usar el método `renderToPipeableStream`:

```jsx
let didError = false
const stream = renderToPipeableStream(<App />, {
  onShellReady() {
    // El contenido por encima de los límites de Suspense ya están listos
    // Si hay un error antes de empezar a hacer stream, mostramos el error adecuado
    res.statusCode = didError ? 500 : 200
    res.setHeader('Content-type', 'text/html')
    stream.pipe(res)
  },
  onShellError(error) {
    // Si algo ha ido mal al renderizar el contenido anterior a los límites de Suspense, lo indicamos.
    res.statusCode = 500
    res.send(
      '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
    )
  },
  onAllReady() {
    // Si no quieres hacer streaming de los datos, puedes usar
    // esto en lugar de onShellReady. Esto se ejecuta cuando
    // todo el HTML está listo para ser enviado.
    // Perfecto para crawlers o generación de sitios estáticos
    // res.statusCode = didError ? 500 : 200
    // res.setHeader('Content-type', 'text/html')
    // stream.pipe(res)
  },
  onError(err) {
    didError = true
    console.error(err)
  },
})
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es el problema de usar renderToString para SSR?

- **a)** No soporta componentes funcionales.
- **b)** Es sincrono y bloquea el hilo principal.
- **c)** No funciona con React 18.
- **d)** Solo funciona en desarrollo.

**2.** ¿Que metodo se debe usar para evitar bloquear el hilo principal en SSR?

- **a)** renderToPipeableStream
- **b)** streamRender
- **c)** renderAsync
- **d)** renderToString

**3.** ¿Que callback de renderToPipeableStream se ejecuta cuando el contenido por encima de Suspense esta listo?

- **a)** onLoad
- **b)** onShellReady
- **c)** onRender
- **d)** onStart

---

## ¿Qué diferencia hay entre `renderToStaticNodeStream()` y `renderToPipeableStream()`?

`renderToStaticNodeStream()` devuelve un stream de nodos estáticos, esto significa que no añade atributos extras para el DOM que React usa internamente para poder lograr la hidratación del HTML en el cliente. Esto significa que no podrás hacer el HTML interactivo en el cliente, pero puede ser útil para páginas totalmente estáticas.

`renderToPipeableStream()` devuelve un stream de nodos que contienen atributos del DOM extra para que React pueda hidratar el HTML en el cliente. Esto significa que podrás hacer el HTML interactivo en el cliente pero puede ser más lento que `renderToStaticNodeStream()`.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que devuelve renderToStaticNodeStream?

- **a)** Nada, retorna undefined.
- **b)** Un objeto JSON.
- **c)** Un stream con atributos para hidratacion.
- **d)** Un stream de nodos estaticos sin atributos extra para hidratacion.

**2.** ¿Para que tipo de paginas es util renderToStaticNodeStream?

- **a)** Paginas con mucha interactividad.
- **b)** Para cualquier tipo de pagina.
- **c)** Paginas totalmente estaticas sin interactividad.
- **d)** Solo para aplicaciones SPA.

**3.** ¿Que permite hacer renderToPipeableStream que no hace renderToStaticNodeStream?

- **a)** Cachear el resultado.
- **b)** Hidratar el HTML en el cliente para hacerlo interactivo.
- **c)** Comprimir el HTML.
- **d)** Nada diferente.

---

## ¿Para qué sirve el hook `useDeferredValue`?

El hook `useDeferredValue` nos permite renderizar un valor con una prioridad baja. Esto es útil para renderizar un valor que no es crítico para la interacción del usuario.

```jsx
function App() {
  const [text, setText] = useState('¡Hola mundo!')
  const deferredText = useDeferredValue(text, { timeoutMs: 2000 })

  return (
    <div className='App'>
      {/* Seguimos pasando el texto actual como valor del input */}
      <input value={text} onChange={handleChange} />
      ...
      {/* Pero la lista de resultados se podría renderizar más tarde si fuera necesario */}
      <MySlowList text={deferredText} />
    </div>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve useDeferredValue?

- **a)** Retrasar la ejecucion de efectos.
- **b)** Validar valores de estado.
- **c)** Renderizar un valor con prioridad baja.
- **d)** Crear animaciones.

**2.** ¿Cuando es util usar useDeferredValue?

- **a)** Solo para valores de input.
- **b)** Siempre en todos los componentes.
- **c)** Nunca, esta deprecado.
- **d)** Para valores no criticos para la interaccion del usuario.

**3.** ¿Cual es un caso de uso tipico de useDeferredValue?

- **a)** Validar formularios.
- **b)** Guardar datos en localStorage.
- **c)** Crear rutas dinamicas.
- **d)** Actualizar una lista de resultados mientras el input sigue respondiendo.

---

## ¿Para qué sirve el método `renderToReadableStream()`?

Este método es similar a `renderToNodeStream`, pero está pensado para entornos que soporten Web Streams como `Deno`.

Un ejemplo de uso sería el siguiente:

```jsx
const controller = new AbortController()
const { signal } = controller

let didError = false

try {
  const stream = await renderToReadableStream(
    <html>
      <body>Success</body>
    </html>,
    {
      signal,
      onError(error) {
        didError = true
        console.error(error)
      },
    }
  )

  // Si quieres enviar todo el HTML en vez de hacer streaming, puedes usar esta línea
  // Es útil para crawlers o generación estática:
  // await stream.allReady

  return new Response(stream, {
    status: didError ? 500 : 200,
    headers: { 'Content-Type': 'text/html' },
  })
} catch (error) {
  return new Response(
    '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>',
    {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    }
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que entornos esta pensado renderToReadableStream?

- **a)** Solo para React Native.
- **b)** Entornos que soporten Web Streams como Deno.
- **c)** Para cualquier entorno JavaScript.
- **d)** Solo para Node.js.

**2.** ¿A que metodo es similar renderToReadableStream?

- **a)** renderToString
- **b)** No es similar a ningun otro.
- **c)** renderToNodeStream
- **d)** ReactDOM.render

**3.** ¿Que propiedad se puede usar para esperar todo el HTML antes de enviarlo?

- **a)** No se puede esperar.
- **b)** stream.finished
- **c)** stream.allReady
- **d)** stream.complete

---

## ¿Qué es la función `use` en React y para qué se utiliza?

La función `use` permite esperar promesas o leer recursos asíncronos directamente dentro de un componente sin tener que encadenar hooks adicionales. React suspende el componente hasta que la promesa se resuelva (o se rechace) y reanuda el render con el valor devuelto.

Se usa principalmente en componentes de servidor, pero también funciona en componentes cliente que reciben recursos que implementan el contrato de suspenso.

```jsx
import { use } from 'react'

async function fetchProduct(id) {
  const response = await fetch(`https://api.example.com/products/${id}`, {
    cache: 'no-store',
  })
  if (!response.ok) throw new Error('Producto no encontrado')
  return response.json()
}

export default function ProductPage({ params }) {
  const product = use(fetchProduct(params.id))

  return (
    <article>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </article>
  )
}
```

También puedes usar `use` con funciones como `cache` o `resources` que devuelven un objeto con un método `read()`, simplificando la lectura de datos sin boilerplate.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que permite hacer la funcion use en React?

- **a)** Crear refs.
- **b)** Manejar efectos secundarios.
- **c)** Validar props.
- **d)** Suspender la renderizacion hasta que una promesa se resuelva.

**2.** ¿En que tipo de componentes se puede usar 'use' directamente para esperar datos?

- **a)** En Server Components.
- **b)** No se puede usar en ningun componente.
- **c)** Solo en hooks personalizados.
- **d)** Solo en Client Components.

**3.** ¿Donde se puede usar 'use' en Client Components?

- **a)** En async event handlers o efectos.
- **b)** En cualquier parte del componente.
- **c)** No se puede usar en Client Components.
- **d)** Directamente en el render.

---

## ¿Para qué sirve el hook `useInsertionEffect`?

`useInsertionEffect` se ejecuta de forma sincrónica justo antes de que React inserte mutaciones en el DOM. Es perfecto para librerías de CSS-in-JS que necesitan inyectar estilos antes de que el navegador pinte los cambios, evitando parpadeos (`FOUC`).

No debe usarse para lógica que lea o escriba en el DOM: para eso siguen existiendo `useLayoutEffect` o `useEffect`. El objetivo es añadir estilos (o anotaciones) en el orden correcto.

```jsx
import { useInsertionEffect } from 'react'

function useCss(className, rules) {
  useInsertionEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.dataset.injected = className
    styleTag.append(rules)
    document.head.append(styleTag)

    return () => {
      styleTag.remove()
    }
  }, [className, rules])
}

export function Button({ children }) {
  useCss('btn', '.btn{padding:0.75rem 1rem;border-radius:9999px;}')
  return <button className='btn'>{children}</button>
}
```

Si no necesitas inyectar estilos dinámicamente, usa hojas de estilo tradicionales o CSS Modules; `useInsertionEffect` está pensado para casos muy concretos.

> Este hook está pensado para bibliotecas de CSS en JS y no para uso directo en aplicaciones. Si no estás creando una librería de estilos, probablemente no necesites usarlo.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que esta pensado useInsertionEffect?

- **a)** Para librerias de estilos (CSS-in-JS).
- **b)** Para manejar formularios.
- **c)** Para crear animaciones.
- **d)** Para insertar elementos en listas.

**2.** ¿Cuando se ejecuta useInsertionEffect?

- **a)** Nunca se ejecuta automaticamente.
- **b)** Al montar el componente unicamente.
- **c)** Solo al desmontar el componente.
- **d)** Antes de que el DOM se pinte, justo despues de calcular el JSX.

**3.** ¿Que problema evita useInsertionEffect al inyectar CSS?

- **a)** Errores de tipado.
- **b)** Conflictos de CSS.
- **c)** Errores de compilacion.
- **d)** Parpadeos o flash of unstyled content (FOUC).

---

## ¿Cómo se complementan `useMemo`, `useCallback`, `useTransition` y `useDeferredValue` para optimizar el rendimiento?

Cada una de estas APIs ataca un cuello de botella distinto; combinarlas ayuda a mantener la UI fluida sin caer en micro-optimizaciones innecesarias:

- `useMemo` memoriza valores derivados costosos (cálculos, filtros) mientras sus dependencias no cambien.
- `useCallback` memoriza funciones para evitar recrearlas en cada render y que componentes memoizados se vuelvan a renderizar sin necesidad.
- `useTransition` baja la prioridad de actualizaciones no urgentes (por ejemplo, recalcular una lista) para que la UI siga respondiendo.
- `useDeferredValue` retrasa la lectura de un valor concreto, útil cuando el input del usuario debe sentirse inmediato pero el resultado puede llegar con un pequeño retraso.

```jsx
function SearchProducts({ products }) {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()
    return products.filter(product =>
      product.name.toLowerCase().includes(normalized)
    )
  }, [products, deferredQuery])

  const handleChange = useCallback(event => {
    const value = event.target.value
    startTransition(() => setQuery(value))
  }, [])

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Filtrando...</p>}
      <ul>
        {filtered.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}
```

El patrón típico es: memoriza los datos (`useMemo`), memoriza callbacks para pasárselos a componentes memoizados (`useCallback`), marca como transición las actualizaciones no críticas y usa `useDeferredValue` cuando quieras separar la reactividad de la entrada de usuario del cálculo caro.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que hace useMemo en el contexto de optimizacion?

- **a)** Memoriza funciones.
- **b)** Baja la prioridad de actualizaciones.
- **c)** Retrasa la propagacion de valores.
- **d)** Memoriza valores costosos para evitar recomputarlos si sus dependencias no cambian.

**2.** ¿Que diferencia hay entre useCallback y useMemo?

- **a)** useCallback es para efectos.
- **b)** useCallback memoriza funciones, useMemo memoriza valores.
- **c)** Son identicos.
- **d)** useMemo solo funciona con primitivos.

**3.** ¿Para que sirve useTransition en optimizacion?

- **a)** Baja la prioridad de ciertas actualizaciones para mantener la UI fluida.
- **b)** Memoriza funciones.
- **c)** Crea animaciones de transicion.
- **d)** Valida datos de entrada.

**4.** ¿Que hace useDeferredValue?

- **a)** Retrasa la propagacion de un valor a la parte cara del render.
- **b)** No tiene efecto en optimizacion.
- **c)** Memoriza funciones.
- **d)** Memoriza valores.

---

## ¿Qué es Concurrent React y qué problemas resuelve?

**Concurrent React** (desde React 18, con `createRoot`) permite que el renderizado sea **interruptible y priorizable**. React puede empezar a renderizar una actualización, pausarla si llega algo más urgente (un clic, escritura) y reanudar o descartar el trabajo.

Problemas que aborda:

- UIs que se “congelan” al filtrar o renderizar listas grandes.
- Actualizaciones de baja prioridad que bloquean la interacción.
- Mejor integración con streaming SSR y `Suspense`.

APIs relacionadas: `useTransition`, `useDeferredValue`, `Suspense`, `startTransition`. No es un modo que actives con un flag aparte en apps nuevas: al usar `createRoot` ya entras en el modelo concurrente.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué permite Concurrent React?

- **a)** Usar solo class components.
- **b)** Compilar a WebAssembly de forma nativa siempre.
- **c)** Ejecutar React sin JavaScript en el cliente.
- **d)** Renderizado interruptible y priorizable para no bloquear la interacción.

**2.** ¿Qué API de entrada habilita el modelo concurrente en el cliente?

- **a)** eval del bundle.
- **b)** window.concurrent = true.
- **c)** createRoot (en lugar de ReactDOM.render legacy).
- **d)** Solo ReactDOM.render.

**3.** ¿Qué APIs se relacionan con concurrent features?

- **a)** useTransition, useDeferredValue, Suspense y startTransition.
- **b)** Solo React.createClass.
- **c)** Solo componentDidMount.
- **d)** Solo PropTypes.

---

## ¿Qué es React Fiber?

**Fiber** es la arquitectura de reconciliación de React (desde React 16). Representa cada unidad de trabajo del árbol como una estructura de datos (un “fiber”) que React puede procesar de forma **incremental**.

Aportó:

- Poder **partir** el trabajo de render en trozos y no bloquear el hilo principal tanto tiempo.
- Prioridades y, más adelante, las bases del concurrent rendering.
- Mejor manejo de errores con Error Boundaries y del ciclo de vida.

Como desarrollador de aplicación no usas Fiber directamente, pero explica por qué React puede pausar trabajo, por qué el orden de efectos importa y por qué algunas optimizaciones del runtime son posibles.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es React Fiber?

- **a)** La arquitectura de reconciliación de React desde la versión 16.
- **b)** Un preprocesador de CSS.
- **c)** Un bundler como Vite.
- **d)** Un sustituto de npm.

**2.** ¿Qué permitió Fiber respecto al render?

- **a)** Dejar de usar JavaScript.
- **b)** Desactivar el Virtual DOM para siempre.
- **c)** Trabajo incremental, bases para concurrent rendering y mejor manejo de prioridades.
- **d)** Sustituir HTML por Markdown.

**3.** Como desarrollador de aplicación, ¿usas Fiber directamente?

- **a)** Sí; importas Fiber de "react-fiber" en cada archivo.
- **b)** Sí; es un hook useFiber obligatorio.
- **c)** Sí; es un componente <Fiber />.
- **d)** No; es un detalle del runtime, aunque explica capacidades de React.

---

## ¿Qué es el React Compiler y qué ventajas aporta?

El **React Compiler** (antes conocido en el ecosistema como React Forget) es un compilador que analiza tu código y **memoiza automáticamente** componentes y valores cuando es seguro, reduciendo la necesidad de escribir a mano `useMemo`, `useCallback` o `React.memo` en muchos casos.

Ventajas:

- Menos boilerplate de optimización manual.
- Menos riesgo de deps incorrectas en hooks de memoización.
- Rendimiento más consistente si el compilador puede demostrar pureza.

Limitaciones:

- No sustituye un buen diseño de estado y de límites de componentes.
- Aún hay que escribir componentes **puros** (sin efectos colaterales en el render).
- No elimina la necesidad de entender re-renders, keys o concurrent features.

Es una pieza moderna del ecosistema React: conviene conocerla en entrevistas senior aunque el proyecto aún no la use.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué hace el React Compiler?

- **a)** Genera bases de datos SQL.
- **b)** Sustituye al navegador.
- **c)** Analiza el código y memoiza automáticamente cuando es seguro.
- **d)** Elimina la necesidad de JSX sin alternativa.

**2.** ¿Qué boilerplate puede reducir el compilador?

- **a)** La necesidad de keys en listas.
- **b)** Muchos useMemo, useCallback y React.memo manuales.
- **c)** Todos los useEffect del proyecto sin excepción.
- **d)** TypeScript en general.

**3.** ¿El compilador elimina la necesidad de entender re-renders?

- **a)** Sí; Context deja de existir.
- **b)** Sí; ya no hace falta saber nada de rendimiento.
- **c)** No; sigue siendo importante un buen diseño de estado y componentes puros.
- **d)** Sí; solo sirve para class components.

---

## ¿Cómo puedo hacer testing de un componente?

Para hacer testing de un componente, la opción habitual es **React Testing Library** (`@testing-library/react`). Prioriza probar lo que ve y hace el usuario, no los detalles internos del componente.

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

test('Counter incrementa al hacer clic', async () => {
  const user = userEvent.setup()
  render(<Counter />)

  expect(screen.getByText('Count: 0')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Increment' }))
  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})
```

Buenas prácticas: consulta por rol/texto (`getByRole`, `getByLabelText`), evita acoplarte a classNames internos y prueba comportamientos, no implementación.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué librería se usa habitualmente para testear componentes React?

- **a)** Express test runner.
- **b)** jQuery unit.
- **c)** Lodash test.
- **d)** React Testing Library (@testing-library/react).

**2.** ¿Qué prioriza Testing Library?

- **a)** Prohibir el uso de roles ARIA en tests.
- **b)** Acoplarse a classNames generados por CSS-in-JS.
- **c)** Probar lo que el usuario ve y hace, no detalles de implementación.
- **d)** Probar solo los nombres de variables internas.

**3.** ¿Qué consulta es preferible para un botón?

- **a)** getByRole("button", { name: "..." }).
- **b)** document.getElementsByTagName("div")[7].
- **c)** Leer el código fuente del componente en el test.
- **d)** querySelector(".css-xyz-random").

---

## ¿Cómo puedo hacer testing de un hook?

Puedes probar un hook con `renderHook` de `@testing-library/react` (ya no hace falta el paquete antiguo `@testing-library/react-hooks` en versiones recientes).

```jsx
import { renderHook, act } from '@testing-library/react'

function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  return { count, increment }
}

test('useCounter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
```

Si el hook depende de Context o de un router, envuélvelo con un `wrapper` en las opciones de `renderHook`. Cuando el hook solo existe para un componente, a menudo es más simple testear el componente que lo usa.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cómo se suele testear un hook aislado?

- **a)** Con document.write del resultado.
- **b)** Con renderHook de @testing-library/react.
- **c)** Con alert() del valor.
- **d)** Importándolo en el navegador sin assert.

**2.** ¿Cómo envuelves actualizaciones de estado en el test del hook?

- **a)** Con ReactDOM.render legacy obligatorio.
- **b)** Con window.forceUpdate().
- **c)** Con act(() => { ... }).
- **d)** Con setTimeout de 10 segundos siempre.

**3.** Si el hook depende de Context, ¿qué haces?

- **a)** No se puede testear.
- **b)** Mockear process.exit.
- **c)** Usar solo class components en tests.
- **d)** Pasar un wrapper con el Provider en las opciones de renderHook.

---

## ¿Qué es Flux?

_Flux_ es un patrón de arquitectura de aplicaciones de **flujo de datos unidireccional**. Los datos van en una sola dirección: acciones → dispatcher → stores → vistas.

No es específico de React. Los stores guardan el estado y emiten eventos al cambiar; las vistas se suscriben para actualizarse.

Facebook lo creó para gestionar UIs complejas. **Redux** y otras librerías de estado se inspiraron en este patrón (acción → reducer/store → UI).


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es Flux?

- **a)** Un hook de React.
- **b)** Un patron de arquitectura de aplicaciones basado en flujo unidireccional de datos.
- **c)** Un empaquetador de aplicaciones.
- **d)** Un sistema de testing.

**2.** ¿En que direccion fluyen los datos en Flux?

- **a)** Bidireccional.
- **b)** En multiples direcciones.
- **c)** En una sola direccion: de las vistas a los stores.
- **d)** Solo del servidor al cliente.

**3.** ¿Que libreria se baso en el patron Flux?

- **a)** React Router
- **b)** Redux
- **c)** Axios
- **d)** jQuery

---


{pagebreak}

## Solucionario

*Comprueba tus respuestas cuando hayas terminado las preguntas del capítulo.*

### ¿Es React una biblioteca o un framework? ¿Por qué?

1. **b)** Como una biblioteca.
2. **b)** Porque necesitas otras bibliotecas para crear una aplicacion completa.
3. **c)** Sistema de enrutado de aplicaciones.
4. **a)** Next.js, porque incluye React, enrutado, SSR, etc.

### ¿Para qué sirve el hook `useImperativeHandle`?

1. **d)** Definir que propiedades y metodos son accesibles desde el componente padre.
2. **a)** Dos: una referencia y una funcion que devuelve un objeto.
3. **b)** useRef para crear la referencia interna.

### ¿Para qué sirve el método `cloneElement` de React?

1. **c)** Clonar un elemento React y anadir o modificar sus props.
2. **c)** Las props nuevas reemplazan a las originales.
3. **c)** Para modificar un elemento que viene del padre sin posibilidad de re-crearlo.

### ¿Qué son los portales en React?

1. **b)** Renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.
2. **c)** createPortal de react-dom.
3. **a)** Dos: el componente a renderizar y el nodo del DOM destino.
4. **b)** Modales.

### ¿Por qué `StrictMode` renderiza dos veces la aplicación?

1. **a)** Para encontrar efectos que necesitan limpieza y exponer problemas de race conditions.
2. **d)** El estado y el DOM.
3. **a)** Race conditions y efectos sin limpieza.

### ¿Qué problemas crees que pueden aparecer en una aplicación al querer visualizar listas de miles/millones de datos?

1. **d)** Interfaces lentas y posibles timeouts en la respuesta.
2. **d)** El navegador no podra gestionarlo y la aplicacion sera inusable.
3. **d)** El equilibrio entre rendimiento y experiencia de usuario.

### ¿Cómo puedes abortar una petición fetch con `useEffect` en React?

1. **d)** AbortController
2. **b)** En la funcion de limpieza (return) del useEffect.
3. **b)** La propiedad signal del controller.
4. **a)** AbortError

### ¿Qué solución/es implementarías para evitar problemas de rendimiento al trabajar con listas de miles/millones de datos?

1. **d)** Paginacion (Pagination).
2. **c)** Solo monta los elementos visibles en el viewport mas un buffer.
3. **b)** react-virtualized
4. **c)** Permite hacer busquedas/filtrados en memoria sin mas llamadas al servidor.

### ¿Qué es el hook `useDebugValue`?

1. **c)** Mostrar un valor personalizado en React DevTools para depurar.
2. **a)** En la pestana de React DevTools.
3. **a)** No, solo es util para depurar en desarrollo.

### ¿Qué es el `Profiler` en React?

1. **c)** Medir el tiempo que tarda en renderizarse un componente y sus hijos.
2. **b)** id (identificador unico) y onRender (funcion callback).
3. **c)** Cada vez que el componente se renderiza.

### ¿Cómo puedes acceder al evento nativo del navegador en React?

1. **b)** SyntheticEvent
2. **d)** nativeEvent
3. **d)** e.nativeEvent

### ¿Cómo puedes registrar un evento en la fase de captura en React?

1. **c)** En la fase de burbuja (bubbling).
2. **c)** Anadiendo 'Capture' al nombre del evento (ej: onClickCapture).
3. **a)** onClickCapture

### ¿Cómo puedes mejorar el rendimiento del Server Side Rendering en React para evitar que bloquee el hilo principal?

1. **b)** Es sincrono y bloquea el hilo principal.
2. **a)** renderToPipeableStream
3. **b)** onShellReady

### ¿Qué diferencia hay entre `renderToStaticNodeStream()` y `renderToPipeableStream()`?

1. **d)** Un stream de nodos estaticos sin atributos extra para hidratacion.
2. **c)** Paginas totalmente estaticas sin interactividad.
3. **b)** Hidratar el HTML en el cliente para hacerlo interactivo.

### ¿Para qué sirve el hook `useDeferredValue`?

1. **c)** Renderizar un valor con prioridad baja.
2. **d)** Para valores no criticos para la interaccion del usuario.
3. **d)** Actualizar una lista de resultados mientras el input sigue respondiendo.

### ¿Para qué sirve el método `renderToReadableStream()`?

1. **b)** Entornos que soporten Web Streams como Deno.
2. **c)** renderToNodeStream
3. **c)** stream.allReady

### ¿Qué es la función `use` en React y para qué se utiliza?

1. **d)** Suspender la renderizacion hasta que una promesa se resuelva.
2. **a)** En Server Components.
3. **a)** En async event handlers o efectos.

### ¿Para qué sirve el hook `useInsertionEffect`?

1. **a)** Para librerias de estilos (CSS-in-JS).
2. **d)** Antes de que el DOM se pinte, justo despues de calcular el JSX.
3. **d)** Parpadeos o flash of unstyled content (FOUC).

### ¿Cómo se complementan `useMemo`, `useCallback`, `useTransition` y `useDeferredValue` para optimizar el rendimiento?

1. **d)** Memoriza valores costosos para evitar recomputarlos si sus dependencias no cambian.
2. **b)** useCallback memoriza funciones, useMemo memoriza valores.
3. **a)** Baja la prioridad de ciertas actualizaciones para mantener la UI fluida.
4. **a)** Retrasa la propagacion de un valor a la parte cara del render.

### ¿Qué es Concurrent React y qué problemas resuelve?

1. **d)** Renderizado interruptible y priorizable para no bloquear la interacción.
2. **c)** createRoot (en lugar de ReactDOM.render legacy).
3. **a)** useTransition, useDeferredValue, Suspense y startTransition.

### ¿Qué es React Fiber?

1. **a)** La arquitectura de reconciliación de React desde la versión 16.
2. **c)** Trabajo incremental, bases para concurrent rendering y mejor manejo de prioridades.
3. **d)** No; es un detalle del runtime, aunque explica capacidades de React.

### ¿Qué es el React Compiler y qué ventajas aporta?

1. **c)** Analiza el código y memoiza automáticamente cuando es seguro.
2. **b)** Muchos useMemo, useCallback y React.memo manuales.
3. **c)** No; sigue siendo importante un buen diseño de estado y componentes puros.

### ¿Cómo puedo hacer testing de un componente?

1. **d)** React Testing Library (@testing-library/react).
2. **c)** Probar lo que el usuario ve y hace, no detalles de implementación.
3. **a)** getByRole("button", { name: "..." }).

### ¿Cómo puedo hacer testing de un hook?

1. **b)** Con renderHook de @testing-library/react.
2. **c)** Con act(() => { ... }).
3. **d)** Pasar un wrapper con el Provider en las opciones de renderHook.

### ¿Qué es Flux?

1. **b)** Un patron de arquitectura de aplicaciones basado en flujo unidireccional de datos.
2. **c)** En una sola direccion: de las vistas a los stores.
3. **b)** Redux
