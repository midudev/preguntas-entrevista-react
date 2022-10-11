<div align='center'>
  <img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png">
  <h1>Preguntas de entrevista para React</h1>
  
  <i>De cero a experto. Con respuestas detalladas en Español 🇪🇸</i>
  
  <sup>Deja tu :star: si te gusta el proyecto.</sup>
  
  | Streamings de programación en Twitch:<br />[https://twitch.tv/midudev](twitch.tv/midudev) |
  |---|

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

Un elemento es un objeto 

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

#### ¿Cómo puedes aplicar clases CSS a un componente en React?

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
        <li>{item}</li>
      ))}
    </ul>
  )
}
```

En este caso, se renderiza una lista de elementos usando el componente `List`. El componente `List` recibe una prop `items` que es un array de strings. El componente `List` renderiza un elemento `li` por cada elemento del array.

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

#### ¿Qué es el ciclo de vida de un componente en React?

El ciclo de vida de un componente es el conjunto de métodos que se ejecutan en un componente a lo largo de su vida.

En un componente de clase, estos métodos se definen en la clase y se ejecutan en el orden que se muestran a continuación:

  * constructor
  * render
  * componentDidMount
  * componentDidUpdate
  * componentWillUnmount

En cada uno de estos métodos podemos ejecutar código que nos permita controlar el comportamiento de nuestro componente.

---

### Intermedio

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

#### ¿Para qué sirve el hook `useMemo`?

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

#### ¿Qué son los componentes *stateless*?

Los componentes *stateless* son componentes que no tienen estado. Estos componentes se crean con una `function` y no tienen acceso al estado de la aplicación. La ventaja que tienen estos componentes es que son más fáciles de testear, ya que siempre deberían devolver la misma UI para los mismos *props*.

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

#### ¿Cómo puedes exportar múltiples componentes de un mismo archivo?

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

---

### Experto

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
