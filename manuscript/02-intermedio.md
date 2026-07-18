# Intermedio

Preguntas de nivel **Intermedio**. Tras cada explicación puedes encontrar un bloque *Pon a prueba*; las respuestas están al final del capítulo.

---

## ¿Cómo crear un hook personalizado (_custom hook_)?

Un hook personalizado es una función que empieza con la palabra `use` y que puede utilizar otros hooks. Son ideales para reutilizar lógica en diferentes componentes. Por ejemplo, podemos crear un hook personalizado para extraer la gestión del estado de un contador:

```javascript
// ./hooks/useCounter.js

export function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}
```

Para usarlo en un componente:

```javascript
import { useCounter } from './hooks/useCounter.js'

function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es el requisito del nombre para crear un hook personalizado?

- **a)** El nombre debe empezar con 'hook'.
- **b)** El nombre debe terminar con 'Hook'.
- **c)** El nombre debe contener 'custom'.
- **d)** El nombre debe empezar con la palabra 'use'.

**2.** ¿Para que son ideales los custom hooks?

- **a)** Para crear animaciones CSS.
- **b)** Para crear estilos CSS reutilizables.
- **c)** Para definir rutas de la aplicacion.
- **d)** Para reutilizar logica en diferentes componentes.

**3.** ¿Que puede utilizar un custom hook internamente?

- **a)** Otros hooks como useState, useEffect, etc.
- **b)** No puede usar ningun otro hook.
- **c)** Solo metodos de clase.
- **d)** Solo puede usar useRef.

**4.** ¿Que puede devolver un custom hook?

- **a)** Cualquier valor: objetos, arrays, funciones, valores primitivos, etc.
- **b)** Solo puede devolver una funcion.
- **c)** Solo puede devolver JSX.
- **d)** Solo puede devolver un booleano.

---

## ¿Cuántos `useEffect` puede tener un componente?

Un componente puede tener tantos `useEffect` como necesite. No existe un límite práctico impuesto por React.

De hecho, en la mayoría de casos es preferible tener varios `useEffect` pequeños y bien enfocados antes que uno solo con demasiadas responsabilidades.

Buena práctica habitual:

- Un `useEffect` para suscribirse a eventos del navegador.
- Otro para sincronizar datos con una API.
- Otro para persistir estado en `localStorage`.

Separar efectos por responsabilidad mejora la legibilidad, reduce errores y hace más sencillo mantener el código.

Además, cada efecto tiene su propio ciclo de vida: React ejecuta o limpia cada uno según sus dependencias. Esto permite un control mucho más fino que concentrar toda la lógica en un único bloque.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cuantos useEffect puede tener un componente?

- **a)** Solo dos, uno para montar y otro para desmontar.
- **b)** Tantos como queramos, no hay limite.
- **c)** Maximo tres useEffect.
- **d)** Solo uno por componente.

**2.** ¿Cuando se ejecuta cada useEffect de un componente?

- **a)** Se ejecutan en paralelo en hilos diferentes.
- **b)** Cuando se renderiza el componente o cuando cambian sus dependencias.
- **c)** Solo el primero se ejecuta, los demas se ignoran.
- **d)** Solo cuando el usuario interactua con el componente.

---

## ¿Cómo podemos ejecutar código cuando el componente se desmonta del árbol?

Podemos ejecutar código cuando el componente se desmonta usando el hook `useEffect` y dentro devolver una función con el código que queremos ejecutar. En este caso, la función que se pasa como primer parámetro del `useEffect` se ejecutará cuando el componente se monte, y la función que es retornada se ejecutará cuando se desmonte.

```javascript
import { useEffect } from 'react'

function Component() {
  useEffect(() => {
    console.log('El componente se ha montado')

    return () => {
      console.log('El componente se ha desmontado')
    }
  }, [])

  return <h1>Ejemplo</h1>
}
```

Esto es muy útil para limpiar recursos que se hayan creado en el componente, como por ejemplo, eventos del navegador o para cancelar peticiones a APIs.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se ejecuta codigo cuando un componente se desmonta?

- **a)** Pasando un tercer parametro a useEffect.
- **b)** No es posible en componentes funcionales.
- **c)** Retornando una funcion dentro del useEffect.
- **d)** Usando el evento onUnmount en el JSX.

**2.** ¿Para que es util la funcion de limpieza de useEffect?

- **a)** Para renderizar componentes adicionales.
- **b)** No tiene ninguna utilidad practica.
- **c)** Para limpiar recursos como eventos del navegador o cancelar peticiones a APIs.
- **d)** Para actualizar el estado antes de desmontar.

**3.** ¿Cuando se ejecuta la funcion retornada por useEffect?

- **a)** Nunca se ejecuta automaticamente.
- **b)** Cuando el componente se desmonta del arbol de componentes.
- **c)** Solo cuando hay un error en el componente.
- **d)** Solo cuando el usuario cierra el navegador.

---

## Cómo puedes cancelar una petición a una API en `useEffect` correctamente

Cuando hacemos una petición a una API, podemos cancelarla para evitar que se ejecute cuando el componente se desmonte usando `AbortController` como hacemos en este ejemplo:

```javascript
useEffect(() => {
  // Creamos el controlador para abortar la petición
  const controller = new AbortController()
  // Recuperamos la señal del controlador
  const { signal } = controller
  // Hacemos la petición a la API y le pasamos como options la señal
  fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(res => res.json())
    .then(json => setMessage(json.title))
    .catch(error => {
      // Si hemos cancelado la petición, la promesa se rechaza
      // con un error de tipo AbortError
      if (error.name !== 'AbortError') {
        console.error(error.message)
      }
    })

  // Si se desmonta el componente, abortamos la petición
  return () => controller.abort()
}, [])
```

Esto también funciona con `axios`:

```javascript
useEffect(() => {
  // Creamos el controlador para abortar la petición
  const controller = new AbortController()
  // Recuperamos la señal del controlador
  const { signal } = controller
  // Hacemos la petición a la API y le pasamos como options la señal
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(res => setMessage(res.data.title))
    .catch(error => {
      // Si hemos cancelado la petición, la promesa se rechaza
      // con un error de tipo AbortError
      if (error.name !== 'AbortError') {
        console.error(error.message)
      }
    })

  // Si se desmonta el componente, abortamos la petición
  return () => controller.abort()
}, [])
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que API nativa de JavaScript se usa para cancelar peticiones fetch en useEffect?

- **a)** AbortController
- **b)** No se puede cancelar una peticion fetch
- **c)** StopRequest
- **d)** CancelToken

**2.** ¿Donde se debe llamar al metodo abort() para cancelar la peticion?

- **a)** Dentro del bloque catch del fetch.
- **b)** En la funcion de limpieza (cleanup) del useEffect.
- **c)** No se necesita llamar abort(), se cancela automaticamente.
- **d)** En el array de dependencias.

**3.** ¿Que tipo de error se genera cuando se cancela una peticion con AbortController?

- **a)** AbortError
- **b)** TimeoutError
- **c)** CancelError
- **d)** FetchError

**4.** ¿Que propiedad del AbortController se pasa como opcion al fetch?

- **a)** abort
- **b)** signal
- **c)** token
- **d)** cancel

---

## ¿Cuáles son las reglas de los hooks en React?

Los hooks en React tienen dos reglas fundamentales, y respetarlas es clave para evitar comportamientos impredecibles:

- Solo pueden llamarse en componentes funcionales de React o en _custom hooks_.
- Deben llamarse siempre en el nivel superior del componente o del hook, nunca dentro de condicionales, bucles o funciones internas.

¿Por qué existe esta restricción? Porque React identifica cada hook por su orden de ejecución. Si ese orden cambia entre renderizados, React puede mezclar estados y efectos, generando bugs difíciles de depurar.

Ejemplo incorrecto:

```javascript
function Component({ isOpen }) {
  if (isOpen) {
    useEffect(() => {
      console.log('abierto')
    }, [])
  }

  return <div>Hola</div>
}
```

Ejemplo correcto:

```javascript
function Component({ isOpen }) {
  useEffect(() => {
    if (isOpen) {
      console.log('abierto')
    }
  }, [isOpen])

  return <div>Hola</div>
}
```

Para ayudarte a cumplir estas reglas de forma consistente, es muy recomendable usar `eslint-plugin-react-hooks`, que detecta automáticamente violaciones comunes.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Donde se pueden usar los hooks en React?

- **a)** Solo dentro de callbacks de eventos.
- **b)** Solo en componentes funcionales o custom hooks.
- **c)** En cualquier parte del codigo.
- **d)** En archivos de configuracion.

**2.** ¿En que nivel de un componente se deben llamar los hooks?

- **a)** Dentro de un bloque if para optimizar rendimiento.
- **b)** En cualquier nivel, no hay restricciones.
- **c)** Solo dentro del return del componente.
- **d)** Solo en el nivel superior, no dentro de bucles, condicionales o funciones anidadas.

**3.** ¿Por que los hooks no pueden llamarse dentro de condicionales?

- **a)** Solo aplica en modo de desarrollo.
- **b)** Porque los condicionales no existen en JSX.
- **c)** Porque React necesita que los hooks se llamen en el mismo orden en cada render.
- **d)** Porque Babel no puede transpilar condicionales con hooks.

**4.** ¿Cuantas reglas fundamentales tienen los hooks?

- **a)** No hay reglas definidas.
- **b)** Cinco reglas.
- **c)** Dos reglas fundamentales.
- **d)** Tres reglas.

---

## ¿Qué diferencia hay entre `useEffect` y `useLayoutEffect`?

Aunque ambos son muy parecidos, tienen una pequeña diferencia en el momento en el que se ejecutan.

`useLayoutEffect` se ejecuta de forma síncrona inmediatamente después que React haya actualizado completamente el DOM tras el renderizado. Puede ser útil si necesitas recuperar un elemento del DOM y acceder a sus dimensiones o posición en pantalla.

`useEffect` se ejecuta de forma asíncrona tras el renderizado, pero no asegura que el DOM se haya actualizado. Es decir, si necesitas recuperar un elemento del DOM y acceder a sus dimensiones o posición en pantalla, no podrás hacerlo con `useEffect` porque no tienes la garantía de que el DOM se haya actualizado.

Normalmente, el 99% de las veces, vas a querer utilizar `useEffect` y, además, tiene mejor rendimiento, ya que no bloquea el renderizado.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cuando se ejecuta useLayoutEffect?

- **a)** De forma asincrona despues del renderizado.
- **b)** Solo en el servidor.
- **c)** De forma sincrona inmediatamente despues de que React actualice el DOM.
- **d)** En paralelo con el renderizado.

**2.** ¿Cual de los dos hooks es recomendable usar la mayoria de las veces?

- **a)** Ninguno, es mejor usar componentDidMount.
- **b)** useEffect, porque tiene mejor rendimiento al no bloquear el renderizado.
- **c)** Ambos tienen el mismo rendimiento.
- **d)** useLayoutEffect siempre es mejor.

**3.** ¿Para que caso es util usar useLayoutEffect?

- **a)** Para actualizar el estado del componente.
- **b)** Para suscribirse a eventos del navegador.
- **c)** Para crear custom hooks.
- **d)** Cuando necesitas acceder a las dimensiones o posicion de un elemento del DOM.

**4.** ¿Cual es la principal diferencia entre useEffect y useLayoutEffect?

- **a)** useEffect solo funciona en el servidor.
- **b)** useLayoutEffect no acepta dependencias.
- **c)** El momento en que se ejecutan: useLayoutEffect es sincrono y useEffect es asincrono.
- **d)** useEffect no puede tener funcion de limpieza.

---

## ¿Qué son mejores los componentes de clase o los componentes funcionales?

Hoy en día, para proyectos nuevos, la recomendación general es usar componentes funcionales con hooks.

Comparativa rápida:

- **Componentes funcionales**: menos boilerplate, mejor composición de lógica con hooks y patrón dominante en el ecosistema actual.
- **Componentes de clase**: siguen siendo válidos, pero se usan menos en código nuevo y suelen mantenerse sobre todo en bases de código heredadas.

Es importante matizar que en componentes funcionales sí puedes modelar ciclo de vida, no solo con `useEffect`, también con hooks como `useLayoutEffect` y patrones de composición entre hooks.

En entrevistas suele valorarse que conozcas ambos enfoques, pero que puedas justificar por qué el estilo funcional es hoy la opción principal en React moderno.

**Referencias:**

- [Tweet de midudev donde muestra que los componentes funcionales se transpilan mejor que los de clases.](https://twitter.com/midudev/status/1065516163856310272)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Desde que version de React los componentes funcionales pueden hacer casi todo lo que los de clase?

- **a)** Aun no es posible.
- **b)** Siempre fue posible desde la primera version.
- **c)** React 17.0.0.
- **d)** React 16.8.0, con la introduccion de los hooks.

**2.** ¿Cual es una ventaja importante de los componentes funcionales sobre los de clase?

- **a)** Permiten usar componentDidMount.
- **b)** No hay ventajas, son equivalentes.
- **c)** Son mas sencillos de leer y escribir, y pueden tener mejor rendimiento.
- **d)** Pueden usar this para acceder al estado.

**3.** ¿En que tipo de componentes se pueden usar los hooks?

- **a)** En ambos tipos de componentes.
- **b)** Solo en componentes funcionales.
- **c)** Solo en componentes de alto orden.
- **d)** Solo en componentes de clase.

**4.** ¿Que ventaja ofrecen los custom hooks en componentes funcionales?

- **a)** Eliminan la necesidad de props.
- **b)** Hacen el codigo mas largo.
- **c)** Permiten reutilizar logica entre componentes.
- **d)** No tienen ninguna ventaja especial.

---

## ¿Cómo mantener los componentes puros y qué ventajas tiene?

Un componente puro, conceptualmente, es aquel que para las mismas entradas (props, estado y contexto) produce la misma salida visual y no introduce efectos secundarios durante el render.

Eso no significa "sin estado" obligatoriamente. Un componente puede tener estado y seguir siendo predecible si respeta estas reglas de pureza en el render.

Ventajas:

- Comportamiento más predecible.
- Mayor facilidad para testear.
- Menos bugs de sincronización.
- Mejor oportunidad de optimización con `React.memo` cuando aplica.

Ejemplo base (render puro):

```javascript
function Button({ text }) {
  return <button>{text}</button>
}
```

Y si ese botón se renderiza muchas veces con las mismas props, puedes evaluar memoización:

```javascript
import { memo } from 'react'

const Button = memo(function Button({ text }) {
  return <button>{text}</button>
})
```

`React.memo` no "hace puro" al componente; solo evita renders cuando las props no cambian (comparación superficial).


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que caracteriza a un componente puro en React?

- **a)** Hace peticiones a APIs.
- **b)** Usa useState y useEffect.
- **c)** Modifica el DOM directamente.
- **d)** No tiene estado y no tiene efectos secundarios.

**2.** ¿Cuales son las ventajas de los componentes puros?

- **a)** Son mas faciles de testear, mantener y entender.
- **b)** Permiten hacer llamadas a APIs directamente.
- **c)** No tienen ventajas, es solo un patron antiguo.
- **d)** Son mas complejos pero mas potentes.

**3.** ¿Cual es la unica responsabilidad de un componente puro?

- **a)** Conectar con la base de datos.
- **b)** Manejar eventos del usuario.
- **c)** Renderizar la interfaz.
- **d)** Gestionar el estado de la aplicacion.

---

## ¿Qué es la hidratación (hydration) en React?

Cuando renderizamos nuestra aplicación en el servidor, React genera un HTML estático. Este HTML estático es simplemente un string que contiene el HTML que se va a mostrar en la página.

Cuando el navegador recibe el HTML estático, lo renderiza en la página. Sin embargo, este HTML estático no tiene interactividad. No tiene eventos, no tiene lógica, no tiene estado, etc. Podríamos decir que _no tiene vida_.

Para hacer que este HTML estático pueda ser interactivo, React necesita que el HTML estático se convierta en un árbol de componentes de React. Esto se llama **hidratación**.

De esta forma, en el cliente, React reutiliza este HTML estático y se dedica a adjuntar los eventos a los elementos, ejecutar los efectos que tengamos en los componentes y conciliar el estado de los componentes.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es la hidratacion (hydration) en React?

- **a)** El proceso de cargar datos desde una API.
- **b)** El proceso de renderizar componentes en el servidor.
- **c)** El proceso de compilar JSX a JavaScript.
- **d)** El proceso de convertir HTML estatico del servidor en un arbol de componentes interactivo en el cliente.

**2.** ¿Que caracteristica tiene el HTML estatico generado en el servidor antes de la hidratacion?

- **a)** Tiene toda la funcionalidad de React.
- **b)** Puede manejar el estado de la aplicacion.
- **c)** No tiene interactividad, ni eventos, ni logica, ni estado.
- **d)** Es codigo JavaScript ejecutable.

**3.** ¿Que hace React durante el proceso de hidratacion en el cliente?

- **a)** Solo anade estilos CSS.
- **b)** Reutiliza el HTML, adjunta eventos, ejecuta efectos y concilia el estado.
- **c)** Solo valida las props de los componentes.
- **d)** Borra todo el HTML y lo vuelve a crear.

---

## ¿Qué es el Server Side Rendering y qué ventajas tiene?

El _Server Side Rendering_ (SSR) es una estrategia de renderizado donde el servidor genera el HTML inicial de la página y lo envía ya renderizado al navegador.

Después, en el cliente, React hidrata ese HTML para añadir interactividad.

Ventajas principales:

- Mejor percepción de velocidad inicial, porque el usuario ve contenido antes.
- Mejor indexación SEO en muchos escenarios, al entregar HTML útil desde el primer momento.
- Mejor rendimiento en dispositivos lentos al reducir trabajo inicial del cliente.

Eso sí, SSR no es una solución universal: aumenta la carga del servidor y requiere diseñar bien la estrategia de caché y de datos para mantener tiempos de respuesta estables.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el Server Side Rendering (SSR)?

- **a)** Una tecnica que renderiza el HTML en el servidor y lo envia al cliente.
- **b)** Renderizar todo el codigo en el navegador.
- **c)** Un tipo de base de datos.
- **d)** Un patron para manejar estado global.

**2.** ¿Cuales son las ventajas principales del SSR?

- **a)** Solo sirve para aplicaciones moviles.
- **b)** Elimina la necesidad de un servidor.
- **c)** Mejora la experiencia de usuario y mejora el SEO.
- **d)** Reduce el tamano de los archivos JavaScript.

**3.** ¿Que permite el SSR respecto a la carga de la aplicacion?

- **a)** Que la aplicacion funcione sin HTML.
- **b)** Que no se necesite conexion a internet.
- **c)** Que solo se carguen imagenes.
- **d)** Que el usuario vea la interfaz antes de que se cargue el JavaScript.

---

## ¿Cómo puedes crear un Server Side Rendering con React desde cero?

Para crear un Server Side Rendering con React desde cero podemos usar el paquete `react-dom/server` que nos permite renderizar componentes de React en el servidor.

Veamos un ejemplo de cómo crear un Server Side Rendering con React desde cero con Express:

```javascript
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
  const html = renderToString(<h1>Hola mundo</h1>)
  res.send(html)
})
```

Esto nos devolverá el HTML de la aplicación al acceder a la ruta `/`.

```html
<h1 data-reactroot="">Hola mundo</h1>
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que paquete de React se usa para renderizar componentes en el servidor?

- **a)** react-render
- **b)** react-ssr
- **c)** react-dom/client
- **d)** react-dom/server

**2.** ¿Que funcion de react-dom/server convierte un componente a string HTML?

- **a)** render
- **b)** renderToHTML
- **c)** convertToString
- **d)** renderToString

**3.** ¿Que atributo especial agrega React al HTML renderizado en el servidor?

- **a)** data-server
- **b)** ssr-component
- **c)** data-reactroot
- **d)** class='react'

---

## ¿Puedes poner un ejemplo de efectos colaterales en React?

Igual que las funciones en JavaScript, los componentes de React también pueden tener _side effects_ (efectos colaterales). Un efecto colateral significa que el componente manipula o lee información que no está dentro de su ámbito.

Aquí puedes ver un ejemplo simple de un componente que tiene un efecto colateral. Un componente que lee y modifica una variable que está fuera del componente. Esto hace que sea imposible saber qué renderizará el componente cada vez que se use, ya que no sabemos el valor que tendrá `count`:

```javascript
let count = 0

function Counter() {
  count = count + 1

  return (
    <p>Contador: {count}</p>
  )
}

export default function Counters() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  )
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es un efecto colateral (side effect) en React?

- **a)** Cuando un componente manipula o lee informacion que no esta dentro de su ambito.
- **b)** Cuando exportamos componentes.
- **c)** Cuando usamos props en un componente.
- **d)** Cuando definimos estilos CSS.

**2.** ¿Por que son problematicos los efectos colaterales en componentes?

- **a)** Porque hacen imposible predecir que renderizara el componente.
- **b)** Porque hacen el codigo mas corto.
- **c)** Porque reducen el tamano del bundle.
- **d)** No son problematicos, son recomendados.

**3.** ¿Cual es un ejemplo de efecto colateral en un componente?

- **a)** Modificar una variable externa al componente durante el renderizado.
- **b)** Usar useState para manejar estado local.
- **c)** Definir funciones dentro del componente.
- **d)** Usar children en las props.

---

## ¿Qué diferencia hay entre componentes controlados y no controlados? ¿Qué ventajas y desventajas tienen?

A la hora de trabajar con formularios en React, tenemos dos tipos de componentes: los componentes controlados y los componentes no controlados.

**Componentes controlados:**
son aquellos que tienen un estado que controla el valor del componente. Por lo tanto, el valor del componente se actualiza cuando el estado cambia.

La ventaja de este tipo de componentes es que son más fáciles de testear porque no dependen de la interfaz. También nos permiten crear validaciones muy fácilmente. La desventaja es que son más complejos de crear y mantener. Además, pueden tener un peor rendimiento, ya que provocan un re-renderizado cada vez que cambia el valor del input.

**Componentes no controlados:** son aquellos que no tienen un estado que controle el valor del componente. El estado del componente lo controla el navegador de forma interna. Para conocer el valor del componente, tenemos que leer el valor del DOM.

La ventaja de este tipo de componentes es que se crean de forma muy fácil y no tienes que mantener un estado. Además, el rendimiento es mejor, ya que no tiene que re-renderizarse al cambiar el valor del input. Lo malo es que hay que tratar más con el DOM directamente y crear código imperativo.

```javascript
// Controlado:
const [value, setValue] = useState('')
const handleChange = () => setValue(event.target.value)

<input type="text" value={value} onChange={handleChange} />

// No controlado:
<input type="text" defaultValue="foo" ref={inputRef} />
// Usamos `inputRef.current.value` para leer el valor del input
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que caracteriza a un componente controlado en React?

- **a)** No puede recibir props.
- **b)** Usa refs para leer el valor del DOM.
- **c)** No puede tener ningun estado.
- **d)** Tiene un estado que controla el valor del componente.

**2.** ¿Cual es una ventaja de los componentes controlados?

- **a)** Son mas faciles de testear y permiten crear validaciones facilmente.
- **b)** No requieren mantener estado.
- **c)** Tienen mejor rendimiento.
- **d)** No necesitan eventos onChange.

**3.** ¿Cual es una ventaja de los componentes no controlados?

- **a)** Mejor rendimiento porque no se re-renderizan al cambiar el valor.
- **b)** Son mas faciles de testear.
- **c)** Requieren mas lineas de codigo.
- **d)** Son mas faciles de validar.

**4.** ¿Como se lee el valor de un componente no controlado?

- **a)** Usando el estado del componente.
- **b)** Usando una ref para acceder al DOM (inputRef.current.value).
- **c)** A traves de las props.
- **d)** Con el evento onChange.

---

## ¿Qué son los High Order Components (HOC)?

Los High Order Components son funciones que reciben un componente como parámetro y devuelven un componente.

```javascript
function withLayout(Component) {
  return function (props) {
    return (
      <main>
        <section>
          <Component {...props} />
        </section>
      </main>
    )
  }
}
```

En este caso, la función `withLayout` recibe un componente como parámetro y devuelve un componente. El componente devuelto renderiza el componente que se le pasa como parámetro dentro de un layout.

Es un patrón que nos permite reutilizar código y así podemos inyectar funcionalidad, estilos o cualquier otra cosa a un componente de forma sencilla.

Con la llegada de los hooks, los HOCs se han vuelto menos populares, pero todavía se usan en algunos casos.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es un High Order Component (HOC)?

- **a)** Un componente de clase.
- **b)** Una funcion que recibe un componente como parametro y devuelve un componente.
- **c)** Un componente que esta en la parte superior del arbol.
- **d)** Un tipo de contexto en React.

**2.** ¿Para que sirve el patron HOC?

- **a)** Para reutilizar codigo e inyectar funcionalidad, estilos u otras cosas a un componente.
- **b)** Para crear rutas en la aplicacion.
- **c)** Para definir estilos CSS globales.
- **d)** Para conectar con bases de datos.

**3.** ¿Que ha sucedido con los HOCs desde la llegada de los hooks?

- **a)** Se han vuelto menos populares, aunque todavia se usan en algunos casos.
- **b)** Los hooks son un tipo de HOC.
- **c)** No ha cambiado nada.
- **d)** Han sido completamente eliminados de React.

---

## ¿Qué son las render props?

Son un patrón de diseño de React que nos permite reutilizar código entre componentes e inyectar información en el renderizado de los componentes.

```javascript
<DataProvider render={data => <h1>Hello {data.target}</h1>} />
```

En este caso, el componente `DataProvider` recibe una función `render` como prop. Ahí le indicamos qué es lo que debe renderizar usando la información que recibe como parámetro.

La implementación del `DataProvider` con funciones podría ser la siguiente:

```javascript
function DataProvider({ render }) {
  const data = { target: 'world' }
  return render(data)
}
```

También se puede encontrar este patrón usando la prop `children` en los componentes.

```javascript
<DataProvider>{data => <h1>Hello {data.target}</h1>}</DataProvider>
```

Y la implementación sería similar:

```javascript
function DataProvider({ children }) {
  const data = { target: 'world' }
  return children(data)
}
```

Este patrón es usado por grandes bibliotecas como `react-router`, `formik` o `react-motion`.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son las render props?

- **a)** Un patron de diseno que permite reutilizar codigo e inyectar informacion en el renderizado.
- **b)** Un tipo especial de estado en React.
- **c)** Props que solo pueden contener strings.
- **d)** Una forma de definir estilos CSS.

**2.** ¿Que recibe la prop render en el patron render props?

- **a)** Un numero que indica el orden de renderizado.
- **b)** Una funcion que indica que debe renderizar usando la informacion que recibe como parametro.
- **c)** Un string con HTML.
- **d)** Un componente de clase.

**3.** ¿Con que otra prop se puede implementar el patron render props?

- **a)** Con la prop className.
- **b)** Con la prop children.
- **c)** Con la prop style.
- **d)** No hay alternativa.

**4.** ¿Que bibliotecas populares usan el patron render props?

- **a)** Solo Next.js.
- **b)** Solo bibliotecas de testing.
- **c)** react-router, formik y react-motion.
- **d)** Ninguna biblioteca lo usa.

---

## ¿Por qué no podemos usar un `if` en el renderizado de un componente?

En React, no podemos usar un `if` en el renderizado de un componente porque no es una expresión válida de JavaScript, es una declaración. Las expresiones son aquellas que devuelven un valor y las declaraciones no devuelven ningún valor.

En JSX solo podemos usar expresiones, por eso usamos ternarias, que sí son expresiones.

```javascript
// ❌ Esto no funciona
function Button({ text }) {
  return (
    <button>
      {if (text) { return text } else { return 'Click' }}
    </button>
  )
}
// ✅ Esto funciona
function Button({ text }) {
  return (
    <button>
      {text ? text : 'Click'}
    </button>
  )
}
```

De la misma forma, tampoco podemos usar `for`, `while` o `switch` dentro del renderizado de un componente.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que no podemos usar un if dentro del JSX en React?

- **a)** Porque causa errores de rendimiento.
- **b)** Porque if es una declaracion, no una expresion, y JSX solo admite expresiones.
- **c)** Porque React no soporta condicionales.
- **d)** Porque Babel no lo puede transpilar.

**2.** ¿Que alternativa se usa en JSX en lugar de if?

- **a)** No hay alternativa para condicionales.
- **b)** Operadores ternarios, que si son expresiones.
- **c)** Usar comentarios HTML.
- **d)** Se usa un componente especial llamado If.

**3.** ¿Cual es la diferencia entre una expresion y una declaracion en JavaScript?

- **a)** Las expresiones solo se usan en React.
- **b)** Las expresiones devuelven un valor, las declaraciones no.
- **c)** Son lo mismo, solo cambia el nombre.
- **d)** Las declaraciones son mas rapidas.

**4.** ¿Que otras estructuras de control tampoco se pueden usar dentro del JSX?

- **a)** Solo switch no funciona.
- **b)** for, while y switch.
- **c)** Solo if, las demas si se pueden usar.
- **d)** return es la unica que no funciona.

---

## ¿Por qué debemos utilizar una función para actualizar el estado de React?

A la hora de actualizar el estado de React, debemos utilizar la función que nos facilita el hook `useState` para actualizar el estado.

```javascript
const [count, setCount] = useState(0)

setCount(count + 1)
```

¿Por qué es esto necesario? En primer lugar, el estado en React debe ser inmutable. Es decir, no podemos modificar el estado directamente, sino que debemos siempre crear un nuevo valor para el nuevo estado.

Esto nos permite que la integridad de la UI respecto a los datos que renderiza siempre es correcta.

Por otro lado, llamar a una función le permite a React saber que el estado ha cambiado y que debe re-renderizar el componente si es necesario. Además esto lo hace de forma asíncrona, por lo que podemos llamar a `setCount` tantas veces como queramos y React se encargará de actualizar el estado cuando lo considere oportuno.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que debemos usar la funcion setState para actualizar el estado en React?

- **a)** Porque las funciones son mas rapidas que las variables.
- **b)** Es solo una convencion, se puede modificar directamente.
- **c)** Porque el estado debe ser inmutable y React necesita saber cuando re-renderizar.
- **d)** No es necesario, es opcional.

**2.** ¿De que forma actualiza React el estado cuando llamamos a setState?

- **a)** Solo cuando el usuario interactua.
- **b)** De forma asincrona, cuando React lo considere oportuno.
- **c)** Solo al final de la ejecucion del programa.
- **d)** De forma sincrona inmediatamente.

**3.** ¿Que garantiza la inmutabilidad del estado en React?

- **a)** Que el codigo sea mas corto.
- **b)** Que no se pueda usar TypeScript.
- **c)** Nada, es solo una preferencia.
- **d)** Que la integridad de la UI respecto a los datos que renderiza siempre es correcta.

---

## ¿Qué es el ciclo de vida de un componente en React?

En los componentes de clase, el ciclo de vida de un componente se divide en tres fases:

- Montaje: cuando el componente se añade al DOM.
- Actualización: cuando el componente se actualiza.
- Desmontaje: cuando el componente se elimina del DOM.

Dentro de este ciclo de vida, existe un conjunto de métodos que se ejecutan en el componente.

Estos métodos se definen en la clase y se ejecutan en el orden que se muestran a continuación:

- constructor
- render
- componentDidMount
- componentDidUpdate
- componentWillUnmount

En cada uno de estos métodos podemos ejecutar código que nos permita controlar el comportamiento de nuestro componente.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cuales son las tres fases del ciclo de vida de un componente de clase en React?

- **a)** Montaje, actualizacion y desmontaje.
- **b)** Hay cinco fases.
- **c)** Crear, renderizar y destruir.
- **d)** Compilar, ejecutar y terminar.

**2.** ¿Que metodo se ejecuta cuando el componente se anade al DOM?

- **a)** useMount
- **b)** componentWillUnmount
- **c)** componentDidMount
- **d)** onMount

**3.** ¿Que metodo se ejecuta cuando el componente se elimina del DOM?

- **a)** componentDidUpdate
- **b)** componentWillUnmount
- **c)** destructor
- **d)** onDestroy

**4.** ¿En que orden se ejecutan los metodos del ciclo de vida?

- **a)** constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount
- **b)** render, constructor, componentDidMount
- **c)** No hay orden definido.
- **d)** componentWillUnmount, render, constructor

---

## ¿Por qué puede ser mala práctica usar el `index` como key en un listado de React?

Cuando renderizamos una lista de elementos, React necesita saber qué elementos han cambiado, han sido añadidos o eliminados.

Para ello, React necesita una key única para cada elemento de la lista. Si no le pasamos una key, React usa el índice del elemento como key.

```javascript
const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
```

En este caso, React usa el índice del elemento como `key`. Esto puede ser un problema si la lista se reordena o se eliminan elementos del array, ya que el índice de los elementos cambia.

En este caso, React no sabe qué elementos han cambiado y puede que se produzcan errores.

Un ejemplo donde se ve el problema:

```javascript
const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const handleRemove = index => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleRemove(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que React necesita una key en cada elemento de una lista?

- **a)** Para saber que elementos han cambiado, han sido anadidos o eliminados.
- **b)** Para aplicar estilos CSS.
- **c)** Para ordenar los elementos alfabeticamente.
- **d)** Solo por convencion.

**2.** ¿Cuando es problematico usar el index como key?

- **a)** Cuando la lista se reordena o se eliminan elementos.
- **b)** Nunca es problematico.
- **c)** Solo cuando hay mas de 100 elementos.
- **d)** Solo en modo desarrollo.

**3.** ¿Que sucede si no proporcionamos una key a los elementos de una lista?

- **a)** No pasa nada, es opcional.
- **b)** React usa el indice del elemento como key por defecto.
- **c)** React genera un ID aleatorio.
- **d)** React no renderiza la lista.

**4.** ¿Que tipo de valor es recomendable usar como key?

- **a)** Un identificador unico y estable para cada elemento.
- **b)** No importa el valor, cualquiera funciona igual.
- **c)** El nombre del componente.
- **d)** La fecha actual.

---

## ¿Para qué sirve el hook `useMemo`?

El hook `useMemo` es un hook que nos permite memorizar el resultado de una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado.

```javascript
import { useMemo } from 'react'

function Counter({ count }) {
  const double = useMemo(() => count * 2, [count])

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {double}</p>
    </div>
  )
}
```

En este caso, el componente `Counter` recibe una prop `count` que es un número. El componente calcula el doble de ese número y lo muestra en pantalla.

El hook `useMemo` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop `count`.

La ventaja es que si la prop `count` no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve el hook useMemo?

- **a)** Para memorizar componentes.
- **b)** Para memorizar el resultado de una funcion y evitar recalculos innecesarios.
- **c)** Para crear efectos secundarios.
- **d)** Para guardar datos en localStorage.

**2.** ¿Que parametros recibe useMemo?

- **a)** Una funcion y un array de dependencias.
- **b)** Un componente y props.
- **c)** Solo una funcion.
- **d)** No recibe parametros.

**3.** ¿Cuando se ejecuta la funcion pasada a useMemo?

- **a)** Solo cuando el usuario hace clic.
- **b)** Solo una vez cuando se monta el componente.
- **c)** Nunca se ejecuta automaticamente.
- **d)** Cuando el componente se renderiza por primera vez y cuando cambian las dependencias.

**4.** ¿Cual es la ventaja de usar useMemo?

- **a)** Permite acceder al DOM directamente.
- **b)** Evita recalcular valores costosos si las dependencias no han cambiado.
- **c)** No tiene ninguna ventaja.
- **d)** Permite usar clases en componentes funcionales.

---

## ¿Es buena idea usar siempre `useMemo` para optimizar nuestros componentes?

No. `useMemo` es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces el cálculo de un valor es tan rápido que no merece la pena memorizarlo. Incluso, en algunos casos, puede ser más lento memorizarlo que calcularlo de nuevo.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Es buena idea usar siempre useMemo para optimizar componentes?

- **a)** No existe useMemo en React.
- **b)** No, a veces el calculo es tan rapido que no merece la pena memorizarlo.
- **c)** Si, es una herramienta magica de optimizacion.
- **d)** Solo se debe usar en produccion.

**2.** ¿Que puede suceder si usamos useMemo innecesariamente?

- **a)** No pasa nada, siempre es beneficioso.
- **b)** Puede ser mas lento memorizarlo que calcularlo de nuevo.
- **c)** React lanza una advertencia.
- **d)** Se produce un error de compilacion.

---

## ¿Para qué sirve el hook `useCallback`?

El hook `useCallback` es un hook que nos permite memorizar una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

```javascript
import { useCallback } from 'react'

function Counter({ count, onIncrement }) {
  const handleIncrement = useCallback(() => {
    onIncrement(count)
  }, [count, onIncrement])

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}
```

En este caso, el componente `Counter` recibe una prop `count` que es un número y una prop `onIncrement` que es una función que se ejecuta cuando se pulsa el botón.

El hook `useCallback` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop `count` o la prop `onIncrement`.

La ventaja es que si la prop `count` o la prop `onIncrement` no cambian, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve el hook useCallback?

- **a)** Para memorizar el resultado de una funcion.
- **b)** Para crear efectos secundarios.
- **c)** Para memorizar una funcion y evitar crearla de nuevo si las dependencias no cambian.
- **d)** Para definir contextos.

**2.** ¿Que parametros recibe useCallback?

- **a)** Solo una funcion.
- **b)** Un valor y un callback.
- **c)** Solo un array de dependencias.
- **d)** Una funcion y un array de dependencias.

**3.** ¿Cual es la ventaja de usar useCallback?

- **a)** Permite crear efectos secundarios.
- **b)** Solo sirve para debugging.
- **c)** Evita la creacion de una nueva funcion si las dependencias no cambian.
- **d)** Permite usar funciones async.

---

## ¿Es buena idea usar siempre `useCallback` para optimizar nuestros componentes?

No. `useCallback` es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces la creación de una función es tan rápida que no merece la pena memorizarla. Incluso, en algunos casos, puede ser más lento memorizarla que crearla de nuevo.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Es buena idea usar siempre useCallback para optimizar componentes?

- **a)** Solo se debe usar en componentes de clase.
- **b)** Si, siempre mejora el rendimiento.
- **c)** Si, React lo requiere para todas las funciones.
- **d)** No, a veces la creacion de una funcion es tan rapida que no merece la pena memorizarla.

**2.** ¿Que puede suceder si usamos useCallback innecesariamente?

- **a)** React lo corrige automaticamente.
- **b)** Se produce un error de sintaxis.
- **c)** Puede ser mas lento memorizarla que crearla de nuevo.
- **d)** No pasa nada, siempre es beneficioso.

---

## ¿Cuál es la diferencia entre `useCallback` y `useMemo`?

La diferencia principal es esta:

- `useMemo` memoriza el resultado de un cálculo.
- `useCallback` memoriza la referencia de una función.

En términos prácticos, ambos se usan para evitar trabajo innecesario entre renderizados, pero no persiguen exactamente el mismo objetivo:

- Usa `useMemo` cuando el cálculo sea costoso y quieras reutilizar su resultado.
- Usa `useCallback` cuando pases funciones a componentes memoizados o a hooks que dependan de la estabilidad de esa referencia.

También es cierto que `useCallback` puede entenderse como un caso particular de `useMemo`. De hecho, se puede simular así:

```javascript
const memoizedCallback = useMemo(() => {
  return () => {
    doSomething(a, b)
  }
}, [a, b])
```

Importante: no conviene usar `useMemo` y `useCallback` de forma indiscriminada. Añadir memoización sin necesidad puede aumentar complejidad y, en algunos casos, empeorar el rendimiento.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es la diferencia principal entre useCallback y useMemo?

- **a)** useMemo es mas rapido que useCallback.
- **b)** useCallback no acepta dependencias.
- **c)** No hay diferencia, son el mismo hook.
- **d)** useCallback memoriza una funcion, useMemo memoriza el resultado de una funcion.

**2.** ¿Que relacion hay entre useCallback y useMemo?

- **a)** Son opuestos en funcionalidad.
- **b)** Uno es para React y otro para React Native.
- **c)** useMemo es una version de useCallback.
- **d)** useCallback es una version especializada de useMemo para funciones.

**3.** ¿Se puede simular useCallback con useMemo?

- **a)** Si, retornando una funcion desde useMemo.
- **b)** Solo con TypeScript.
- **c)** No, son completamente diferentes.
- **d)** Solo en versiones antiguas de React.

---

## ¿Qué son las refs en React?

Las refs (referencias) son una vía de acceso imperativa en React. Permiten apuntar a un nodo del DOM o a un valor mutable que queremos conservar entre renderizados sin provocar un nuevo render cuando cambia.

Se utilizan principalmente en dos escenarios:

- Interactuar con el DOM de forma puntual (por ejemplo, hacer focus a un input, medir un elemento o gestionar selecciones).
- Guardar valores mutables entre renders que no forman parte de la UI (por ejemplo, un identificador de intervalo, un flag interno o el valor previo de una variable).

En componentes funcionales se usa normalmente `useRef`, y en componentes de clase se ha usado históricamente `createRef`.

Es importante entender que una ref no sustituye al estado: si un cambio debe reflejarse en la interfaz, debería gestionarse con state; si no necesita re-render, una ref suele ser la herramienta adecuada.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son las refs en React?

- **a)** Una forma de definir rutas.
- **b)** Referencias a elementos del DOM o valores que se mantienen entre renderizados.
- **c)** Referencias a componentes de clase.
- **d)** Un tipo especial de estado.

**2.** ¿Como se pueden crear refs en React?

- **a)** Con createRef o con el hook useRef.
- **b)** No se pueden crear refs en React.
- **c)** Solo con useState.
- **d)** Solo con componentes de clase.

**3.** ¿Que caracteristica tienen las refs respecto a los renderizados?

- **a)** Se reinician en cada renderizado.
- **b)** El valor de la ref se mantiene entre renderizados.
- **c)** Causan re-renderizados cuando cambian.
- **d)** Solo funcionan en el servidor.

---

## ¿Cómo funciona el hook `useRef`?

En el siguiente ejemplo vamos a guardar la referencia en el DOM a un elemento `<input>` y vamos a cambiar el foco a ese elemento cuando hacemos clic en el botón.

```javascript
import { useRef } from 'react'

function TextInputWithFocusButton() {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    // `current` apunta al elemento inputEl montado
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

Creamos una referencia `inputEl` con `useRef` y la pasamos al elemento `<input>` como prop `ref`. Cuando el componente se monta, la referencia `inputEl` apunta al elemento `<input>` del DOM.

Para acceder al elemento del DOM, usamos la propiedad `current` de la referencia.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve el hook useRef?

- **a)** Para definir contextos.
- **b)** Para renderizar listas.
- **c)** Para manejar el estado del componente.
- **d)** Para guardar referencias a elementos del DOM o valores que persisten entre renderizados.

**2.** ¿Como se accede al elemento del DOM referenciado con useRef?

- **a)** No se puede acceder al elemento.
- **b)** A traves de la propiedad current de la referencia.
- **c)** Usando document.querySelector.
- **d)** Con la propiedad element.

**3.** ¿Como se pasa una ref a un elemento del DOM?

- **a)** Solo se puede usar con componentes.
- **b)** Usando el atributo ref en el elemento JSX.
- **c)** Usando el atributo data-ref.
- **d)** Usando el atributo id.

---

## ¿Qué hace el hook `useLayoutEffect`?

`useLayoutEffect` funciona igual que el hook `useEffect`, con la excepción de que este se dispara sincrónicamente después de leer todas las mutaciones del DOM.

Llama `useLayoutEffect` en el nivel superior del componente.

```javascript
import { useLayoutEffect } from 'react'

useLayoutEffect(() => {
  return () => {}
}, [])
```

`useLayoutEffect` recibe dos argumentos:

- Una función callback que define el efecto.
- Una lista de dependencias.

Aunque el `useEffect` es el hook de renderizado más usado, si se necesita que los efectos del DOM muten cambiando la apariencia entre el efecto y el renderizado, entonces es conveniente que uses el `useLayoutEffect`.

##### Orden de ejecución del `useLayoutEffect`

El orden de ejecución del `useLayoutEffect`, ya que se ejecuta de forma síncrona, al momento en que React termina de ejecutar todas las mutaciones, pero antes de renderizarlo en pantalla, es el siguiente:

- El componente se actualiza por algún cambio de estado, props o el padre se re-renderiza
- React renderiza el componente
- Tu efecto es ejecutado
- La pantalla se actualiza “visualmente”


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como funciona useLayoutEffect comparado con useEffect?

- **a)** Igual que useEffect, pero se dispara sincronicamente despues de las mutaciones del DOM.
- **b)** Es completamente diferente a useEffect.
- **c)** Solo funciona en el servidor.
- **d)** No acepta dependencias.

**2.** ¿Que argumentos recibe useLayoutEffect?

- **a)** Solo una lista de dependencias.
- **b)** Una funcion callback y una lista de dependencias.
- **c)** Solo una funcion callback.
- **d)** Tres argumentos obligatorios.

**3.** ¿Cuando conviene usar useLayoutEffect en lugar de useEffect?

- **a)** Solo para peticiones a APIs.
- **b)** Solo para manejar estado global.
- **c)** Cuando los efectos del DOM necesitan mutar la apariencia antes de mostrar en pantalla.
- **d)** Siempre, es mejor que useEffect.

**4.** ¿En que orden se ejecuta useLayoutEffect?

- **a)** Despues de que la pantalla se actualiza visualmente.
- **b)** Despues de que React renderiza el componente pero antes de actualizar la pantalla visualmente.
- **c)** Antes de que React renderice el componente.
- **d)** En un momento aleatorio.

---

## ¿Qué son los componentes _stateless_?

Los componentes _stateless_ son componentes que no gestionan estado interno. Su salida depende exclusivamente de las props que reciben.

Por ese motivo, suelen ser más fáciles de entender, de testear y de reutilizar. También favorecen un estilo de desarrollo más predecible, cercano a los componentes puros.

En la práctica, son muy útiles para piezas de UI presentacionales (botones, tarjetas, encabezados, etiquetas, etc.) donde la lógica de estado vive en componentes contenedores o hooks.

```javascript
// Este es un ejemplo de componente stateless
function Button({ text }) {
  return <button>{text}</button>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son los componentes stateless?

- **a)** Componentes que solo existen en el servidor.
- **b)** Componentes que siempre tienen estado.
- **c)** Componentes que no tienen estado y se crean con una function.
- **d)** Un tipo especial de hook.

**2.** ¿Cual es la ventaja de los componentes stateless?

- **a)** No tienen ninguna ventaja.
- **b)** Pueden acceder a cualquier estado global.
- **c)** Facilitan la creacion de componentes puros que siempre renderizan lo mismo para las mismas props.
- **d)** Solo funcionan en modo desarrollo.

**3.** ¿De que depende el renderizado de un componente stateless?

- **a)** De variables externas.
- **b)** Del estado interno del componente.
- **c)** Del ciclo de vida del componente.
- **d)** Solo de las props que recibe.

---

## ¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?

Para prevenir el comportamiento por defecto de un evento en React, se usa el método `preventDefault()` sobre el objeto del evento.

Esto es habitual en formularios, enlaces o cualquier interacción donde quieras mantener el control del flujo desde JavaScript en lugar de dejar que actúe el comportamiento nativo del navegador.

```javascript
function Form({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' />
      <button type='submit'>Enviar</button>
    </form>
  )
}
```

En este ejemplo, evitamos que el formulario recargue la página al hacer submit, para poder validar y procesar los datos de forma controlada.

Nota útil: `preventDefault()` evita la acción por defecto, pero no detiene la propagación del evento. Si también necesitas evitar que el evento siga propagándose, debes usar además `stopPropagation()`.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que metodo se usa para prevenir el comportamiento por defecto de un evento en React?

- **a)** event.preventDefault()
- **b)** event.stopPropagation()
- **c)** event.cancel()
- **d)** No se puede prevenir.

**2.** ¿En que caso es comun usar preventDefault en React?

- **a)** Solo en componentes de clase.
- **b)** Nunca se usa en React.
- **c)** En todos los eventos de React.
- **d)** En el evento onSubmit de un formulario para evitar que recargue la pagina.

---

## ¿Qué es el `StrictMode` en React?

`StrictMode` es una herramienta de desarrollo que activa comprobaciones adicionales en una parte del árbol de componentes para detectar malas prácticas antes de llegar a producción.

No añade interfaz visual y no cambia el comportamiento funcional en producción. Su valor está en detectar problemas de calidad durante el desarrollo, por ejemplo:

- Efectos con limpieza incompleta.
- Side effects ejecutados en sitios inadecuados (como el render).
- Uso de APIs obsoletas o patrones no recomendados.
- Código no idempotente que falla si se ejecuta más de una vez.

Por eso, cuando activas `StrictMode`, es normal ver ejecuciones extra en desarrollo: no es un error, es una estrategia deliberada para exponer fragilidades de tu código cuanto antes.

```javascript
import { StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
      <Component />
    </StrictMode>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es StrictMode en React?

- **a)** Un tipo especial de estado.
- **b)** Una forma de escribir CSS en React.
- **c)** Un componente que activa comprobaciones de desarrollo para detectar problemas.
- **d)** Un metodo de ciclo de vida.

**2.** ¿Que detecta StrictMode?

- **a)** Errores de sintaxis en el codigo.
- **b)** Solo errores de TypeScript.
- **c)** Solo errores de red.
- **d)** Componentes que se renderizan innecesariamente y funcionalidades obsoletas.

**3.** ¿Como se usa StrictMode en una aplicacion React?

- **a)** Envolviendo los componentes con el componente <StrictMode>.
- **b)** Usando una directiva 'use strict' en el componente.
- **c)** Se activa automaticamente, no hay que hacer nada.
- **d)** Pasando una prop strict={true} al componente raiz.

---

## ¿Por qué es recomendable exportar los componentes de React de forma nombrada?

Los componentes de React se pueden exportar de dos formas:

- Exportación por defecto
- Exportación nombrada

Para exportar un componente por defecto, usamos la palabra reservada `default`:

```javascript
// button.jsx
export default function Button() {
  return <button>Click</button>
}

// App.jsx
import Button from './button.jsx'

function App() {
  return <Button />
}
```

La gran desventaja que tiene la exportación por defecto es que a la hora de importarlo puedes usar el nombre que quieras. Y esto trae problemas, ya que puedes no usar siempre el mismo en el proyecto o usar un nombre que no sea correcto con lo que importas.

```javascript
// button.jsx
export default function Button() {
  return <button>Click</button>
}

// App.jsx
import MyButton from './button.jsx'

function App() {
  return <MyButton />
}

// Otro.jsx
import Button from './button.jsx'

function Otro() {
  return <Button />
}
```

Los exports nombrados nos obligan a usar el mismo nombre en todos los archivos y, por tanto, nos aseguramos de que siempre estamos usando el nombre correcto.

```javascript
// button.jsx
export function Button() {
  return <button>Click</button>
}

// App.jsx
import { Button } from './button.jsx'

function App() {
  return <Button />
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es la desventaja de la exportacion por defecto en React?

- **a)** No permite exportar componentes.
- **b)** Permite usar cualquier nombre al importar, lo que puede causar inconsistencias.
- **c)** Solo funciona con componentes de clase.
- **d)** No funciona en React.

**2.** ¿Que ventaja tienen los exports nombrados?

- **a)** Obligan a usar el mismo nombre en todos los archivos.
- **b)** Solo funcionan en TypeScript.
- **c)** No tienen ventajas.
- **d)** Permiten exportar mas de un componente por defecto.

**3.** ¿Como se importa un componente con exportacion nombrada?

- **a)** import * as Button from './button.jsx'
- **b)** require('./button.jsx').Button
- **c)** import Button from './button.jsx'
- **d)** import { Button } from './button.jsx'

---

## ¿Cómo puedes exportar múltiples componentes de un mismo archivo?

Para exportar múltiples componentes desde un mismo archivo, lo habitual es usar exportaciones nombradas (named exports). Este enfoque es especialmente útil cuando los componentes están relacionados entre sí (por ejemplo, variantes de un mismo componente o piezas de un patrón compuesto).

Además, las exportaciones nombradas suelen mejorar la mantenibilidad porque:

- Hacen explícito qué se exporta públicamente.
- Facilitan el autocompletado y los refactors en el editor.
- Evitan ambiguedades típicas de mezclar demasiados default exports.

Ejemplo:

```javascript
// button.jsx
export function Button({ children }) {
  return <button>{children}</button>
}

export function ButtonSecondary({ children }) {
  return <button class='btn-secondary'>{children}</button>
}
```

Y luego se importan así:

```javascript
import { Button, ButtonSecondary } from './button.jsx'
```

Si en algún caso quieres renombrar una exportación al importar, también puedes hacerlo:

```javascript
import { ButtonSecondary as SecondaryButton } from './button.jsx'
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se exportan multiples componentes de un mismo archivo?

- **a)** Usando module.exports.
- **b)** Creando archivos separados.
- **c)** Usando exportacion nombrada (export function Component).
- **d)** No es posible exportar multiples componentes.

**2.** ¿Cuantos export default puede tener un archivo JavaScript?

- **a)** Ninguno, no existe export default.
- **b)** Depende del tamano del archivo.
- **c)** Ilimitados.
- **d)** Solo uno.

---

## ¿Cómo puedo importar de forma dinámica un componente en React?

Para importar de forma dinámica un componente en React debemos usar la función `import()`, el método `lazy()` de React y el componente `Suspense`.

```javascript
// App.jsx
import { lazy, Suspense } from 'react'

const Button = lazy(() => import('./button.jsx'))

export default function App() {
  return (
    <Suspense fallback={<div>Cargando botón...</div>}>
      <Button />
    </Suspense>
  )
}

// button.jsx
export default function Button() {
  return <button>Botón cargado dinámicamente</button>
}
```

Vamos a ver en detalle cada uno de los elementos que hemos usado:

La función `import()` es parte del estándar de ECMAScript y nos permite importar de forma dinámica un módulo. Esta función devuelve una promesa que se resuelve con el módulo importado.

El método `lazy()` de React nos permite crear un componente que se renderiza de forma diferida. Este método recibe una función que debe devolver una promesa que se resuelve con un componente. En este caso, se resolverá con el componente que tenemos en el fichero `button.jsx`. En el caso más directo de uso, `lazy()` espera un `export default`; si usas export nombrado, también se puede, pero requiere adaptar la importación (lo vemos en la siguiente pregunta).

El componente `Suspense` nos permite mostrar un mensaje mientras se está cargando el componente. Este componente recibe una prop `fallback` que es el mensaje que se muestra mientras se está cargando el componente.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-n6zal2?file=App.tsx)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que se necesita para importar un componente de forma dinamica en React?

- **a)** Solo useEffect.
- **b)** Solo la funcion require().
- **c)** La funcion import(), el metodo lazy() y el componente Suspense.
- **d)** El hook useState.

**2.** ¿Para que sirve el componente Suspense en la carga dinamica?

- **a)** Para exportar el componente.
- **b)** Para mostrar un mensaje (fallback) mientras se carga el componente.
- **c)** Para compilar el codigo.
- **d)** Para cargar el componente mas rapido.

**3.** ¿Que tipo de exportacion es recomendable para componentes que se cargan con lazy()?

- **a)** Exportacion por defecto (export default).
- **b)** No se pueden exportar componentes lazy.
- **c)** Solo module.exports.
- **d)** No importa el tipo de exportacion.

---

## ¿Cuando y por qué es recomendable importar componentes de forma dinámica?

En React, nuestras aplicaciones están creadas a partir de componentes. Estos componentes se pueden importar de forma **estática o dinámica**.

La importación de componentes de forma estática es la forma más común de importar componentes en React. En este caso, los componentes se importan en la parte superior del fichero y se renderizan en el código. El problema es que, si siempre lo hacemos así, es bastante probable que estemos cargando componentes que no se van a usar desde el principio.

```javascript
import { useState } from 'react'
// importamos de forma estática el componente de la Modal
import { SuperBigModal } from './super-big-modal.jsx'

// mostrar modal si el usuario da click en un botón
export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Mostrar modal</button>
      {showModal && <SuperBigModal />}
    </div>
  )
}
```

Este componente `SuperBigModal` se importa de forma estática, por lo que se carga desde el principio. Pero, ¿qué pasa si el usuario no da click en el botón para mostrar la modal? En este caso, está cargando el componente pese a que no lo está usando.

Si queremos ofrecer la mejor experiencia a nuestros usuarios, debemos intentar que la aplicación cargue lo más rápido posible. Por eso, es recomendable importar de forma dinámica los componentes que no se van a usar desde el principio.

```javascript
import { useState, lazy, Suspense } from 'react'
// importamos de forma dinámica el componente de la Modal
const SuperBigModal = lazy(() => import('./super-big-modal.jsx'))

// mostrar modal si el usuario da click en un botón
export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Mostrar modal</button>
      <Suspense fallback={<div>Cargando modal...</div>}>
        {showModal && <SuperBigModal />}
      </Suspense>
    </div>
  )
}
```

De esta forma, la parte de código que importa el componente `SuperBigModal` se carga de forma dinámica, es decir, cuando el usuario da click en el botón para mostrar la modal.

Dependiendo del empaquetador de aplicaciones web que uses y su configuración, es posible que el resultado de la carga sea diferente (algunos creará un archivo a parte del _bundle_ principal, otros podrían hacer un streaming del HTML...) pero la intención del código es la misma.

Así que siempre debemos intentar cargar los componentes de forma dinámica cuando no se vayan a usar desde el principio, sobretodo cuando están detrás de la interacción de un usuario. Lo mismo podría ocurrir con rutas completas de nuestra aplicación. ¿Por qué cargar la página de _About_ si el usuario está visitando la página principal?


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cuando es recomendable importar componentes de forma dinamica?

- **a)** Cuando el componente no se va a usar desde el principio, como modales o rutas secundarias.
- **b)** Nunca, es mala practica.
- **c)** Solo para componentes pequenos.
- **d)** Solo en modo desarrollo.

**2.** ¿Cual es el problema de importar siempre de forma estatica?

- **a)** No hay ningun problema.
- **b)** Se cargan componentes que no se van a usar desde el principio, haciendo la app mas lenta.
- **c)** Causa errores de sintaxis.
- **d)** Los componentes no funcionan correctamente.

**3.** ¿Cual es el beneficio principal de la carga dinamica?

- **a)** La aplicacion carga mas rapido al no cargar codigo innecesario al inicio.
- **b)** Permite usar mas hooks.
- **c)** Solo funciona con TypeScript.
- **d)** El codigo es mas corto.

---

## ¿Sólo se pueden cargar componentes de forma dinámica si se exportan por defecto?

No, no es necesario que los componentes se exporten por defecto para poder cargarlos de forma dinámica. Podemos exportarlos de forma nombrada y cargarlos de forma dinámica... pero no es lo más recomendable ya que el código necesario es mucho más lioso.

```javascript
// button.jsx
// exportamos el componente Button de forma nombrada
export function Button() {
  return <button>Botón cargado dinámicamente</button>
}

// app.jsx
import { lazy, Suspense } from 'react'

// Al hacer el import dinámico, debemos especificar el nombre del componente que queremos importar
// y hacer que devuelva un objeto donde la key default pasar a ser el componente nombrado
const Button = lazy(() =>
  import('./button.jsx').then(({ Button }) => ({ default: Button }))
)

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando botón...</div>}>
        <Button />
      </Suspense>
    </div>
  )
}
```

Otra opción es tener un fichero intermedio que exporte el componente de forma por defecto y que sea el que importemos de forma dinámica.

```javascript
// button-component.jsx
// exportamos el componente Button de forma nombrada
export function Button() {
  return <button>Botón cargado dinámicamente</button>
}

// button.jsx
export { Button as default } from './button-component.jsx'

// app.jsx
import { lazy, Suspense } from 'react'

const Button = lazy(() => import('./button.jsx'))

export default function App () {
  return (
    <div>
      <Suspense fallback={<div>Cargando botón...</div>}>
        <Button />
      </Suspense>
    </div>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Es obligatorio exportar por defecto para usar carga dinamica?

- **a)** No hay diferencia entre ambos.
- **b)** No, pero el codigo para exports nombrados es mas complejo.
- **c)** Depende del navegador.
- **d)** Solo se pueden usar exports nombrados.

**2.** ¿Como se puede usar lazy() con un componente exportado de forma nombrada?

- **a)** No se puede usar.
- **b)** Usando .then() para convertir el export nombrado en { default: Component }.
- **c)** Usando un hook especial.
- **d)** Usando require() en lugar de import().

---

## ¿Qué es el contexto en React? ¿Cómo puedo crearlo y consumirlo?

El contexto es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

Para crear un contexto en React usamos el hook `createContext`:

```javascript
import { createContext } from 'react'

const ThemeContext = createContext()
```

Para usar el contexto, debemos envolver el árbol de componentes con el componente `Provider`:

```javascript
<ThemeContext.Provider value='dark'>
  <App />
</ThemeContext.Provider>
```

Para consumir el contexto, debemos usar el hook `useContext`:

```javascript
import { useContext } from 'react'

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Haz clic aquí</button>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el contexto en React?

- **a)** Un metodo de ciclo de vida.
- **b)** Una herramienta de debugging.
- **c)** Una forma de pasar datos a traves de la jerarquia de componentes sin pasar props manualmente.
- **d)** Un tipo especial de estado local.

**2.** ¿Como se crea un contexto en React?

- **a)** Usando newContext().
- **b)** Usando useState.
- **c)** Usando createContext() de React.
- **d)** No se puede crear, viene por defecto.

**3.** ¿Que componente se usa para proveer el valor del contexto?

- **a)** Context.Wrapper
- **b)** Context.Provider
- **c)** ContextProvider
- **d)** ProvideContext

**4.** ¿Que hook se usa para consumir un contexto?

- **a)** useState
- **b)** useConsumer
- **c)** useContext
- **d)** getContext

---

## ¿Qué es el `SyntheticEvent` en React?

`SyntheticEvent` es la capa de abstracción de eventos que React usa sobre los eventos nativos del navegador. Su objetivo es ofrecer una API homogénea y consistente entre navegadores.

En la práctica, cuando trabajas con eventos en React (`onClick`, `onChange`, etc.), el objeto `event` que recibes es un `SyntheticEvent`, no directamente un evento nativo.

Ventajas de este enfoque:

- API consistente entre navegadores.
- Misma interfaz para distintos tipos de evento.
- Integración con el sistema de eventos de React.

Si en algún caso necesitas el evento nativo real, puedes acceder mediante `event.nativeEvent`.

```javascript
function App() {
  function handleClick(event) {
    console.log(event) // SyntheticEvent
  }

  return <button onClick={handleClick}>Haz clic aquí</button>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el SyntheticEvent en React?

- **a)** Un evento que no existe en React.
- **b)** Una abstraccion del evento nativo del navegador para tener comportamiento consistente.
- **c)** Un evento que solo funciona en React Native.
- **d)** Un tipo de estado en React.

**2.** ¿Como se accede al evento nativo desde un SyntheticEvent?

- **a)** Usando event.browserEvent.
- **b)** No se puede acceder al evento nativo.
- **c)** Usando event.original.
- **d)** A traves del atributo nativeEvent.

**3.** ¿Cual es el beneficio principal del SyntheticEvent?

- **a)** Mayor velocidad de ejecucion.
- **b)** Elimina la necesidad de manejadores de eventos.
- **c)** Comportamiento consistente en todos los navegadores.
- **d)** Menor uso de memoria.

---

## ¿Qué es `flushSync` en React?

`flushSync(callback)` Obliga a React a ejecutar de manera síncrona todas las actualizaciones de los state dentro del callback proporcionado. Así se asegura que el DOM se actualiza inmediatamente.

```javascript
import { flushSync } from 'react-dom'

function App() {
  const handleClick = () => {
    setId(1)
    // component no hace re-render 🚫
    flushSync(() => {
      setId(2)
      // component re-renderiza aquí 🔄
    })
    // component ha sido re-renderizado y el DOM ha sido actualizado ✅
    flushSync(() => {
      setName('John')
      // component no hace re-render 🚫
      setEmail('john@doe.com')
      // component re-renderiza aquí 🔄
    })
    // component ha sido re-renderizado y el DOM ha sido actualizado ✅
  }

  return <button onClick={handleClick}>Haz clic aquí</button>
}
```

NOTA: `flushSync` puede afectar significativamente el rendimiento. Úsalo con moderación.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que hace flushSync en React?

- **a)** Obliga a React a ejecutar de manera sincrona las actualizaciones de estado y actualizar el DOM inmediatamente.
- **b)** Cancela todas las actualizaciones pendientes.
- **c)** Limpia el estado del componente.
- **d)** Sincroniza el estado con el servidor.

**2.** ¿De que paquete se importa flushSync?

- **a)** react-dom
- **b)** react-sync
- **c)** react-flush
- **d)** react-dom/client

**3.** ¿Cual es una consideracion importante al usar flushSync?

- **a)** No tiene efectos secundarios.
- **b)** Solo funciona en modo desarrollo.
- **c)** Puede afectar significativamente el rendimiento, usar con moderacion.
- **d)** Siempre mejora el rendimiento.

---

## ¿Qué son los Error Boundaries en React?

Los Error Boundaries son componentes que nos permiten manejar los errores que se producen en el árbol de componentes. Para crear un Error Boundary, debemos crear un componente que implemente el método `componentDidCatch`:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo ha ido mal</h1>
    }

    return this.props.children
  }
}
```

De esta forma podemos capturar los errores que se producen en el árbol de componentes y mostrar un mensaje de error personalizado mientras evitamos que nuestra aplicación se rompa completamente.

Ahora podemos envolver el árbol de componentes con el componente `ErrorBoundary`:

```javascript
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

Podemos crear un Error Boundary en cualquier nivel del árbol de componentes, de esta forma podemos tener un control más granular de los errores.

```javascript
<ErrorBoundary>
  <App />
  <ErrorBoundary>
    <SpecificComponent />
  </ErrorBoundary>
</ErrorBoundary>
```

Por ahora no existe una forma nativa de crear un Error Boundary en una función de React. Para crear un Error Boundary en una función, puedes usar la librería [react-error-boundary](https://github.com/bvaughn/react-error-boundary).


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son los Error Boundaries en React?

- **a)** Componentes que manejan errores en el arbol de componentes.
- **b)** Funciones para validar props.
- **c)** No existen en React.
- **d)** Hooks para capturar errores.

**2.** ¿Que metodo debe implementar un Error Boundary?

- **a)** handleError
- **b)** componentDidCatch
- **c)** errorHandler
- **d)** componentWillError

**3.** ¿Se pueden crear Error Boundaries con componentes funcionales nativamente?

- **a)** Si, con useState.
- **b)** Si, con el hook useErrorBoundary.
- **c)** No, se necesita usar componentes de clase o librerias como react-error-boundary.
- **d)** Solo en React 19.

**4.** ¿Que ventaja tienen los Error Boundaries?

- **a)** No tienen ninguna ventaja.
- **b)** Evitan que la aplicacion se rompa completamente al capturar errores.
- **c)** Hacen la aplicacion mas rapida.
- **d)** Eliminan todos los errores automaticamente.

---

## ¿Qué son las Forward Refs?

El reenvío de referencia o _Forward Refs_ es una técnica que nos permite acceder a una referencia de un componente hijo desde un componente padre.

```javascript
// Button.jsx
import { forwardRef } from 'react'

export const Button = forwardRef((props, ref) => (
  <button ref={ref} className='rounded border border-sky-500 bg-white'>
    {props.children}
  </button>
))

// Parent.jsx
import { Button } from './Button'
import { useRef } from 'react'

const Parent = () => {
  const ref = useRef()

  useEffect(() => {
    // Desde el padre podemos hacer focus
    // al botón que tenemos en el hijo
    ref.current?.focus?.()
  }, [ref.current])

  return <Button ref={ref}>My button</Button>
}
```

En este ejemplo, recuperamos la referencia del botón (elemento HTML `<button>`) y la recupera el componente padre (`Parent`), para poder hacer focus en él gracias al uso de `forwardRef` en el componente hijo (`Button`).

Para la gran mayoría de componentes esto no es necesario pero puede ser útil para sistemas de diseño o componentes de terceros reutilizables.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son las Forward Refs?

- **a)** Un tipo especial de estado.
- **b)** Referencias que apuntan hacia adelante en el tiempo.
- **c)** Una tecnica para acceder a una referencia de un componente hijo desde el padre.
- **d)** Referencias que solo funcionan con clases.

**2.** ¿Que funcion de React se usa para implementar Forward Refs?

- **a)** forwardRef
- **b)** refForward
- **c)** createRef
- **d)** useRef

**3.** ¿En que caso son utiles las Forward Refs?

- **a)** Solo en el servidor.
- **b)** En todos los componentes.
- **c)** En sistemas de diseno o componentes reutilizables de terceros.
- **d)** No tienen uso practico.

---

## ¿Cómo puedo validar el tipo de mis props?

React proporciona una forma de validar el tipo de las props de un componente en tiempo de ejecución y en modo desarrollo. Esto es útil para asegurarnos de que los componentes se están utilizando correctamente.

El paquete se llama `prop-types` y se puede instalar con `npm install prop-types`.

```javascript
import PropTypes from 'prop-types'

function App(props) {
  return <h1>{props.title}</h1>
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}
```

En este ejemplo, estamos validando que la prop `title` sea de tipo `string` y que sea obligatoria.

Existen una colección de _PropTypes_ ya definidas para ayudarte a comprobar los tipos de las props más comunes:

```javascript
PropTypes.number // número
PropTypes.string // string
PropTypes.array // array
PropTypes.object // objeto
PropTypes.bool // un booleano
PropTypes.func // función
PropTypes.node // cualquier cosa renderizable en React, como un número, string, elemento, array, etc.
PropTypes.element // un elemento React
PropTypes.symbol // un Symbol de JavaScript
PropTypes.any // cualquier tipo de dato
```

A todas estas se le puede añadir la propiedad `isRequired` para indicar que es obligatoria.

> Otra opción es usar TypeScript, un lenguaje de programación que compila a JavaScript y que ofrece validación de tipos de forma estática. Ten en cuenta que mientras que TypeScript comprueba los tipos en tiempo de compilación, las PropTypes lo hacen en tiempo de ejecución.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que paquete se usa para validar el tipo de las props en React?

- **a)** No se puede validar props en React.
- **b)** react-validator
- **c)** react-types
- **d)** prop-types

**2.** ¿Como se indica que una prop es obligatoria con PropTypes?

- **a)** Usando PropTypes.mandatory.
- **b)** No se puede hacer obligatoria.
- **c)** Todas las props son obligatorias por defecto.
- **d)** Anadiendo .isRequired al tipo.

**3.** ¿Cuando se ejecuta la validacion de PropTypes?

- **a)** Solo en produccion.
- **b)** En tiempo de ejecucion y solo en modo desarrollo.
- **c)** Nunca se ejecuta automaticamente.
- **d)** En tiempo de compilacion.

---

## ¿Cómo puedo validar las propiedades de un objeto con PropTypes?

Para validar una prop de tipo objeto se suele usar `PropTypes.shape`, donde defines la estructura esperada campo por campo.

Esto es útil para documentar contratos de componente y detectar usos incorrectos en tiempo de ejecución durante desarrollo.

```javascript
import PropTypes from 'prop-types'

function App({ title }) {
  const { text, color } = title
  return <h1 style={{ color }}>{text}</h1>
}

App.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
}
```

Si quieres una validación más estricta (sin permitir propiedades adicionales), puedes usar `PropTypes.exact`.

```javascript
App.propTypes = {
  title: PropTypes.exact({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que propiedad de PropTypes se usa para validar la estructura de un objeto?

- **a)** PropTypes.shape()
- **b)** PropTypes.objectOf()
- **c)** PropTypes.struct()
- **d)** PropTypes.validate()

**2.** ¿Que se define dentro de PropTypes.shape()?

- **a)** Un objeto con las propiedades y sus tipos esperados.
- **b)** Solo funciones.
- **c)** Un array de nombres de propiedades.
- **d)** Un string con la descripcion.

---

## ¿Cómo puedo validar las propiedades de un array con PropTypes?

Para validar arrays en PropTypes se usa `PropTypes.arrayOf`, indicando el tipo que debe tener cada elemento.

Cuando los elementos son objetos, es habitual combinar `arrayOf` con `shape` o `exact`.

```javascript
import PropTypes from 'prop-types'

function App({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.text}>{item.text}</li>
      ))}
    </ul>
  )
}

App.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}
```

En este caso estamos validando que `items` sea un array y que cada uno de sus elementos sea un objeto con la propiedad `text` de tipo `string`. Además, la prop es obligatoria.

Si tu lista necesita campos adicionales (por ejemplo `id`, `text`, `completed`), lo recomendable es declararlos todos para tener una validación más expresiva y detectar errores antes.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que propiedad de PropTypes se usa para validar un array y el tipo de sus elementos?

- **a)** PropTypes.listOf()
- **b)** PropTypes.array()
- **c)** No se puede validar el contenido de arrays.
- **d)** PropTypes.arrayOf()

**2.** ¿Se puede combinar arrayOf con shape para validar arrays de objetos?

- **a)** Si, usando PropTypes.arrayOf(PropTypes.shape({...})).
- **b)** Solo en modo desarrollo.
- **c)** No, son incompatibles.
- **d)** Se necesita una libreria adicional.

---

## ¿Cómo puedo inyectar HTML directamente en un componente de React?

Una de las razones por las que se creó React es para evitar los ataques XSS (_Cross-Site Scripting_), impidiendo que un usuario pueda inyectar código HTML en la página.

Por ello, React al intentar evaluar un string que contiene HTML lo escapa automáticamente. Por ejemplo, si intentamos renderizar el siguiente string:

```javascript
const html = '<h1>My title</h1>'

function App() {
  return <div>{html}</div>
}
```

Veremos que en lugar de renderizar el HTML, lo escapa:

```html
<div>&lt;h1&gt;My title&lt;/h1&gt;</div>
```

Sin embargo, hay ocasiones en las que es necesario inyectar HTML directamente en un componente. Ya sea por traducciones que tenemos, porque viene el HTML desde el servidor y ya viene saneado, o por un componente de terceros.

Para ello, podemos usar la propiedad `dangerouslySetInnerHTML`:

```javascript
const html = '<h1>My title</h1>'

function App() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
```

Ahora sí veremos el HTML renderizado:

```html
<div><h1>My title</h1></div>
```

Como ves, **el nombre ya nos indica que es una propiedad peligrosa y que debemos usarla con cuidado.** Intenta evitarla siempre que puedas y sólo recurre a ella cuando realmente no tengas otra opción.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que propiedad se usa para inyectar HTML directamente en React?

- **a)** htmlContent
- **b)** dangerouslySetInnerHTML
- **c)** setHTML
- **d)** rawHTML

**2.** ¿Por que React escapa el HTML por defecto?

- **a)** Para evitar ataques XSS (Cross-Site Scripting).
- **b)** Solo por convencion.
- **c)** Para mejorar el rendimiento.
- **d)** Porque no soporta HTML.

**3.** ¿Cual es el formato correcto para usar dangerouslySetInnerHTML?

- **a)** dangerouslySetInnerHTML={{ __html: htmlString }}
- **b)** dangerouslySetInnerHTML={{ content: htmlString }}
- **c)** dangerouslySetInnerHTML={{ html: htmlString }}
- **d)** dangerouslySetInnerHTML(htmlString)

---

## ¿Por qué puede ser mala idea pasar siempre todas las props de un objeto a un componente?

Digamos que tenemos un componente `App` que recibe un objeto `props` con todas las props que necesita:

```javascript
function App(props) {
  return <h1>{props.title}</h1>
}
```

Y que tenemos otro componente `Layout` que recibe un objeto `props` con todas las props que necesita:

```javascript
function Layout(props) {
  return (
    <div>
      <App {...props} />
    </div>
  )
}
```

En este caso, `Layout` está pasando todas las props que recibe a `App`. Esto puede ser una mala idea por varias razones:

- Si `Layout` recibe una prop que no necesita, la pasará a `App` y éste puede que no la use. Esto puede ser confuso para el que lea el código.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que sintaxis se usa para pasar todas las props de un objeto a un componente hijo?

- **a)** {...props}
- **b)** [...props]
- **c)** Object.spread(props)
- **d)** passProps(props)

**2.** ¿Por que puede ser mala idea usar {...props} para pasar todas las props a un componente hijo?

- **a)** Solo funciona en produccion.
- **b)** Puede pasar props innecesarias que el componente hijo no usa, lo cual es confuso.
- **c)** Es mas lento que pasar props individuales.
- **d)** Causa errores de compilacion.

**3.** ¿Cual es una mejor practica en lugar de usar {...props} indiscriminadamente?

- **a)** Convertir todas las props a estado global.
- **b)** Nunca usar el operador spread.
- **c)** Usar siempre componentes de clase.
- **d)** Pasar solo las props que el componente hijo realmente necesita.

---

## ¿Cuál es el propósito del atributo "key" en React y por qué es importante usarlo correctamente al renderizar listas de elementos?

El propósito del atributo "key" en React es proporcionar una identificación única a cada elemento en una lista renderizada dinámicamente. Esto permite a React identificar qué elementos han cambiado, añadido o eliminado de la lista cuando se realiza una actualización.

Cuando se renderiza una lista en React sin el atributo "key", React puede tener dificultades para identificar correctamente los cambios en la lista, lo que puede resultar en un comportamiento inesperado, como la re-renderización innecesaria de elementos o la pérdida de estado de los componentes.

Por lo tanto, es importante utilizar el atributo "key" de manera correcta y única para cada elemento de la lista, preferiblemente utilizando identificadores únicos de cada elemento en lugar de índices de array, para garantizar un rendimiento óptimo y un comportamiento predecible en la aplicación.

Ejemplo de cómo utilizar el atributo "key" en React:

```javascript
import React from 'react'

const ListaItems = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.nombre}</li>
      ))}
    </ul>
  )
}

export default ListaItems
```

---


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es el proposito principal del atributo key en React?

- **a)** Acceder al DOM directamente.
- **b)** Ordenar los elementos alfabeticamente.
- **c)** Proporcionar una identificacion unica a cada elemento en una lista.
- **d)** Aplicar estilos CSS a los elementos.

**2.** ¿Que puede ocurrir si no usas el atributo key al renderizar listas?

- **a)** La aplicacion no compila.
- **b)** Re-renderizacion innecesaria de elementos o perdida de estado.
- **c)** Los elementos se ocultan automaticamente.
- **d)** React deja de funcionar completamente.

**3.** ¿Que se recomienda usar como valor para el atributo key?

- **a)** El mismo valor para todos los elementos.
- **b)** Siempre el indice del array.
- **c)** Identificadores unicos de cada elemento en lugar de indices de array.
- **d)** Numeros aleatorios generados con Math.random().

---

## ¿Para qué sirve el hook `useTransition` y cuándo deberías usarlo?

El hook `useTransition` etiqueta como “no urgentes” las actualizaciones que envuelves con `startTransition`, permitiendo que la UI siga respondiendo a interacciones prioritarias mientras React calcula los cambios costosos. Devuelve `[isPending, startTransition]`; `isPending` indica si hay una transición en curso.

```javascript
import { useState, useTransition } from 'react'

function FilterableList({ items }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(items)
  const [isPending, startTransition] = useTransition()

  const handleChange = event => {
    const value = event.target.value
    setQuery(value)
    startTransition(() => {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered)
    })
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Cargando resultados...</p>}
      <ul>
        {results.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}
```

Úsalo cuando una actualización de estado dispara renders pesados (filtrar, ordenar, pintar cientos de filas) y quieres mantener la sensación de fluidez.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que devuelve el hook useTransition?

- **a)** [isPending, startTransition]
- **b)** [state, setState]
- **c)** Una promesa
- **d)** Un valor booleano solamente

**2.** ¿Que hace startTransition?

- **a)** Inicia una animacion CSS.
- **b)** Navega a otra pagina.
- **c)** Cancela todas las actualizaciones pendientes.
- **d)** Etiqueta las actualizaciones envueltas como 'no urgentes'.

**3.** ¿Cuando es recomendable usar useTransition?

- **a)** Solo para formularios.
- **b)** Cuando una actualizacion de estado dispara renders pesados (filtrar, ordenar, muchas filas).
- **c)** Siempre en todos los componentes.
- **d)** Nunca, es un hook experimental.

**4.** ¿Que indica isPending en useTransition?

- **a)** Si el usuario esta interactuando.
- **b)** Si hubo un error en la transicion.
- **c)** Si hay una transicion en curso.
- **d)** El tiempo restante de la transicion.

---

## ¿Para qué sirve el hook `useActionState`?

`useActionState` simplifica el ciclo de vida de formularios que ejecutan Server Actions. Devuelve `[state, action, isPending]`: `state` es la respuesta más reciente, `action` se pasa al `<form action={...}>` y `isPending` indica si hay una petición en curso.

```javascript
'use client'

import { useActionState } from 'react'

async function createTodo(prevState, formData) {
  'use server'
  const title = formData.get('title')
  if (!title) return { error: 'El título es obligatorio' }
  await saveTodoInDb(title)
  return { ok: true }
}

export function TodoForm() {
  const [state, action, isPending] = useActionState(createTodo, { ok: false })

  return (
    <form action={action}>
      <input name='title' placeholder='Comprar leche' />
      <button disabled={isPending}>{isPending ? 'Creando…' : 'Crear'}</button>
      {state.error && <p>{state.error}</p>}
      {state.ok && <p>Todo creado ✅</p>}
    </form>
  )
}
```

Así evitas crear estados manuales para “loading”, errores o resultados.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que devuelve el hook useActionState?

- **a)** Un objeto con error y loading
- **b)** [state, action, isPending]
- **c)** [formData, submit]
- **d)** Solo el estado actual

**2.** ¿Para que se usa principalmente useActionState?

- **a)** Manejar animaciones CSS.
- **b)** Gestionar el estado global de la aplicacion.
- **c)** Simplificar el ciclo de vida de formularios con Server Actions.
- **d)** Validar props de componentes.

**3.** ¿Que guarda el valor 'state' retornado por useActionState?

- **a)** El metodo HTTP utilizado.
- **b)** El estado anterior del componente.
- **c)** El numero de envios del formulario.
- **d)** La respuesta mas reciente del servidor.

**4.** ¿Donde se pasa el 'action' retornado por useActionState?

- **a)** Al atributo action del formulario: <form action={formAction}>
- **b)** A un useEffect.
- **c)** Al Context Provider.
- **d)** A la prop ref del formulario.

---

## ¿Qué problema resuelve el hook `useOptimistic`?

`useOptimistic` permite mostrar datos temporales (optimistas) inmediatamente tras la interacción del usuario, antes de recibir la confirmación del servidor. Devuelve `[optimisticState, addOptimisticValue]` y una función reductora que decide cómo combinar el estado actual con el optimista.

```javascript
'use client'

import { useOptimistic } from 'react'

export function Comments({ initialComments, submitComment }) {
  const [comments, addOptimisticComment] = useOptimistic(
    initialComments,
    (current, optimistic) => [optimistic, ...current]
  )

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = formData.get('message')?.toString() ?? ''
    const id = crypto.randomUUID()

    addOptimisticComment({ id, message, pending: true })
    await submitComment(formData)
    event.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea name='message' />
        <button>Enviar</button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.message} {comment.pending && <small>(enviando…)</small>}
          </li>
        ))}
      </ul>
    </>
  )
}
```

Si la acción falla, deberás revertir manualmente el estado optimista (por ejemplo, eliminando el comentario temporal y mostrando un error).


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que devuelve el hook useOptimistic?

- **a)** [pending, startOptimistic]
- **b)** Un valor booleano
- **c)** [state, setState]
- **d)** [optimisticValue, addOptimistic]

**2.** ¿Que problema resuelve useOptimistic?

- **a)** Mostrar un estado optimista en la UI mientras una accion asincrona se completa.
- **b)** Optimizar el rendimiento de renderizado.
- **c)** Crear rutas dinamicas.
- **d)** Manejar errores del servidor.

**3.** ¿Cuando es recomendable usar useOptimistic?

- **a)** Siempre en todos los componentes.
- **b)** Nunca, es un hook experimental.
- **c)** Cuando quieres evitar parpadeos o latencias perceptibles (likes, toggles, formularios simples).
- **d)** Solo para operaciones de base de datos complejas.

**4.** ¿Que hace addOptimistic en useOptimistic?

- **a)** Aplica un cambio inmediato (optimista) antes de la confirmacion del servidor.
- **b)** Guarda el estado en localStorage.
- **c)** Cancela la operacion en curso.
- **d)** Envia datos al servidor.

---

## ¿Cómo funciona el hook `useFormStatus` y qué aporta junto a las Server Actions?

`useFormStatus` (desde `react-dom`) expone el estado de envío del formulario que lo contiene: `pending`, `action`, `method` y el `formData` más reciente. Es ideal para deshabilitar botones o mostrar feedback sin levantar estados en el componente padre.

```javascript
'use client'

import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending}>{pending ? 'Guardando…' : 'Guardar'}</button>
  )
}

export function ProfileForm({ updateProfile }) {
  return (
    <form action={updateProfile}>
      <input name='name' />
      <SubmitButton />
    </form>
  )
}
```

Cada botón o indicador dentro del formulario accede al mismo estado sin necesidad de prop drilling.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que devuelve el hook useFormStatus?

- **a)** Un valor booleano
- **b)** [state, setState]
- **c)** { pending, data, method, action }
- **d)** { loading, error, success }

**2.** ¿De donde proviene useFormStatus?

- **a)** react-hook-form
- **b)** next/forms
- **c)** formik
- **d)** react-dom

**3.** ¿Que indica la propiedad 'pending' de useFormStatus?

- **a)** El tiempo restante para enviar.
- **b)** Si el usuario esta escribiendo.
- **c)** Si el formulario tiene errores.
- **d)** Si hay una peticion en curso.

**4.** ¿De que formulario lee el estado useFormStatus?

- **a)** Del <form> mas cercano que ejecuta una Server Action.
- **b)** Del primer formulario del DOM.
- **c)** De ningun formulario, crea uno virtual.
- **d)** Del formulario especificado manualmente.

---

## ¿Qué es el hook `useFormState` y cuándo conviene usarlo?

`useFormState` enlaza el resultado más reciente de una Server Action con la UI del formulario. Recibe la acción y el estado inicial y devuelve `[state, formAction]`. Es perfecto para mostrar mensajes de error o éxito justo después del envío.

```javascript
'use client'

import { useFormState } from 'react-dom'

async function updatePassword(prevState, formData) {
  'use server'
  const password = formData.get('password')?.toString() ?? ''
  if (password.length < 12) {
    return { error: 'Debe tener al menos 12 caracteres' }
  }
  await savePassword(password)
  return { success: true }
}

export function PasswordForm() {
  const [state, action] = useFormState(updatePassword, { success: false })

  return (
    <form action={action}>
      <input name='password' type='password' />
      <button>Cambiar contraseña</button>
      {state.error && <p>{state.error}</p>}
      {state.success && <p>Contraseña actualizada ✅</p>}
    </form>
  )
}
```

Mantienes toda la lógica de validación en el servidor mientras la UI reacciona al instante.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que devuelve el hook useFormState?

- **a)** [state, setState]
- **b)** { pending, data }
- **c)** Una promesa
- **d)** [state, formAction]

**2.** ¿Que representa 'state' en useFormState?

- **a)** La URL del endpoint.
- **b)** El resultado acumulado de la Server Action.
- **c)** Los errores de validacion.
- **d)** El metodo HTTP usado.

**3.** ¿Cuando conviene usar useFormState?

- **a)** Cuando quieres manejar el estado de un formulario ligado a una Server Action sin handlers manuales.
- **b)** Siempre en todos los formularios.
- **c)** Unicamente en componentes de clase.
- **d)** Nunca, esta deprecado.

**4.** ¿Que hook se usa junto a useFormState para mostrar estados de carga?

- **a)** useTransition
- **b)** useEffect
- **c)** usePending
- **d)** useFormStatus

---

## ¿Qué son las Server Actions y cómo se usan con formularios en React?

Las Server Actions son funciones marcadas con `'use server'` que React ejecuta en el backend. Pueden acceder a bases de datos, secretos o SDKs privados y se integran directamente con formularios y botones.

```javascript
'use server'

export async function createPost(formData) {
  const title = formData.get('title')
  await db.post.create({ data: { title } })
}

;('use client')
import { createPost } from './actions'

export function PostForm() {
  return (
    <form action={createPost}>
      <input name='title' />
      <button>Publicar</button>
    </form>
  )
}
```

Cuando envías el formulario, React serializa el `FormData`, ejecuta la acción en el servidor y retorna la respuesta al cliente sin que tengas que crear endpoints manuales.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son las Server Actions?

- **a)** Middlewares de Express.
- **b)** Hooks para manejar peticiones HTTP.
- **c)** Rutas API en Next.js.
- **d)** Funciones marcadas con 'use server' que React ejecuta en el backend.

**2.** ¿Que directiva se usa para marcar una Server Action?

- **a)** 'use server'
- **b)** 'use action'
- **c)** @server
- **d)** export server

**3.** ¿Como se conecta una Server Action a un formulario?

- **a)** Pasando la funcion al atributo action del formulario: <form action={createPost}>
- **b)** No se pueden usar con formularios.
- **c)** Llamando a fetch manualmente.
- **d)** Usando onSubmit={createPost}.

**4.** ¿A que pueden acceder las Server Actions?

- **a)** Bases de datos, secretos y SDKs privados del servidor.
- **b)** Solo al localStorage del navegador.
- **c)** Solo a cookies del cliente.
- **d)** Unicamente a APIs publicas.

---

## ¿Cuál es la diferencia entre la prop `action` y el atributo `formAction` en React/Next.js?

- `action` en un `<form>` define la acción predeterminada para todo el formulario (Enter o botón por defecto).
- `formAction` en un `<button>` o `<input type='submit'>` sobrescribe la acción solo para ese control. Es ideal cuando un mismo formulario puede “Publicar” o “Guardar borrador”.

```javascript
'use client'

import { publishPost, saveDraft } from './actions'

export function EditorForm() {
  return (
    <form action={publishPost}>
      <textarea name='content' />
      <button>Publicar</button>
      <button type='submit' formAction={saveDraft}>
        Guardar borrador
      </button>
    </form>
  )
}
```

Ambas props aceptan una URL o una Server Action; elige `formAction` para botones alternativos sin duplicar formularios.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que define la prop 'action' en un <form>?

- **a)** El estilo del formulario.
- **b)** Solo la accion del primer boton.
- **c)** La accion predeterminada para todo el formulario.
- **d)** La validacion de campos.

**2.** ¿Que hace el atributo formAction en un <button>?

- **a)** Aplica estilos al boton.
- **b)** No existe ese atributo.
- **c)** Sobrescribe la accion solo para ese boton.
- **d)** Previene el submit del formulario.

**3.** ¿Cuando es util usar formAction?

- **a)** Solo con GET requests.
- **b)** Cuando un mismo formulario tiene botones con acciones diferentes (ej: 'Publicar' y 'Guardar borrador').
- **c)** Nunca, esta deprecado.
- **d)** Solo para formularios de login.

---

## ¿Qué diferencia hay entre componentes de servidor y componentes de cliente en React/Next.js?

Los componentes de servidor se renderizan en el backend, pueden acceder a datos protegidos y devuelven HTML y payloads serializados. No pueden usar hooks del navegador (`useState`, `useEffect`). Los componentes de cliente se ejecutan en el navegador, escuchan eventos y pueden usar todos los hooks tradicionales.

Para marcar un archivo como componente de cliente añade `'use client'` en la primera línea. Las Server Actions usan `'use server'` dentro de la función. Combinar ambos tipos te permite cargar datos en el servidor y mantener la interactividad solo donde es necesaria, reduciendo el JavaScript que llega al cliente.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Donde se renderizan los componentes de servidor?

- **a)** En el backend.
- **b)** En una CDN.
- **c)** En ambos lugares.
- **d)** En un Web Worker.

**2.** ¿Que hooks NO pueden usar los componentes de servidor?

- **a)** Todos los hooks.
- **b)** Solo useCallback.
- **c)** Solo useRef.
- **d)** useState y useEffect.

**3.** ¿Como se marca un archivo como componente de cliente?

- **a)** Exportando con 'export client'.
- **b)** Usando la extension .client.jsx.
- **c)** Anadiendo 'use client' en la primera linea.
- **d)** No se pueden crear componentes de cliente.

**4.** ¿Cual es una ventaja de combinar componentes de servidor y cliente?

- **a)** No hay ninguna ventaja.
- **b)** Reducir el JavaScript que llega al cliente manteniendo interactividad donde es necesaria.
- **c)** Aumenta la complejidad sin beneficios.
- **d)** Solo sirve para aplicaciones pequenas.

---

## ¿Para qué sirve el hook `useSyncExternalStore`?

`useSyncExternalStore` conecta React con una fuente de datos externa (Redux, Zustand, APIs del navegador) ofreciendo lecturas consistentes en renderizados concurrentes y durante la hidratación.

```javascript
import { useSyncExternalStore } from 'react'

function subscribe(callback) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeIndicator() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false)
  return <p>Modo {isDark ? 'oscuro' : 'claro'}</p>
}
```

Si renderizas en el servidor, proporciona un tercer argumento (`getServerSnapshot`) para evitar discrepancias entre el HTML inicial y la hidratación.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que sirve useSyncExternalStore?

- **a)** Gestionar WebSockets.
- **b)** Crear animaciones sincronizadas.
- **c)** Conectar React con una fuente de datos externa (Redux, Zustand, APIs del navegador).
- **d)** Sincronizar el estado con el servidor.

**2.** ¿Cuantos argumentos principales recibe useSyncExternalStore?

- **a)** Solo la URL del store externo.
- **b)** Tres: subscribe, getSnapshot y getServerSnapshot (opcional).
- **c)** Dos: estado inicial y reducer.
- **d)** Cuatro: subscribe, unsubscribe, get y set.

**3.** ¿Para que sirve el tercer argumento (getServerSnapshot)?

- **a)** Validar los datos del store.
- **b)** Enviar datos al servidor.
- **c)** No tiene ninguna funcion especifica.
- **d)** Evitar discrepancias entre el HTML inicial y la hidratacion en SSR.

**4.** ¿Que ventaja ofrece useSyncExternalStore en renderizados concurrentes?

- **a)** Solo funciona en modo desarrollo.
- **b)** Mayor velocidad de renderizado.
- **c)** Lecturas consistentes durante los renders.
- **d)** Animaciones mas fluidas.

---

## ¿Cómo funciona `React.memo` y cuándo es útil?

`React.memo` memoriza el resultado de un componente funcional y solo lo vuelve a renderizar si sus props cambian tras una comparación superficial. Es útil para componentes que renderizan listas grandes o cálculos pesados con props estables.

```javascript
const PriceTag = React.memo(function PriceTag({ value, currency }) {
  return (
    <span>
      {value.toLocaleString('es-ES', { style: 'currency', currency })}
    </span>
  )
})

export function Cart({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} <PriceTag value={item.price} currency='EUR' />
        </li>
      ))}
    </ul>
  )
}
```

Combínalo con `useCallback` o `useMemo` para mantener estables las props de tipo función u objeto y evitar renders innecesarios.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que hace React.memo?

- **a)** Convierte el componente en clase.
- **b)** Memoriza el estado del componente.
- **c)** Memoriza el resultado de un componente y solo lo re-renderiza si sus props cambian.
- **d)** Guarda el componente en localStorage.

**2.** ¿Que tipo de comparacion usa React.memo por defecto?

- **a)** Comparacion por referencia estricta.
- **b)** Comparacion profunda (deep comparison).
- **c)** Ninguna comparacion.
- **d)** Comparacion superficial (shallow comparison).

**3.** ¿Cuando es util usar React.memo?

- **a)** Siempre en todos los componentes.
- **b)** Solo para manejar formularios.
- **c)** Solo en modo desarrollo.
- **d)** Para componentes que renderizan listas grandes o calculos pesados con props estables.

**4.** ¿Con que hooks se recomienda combinar React.memo para evitar renders innecesarios?

- **a)** Solo useEffect.
- **b)** No se combina con ningun hook.
- **c)** useCallback y useMemo para mantener estables funciones y objetos.
- **d)** Solo useState.

---

## ¿Qué diferencia hay entre `ReactDOM.render`, `createRoot` y `hydrateRoot`?

- `ReactDOM.render` es la API legacy previa a React 18; no habilita las capacidades concurrentes y está en desuso.
- `createRoot` crea un root concurrente en el cliente: `const root = createRoot(container); root.render(<App />);`. Activa características como `useTransition`, `Suspense` para datos o el batching automático.
- `hydrateRoot` conecta HTML generado en el servidor con React en el cliente manteniendo el DOM existente, imprescindible para SSR y streaming.

En proyectos nuevos usa siempre `createRoot` o `hydrateRoot`; `ReactDOM.render` solo se mantiene por compatibilidad y desaparecerá en futuras versiones.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es el estado actual de ReactDOM.render?

- **a)** Es la forma recomendada actualmente.
- **b)** Es la API legacy previa a React 18, esta en desuso.
- **c)** Solo funciona con TypeScript.
- **d)** No existe ese metodo.

**2.** ¿Que caracteristicas activa createRoot?

- **a)** Ninguna caracteristica especial.
- **b)** Solo hooks basicos.
- **c)** useTransition, Suspense para datos y batching automatico.
- **d)** Solo TypeScript support.

**3.** ¿Para que se usa hydrateRoot?

- **a)** Optimizar el rendimiento del DOM.
- **b)** Crear componentes de servidor.
- **c)** No existe ese metodo.
- **d)** Conectar HTML generado en el servidor con React en el cliente manteniendo el DOM existente.

**4.** ¿Que metodos se recomiendan usar en proyectos nuevos?

- **a)** createRoot o hydrateRoot.
- **b)** mountRoot y unmountRoot.
- **c)** Solo document.getElementById.
- **d)** Ninguno, se usa JSX directamente.

---

## ¿Qué provoca un re-render en un componente de React?

Un componente se vuelve a renderizar cuando React considera que su salida puede haber cambiado. Las causas más habituales:

1. **Cambia su estado** (`useState`, `useReducer`).
2. **Cambia una prop** que recibe del padre.
3. **Cambia el valor de un contexto** que consume (`useContext`).
4. **El padre se re-renderiza** y vuelve a crear el elemento hijo (salvo que el hijo esté memoizado y sus props sean estables).

Importante:

- Renderizar **no es lo mismo** que tocar el DOM: React puede reconciliar y no mutar nodos.
- Actualizar una ref (`useRef`) **no** provoca re-render.
- Mutar el estado sin crear una nueva referencia puede **impedir** el re-render esperado.

Para depurar re-renders usa React DevTools (Profiler / highlight updates) y pregunta siempre: _“¿qué dato cambió y por qué este componente lo lee?”_.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué provoca un re-render en un componente?

- **a)** Usar console.log en el render.
- **b)** Solo cambiar una variable let local sin setState.
- **c)** Importar un módulo estático.
- **d)** Cambios de estado, props, contexto consumido o re-render del padre (sin memoización).

**2.** ¿Actualizar useRef provoca re-render?

- **a)** Sí, siempre en el siguiente frame.
- **b)** Solo en StrictMode.
- **c)** Sí, pero únicamente en Server Components.
- **d)** No; cambiar .current no dispara un re-render por sí solo.

**3.** ¿Re-render implica siempre mutar el DOM?

- **a)** Sí; invalida todas las cookies.
- **b)** No; React puede reconciliar y no aplicar cambios al DOM si el resultado es igual.
- **c)** Sí; vacía el localStorage.
- **d)** Sí; obliga a recargar la página.

---

## ¿Qué es el batching de actualizaciones de estado en React?

El **batching** agrupa varias actualizaciones de estado en un **único re-render**. Así evitas renders intermedios costosos.

Desde React 18 el batching es **automático también dentro de promesas, timeouts y manejadores nativos**, no solo en eventos de React:

```javascript
function handleClick() {
  setCount(c => c + 1)
  setFlag(f => !f)
  // Un solo re-render con ambos estados actualizados
}

setTimeout(() => {
  setCount(c => c + 1)
  setFlag(f => !f)
  // También se agrupan (React 18+)
}, 0)
```

Si en un caso muy concreto necesitas forzar un flush síncrono (por ejemplo leer el DOM justo después), usa `flushSync` de `react-dom`, sabiendo que puede degradar el rendimiento.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es el batching de actualizaciones?

- **a)** Agrupar imports dinámicos en un solo chunk.
- **b)** Enviar el estado al servidor en lotes de red.
- **c)** Agrupar varios setState en un único re-render.
- **d)** Unir varios CSS en un archivo.

**2.** ¿Qué cambió con React 18 respecto al batching?

- **a)** El batching automático también aplica en promesas, timeouts y handlers nativos.
- **b)** Impide usar useEffect.
- **c)** Obliga a usar Redux para cualquier setState.
- **d)** Solo funciona dentro de class components.

**3.** ¿Cómo forzar un flush síncrono si lo necesitas?

- **a)** Con useLayoutEffect vacío sin deps.
- **b)** Con flushSync de react-dom.
- **c)** Con React.sync().
- **d)** Con document.reflow().

---

## ¿Qué es `Suspense` en React y para qué se usa?

`Suspense` permite mostrar un **fallback** mientras un hijo “espera” algo: código cargado con `React.lazy`, o datos con APIs que se integran con Suspense (por ejemplo `use` con promesas, o frameworks como Next.js/Remix).

```javascript
import { lazy, Suspense } from 'react'

const Comments = lazy(() => import('./Comments'))

function Post() {
  return (
    <article>
      <h1>Artículo</h1>
      <Suspense fallback={<p>Cargando comentarios…</p>}>
        <Comments />
      </Suspense>
    </article>
  )
}
```

Ideas clave:

- El fallback se muestra **hasta que el árbol hijo puede renderizarse**.
- Puedes anidar varios límites de `Suspense` para granular la UX (spinner solo en una sección).
- Se combina bien con streaming SSR y con Error Boundaries (Suspense no sustituye el manejo de errores).


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para qué sirve Suspense?

- **a)** Mostrar un fallback mientras un hijo espera código o datos.
- **b)** Gestionar cookies HttpOnly.
- **c)** Sustituir por completo a los Error Boundaries.
- **d)** Definir rutas del servidor automáticamente.

**2.** ¿Qué prop usa Suspense para la UI de carga?

- **a)** spinner
- **b)** pending
- **c)** fallback
- **d)** loading

**3.** ¿Con qué se combina a menudo React.lazy?

- **a)** Con un límite de Suspense alrededor del componente lazy.
- **b)** Con innerHTML del root.
- **c)** Solo con class components.
- **d)** Con eval del código del chunk.

---

## ¿Qué es la reconciliación (reconciliation) en React?

La **reconciliación** es el proceso por el que React compara el árbol de elementos anterior con el nuevo y decide **qué nodos del DOM actualizar, crear o eliminar**.

Reglas importantes que usa React:

- Si el **tipo de elemento cambia** (`div` → `span`, o un componente por otro), desmonta el árbol viejo y monta uno nuevo.
- Si el tipo es el mismo, **reutiliza** el nodo y actualiza solo props/atributos que cambiaron.
- En **listas**, la prop `key` ayuda a identificar cada hijo entre renders y evitar reutilizar el componente equivocado.

Por eso las keys deben ser **estables e identificativas** (un id), no el índice si la lista se reordena, y nunca un valor aleatorio en cada render.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es la reconciliación?

- **a)** La sincronización de la base de datos con el cliente.
- **b)** El tree-shaking de imports no usados.
- **c)** El proceso de comparar el árbol anterior y el nuevo para actualizar el DOM de forma eficiente.
- **d)** La generación de source maps.

**2.** ¿Qué ayuda a identificar ítems de una lista entre renders?

- **a)** El atributo id HTML aleatorio en cada render.
- **b)** La prop key estable e identificativa.
- **c)** La prop ref en cada li.
- **d)** No usar keys nunca.

**3.** Si cambia el tipo de un elemento (div → span), React…

- **a)** Convierte el span en Web Component.
- **b)** Solo cambia el tag name sin tocar hijos nunca.
- **c)** Lanza un error y detiene la app.
- **d)** Desmonta el árbol viejo y monta uno nuevo.

---

## ¿Qué es el estado derivado y por qué conviene calcularlo en el render?

El **estado derivado** es un valor que se puede obtener a partir de props u otro estado ya existente. En la mayoría de casos **no debes guardarlo en un `useState` aparte**: calcúlalo durante el render.

```javascript
// ❌ Redundante y propenso a desincronizarse
const [items, setItems] = useState([])
const [count, setCount] = useState(0)
// hay que recordar actualizar count cada vez que cambia items

// ✅ Derivado en render
const [items, setItems] = useState([])
const count = items.length
const expensive = useMemo(() => compute(items), [items]) // solo si es costoso
```

Ventajas: menos bugs de sincronización, menos renders por dobles `setState`, y la fuente de verdad es única.

Usa estado solo para datos **independientes** que cambian con el tiempo por interacción o efectos; todo lo demás, derívalo.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es el estado derivado?

- **a)** Un valor que se puede calcular a partir de props u otro estado ya existente.
- **b)** Estado que React elimina automáticamente.
- **c)** El resultado de useEffect sin más.
- **d)** Estado que solo vive en el servidor.

**2.** ¿Por qué conviene calcularlo en el render en lugar de guardarlo en useState?

- **a)** Evita desincronización y dobles actualizaciones; hay una sola fuente de verdad.
- **b)** Porque el render es más lento siempre si calculas.
- **c)** Porque así se desactiva StrictMode.
- **d)** Porque el Virtual DOM lo exige por ley.

**3.** Si el cálculo derivado es muy costoso, ¿qué puedes usar?

- **a)** Un while(true) para cachear.
- **b)** useMemo con las dependencias correctas.
- **c)** document.write del resultado.
- **d)** Mutar el estado dentro del render.

---

## ¿Qué es una *stale closure* y cómo afecta a los hooks?

Una **stale closure** (clausura obsoleta) ocurre cuando una función “recuerda” valores de un render anterior en lugar de los más recientes. Es un clásico con `useEffect`, `setTimeout`, suscripciones o callbacks memorizados.

```javascript
function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      // ❌ puede leer siempre el count inicial (0)
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(id)
  }, []) // deps vacías → la función captura count=0

  // ✅ forma funcional: siempre parte del valor actual
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])
}
```

Cómo evitarlas:

- Incluye en el array de dependencias todo valor reactivo que uses.
- Prefiere la forma funcional de `setState` cuando actualices basándote en el valor anterior.
- Para lecturas “siempre frescas” sin re-subscribir, a veces se usa un ref (`useRef`) o patrones más avanzados.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es una stale closure?

- **a)** Una función que captura valores de un render anterior en lugar de los actuales.
- **b)** Un warning de PropTypes.
- **c)** Un memory leak del garbage collector de V8.
- **d)** Una key duplicada en una lista.

**2.** ¿Dónde aparecen a menudo las stale closures?

- **a)** Solo al importar CSS Modules.
- **b)** En useEffect, setInterval, suscripciones o callbacks con deps incompletas.
- **c)** Solo al usar className.
- **d)** Únicamente en Server Components sin JS.

**3.** ¿Cómo evitas una stale closure al incrementar un contador en un interval?

- **a)** Usar la forma funcional setCount(c => c + 1) o incluir count en las deps.
- **b)** Usar var en lugar de const.
- **c)** Poner el interval fuera de React en window sin cleanup.
- **d)** Usar innerHTML del contador.

---

## ¿Cómo puedes evitar re-renders innecesarios al usar Context?

El Context es práctico, pero **cualquier cambio en el `value` del Provider re-renderiza a todos los consumidores**, aunque solo usen una parte del valor.

Estrategias habituales:

1. **Partir el contexto**: uno para datos que cambian poco (tema, user) y otro para acciones/dispatch estables.
2. **Memoizar el value** del Provider para no crear un objeto nuevo en cada render del padre.
3. **Colocar el estado cerca** de quien lo necesita (no subas al contexto global lo que solo usan dos componentes).
4. En casos extremos, bibliotecas de estado con suscripciones selectivas (Zustand, Jotai, Redux) o `useSyncExternalStore`.

```javascript
const value = useMemo(
  () => ({ user, login, logout }),
  [user] // login/logout con useCallback estables
)

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
```

Si el contexto cambia muy a menudo (input en cada tecla), casi seguro no debería vivir en un Provider de alto nivel.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué ocurre si cambia el value del Provider?

- **a)** Nada; el contexto no provoca renders.
- **b)** React ignora a los consumidores.
- **c)** Se re-renderizan todos los consumidores de ese contexto.
- **d)** Solo se actualiza el Virtual DOM en disco.

**2.** ¿Qué estrategia reduce re-renders con Context?

- **a)** Consumir el contexto en cada componente hoja sin necesidad.
- **b)** Partir contextos, memoizar el value y no subir estado que cambia muy a menudo.
- **c)** Crear un objeto value nuevo en cada render a propósito.
- **d)** Usar Math.random() en el value.

**3.** ¿Por qué es mala idea un input controlado global en Context de alto nivel?

- **a)** Porque useState no funciona con inputs.
- **b)** Porque HTML prohíbe value en input.
- **c)** Porque cada tecla cambia el value y re-renderiza a todos los consumidores.
- **d)** Porque Context no admite strings.

---

## ¿Qué es `React.lazy` y cómo se combina con `Suspense`?

`React.lazy` permite **cargar un componente bajo demanda** (code splitting) con un import dinámico. Debe envolver el resultado en un límite de `Suspense` que muestre un fallback mientras llega el chunk.

```javascript
import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./Dashboard'))

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  )
}
```

Notas:

- Tradicionalmente el módulo debe exportar el componente por **default** (o adaptar el import).
- Ideal para rutas o paneles pesados que no se ven en el primer paint.
- En SSR el code splitting con `lazy` requiere soporte del framework o alternativas; en apps 100 % cliente es directo.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué hace React.lazy?

- **a)** Crea un portal a document.body.
- **b)** Memoiza un componente para evitar re-renders.
- **c)** Carga un componente bajo demanda con import dinámico (code splitting).
- **d)** Registra un Service Worker.

**2.** ¿Qué necesitas alrededor de un componente lazy?

- **a)** Un iframe.
- **b)** Un Worker dedicado.
- **c)** ReactDOM.render legacy.
- **d)** Un Suspense con fallback mientras carga el chunk.

**3.** ¿Para qué casos es ideal React.lazy?

- **a)** Rutas o paneles pesados que no hacen falta en el primer paint.
- **b)** Evitar usar keys en listas.
- **c)** Hacer SSR sin framework sin ninguna consideración extra.
- **d)** Cada botón y cada span de la app.

---

## ¿Qué es `startTransition` y en qué se diferencia de actualizar el estado de forma normal?

`startTransition` marca una actualización de estado como **no urgente**. React puede interrumpirla o posponerla para mantener prioritarias las interacciones del usuario (escribir en un input, clic).

```javascript
import { useState, startTransition } from 'react'

function Search({ items }) {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(items)

  function onChange(e) {
    const value = e.target.value
    setQuery(value) // urgente: el input no debe ir retrasado
    startTransition(() => {
      setFiltered(items.filter(i => i.includes(value))) // no urgente
    })
  }

  return (
    <>
      <input value={query} onChange={onChange} />
      <List items={filtered} />
    </>
  )
}
```

Diferencias con un `setState` normal:

- Las actualizaciones urgentes se sienten instantáneas.
- Las de transición pueden quedar “atrás” o mostrarse con `isPending` vía `useTransition`.
- No sustituye a `useMemo`/`useCallback`; ataca otro problema: **prioridad del render**.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué hace startTransition?

- **a)** Marca una actualización de estado como no urgente / de menor prioridad.
- **b)** Fuerza un re-render síncrono inmediato siempre.
- **c)** Inicia una animación CSS automáticamente.
- **d)** Cancela todas las promesas pendientes.

**2.** En un buscador, ¿qué suele ser urgente y qué no?

- **a)** Nada debe ser transición nunca.
- **b)** Solo las animaciones de CSS son urgentes.
- **c)** Las Server Actions no pueden ir con el input.
- **d)** Urgente: el valor del input. No urgente: filtrar una lista grande.

**3.** ¿startTransition sustituye a useMemo?

- **a)** Sí; reemplaza a Context.
- **b)** Sí; y también sustituye a useEffect.
- **c)** Sí; es un alias de useCallback.
- **d)** No; atacan problemas distintos (prioridad vs memorizar valores).

---

## ¿En React 19 se necesita todavía `forwardRef`?

En la mayoría de casos **ya no**. Desde React 19, `ref` es una **prop normal** en componentes de función: puedes recibirla y asignarla sin `forwardRef`.

```javascript
// React 19+
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />
}

// Antes (sigue funcionando)
const InputLegacy = forwardRef(function Input(props, ref) {
  return <input ref={ref} {...props} />
})
```

`forwardRef` se mantiene por **compatibilidad** con código y librerías antiguas. En código nuevo, prefieren la prop `ref` directa. Para APIs imperativas expuestas al padre, sigue siendo útil `useImperativeHandle` junto a esa ref.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** En React 19, ¿ref en un componente de función…?

- **a)** Debe ser siempre un string.
- **b)** Está prohibida y lanza error siempre.
- **c)** Solo funciona en class components.
- **d)** Puede recibirse como prop normal sin forwardRef en la mayoría de casos.

**2.** ¿Para qué se mantiene forwardRef?

- **a)** Es necesario para JSX.
- **b)** Por compatibilidad con código y librerías antiguas.
- **c)** Es obligatorio en todos los hooks.
- **d)** Sustituye a useEffect.

**3.** Si quieres exponer métodos imperativos al padre, ¿qué hook ayuda?

- **a)** useDeferredValue.
- **b)** useDebugValue solamente.
- **c)** useImperativeHandle junto a una ref.
- **d)** useFormStatus.

---


{pagebreak}

## Solucionario

*Comprueba tus respuestas cuando hayas terminado las preguntas del capítulo.*

### ¿Cómo crear un hook personalizado (_custom hook_)?

1. **d)** El nombre debe empezar con la palabra 'use'.
2. **d)** Para reutilizar logica en diferentes componentes.
3. **a)** Otros hooks como useState, useEffect, etc.
4. **a)** Cualquier valor: objetos, arrays, funciones, valores primitivos, etc.

### ¿Cuántos `useEffect` puede tener un componente?

1. **b)** Tantos como queramos, no hay limite.
2. **b)** Cuando se renderiza el componente o cuando cambian sus dependencias.

### ¿Cómo podemos ejecutar código cuando el componente se desmonta del árbol?

1. **c)** Retornando una funcion dentro del useEffect.
2. **c)** Para limpiar recursos como eventos del navegador o cancelar peticiones a APIs.
3. **b)** Cuando el componente se desmonta del arbol de componentes.

### Cómo puedes cancelar una petición a una API en `useEffect` correctamente

1. **a)** AbortController
2. **b)** En la funcion de limpieza (cleanup) del useEffect.
3. **a)** AbortError
4. **b)** signal

### ¿Cuáles son las reglas de los hooks en React?

1. **b)** Solo en componentes funcionales o custom hooks.
2. **d)** Solo en el nivel superior, no dentro de bucles, condicionales o funciones anidadas.
3. **c)** Porque React necesita que los hooks se llamen en el mismo orden en cada render.
4. **c)** Dos reglas fundamentales.

### ¿Qué diferencia hay entre `useEffect` y `useLayoutEffect`?

1. **c)** De forma sincrona inmediatamente despues de que React actualice el DOM.
2. **b)** useEffect, porque tiene mejor rendimiento al no bloquear el renderizado.
3. **d)** Cuando necesitas acceder a las dimensiones o posicion de un elemento del DOM.
4. **c)** El momento en que se ejecutan: useLayoutEffect es sincrono y useEffect es asincrono.

### ¿Qué son mejores los componentes de clase o los componentes funcionales?

1. **d)** React 16.8.0, con la introduccion de los hooks.
2. **c)** Son mas sencillos de leer y escribir, y pueden tener mejor rendimiento.
3. **b)** Solo en componentes funcionales.
4. **c)** Permiten reutilizar logica entre componentes.

### ¿Cómo mantener los componentes puros y qué ventajas tiene?

1. **d)** No tiene estado y no tiene efectos secundarios.
2. **a)** Son mas faciles de testear, mantener y entender.
3. **c)** Renderizar la interfaz.

### ¿Qué es la hidratación (hydration) en React?

1. **d)** El proceso de convertir HTML estatico del servidor en un arbol de componentes interactivo en el cliente.
2. **c)** No tiene interactividad, ni eventos, ni logica, ni estado.
3. **b)** Reutiliza el HTML, adjunta eventos, ejecuta efectos y concilia el estado.

### ¿Qué es el Server Side Rendering y qué ventajas tiene?

1. **a)** Una tecnica que renderiza el HTML en el servidor y lo envia al cliente.
2. **c)** Mejora la experiencia de usuario y mejora el SEO.
3. **d)** Que el usuario vea la interfaz antes de que se cargue el JavaScript.

### ¿Cómo puedes crear un Server Side Rendering con React desde cero?

1. **d)** react-dom/server
2. **d)** renderToString
3. **c)** data-reactroot

### ¿Puedes poner un ejemplo de efectos colaterales en React?

1. **a)** Cuando un componente manipula o lee informacion que no esta dentro de su ambito.
2. **a)** Porque hacen imposible predecir que renderizara el componente.
3. **a)** Modificar una variable externa al componente durante el renderizado.

### ¿Qué diferencia hay entre componentes controlados y no controlados? ¿Qué ventajas y desventajas tienen?

1. **d)** Tiene un estado que controla el valor del componente.
2. **a)** Son mas faciles de testear y permiten crear validaciones facilmente.
3. **a)** Mejor rendimiento porque no se re-renderizan al cambiar el valor.
4. **b)** Usando una ref para acceder al DOM (inputRef.current.value).

### ¿Qué son los High Order Components (HOC)?

1. **b)** Una funcion que recibe un componente como parametro y devuelve un componente.
2. **a)** Para reutilizar codigo e inyectar funcionalidad, estilos u otras cosas a un componente.
3. **a)** Se han vuelto menos populares, aunque todavia se usan en algunos casos.

### ¿Qué son las render props?

1. **a)** Un patron de diseno que permite reutilizar codigo e inyectar informacion en el renderizado.
2. **b)** Una funcion que indica que debe renderizar usando la informacion que recibe como parametro.
3. **b)** Con la prop children.
4. **c)** react-router, formik y react-motion.

### ¿Por qué no podemos usar un `if` en el renderizado de un componente?

1. **b)** Porque if es una declaracion, no una expresion, y JSX solo admite expresiones.
2. **b)** Operadores ternarios, que si son expresiones.
3. **b)** Las expresiones devuelven un valor, las declaraciones no.
4. **b)** for, while y switch.

### ¿Por qué debemos utilizar una función para actualizar el estado de React?

1. **c)** Porque el estado debe ser inmutable y React necesita saber cuando re-renderizar.
2. **b)** De forma asincrona, cuando React lo considere oportuno.
3. **d)** Que la integridad de la UI respecto a los datos que renderiza siempre es correcta.

### ¿Qué es el ciclo de vida de un componente en React?

1. **a)** Montaje, actualizacion y desmontaje.
2. **c)** componentDidMount
3. **b)** componentWillUnmount
4. **a)** constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount

### ¿Por qué puede ser mala práctica usar el `index` como key en un listado de React?

1. **a)** Para saber que elementos han cambiado, han sido anadidos o eliminados.
2. **a)** Cuando la lista se reordena o se eliminan elementos.
3. **b)** React usa el indice del elemento como key por defecto.
4. **a)** Un identificador unico y estable para cada elemento.

### ¿Para qué sirve el hook `useMemo`?

1. **b)** Para memorizar el resultado de una funcion y evitar recalculos innecesarios.
2. **a)** Una funcion y un array de dependencias.
3. **d)** Cuando el componente se renderiza por primera vez y cuando cambian las dependencias.
4. **b)** Evita recalcular valores costosos si las dependencias no han cambiado.

### ¿Es buena idea usar siempre `useMemo` para optimizar nuestros componentes?

1. **b)** No, a veces el calculo es tan rapido que no merece la pena memorizarlo.
2. **b)** Puede ser mas lento memorizarlo que calcularlo de nuevo.

### ¿Para qué sirve el hook `useCallback`?

1. **c)** Para memorizar una funcion y evitar crearla de nuevo si las dependencias no cambian.
2. **d)** Una funcion y un array de dependencias.
3. **c)** Evita la creacion de una nueva funcion si las dependencias no cambian.

### ¿Es buena idea usar siempre `useCallback` para optimizar nuestros componentes?

1. **d)** No, a veces la creacion de una funcion es tan rapida que no merece la pena memorizarla.
2. **c)** Puede ser mas lento memorizarla que crearla de nuevo.

### ¿Cuál es la diferencia entre `useCallback` y `useMemo`?

1. **d)** useCallback memoriza una funcion, useMemo memoriza el resultado de una funcion.
2. **d)** useCallback es una version especializada de useMemo para funciones.
3. **a)** Si, retornando una funcion desde useMemo.

### ¿Qué son las refs en React?

1. **b)** Referencias a elementos del DOM o valores que se mantienen entre renderizados.
2. **a)** Con createRef o con el hook useRef.
3. **b)** El valor de la ref se mantiene entre renderizados.

### ¿Cómo funciona el hook `useRef`?

1. **d)** Para guardar referencias a elementos del DOM o valores que persisten entre renderizados.
2. **b)** A traves de la propiedad current de la referencia.
3. **b)** Usando el atributo ref en el elemento JSX.

### ¿Qué hace el hook `useLayoutEffect`?

1. **a)** Igual que useEffect, pero se dispara sincronicamente despues de las mutaciones del DOM.
2. **b)** Una funcion callback y una lista de dependencias.
3. **c)** Cuando los efectos del DOM necesitan mutar la apariencia antes de mostrar en pantalla.
4. **b)** Despues de que React renderiza el componente pero antes de actualizar la pantalla visualmente.

### ¿Qué son los componentes _stateless_?

1. **c)** Componentes que no tienen estado y se crean con una function.
2. **c)** Facilitan la creacion de componentes puros que siempre renderizan lo mismo para las mismas props.
3. **d)** Solo de las props que recibe.

### ¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?

1. **a)** event.preventDefault()
2. **d)** En el evento onSubmit de un formulario para evitar que recargue la pagina.

### ¿Qué es el `StrictMode` en React?

1. **c)** Un componente que activa comprobaciones de desarrollo para detectar problemas.
2. **d)** Componentes que se renderizan innecesariamente y funcionalidades obsoletas.
3. **a)** Envolviendo los componentes con el componente <StrictMode>.

### ¿Por qué es recomendable exportar los componentes de React de forma nombrada?

1. **b)** Permite usar cualquier nombre al importar, lo que puede causar inconsistencias.
2. **a)** Obligan a usar el mismo nombre en todos los archivos.
3. **d)** import { Button } from './button.jsx'

### ¿Cómo puedes exportar múltiples componentes de un mismo archivo?

1. **c)** Usando exportacion nombrada (export function Component).
2. **d)** Solo uno.

### ¿Cómo puedo importar de forma dinámica un componente en React?

1. **c)** La funcion import(), el metodo lazy() y el componente Suspense.
2. **b)** Para mostrar un mensaje (fallback) mientras se carga el componente.
3. **a)** Exportacion por defecto (export default).

### ¿Cuando y por qué es recomendable importar componentes de forma dinámica?

1. **a)** Cuando el componente no se va a usar desde el principio, como modales o rutas secundarias.
2. **b)** Se cargan componentes que no se van a usar desde el principio, haciendo la app mas lenta.
3. **a)** La aplicacion carga mas rapido al no cargar codigo innecesario al inicio.

### ¿Sólo se pueden cargar componentes de forma dinámica si se exportan por defecto?

1. **b)** No, pero el codigo para exports nombrados es mas complejo.
2. **b)** Usando .then() para convertir el export nombrado en { default: Component }.

### ¿Qué es el contexto en React? ¿Cómo puedo crearlo y consumirlo?

1. **c)** Una forma de pasar datos a traves de la jerarquia de componentes sin pasar props manualmente.
2. **c)** Usando createContext() de React.
3. **b)** Context.Provider
4. **c)** useContext

### ¿Qué es el `SyntheticEvent` en React?

1. **b)** Una abstraccion del evento nativo del navegador para tener comportamiento consistente.
2. **d)** A traves del atributo nativeEvent.
3. **c)** Comportamiento consistente en todos los navegadores.

### ¿Qué es `flushSync` en React?

1. **a)** Obliga a React a ejecutar de manera sincrona las actualizaciones de estado y actualizar el DOM inmediatamente.
2. **a)** react-dom
3. **c)** Puede afectar significativamente el rendimiento, usar con moderacion.

### ¿Qué son los Error Boundaries en React?

1. **a)** Componentes que manejan errores en el arbol de componentes.
2. **b)** componentDidCatch
3. **c)** No, se necesita usar componentes de clase o librerias como react-error-boundary.
4. **b)** Evitan que la aplicacion se rompa completamente al capturar errores.

### ¿Qué son las Forward Refs?

1. **c)** Una tecnica para acceder a una referencia de un componente hijo desde el padre.
2. **a)** forwardRef
3. **c)** En sistemas de diseno o componentes reutilizables de terceros.

### ¿Cómo puedo validar el tipo de mis props?

1. **d)** prop-types
2. **d)** Anadiendo .isRequired al tipo.
3. **b)** En tiempo de ejecucion y solo en modo desarrollo.

### ¿Cómo puedo validar las propiedades de un objeto con PropTypes?

1. **a)** PropTypes.shape()
2. **a)** Un objeto con las propiedades y sus tipos esperados.

### ¿Cómo puedo validar las propiedades de un array con PropTypes?

1. **d)** PropTypes.arrayOf()
2. **a)** Si, usando PropTypes.arrayOf(PropTypes.shape({...})).

### ¿Cómo puedo inyectar HTML directamente en un componente de React?

1. **b)** dangerouslySetInnerHTML
2. **a)** Para evitar ataques XSS (Cross-Site Scripting).
3. **a)** dangerouslySetInnerHTML={{ __html: htmlString }}

### ¿Por qué puede ser mala idea pasar siempre todas las props de un objeto a un componente?

1. **a)** {...props}
2. **b)** Puede pasar props innecesarias que el componente hijo no usa, lo cual es confuso.
3. **d)** Pasar solo las props que el componente hijo realmente necesita.

### ¿Cuál es el propósito del atributo "key" en React y por qué es importante usarlo correctamente al renderizar listas de elementos?

1. **c)** Proporcionar una identificacion unica a cada elemento en una lista.
2. **b)** Re-renderizacion innecesaria de elementos o perdida de estado.
3. **c)** Identificadores unicos de cada elemento en lugar de indices de array.

### ¿Para qué sirve el hook `useTransition` y cuándo deberías usarlo?

1. **a)** [isPending, startTransition]
2. **d)** Etiqueta las actualizaciones envueltas como 'no urgentes'.
3. **b)** Cuando una actualizacion de estado dispara renders pesados (filtrar, ordenar, muchas filas).
4. **c)** Si hay una transicion en curso.

### ¿Para qué sirve el hook `useActionState`?

1. **b)** [state, action, isPending]
2. **c)** Simplificar el ciclo de vida de formularios con Server Actions.
3. **d)** La respuesta mas reciente del servidor.
4. **a)** Al atributo action del formulario: <form action={formAction}>

### ¿Qué problema resuelve el hook `useOptimistic`?

1. **d)** [optimisticValue, addOptimistic]
2. **a)** Mostrar un estado optimista en la UI mientras una accion asincrona se completa.
3. **c)** Cuando quieres evitar parpadeos o latencias perceptibles (likes, toggles, formularios simples).
4. **a)** Aplica un cambio inmediato (optimista) antes de la confirmacion del servidor.

### ¿Cómo funciona el hook `useFormStatus` y qué aporta junto a las Server Actions?

1. **c)** { pending, data, method, action }
2. **d)** react-dom
3. **d)** Si hay una peticion en curso.
4. **a)** Del <form> mas cercano que ejecuta una Server Action.

### ¿Qué es el hook `useFormState` y cuándo conviene usarlo?

1. **d)** [state, formAction]
2. **b)** El resultado acumulado de la Server Action.
3. **a)** Cuando quieres manejar el estado de un formulario ligado a una Server Action sin handlers manuales.
4. **d)** useFormStatus

### ¿Qué son las Server Actions y cómo se usan con formularios en React?

1. **d)** Funciones marcadas con 'use server' que React ejecuta en el backend.
2. **a)** 'use server'
3. **a)** Pasando la funcion al atributo action del formulario: <form action={createPost}>
4. **a)** Bases de datos, secretos y SDKs privados del servidor.

### ¿Cuál es la diferencia entre la prop `action` y el atributo `formAction` en React/Next.js?

1. **c)** La accion predeterminada para todo el formulario.
2. **c)** Sobrescribe la accion solo para ese boton.
3. **b)** Cuando un mismo formulario tiene botones con acciones diferentes (ej: 'Publicar' y 'Guardar borrador').

### ¿Qué diferencia hay entre componentes de servidor y componentes de cliente en React/Next.js?

1. **a)** En el backend.
2. **d)** useState y useEffect.
3. **c)** Anadiendo 'use client' en la primera linea.
4. **b)** Reducir el JavaScript que llega al cliente manteniendo interactividad donde es necesaria.

### ¿Para qué sirve el hook `useSyncExternalStore`?

1. **c)** Conectar React con una fuente de datos externa (Redux, Zustand, APIs del navegador).
2. **b)** Tres: subscribe, getSnapshot y getServerSnapshot (opcional).
3. **d)** Evitar discrepancias entre el HTML inicial y la hidratacion en SSR.
4. **c)** Lecturas consistentes durante los renders.

### ¿Cómo funciona `React.memo` y cuándo es útil?

1. **c)** Memoriza el resultado de un componente y solo lo re-renderiza si sus props cambian.
2. **d)** Comparacion superficial (shallow comparison).
3. **d)** Para componentes que renderizan listas grandes o calculos pesados con props estables.
4. **c)** useCallback y useMemo para mantener estables funciones y objetos.

### ¿Qué diferencia hay entre `ReactDOM.render`, `createRoot` y `hydrateRoot`?

1. **b)** Es la API legacy previa a React 18, esta en desuso.
2. **c)** useTransition, Suspense para datos y batching automatico.
3. **d)** Conectar HTML generado en el servidor con React en el cliente manteniendo el DOM existente.
4. **a)** createRoot o hydrateRoot.

### ¿Qué provoca un re-render en un componente de React?

1. **d)** Cambios de estado, props, contexto consumido o re-render del padre (sin memoización).
2. **d)** No; cambiar .current no dispara un re-render por sí solo.
3. **b)** No; React puede reconciliar y no aplicar cambios al DOM si el resultado es igual.

### ¿Qué es el batching de actualizaciones de estado en React?

1. **c)** Agrupar varios setState en un único re-render.
2. **a)** El batching automático también aplica en promesas, timeouts y handlers nativos.
3. **b)** Con flushSync de react-dom.

### ¿Qué es `Suspense` en React y para qué se usa?

1. **a)** Mostrar un fallback mientras un hijo espera código o datos.
2. **c)** fallback
3. **a)** Con un límite de Suspense alrededor del componente lazy.

### ¿Qué es la reconciliación (reconciliation) en React?

1. **c)** El proceso de comparar el árbol anterior y el nuevo para actualizar el DOM de forma eficiente.
2. **b)** La prop key estable e identificativa.
3. **d)** Desmonta el árbol viejo y monta uno nuevo.

### ¿Qué es el estado derivado y por qué conviene calcularlo en el render?

1. **a)** Un valor que se puede calcular a partir de props u otro estado ya existente.
2. **a)** Evita desincronización y dobles actualizaciones; hay una sola fuente de verdad.
3. **b)** useMemo con las dependencias correctas.

### ¿Qué es una *stale closure* y cómo afecta a los hooks?

1. **a)** Una función que captura valores de un render anterior en lugar de los actuales.
2. **b)** En useEffect, setInterval, suscripciones o callbacks con deps incompletas.
3. **a)** Usar la forma funcional setCount(c => c + 1) o incluir count en las deps.

### ¿Cómo puedes evitar re-renders innecesarios al usar Context?

1. **c)** Se re-renderizan todos los consumidores de ese contexto.
2. **b)** Partir contextos, memoizar el value y no subir estado que cambia muy a menudo.
3. **c)** Porque cada tecla cambia el value y re-renderiza a todos los consumidores.

### ¿Qué es `React.lazy` y cómo se combina con `Suspense`?

1. **c)** Carga un componente bajo demanda con import dinámico (code splitting).
2. **d)** Un Suspense con fallback mientras carga el chunk.
3. **a)** Rutas o paneles pesados que no hacen falta en el primer paint.

### ¿Qué es `startTransition` y en qué se diferencia de actualizar el estado de forma normal?

1. **a)** Marca una actualización de estado como no urgente / de menor prioridad.
2. **d)** Urgente: el valor del input. No urgente: filtrar una lista grande.
3. **d)** No; atacan problemas distintos (prioridad vs memorizar valores).

### ¿En React 19 se necesita todavía `forwardRef`?

1. **d)** Puede recibirse como prop normal sin forwardRef en la mayoría de casos.
2. **b)** Por compatibilidad con código y librerías antiguas.
3. **c)** useImperativeHandle junto a una ref.
