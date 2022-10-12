<div align='center'>
  <img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png">
  <h1>Preguntas de entrevista para React</h1>
  
  <i>De cero a experto. Con respuestas detalladas en Español 🇪🇸</i>
  
  <sup>Deja tu :star: si te gusta el proyecto.</sup>
  
  | Streamings de programación en Twitch:<br />[https://twitch.tv/midudev](twitch.tv/midudev) |
  | ----------------------------------------------------------------------------------------- |

</div>

---

### Principiante

#### ¿Qué es React?

**React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario.** Está basada en la componetización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

Esto hace que React sea una herramienta muy útil para construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables.

Fue creada en 2011 por Jordan Walke, un ingeniero de software que trabajaba en Facebook y que quería simplificar la forma de crear interfaces de usuario complejas.

Es una biblioteca muy popular y es usada por muchas empresas como Facebook, Netflix, Airbnb, Twitter, Instagram, etc.

Enlaces de interés:
- [Curso de React.js](https://midu.link/react)
- [Documentación oficial de React en Español](https://es.reactjs.org/)
- [Introduction to React.js de Facebook (2013)](https://www.youtube.com/watch?v=XxVg_s8xAms)

#### ¿Cuáles son las características principales de React?

Las características principales de React son:

- **Componentes**: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

- **Virtual DOM**: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.

- **Declarativo**: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.

- **Unidireccional**: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

- **Universal**: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.

#### ¿Qué significa exactamente que sea declarativo?

No le decimos cómo debe renderizar la interfaz a base de instrucciones. Le decimos qué debe renderizar y React se encarga de renderizarlo.

Un ejemplo entre declarativo e imperativo:

```js
// Declarativo
const element = <h1>Hello, world</h1>

// Imperativo
const element = document.createElement('h1')
element.innerHTML = 'Hello, world'
```

#### ¿Qué es un componente?

Un componente es una pieza de código que renderiza una parte de la interfaz. Los componentes pueden ser parametrizados, reutilizados y pueden contener su propio estado.

En React los componentes se crean usando funciones o clases.

#### ¿Qué es JSX?

React usa JSX para declarar qué debe renderizar. JSX es una extensión de JavaScript que permite escribir un código más cercano visualmente a HTML, que mejora la legibilidad del código y hace que sea más fácil de entender.

Sin JSX, deberíamos usar `React.createElement` para crear los elementos de la interfaz manualmente de esta forma:

```js
import { createElement } from 'react'

function Hello () { // un componente es una función! 👀
  return React.createElement(
    'h1', // elemento a renderizar
     null, // atributos del elemento
    'Hola Mundo 👋🌍!' // contenido del elemento
  )
}
```

Esto es muy tedioso y poco legible. Por eso, React usa JSX para declarar qué debe renderizar. Por eso usamos JSX de esta forma:

```jsx
function Hello () {
  return <h1>Hola Mundo 👋🌍!</h1>
}
```

Ambos códigos son equivalentes.

#### ¿Cómo se transforma el JSX?

**El JSX se transforma en código JavaScript compatible en el navegador usando un *transpilador* o *compilador***. El más famoso es a día de hoy Babel, que utiliza una serie de plugins para ser compatible con la transformación, pero existen otros como SWC.

Puedes ver cómo se transforma el JSX en el [playground de código de Babel](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACQKYBt10QCgJSIDeAUIogE6pQjlIA8AFgIwB8yc6AhogLLgAm2QLwbgaR3APBuBYfYCEdAPTMWxAL5A&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.19.5&externalPlugins=&assumptions=%7B%7D).

Hay casos especiales en los que un transpilador no es necesario. Por ejemplo, **Deno tiene soporte nativo para la sintaxis JSX** y no es necesario transformar el código para hacerlo compatible.

#### Cuál es la diferencia entre componente y elemento en React?

Un componente es una función o clase que recibe props y devuelve un elemento.
Un elemento es un objeto que representa un nodo del DOM o una instancia de un componente de React.

```js
// Elemento que representa un nodo del DOM
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

// Elemento que representa una instancia de un componente
{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK!'
  }
}
```

#### ¿Cómo crear un componente en React?

Los componentes en React son funciones o clases que devuelven un elemento de React. Hoy en día lo más recomendado es usar funciones:

```jsx
function HelloWorld() {
  return <h1>Hello World!</h1>
}
```

Pero también puedes puedes usar una clase para crear un componente React:

```jsx
import { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!</h1>
  }
}
```

Lo importante es que el nombre de la función o clase empiece con una letra mayúscula. Esto es necesario para que React pueda distinguir entre componentes y elementos HTML.

#### ¿Qué son las props en React?

Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente `Button` que muestra un botón, puedes pasarle una prop `text` para que el botón muestre ese texto:

```jsx
function Button(props) {
  return <button>{props.text}</button>
}
```

Podríamos entender que el componente `Button` es un botón genérico, y que la prop `text` es el texto que se muestra en el botón. Así estamos creando un componente reutilizable.

Para usarlo, indicamos el nombre del componente y le pasamos las props que queremos:

```jsx
<Button text="Haz clic aquí" />
<Button text="Seguir a @midudev" />
```

Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.

#### ¿Qué es el renderizado condicional en React?

El renderizado condicional es la forma de mostrar un componente u otro dependiendo de una condición.

Para hacer renderizado condicional en React usamos el operador ternario:

```jsx
function Button({ text }) {
  return text
    ? <button>{text}</button>
    : null
}
```

En este caso, si la prop `text` existe, se renderiza el botón. Si no existe, no se renderiza nada.

#### ¿Cómo puedes aplicar clases CSS a un componente en React?

Para aplicar clases CSS a un componente en React usamos la prop `className`:

```jsx
function Button({ text }) {
  return (
    <button className="button">
      {text}
    </button>
  )
}
```

La razón por la que se llama `className` es porque `class` es una palabra reservada en JavaScript. Por eso, en JSX, tenemos que usar `className` para aplicar clases CSS.

#### ¿Cómo puedes aplicar estilos en línea a un componente en React?

Para aplicar estilos CSS en línea a un componente en React usamos la prop `style`. La diferencia de cómo lo haríamos con HTML, es que en React los estilos se pasan como un objeto y no como una cadena de texto:

```jsx
function Button({ text }) {
  return (
    <button style={{ color: 'red', borderRadius: '2px' }}>
      {text}
    </button>
  )
}
```

Fíjate que, además, los nombres de las propiedades CSS están en camelCase.

#### ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?

Puedes aplicar estilos de forma condicional a un componente en React usando la prop `style` y un operador ternario:

```jsx
function Button({ text, primary }) {
  return (
    <button style={{ color: primary ? 'red' : 'blue' }}>
      {text}
    </button>
  )
}
```

En el caso anterior, si la prop `primary` es `true`, el botón tendrá el color rojo. Si no, tendrá el color azul.

También puedes seguir la misma mecánica usando clases. En este caso, usamos el operador ternario para decidir si añadir o no la clase:

```jsx
function Button({ text, primary }) {
  return (
    <button className={primary ? 'button-primary' : ''}>
      {text}
    </button>
  )
}
```

También podemos usar bibliotecas como `classnames`:

```jsx
import cx from 'classnames'

function Button({ text, primary }) {
  return (
    <button className={classnames('button', { primary })}>
      {text}
    </button>
  )
}
```

En este caso, si la prop `primary` es `true`, se añadirá la clase `primary` al botón. Si no, no se añadirá. En cambio la clase `button` siempre se añadirá.

#### ¿Qué es el renderizado de listas en React?

El renderizado de listas es la forma de mostrar una lista de elementos usando un componente.

Para hacer renderizado de listas en React usamos el método `map` de los arrays:

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  )
}
```

En este caso, se renderiza una lista de elementos usando el componente `List`. El componente `List` recibe una prop `items` que es un array de strings. El componente `List` renderiza un elemento `li` por cada elemento del array.

El elemento `li` tiene una prop `key` que es un identificador único para cada elemento. Esto es necesario para que React pueda identificar cada elemento de la lista y actualizarlo de forma eficiente. Más adelante hay una explicación más detallada sobre esto.

#### ¿Cómo añadir un evento a un componente en React?

Para añadir un evento a un componente en React usamos la sintaxis `on` y el nombre del evento nativo del navegador en *camelCase*:

```jsx
function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
```

En este caso, el componente `Button` recibe una prop `onClick` que es una función. Cuando el usuario hace clic en el botón, se ejecuta la función `onClick`.

#### ¿Qué es el estado en React?

El estado es un objeto que contiene datos que pueden cambiar en el tiempo. En React, el estado se usa para controlar los cambios en la interfaz.

Para que entiendas el concepto, piensa en el interruptor de una habitación. Estos interruptores suelen tener dos estados: encendido y apagado. Cuando accionamos el interruptor y lo ponemos en `on` entonces la luz se enciende y cuando lo ponemos en `off` la luz se apaga.

Este mismo concepto se puede aplicar a la interfaz de usuario. Por ejemplo, el botón Me Gusta de Facebook tendría el estado de `meGusta` a `true` cuando el usuario le ha dado a Me Gusta y a `false` cuando no lo ha hecho.

No sólo podemos tener en el estado valores booleanos, también podemos tener objetos, arrays, números, etc.

Por ejemplo, si tienes un componente `Counter` que muestra un contador, puedes usar el estado para controlar el valor del contador.

Para crear un estado en React usamos el hook `useState`:

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}
```

Con un componente de clase, la creación del estado sería así:

```jsx
import { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Aumentar
        </button>
      </div>
    )
  }
}
```

#### ¿Qué son los hooks?

Los Hooks son una API de React que nos permite tener estado, y otras características de React, en los componentes creados con una function.

Esto, antes, no era posible y nos obligaba a crear un componente con `class` para poder acceder a todas las posibilidades de la librería.

Hooks es gancho y, precisamente, lo que hacen, es que te permiten enganchar tus componentes funcionales a todas las características que ofrece React.

#### ¿Qué hace el hook `useEffect`? 

El hook `useEffect` se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.

Recibe dos parámetros:
- La función que se ejecutará al cambiar las dependencias o al renderizar el componente.
- Un array de dependencias. Si cambia el valor de alguna dependencia, ejecutará la función.

En este ejemplo mostramos un mensaje en consola cada vez que cambia el valor de `count`:

```jsx
import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('El contador se ha actualizado')
  }, [count])

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  )
}
```

#### Explica casos de uso del hook `useEffect`

Podemos usar el hook `useEffect` para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.

Por eso puede ser útil para hacer llamadas a APIs, ya que sea nada más montar el componente o cuando cambian las dependencias.

También podemos utilizar tracking de eventos, como Google Analytics, para saber qué páginas visitan los usuarios.

Podemos validar un formulario para que cada vez que cambie el estado, podamos actualizar la UI y mostrar dónde están los errores.

Además podemos suscribirnos a eventos del navegador, como el evento `resize` para saber cuando el usuario cambia el tamaño de la ventana.

#### Cómo suscribirse a un evento en `useEffect`

Dentro de `useEffect` nos podemos suscribir a eventos del navegador, como el evento `resize` para saber cuando el usuario cambia el tamaño de la ventana. Es importante que nos desuscribamos cuando el componente se desmonte para evitar fugas de memoria. Para ello, tenemos que devolver una función dentro del `useEffect` que se ejecutará cuando el componente se desmonte.

```jsx
import { useEffect } from 'react'

function Window() {
  useEffect(() => {
    const handleResize = () => {
      console.log('La ventana se ha redimensionado')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <p>Abre la consola y redimensiona la ventana</p>
    </>
  )
}
```

#### ¿Cómo podemos ejecutar código cuando el componente se monta?

Podemos ejecutar código cuando el componente se monta usando el hook `useEffect` sin pasarle ninguna dependencia. En este caso, la función que se pasa como primer parámetro se ejecutará cuando el componente se monte.

```jsx
import { useEffect } from 'react'

function Component() {
  useEffect(() => {
    console.log('El componente se ha montado')
  }, [])

  return (
    <>
      <p>Abre la consola y redimensiona la ventana</p>
    </>
  )
}
```

#### ¿Qué son los Fragments en React?

Los Fragments son una forma de agrupar elementos sin añadir un elemento extra al DOM ya que React no permite devolver varios elementos en un componente, sólo un elemento raíz.

Para crear un Fragment en React usamos el componente `Fragment`:

```jsx
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <h1>Titulo</h1>
      <p>Parrafo</p>
    </Fragment>
  )
}
```

También podemos usar la sintaxis de abreviatura:

```jsx
function App() {
  return (
    <>
      <h1>Titulo</h1>
      <p>Parrafo</p>
    </>
  )
}
```

---

### Intermedio

#### ¿Cuántos `useEffect` puede tener un componente?

Aunque normalmente los componentes de React sólo cuentan con un `useEffect` lo cierto es que podemos tener tantos `useEffect` como queramos en un componente. Cada uno de ellos se ejecutará cuando se renderice el componente o cuando cambien las dependencias del efecto.

#### ¿Cómo podemos ejecutar código cuando el componente se desmonta del árbol?

Podemos ejecutar código cuando el componente se desmonta usando el hook `useEffect` y dentro devolver una función con el código que queremos ejecutar. En este caso, la función que se pasa como primer parámetro se ejecutará cuando el componente se desmonte.

```jsx
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

#### Cómo puedes cancelar una petición a una API en `useEffect` correctamente

Cuando hacemos una petición a una API, podemos cancelarla para evitar que se ejecute cuando el componente se desmonte usando `AbortController` como hacemos en este ejemplo:

```jsx
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

```jsx
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

#### ¿Cuáles son las reglas de los hooks en React?

Los hooks en React tienen dos reglas fundamentales:
- Los hooks sólo se pueden usar en componentes funcionales o *custom hooks*.
- Los hooks sólo se pueden llamar en el nivel superior de un componente. No se pueden llamar dentro de bucles, condicionales o funciones anidadas.

#### ¿Cómo mantener los componentes puros y qué ventajas tiene?

Los componentes puros son aquellos que no tienen estado y que no tienen efectos secundarios. Esto quiere decir que no tienen ningún tipo de lógica que no sea la de renderizar la interfaz.

Son más fáciles de testear y de mantener. Además, son más fáciles de entender porque no tienen lógica compleja.

Para crear un componente puro en React usamos una function:

```jsx
function Button({ text }) {
  return (
    <button>
      {text}
    </button>
  )
}
```

En este caso, el componente `Button` recibe una prop `text` que es un string. El componente `Button` renderiza un botón con el texto que recibe en la prop `text`.

#### ¿Qué es el Server Side Rendering y qué ventajas tiene?

El *Server Side Rendering* es una técnica que consiste en renderizar el HTML en el servidor y enviarlo al cliente. Esto nos permite que el usuario vea la interfaz de la aplicación antes de que se cargue el JavaScript.

Esta técnica nos permite mejorar la experiencia de usuario y mejorar el SEO de nuestra aplicación.

#### ¿Cómo puedes crear un Server Side Rendering con React desde cero?

Para crear un Server Side Rendering con React desde cero podemos usar el paquete `react-dom/server` que nos permite renderizar componentes de React en el servidor.

Veamos un ejemplo de cómo crear un Server Side Rendering con React desde cero con Express:

```jsx
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

#### ¿Puedes poner un ejemplo de efectos colaterales en React?

Igual que las funciones en JavaScript, los componentes de React también pueden tener *side effects* (efectos colaterales). Un efecto colateral significa que el componente manipula o lee información que no está dentro de su ámbito.

Aquí puedes ver un ejemplo simple de un componente que tiene un efecto colateral. Un componente que lee y modifica una variable que está fuera del componente. Esto hace que sea imposible saber qué renderizará el componente cada vez que se use, ya que no sabemos el valor que tendrá `count`:

```jsx
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

#### ¿Qué diferencia hay entre componentes controlados y no controlados? ¿Qué ventajas y desventajas tienen?

A la hora de trabajar con formularios en React, tenemos dos tipos de componentes: los componentes controlados y los componentes no controlados.

Los componentes controlados son aquellos que tienen un estado que controla el valor del componente. Por lo tanto, el valor del componente se actualiza cuando el estado cambia.

La ventaja de este tipo de componentes es que son más fáciles de testear porque no dependen de la interfaz. También nos permiten crear validaciones muy fácilmente. La desventaja es que son más complejos de crear y mantener. Además, pueden tener un peor rendimiento ya que provocan un re-renderizado cada vez que cambia el valor del input.

Los componentes no controlados son aquellos que no tienen un estado que controle el valor del componente. El estado del componente lo controla el navegador de forma interna. Para conocer el valor del componente, tenemos que leer el valor del DOM.

La ventaja de este tipo de componentes es que se cream de forma muy fácil y no tienes que mantener un estado. Además, el rendimiento es mejor, ya que no tiene que re-renderizarse al cambiar el valor del input. Lo malo es que hay que tratar más con el DOM directamente y crear código imperativo.

```js
// Controlado:
const [value, setValue] = useState('')
const handleChange = () => setValue(event.target.value)

<input type="text" value={value} onChange={handleChange} />

// No controlado:
<input type="text" defaultValue="foo" ref={inputRef} />
// Usamos `inputRef.current.value` para leer el valor del input
```

#### ¿Qué son los High Order Components (HOC)?

Los High Order Components son funciones que reciben un componente como parámetro y devuelven un componente.

```jsx
function withLayout(Component) {
  return function(props) {
    return <main>
      <section>
        <Component {...props} />
      </section>
    </main>
  }
}
```

En este caso, la función `withLayout` recibe un componente como parámetro y devuelve un componente. El componente devuelto renderiza el componente que se le pasa como parámetro dentro de un layout.

Es un patrón que nos permite reutilizar código y así podemos inyectar funcionalidad, estilos o cualquier otra cosa a un componente de forma sencilla.

Con la llegada de los hooks, los HOCs se han vuelto menos populares, pero todavía se usan en algunos casos.

#### ¿Qué son las render props?

Son un patrón de diseño de React que nos permite reutilizar código entre componentes e inyectar información en el renderizado de los componentes.

```jsx
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

En este caso, el componente `DataProvider` recibe una función `render` como prop. Ahí le indicamos qué es lo que debe renderizar usando la información que recibe como parámetro.

La implementación del `DataProvider` con funciones podría ser la siguiente:

```jsx
function DataProvider({ render }) {
  const data = { target: 'world' }
  return render(data)
}
```

También se puede encontrar este patrón usando la prop `children` en los componentes.

```jsx
<DataProvider>
  {data => (
    <h1>Hello {data.target}</h1>
  )}
</DataProvider>
```

Y la implementación sería similar:

```jsx
function DataProvider({ children }) {
  const data = { target: 'world' }
  return children(data)
}
```

Este patrón es usado por grandes bibliotecas como `react-router`, `formik` o `react-motion`.

#### ¿Por qué no podemos usar un `if` en el renderizado de un componente?

En React, no podemos usar un `if` en el renderizado de un componente porque no es una expresión válida de JavaScript, es una declaración. Las expresiones son aquellas que devuelven un valor y las declaraciones no devuelven ningún valor.

En JSX sólo podemos usar expresiones, por eso usamos ternarias, que sí son expresiones.

```jsx
// ❌ Esto no funciona
function Button({ text }) {
  return (
    <button>
      {if (text) { return text } else { return 'Click' }}
    </button>
  )
}
```

De la misma forma, tampoco podemos usar `for`, `while` o `switch` dentro del renderizado de un componente.

#### ¿Por qué debemos utilizar una función para actualizar el estado de React?

A la hora de actualizar el estado de React, debemos utilizar la función que nos facilita el hook `useState` para actualizar el estado. Esto es porque React puede ejecutar el renderizado de un componente varias veces antes de que se actualice el DOM. Si usamos la función `setState` de React, podemos estar seguros de que el estado que se va a actualizar es el último estado.

```jsx
const [count, setCount] = useState(0)

setCount(count + 1)
```

#### ¿Qué es el ciclo de vida de un componente en React?

En los componentes de clase, el ciclo de vida de un componente se divide en tres fases:

* Montaje: cuando el componente se añade al DOM.
* Actualización: cuando el componente se actualiza.
* Desmontaje: cuando el componente se elimina del DOM.

Dentro de este ciclo de vida, existe un conjunto de métodos que se ejecutan en el componente.

Estos métodos se definen en la clase y se ejecutan en el orden que se muestran a continuación:

* constructor
* render
* componentDidMount
* componentDidUpdate
* componentWillUnmount

En cada uno de estos métodos podemos ejecutar código que nos permita controlar el comportamiento de nuestro componente.

#### ¿Por qué puede ser mala práctica usar el ´index´ como key en un listado de React?

Cuando renderizamos una lista de elementos, React necesita saber qué elementos han cambiado, han sido añadidos o eliminados.

Para ello, React necesita una key única para cada elemento de la lista. Si no le pasamos una key, React usa el índice del elemento como key.

```jsx
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

En este caso, React usa el índice del elemento como key. Esto puede ser un problema si la lista se reordena o se eliminan elementos del array, ya que el índice de los elementos cambia.

En este caso, React no sabe qué elementos han cambiado y puede que se produzcan errores.

Un ejemplo donde se ve el problema:
```jsx
const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const handleRemove = (index) => {
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

#### ¿Para qué sirve el hook `useMemo`?

El hook `useMemo` es un hook que nos permite memorizar el resultado de una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado.

```jsx
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

El hook `useMemo` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia.

La función se ejecuta cuando el componente se renderiza por primera vez y cuando la prop `count` cambia.

La ventaja es que si la prop `count` no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.

#### ¿Es buena idea usar siempre `useMemo` para optimizar nuestros componentes?

No. `useMemo` es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces el cálculo de un valor es tan rápido que no merece la pena memorizarlo. Incluso, en algunos casos, puede ser más lento memorizarlo que calcularlo de nuevo.

#### ¿Para qué sirve el hook `useCallback`?

El hook `useCallback` es un hook que nos permite memorizar una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

```jsx
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

El hook `useCallback` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia.

La función se ejecuta cuando el componente se renderiza por primera vez y cuando la prop `count` o la prop `onIncrement` cambia.

La ventaja es que si la prop `count` o la prop `onIncrement` no cambian, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.

#### ¿Es buena idea usar siempre `useCallback` para optimizar nuestros componentes?

No. `useCallback` es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces la creación de una función es tan rápida que no merece la pena memorizarla. Incluso, en algunos casos, puede ser más lento memorizarla que crearla de nuevo.

#### ¿Cuál es la diferencia entre `useCallback` y `useMemo`?

La diferencia entre `useCallback` y `useMemo` es que `useCallback` memoriza una función y `useMemo` memoriza el resultado de una función.

En cualquier caso, en realidad, `useCallback` es una versión especializada de `useMemo`. De hecho se puede simular la funcionalidad de `useCallback` con `useMemo`:

```js
const memoizedCallback = useMemo(() => {
  return () => {
    doSomething(a, b)
  }
}, [a, b])
```

#### ¿Qué es el hook `useRef`?

El hook `useRef` es un hook que nos permite crear una referencia a un elemento del DOM o a un valor que se mantendrá entre renderizados.

En el siguiente ejemplo vamos a guardar la referencia en el DOM a un elemento `<input>` y vamos a cambiar el foco a ese elemento cuando el componente se monta.

```jsx
import { useRef } from 'react'

function TextInputWithFocusButton() {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

Creamos una referencia `inputEl` con `useRef` y la pasamos al elemento `<input>` como prop `ref`. Cuando el componente se monta, la referencia `inputEl` apunta al elemento `<input>` del DOM.

Para acceder al elemento del DOM, usamos la propiedad `current` de la referencia.

#### ¿Qué son los componentes *stateless*?

Los componentes *stateless* son componentes que no tienen estado. Estos componentes se crean con una `function` y no tienen acceso al estado de la aplicación. La ventaja que tienen estos componentes es que hace que sea más fácil crear componentes puros (que siempre renderizan lo mismo para unas mismas props).

```jsx
// Este es un ejemplo de componente stateless
function Button({ text }) {
  return (
    <button>
      {text}
    </button>
  )
}
```

#### ¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?

Para prevenir el comportamiento por defecto de un evento en React, debemos usar el método `preventDefault`:

```jsx
function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Enviar</button>
  </form>
}
```

#### ¿Qué son las refs en React?

#### ¿Qué es el `StrictMode` en React?

El `StrictMode` es un componente que nos permite activar algunas comprobaciones de desarrollo en React. Por ejemplo, detecta componentes que se renderizan de forma innecesaria o funcionalidades obsoletas que se están usando.

```jsx
import { StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
      <Component />
    </StrictMode>
  )
}
```

#### ¿Por qué es recomendable usar exportar los componentes de React de forma nombrada?

Los componentes de React se pueden exportar de dos formas:

* Exportación por defecto
* Exportación nombrada

Para exportar un componente por defecto, usamos la palabra reservada `default`:

```jsx
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

La gran desventaja que tiene la exportación por defecto es que a la hora de importarlo puedes usar cualquier nombre que quieras. Y esto trae problemas ya que puedes no usar siempre el mismo en el proyecto o usar un nombre que no sea correcto con lo que importas.

```jsx
// button.jsx
export default function Button() {
  return <button>Click</button>
}

// App.jsx
import MiBoton from './button.jsx'

function App() {
  return <MiBoton />
}

// Otro.jsx
import Buton from './button.jsx'

function Otro() {
  return <Buton />
}
```

Los exports nombrados nos obligan a usar el mismo nombre en todos los archivos y, por tanto, nos aseguramos que siempre estamos usando el nombre correcto.

```jsx
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

#### ¿Cómo puedes exportar múltiples componentes de un mismo archivo?

Para exportar múltiples componentes de un mismo archivo, podemos usar la exportación nombrada:

```jsx
// button.jsx
export function Button({children}) {
  return <button>{children}</button>
}

export function ButtonSecondary() {
  return <button class="btn-secondary">{children}</button>
}
```


#### ¿Qué es el contexto en React?

El contexto es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

Para crear un contexto en React usamos el hook `createContext`:

```jsx
import { createContext } from 'react'

const ThemeContext = createContext()
```

Para usar el contexto, debemos envolver el árbol de componentes con el componente `Provider`:

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

Para consumir el contexto, debemos usar el hook `useContext`:

```jsx
import { useContext } from 'react'

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Haz clic aquí</button>
}
```

#### ¿Qué es el `SyntheticEvent` en React?

El `SyntheticEvent` es una abstracción del evento nativo del navegador. Esto le permite a React tener un comportamiento consistente en todos los navegadores.

```jsx
function App() {
  function handleClick(event) {
    console.log(event)
  }

  return <button onClick={handleClick}>Haz clic aquí</button>
}
```

#### ¿Qué son los Error Boundaries en React?

Los Error Boundaries son componentes que nos permiten manejar los errores que se producen en el árbol de componentes. Para crear un Error Boundary, debemos crear un componente que implemente el método `componentDidCatch`:

```jsx
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

```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

Podemos crear un Error Boundary en cualquier nivel del árbol de componentes, de esta forma podemos tener un control más granular de los errores.

```jsx
<ErrorBoundary>
  <App />
  <ErrorBoundary>
    <SpecificComponent />
  </ErrorBoundary>
</ErrorBoundary>
```

Por ahora no existe una forma nativa de crear un Error Boundary en una función de React. Para crear un Error Boundary en una función, puedes usar la librería [react-error-boundary](https://github.com/bvaughn/react-error-boundary).

---

### Experto

#### ¿Para qué sirve el hook `useImperativeHandle`?

Nos permite definir qué propiedades y métodos queremos que sean accesibles desde el componente padre.

En el siguiente ejemplo vamos a crear un componente `TextInput` que tiene un método `focus` que cambia el foco al elemento `<input>`.

```jsx
import { useRef, useImperativeHandle } from 'react'

function TextInput(props, ref) {
  const inputEl = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus()
    }
  }))

  return (
    <input ref={inputEl} type="text" />
  )
}
```

Creamos una referencia `inputEl` con `useRef` y la pasamos al elemento `<input>` como prop `ref`. Cuando el componente se monta, la referencia `inputEl` apunta al elemento `<input>` del DOM.

Para acceder al elemento del DOM, usamos la propiedad `current` de la referencia.

Para que el componente padre pueda acceder al método `focus`, usamos el hook `useImperativeHandle`. Este hook recibe dos parámetros: una referencia y una función que devuelve un objeto con las propiedades y métodos que queremos que sean accesibles desde el componente padre.

#### ¿Qué son los portales en React?

Los portales nos permiten renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.

Es perfecto para ciertos casos de uso como, por ejemplo, modales:

```jsx
import { createPortal } from 'react-dom'

function Modal() {
  return createPortal(
    <div className="modal">
      <h1>Modal</h1>
    </div>,
    document.getElementById('modal')
  )
}
```

`createPortal` acepta dos parámetros:
    * El primer parámetro es el componente que queremos renderizar
    * El segundo parámetro es el nodo del DOM donde queremos renderizar el componente

En este caso el modal se renderiza en el nodo `#modal` del DOM. 

#### ¿Por qué `StrictMode` renderiza dos veces la aplicación?

Cuando el modo `StrictMode` está activado, React monta los componentes dos veces (el estado y el DOM se preserva). Esto ayuda a encontrar efectos que necesitan una limpieza o expone problemas con *race conditions*.

#### ¿Qué es el hook `useDebugValue`?

Nos permite mostrar un valor personalizado en la pestaña de *React DevTools* que nos permitirá depurar nuestro código.

```jsx
import { useDebugValue } from 'react'

function useCustomHook() {
  const value = 'custom value'
  useDebugValue(value)
  return value
}
```

En este ejemplo, el valor personalizado que se muestra en la pestaña de *React DevTools* es `custom value`.

Aunque es útil para depurar, no se recomienda usar este hook en producción.

#### ¿Qué es el `Profiler` en React?

El `Profiler` es un componente que nos permite medir el tiempo que tarda en renderizarse un componente y sus hijos.

```jsx
import { Profiler } from 'react'

function App() {
  return (
    <Profiler id="App" onRender={(id, phase, actualDuration) => {
      console.log({id, phase, actualDuration})
    }}>
      <Component />
    </Profiler>
  )
}
```

El componente `Profiler` recibe dos parámetros:
* `id`: es un identificador único para el componente
* `onRender`: es una función que se ejecuta cada vez que el componente se renderiza

Esta información es muy útil para detectar componentes que toman mucho tiempo en renderizarse y optimizarlos.

#### ¿Cómo puedes acceder al evento nativo del navegador en React?

React no expone el evento nativo del navegador. En su lugar, React crea un objeto sintético que se basa en el evento nativo del navegador llamado `SyntheticEvent`. Para acceder al evento nativo del navegador, debemos usar el atributo `nativeEvent`:

```jsx
function Button({ onClick }) {
  return <button onClick={e => onClick(e.nativeEvent)}>Haz clic aquí</button>
}
```

#### ¿Cómo puedes registrar un evento en la fase de captura en React?

En React, los eventos se registran en la fase de burbuja por defecto. Para registrar un evento en la fase de captura, debemos añadir `Capture` al nombre del evento:

```jsx
function Button({ onClick }) {
  return <button onClickCapture={onClick}>Haz clic aquí</button>
}
```

#### ¿Cómo puedes mejorar el rendimiento del Server Side Rendering en React para evitar que bloquee el hilo principal?

Aunque puedes usar el método `renderToString` para renderizar el HTML en el servidor, este método es síncrono y bloquea el hilo principal. Para evitar que bloquee el hilo principal, debemos usar el método `renderToPipeableStream`:

```jsx
let didError = false
const stream = renderToPipeableStream(
  <App />,
  {
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
  }
)
```

#### ¿Qué diferencia hay entre `renderToStaticNodeStream()` y `renderToPipeableStream()`?

`renderToStaticNodeStream()` devuelve un stream de nodos estáticos, esto significa que no añade atributos extras para el DOM que React usa internamente para poder lograr la hidratación del HTML en el cliente. Esto significa que no podrás hacer el HTML interactivo en el cliente pero puede ser útil para páginas totalmente estáticas.

`renderToPipeableStream()` devuelve un stream de nodos que contienen atributos del DOM extra para que React pueda hidratar el HTML en el cliente. Esto significa que podrás hacer el HTML interactivo en el cliente pero puede ser más lento que `renderToStaticNodeStream()`.

#### ¿Para qué sirve el método `renderToReadableStream()`?

Este método es similar a `renderToNodeStream` pero está pensado para entornos que soporten Web Streams como Deno.

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
      }
    }
  )
  
  // Si quieres enviar todo el HTML en vez de hacer streaming, puedes usar esta línea
  // Es útil para crawlers o generación estática:
  // await stream.allReady

  return new Response(stream, {
    status: didError ? 500 : 200,
    headers: {'Content-Type': 'text/html'},
  })
} catch (error) {
  return new Response(
    '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>',
    {
      status: 500,
      headers: {'Content-Type': 'text/html'},
    }
  )
}
```

#### ¿Qué es Flux?

*Flux* es un patrón de arquitectura de aplicaciones que se basa en un unidireccional de datos. En este patrón, los datos fluyen en una sola dirección: de las vistas a los stores.

No es específico de React y se puede usar con cualquier librería de vistas. En este patrón, los stores son los encargados de almacenar los datos de la aplicación. Los stores emiten eventos cuando los datos cambian. Las vistas se suscriben a estos eventos para actualizar los datos.

Esta arquitectura fue creada por Facebook para manejar la complejidad de sus aplicaciones. *Redux* se basó en este patrón para crear una biblioteca de gestión de estado global.