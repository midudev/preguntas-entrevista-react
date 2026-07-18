# Principiante

Preguntas de nivel **Principiante**. Tras cada explicación puedes encontrar un bloque *Pon a prueba*; las respuestas están al final del capítulo.

---

## ¿Qué es React?

**React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario.** Está basada en la componetización de la UI: la interfaz se divide en componentes independientes que pueden tener estado local y recibir datos por props. Cuando cambian los datos relevantes de un componente, React vuelve a renderizar la interfaz.

Esto hace que React sea una herramienta muy útil para construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables.

Fue creada en 2011 por Jordan Walke, un ingeniero de software que trabajaba en Facebook y que quería simplificar la forma de crear interfaces de usuario complejas.

Es una biblioteca muy popular y es usada por muchas empresas como Facebook, Netflix, Airbnb, Twitter, Instagram, etc.

Enlaces de interés:

- [Curso de React.js](https://midu.link/react)
- [Documentación oficial de React en Español](https://es.reactjs.org/)
- [Introduction to React.js de Facebook (2013)](https://www.youtube.com/watch?v=XxVg_s8xAms)
- [Documentación oficial de React actualizada](https://beta.reactjs.org/) en inglés


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es React?

- **a)** React es un lenguaje de marcado como HTML.
- **b)** React es un servidor web.
- **c)** React es una biblioteca de JavaScript para construir interfaces de usuario.
- **d)** React es un framework para construir aplicaciones web.

**2.** ¿Quién creó React y en qué contexto?

- **a)** Lo creó Jordan Walke en 2011 mientras trabajaba en Facebook.
- **b)** Lo desarrolló Twitter para reemplazar Backbone en su timeline.
- **c)** Lo creó Microsoft para integrarse con .NET y Silverlight.
- **d)** Fue lanzado por Google en 2012 como sucesor de AngularJS.

---

## ¿Cuáles son las características principales de React?

Las características principales de React son:

- **Componentes**: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

- **Virtual DOM**: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.

- **Declarativo**: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.

- **Unidireccional**: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

- **Universal**: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cuál es el concepto fundamental en React para construir la interfaz de usuario, donde cada pieza gestiona su propio estado?

- **a)** La componetización, dividiendo la UI en componentes independientes y reutilizables.
- **b)** El uso de plantillas HTML separadas, como en otros frameworks.
- **c)** La manipulación directa del DOM para mayor control.
- **d)** La herencia de clases como pilar principal de la arquitectura.

**2.** ¿Para qué utiliza React un DOM Virtual?

- **a)** Para ejecutar código de servidor directamente en el cliente de forma segura.
- **b)** Para almacenar el estado de la aplicación de forma persistente en el navegador.
- **c)** Para optimizar el rendimiento, comparando la representación en memoria con el DOM real y aplicando solo los cambios necesarios.
- **d)** Para reemplazar completamente el DOM del navegador, ya que es obsoleto.

**3.** Cuando se dice que React es 'declarativo', ¿a qué se refiere?

- **a)** A que se deben declarar todas las variables con 'var' al inicio del archivo.
- **b)** A que es obligatorio declarar los tipos de datos para cada prop y estado.
- **c)** A que se debe dar una secuencia de pasos imperativa para modificar el DOM.
- **d)** A que el desarrollador describe qué se debe mostrar, y React se encarga del cómo hacerlo.

**4.** ¿Qué implica que el flujo de datos en React sea 'unidireccional'?

- **a)** Que los datos fluyen en una sola dirección, típicamente de componentes padres a componentes hijos.
- **b)** Que un componente hijo puede modificar directamente el estado de su componente padre.
- **c)** Que todos los datos de la aplicación deben estar en un único archivo.
- **d)** Que los datos solo pueden ser de un único tipo primitivo (string, number, etc.).

**5.** La característica 'Universal' de React se refiere a su capacidad para:

- **a)** Ser un estándar universal adoptado por todas las grandes empresas de tecnología.
- **b)** Tener una API universal que nunca cambia entre versiones.
- **c)** Funcionar únicamente con un estado global universal para toda la aplicación.
- **d)** Ejecutarse tanto en el cliente como en el servidor, y usarse para crear apps nativas (React Native).

**6.** Cuando el estado de un componente cambia, ¿cuál es el proceso que sigue React combinando sus características principales?

- **a)** El componente afectado se elimina del DOM y se vuelve a crear desde cero, sin importar la magnitud del cambio.
- **b)** El flujo de datos bidireccional informa al padre, que decide si vuelve a renderizar todo el árbol de componentes.
- **c)** React actualiza el DOM Virtual, lo compara con el DOM real para encontrar las diferencias y aplica solo esos cambios de forma eficiente.
- **d)** Recarga toda la página desde el servidor para asegurar la consistencia, siguiendo su naturaleza universal.

---

## ¿Qué significa exactamente que sea declarativo?

Que React sea declarativo significa que describimos el resultado que queremos en la interfaz para un estado concreto, en vez de programar manualmente cada paso para manipular el DOM.

Es decir: declaramos el "qué" y React se ocupa del "cómo".

Esto aporta ventajas importantes:

- Hace el código más predecible y fácil de mantener.
- Reduce errores derivados de manipulación imperativa del DOM.
- Permite razonar la UI como una función del estado.

Un ejemplo entre declarativo e imperativo:

```js
// Declarativo
const element = <h1>Hello, world</h1>

// Imperativo
const element = document.createElement('h1')
element.innerHTML = 'Hello, world'
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué significa que React sea una biblioteca declarativa?

- **a)** Le decimos qué debe renderizar y React se encarga de cómo hacerlo.
- **b)** Se refiere a que la sintaxis de React es muy similar a la de una declaración jurada.
- **c)** Le damos a React las instrucciones paso a paso de cómo debe renderizar la interfaz.
- **d)** Implica que solo se pueden usar componentes declarados como clases.

**2.** Observando el código de ejemplo, ¿cuál fragmento representa el enfoque imperativo?

- **a)** const element = document.createElement('h1'); element.innerHTML = 'Hello, world'
- **b)** Ambos fragmentos son imperativos.
- **c)** Ninguno de los dos, ambos son declarativos.
- **d)** const element = <h1>Hello, world</h1>

**3.** La sintaxis `<h1>Hello, world</h1>` en el ejemplo es un ejemplo de programación...

- **a)** Declarativa.
- **b)** Orientada a objetos.
- **c)** Imperativa.
- **d)** Funcional.

---

## ¿Qué es un componente?

Un componente es la unidad fundamental de construcción en React. Es una pieza de interfaz autónoma y reutilizable que encapsula su estructura (JSX), su comportamiento (eventos y lógica), y en muchos casos también su estado.

Pensar en componentes es pensar en términos de composición: en lugar de construir una pantalla como un bloque monolítico, la dividimos en partes pequeñas y bien definidas (por ejemplo: `Header`, `Sidebar`, `UserCard`, `Button`). Esta forma de trabajar hace que la aplicación sea más mantenible, escalable y fácil de testear.

Un componente puede:

- Recibir datos de entrada mediante props.
- Renderizar una salida visual en función de esos datos.
- Gestionar estado interno cuando necesita recordar información entre renderizados.
- Reutilizarse en distintos contextos sin duplicar lógica.

En React moderno, los componentes se escriben principalmente como funciones. Históricamente también se han usado clases, y es importante conocerlas para leer código legado, pero hoy el enfoque recomendado es funcional junto a hooks.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** En React, un componente es...

- **a)** Una pieza de codigo que renderiza una parte de la interfaz.
- **b)** Un servidor que procesa las peticiones HTTP.
- **c)** Un archivo CSS que define los estilos de la aplicacion.
- **d)** Una libreria externa para manejar rutas.

**2.** ¿Cuales son las dos formas principales de crear un componente en React?

- **a)** Usando funciones o clases.
- **b)** Usando objetos literales o arrays.
- **c)** Usando HTML puro o Web Components.
- **d)** Usando modulos CommonJS o ES Modules.

**3.** ¿Que caracteristicas pueden tener los componentes en React?

- **a)** Solo pueden acceder al estado global de la aplicacion.
- **b)** Solo pueden mostrar texto estatico sin interactividad.
- **c)** Deben ser unicos y no se pueden reutilizar.
- **d)** Pueden ser parametrizados, reutilizados y contener su propio estado.

---

## ¿Qué es JSX?

React usa JSX para declarar qué debe renderizar. JSX es una extensión de JavaScript que permite escribir un código más cercano visualmente a HTML, que mejora la legibilidad del código y hace que sea más fácil de entender.

Sin JSX, deberíamos usar `React.createElement` para crear los elementos de la interfaz manualmente de esta forma:

```js
import { createElement } from 'react'

function Hello() {
  // un componente es una función! 👀
  return React.createElement(
    'h1', // elemento a renderizar
    null, // atributos del elemento
    'Hola Mundo 👋🌍!' // contenido del elemento
  )
}
```

Esto es muy tedioso y poco legible. Por eso, React usa JSX para declarar qué debe renderizar. Por eso usamos JSX de esta forma:

```jsx
function Hello() {
  return <h1>Hola Mundo 👋🌍!</h1>
}
```

Ambos códigos son equivalentes.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es JSX en React?

- **a)** Un plugin de Node.js para compilar codigo.
- **b)** Una extension de JavaScript que permite escribir codigo similar a HTML.
- **c)** Un servidor backend para procesar peticiones.
- **d)** Un framework CSS para estilizar componentes.

**2.** ¿Cual es la alternativa a JSX para crear elementos en React?

- **a)** Usar React.createElement() manualmente.
- **b)** Usar document.createElement() del DOM.
- **c)** Importar templates desde archivos .html externos.
- **d)** No existe alternativa, JSX es obligatorio.

**3.** ¿Por que se usa JSX en lugar de React.createElement()?

- **a)** Porque JSX es mas rapido en tiempo de ejecucion.
- **b)** Porque mejora la legibilidad del codigo y es mas facil de entender.
- **c)** Porque React.createElement() esta deprecado.
- **d)** Porque React.createElement() solo funciona en Node.js.

---

## ¿Cómo se transforma el JSX?

**El JSX se transforma en código JavaScript compatible en el navegador usando un _transpilador_ o _compilador_**. El más famoso es a día de hoy Babel, que utiliza una serie de plugins para ser compatible con la transformación, pero existen otros como SWC.

Puedes ver cómo se transforma el JSX en el [playground de código de Babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACQKYBt10QCgJSIDeAUIogE6pQjlIA8AFgIwB8yc6AhogLLgAm2QLwbgaR3APBuBYfYCEdAPTMWxAL5A&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.25.3&externalPlugins=&assumptions=%7B%7D).

Hay casos especiales en los que un transpilador no es necesario. Por ejemplo, **Deno tiene soporte nativo para la sintaxis JSX** y no es necesario transformar el código para hacerlo compatible.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se transforma el JSX en codigo JavaScript compatible?

- **a)** React lo convierte automaticamente en tiempo de ejecucion.
- **b)** El navegador lo interpreta directamente sin transformacion.
- **c)** Node.js tiene soporte nativo para JSX sin configuracion.
- **d)** Usando un transpilador o compilador como Babel o SWC.

**2.** ¿Cual es el transpilador mas famoso para transformar JSX?

- **a)** npm.
- **b)** Prettier.
- **c)** Babel.
- **d)** ESLint.

**3.** ¿Existe algun entorno donde no sea necesario transpilar JSX?

- **a)** Si, Deno tiene soporte nativo para la sintaxis JSX.
- **b)** Si, Chrome tiene un flag experimental para JSX.
- **c)** Si, todos los navegadores modernos soportan JSX.
- **d)** No, siempre es necesario transpilar JSX.

---

## ¿Cuál es la diferencia entre componente y elemento en React?

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


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** En React, ¿que es un componente?

- **a)** Una etiqueta HTML nativa del navegador.
- **b)** Una variable que almacena estado global.
- **c)** Una funcion o clase que recibe props y devuelve un elemento.
- **d)** Un objeto que representa un nodo del DOM.

**2.** En React, ¿que es un elemento?

- **a)** Un hook para manejar el estado.
- **b)** Una funcion que devuelve JSX.
- **c)** Una clase que extiende React.Component.
- **d)** Un objeto que representa un nodo del DOM o una instancia de un componente.

**3.** ¿Que propiedades tiene un elemento de React que representa un nodo del DOM?

- **a)** id y class como en HTML tradicional.
- **b)** type (tipo de elemento) y props (propiedades incluyendo children).
- **c)** innerHTML y className solamente.
- **d)** hooks y context unicamente.

---

## ¿Cómo crear un componente en React?

En React, un componente es una función (o, de forma histórica, una clase) que describe una parte de la interfaz.

Hoy en día, el enfoque recomendado es crear componentes funcionales:

```jsx
function HelloWorld() {
  return <h1>Hello World!</h1>
}
```

También puedes encontrarte componentes de clase en código legado:

```jsx
import { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!</h1>
  }
}
```

Reglas básicas al crear componentes:

- El nombre debe empezar en mayúscula para que React lo interprete como componente y no como etiqueta HTML.
- Debe ser reutilizable y tener una responsabilidad clara.
- Debe recibir datos por props cuando necesite configuración externa.

Como criterio de arquitectura, cuanto más pequeños y específicos sean tus componentes, más fácil será mantener y escalar la aplicación.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es la forma mas recomendada de crear un componente en React actualmente?

- **a)** Usando clases exclusivamente.
- **b)** Usando objetos literales.
- **c)** Usando funciones.
- **d)** Usando templates HTML.

**2.** ¿Por que el nombre de un componente debe empezar con letra mayuscula?

- **a)** Es un requisito de ESLint, no de React.
- **b)** Para que React pueda distinguir entre componentes y elementos HTML.
- **c)** Es una convencion opcional que no afecta el funcionamiento.
- **d)** Para que el navegador pueda optimizar el rendimiento.

**3.** Al crear un componente con clase, ¿que metodo es obligatorio implementar?

- **a)** El metodo render().
- **b)** El metodo return().
- **c)** El metodo componentDidMount().
- **d)** El metodo constructor().

---

## ¿Qué son las props en React?

Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente `Button` que muestra un botón, puedes pasarle una prop `text` para que el botón muestre ese texto:

```jsx
function Button(props) {
  return <button>{props.text}</button>
}
```

Podríamos entender que el componente `Button` es un botón genérico, y que la prop `text` es el texto que se muestra en el botón. Así estamos creando un componente reutilizable.

Debe considerarse además que al usar cualquier expresión JavaScript dentro de JSX debe envolverlos con `{}`, en este caso el objeto `props`, de otra forma JSX lo considerará como texto plano.

Para usarlo, indicamos el nombre del componente y le pasamos las props que queremos:

```jsx
<Button text="Haz clic aquí" />
<Button text="Seguir a @midudev" />
```

Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son las props en React?

- **a)** Son archivos externos importados.
- **b)** Son estilos CSS inline del componente.
- **c)** Son datos que se pasan de un componente a otro.
- **d)** Son variables globales de la aplicacion.

**2.** ¿Como se accede al valor de una prop dentro de un componente funcional?

- **a)** Usando this.props dentro de la funcion.
- **b)** Usando el hook useProps().
- **c)** A traves del objeto props que recibe la funcion como parametro.
- **d)** Importando las props desde React.

**3.** ¿Como se usa una expresion JavaScript dentro de JSX?

- **a)** Usando la palabra clave eval.
- **b)** Envolviendola con corchetes [].
- **c)** Usando template literals con backticks.
- **d)** Envolviendola con llaves {}.

---

## ¿Qué es y para qué sirve la prop `children` en React?

La prop `children` es una prop especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente.

Por ejemplo, si tenemos un componente `Card` que muestra una tarjeta con un título y un contenido, podemos usar la prop `children` para mostrar el contenido:

```jsx
function Card(props) {
  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  )
}
```

Y luego podemos usarlo de la siguiente forma:

```jsx
<Card title='Título de la tarjeta'>
  <p>Contenido de la tarjeta</p>
</Card>
```

En este caso, la prop `children` contiene el elemento `<p>Contenido de la tarjeta</p>`.

Conocer y saber usar la prop `children` es muy importante para crear componentes reutilizables en React.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es la prop children en React?

- **a)** Una variable global de React.
- **b)** Una prop especial que contiene los elementos que envuelve un componente.
- **c)** Un array con todos los subcomponentes de la aplicacion.
- **d)** Un metodo para crear nuevos componentes.

**2.** ¿Para que sirve la prop children?

- **a)** Para modificar las props de otros componentes.
- **b)** Para acceder al estado de los componentes hijos.
- **c)** Para crear componentes reutilizables que pueden envolver contenido dinamico.
- **d)** Para conectarse a APIs externas.

**3.** ¿Como se accede a la prop children dentro de un componente?

- **a)** Usando document.children.
- **b)** A traves de props.children.
- **c)** Usando el hook useChildren().
- **d)** Llamando al metodo getChildren().

---

## ¿Qué diferencia hay entre props y state?

Aunque ambos afectan al renderizado, cumplen funciones distintas:

- Las _props_ son datos de entrada que recibe un componente desde fuera (normalmente desde su componente padre). Dentro del componente receptor se tratan como inmutables.
- El _state_ es memoria interna del componente y representa datos que cambian con el tiempo por interacción del usuario o por lógica de negocio.

Una regla práctica para recordarlo:

- _props_ = configuración externa.
- _state_ = estado interno que evoluciona.

Entender esta diferencia es fundamental para diseñar componentes predecibles y mantener un flujo de datos unidireccional.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿De donde provienen las props en un componente?

- **a)** Se pasan como argumentos desde un componente padre.
- **b)** Se generan automaticamente por React.
- **c)** Se obtienen de una API externa.
- **d)** Se importan desde un archivo de configuracion.

**2.** ¿Donde se define el state de un componente?

- **a)** En el archivo index.html.
- **b)** En el componente padre.
- **c)** Dentro del propio componente.
- **d)** En el servidor backend.

**3.** ¿Se pueden modificar las props desde el componente hijo?

- **a)** No, las props son inmutables y no se pueden modificar desde el componente hijo.
- **b)** Solo en componentes de clase, no en funcionales.
- **c)** Si, las props se pueden modificar libremente.
- **d)** Depende de la version de React instalada.

---

## ¿Se puede inicializar un estado con el valor de una prop? ¿Qué pasa si lo haces y qué hay que tener en cuenta?

Sí, se puede inicializar el estado con el valor de una prop. Pero hay que tener en cuenta que, si la prop cambia, el estado no se actualizará automáticamente. Esto es porque el estado se inicializa una vez, cuando el componente se monta por primera vez.

Por ejemplo, con componentes funcionales:

```jsx
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} />
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}

const Count = ({ count }) => {
  const [number, setNumber] = useState(count)

  return <p>{number}</p>
}
```

En este caso, el componente `Count` inicializa su estado con el valor de la prop `count`. Pero si cambia el valor de la prop `count`, el estado no se actualizará automáticamente. Por lo que al hacer click, siempre veremos el número 0 en pantalla.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-cdf8n9?file=App.tsx)

En este ejemplo, lo mejor sería simplemente usar la prop `count` en el componente `Count` y así siempre se volvería a renderizar.

**Es una buena práctica evitar al máximo los estados de nuestros componentes y, siempre que se pueda, simplemente calcular el valor a mostrar a partir de las props.**

En el caso que necesites inicializar un estado con una prop, es una buena práctica añadir el prefijo de `initial` a la prop para indicar que es el valor inicial del estado y que luego no lo usaremos más:

```jsx
const Input = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue)

  return <input value={value} onChange={e => setValue(e.target.value)} />
}
```

Es un error muy común pensar que la prop actualizará el estado, así que tenlo en cuenta.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Se puede inicializar un estado con el valor de una prop?

- **a)** No, React no permite inicializar estados con props.
- **b)** Si, pero el estado no se actualizara automaticamente si la prop cambia.
- **c)** Produce un error en tiempo de ejecucion.
- **d)** Solo si la prop es de tipo primitivo (string o number).

**2.** ¿Cual es una buena practica al nombrar una prop que se usara para inicializar un estado?

- **a)** No existe ninguna convencion para esto.
- **b)** Nombrarla igual que el estado interno.
- **c)** Anadir el prefijo 'initial' a la prop, como initialValue.
- **d)** Usar el sufijo 'Prop' como valueProp.

**3.** ¿Cual es una buena practica respecto al uso de estados en componentes?

- **a)** Usar solo variables globales en lugar de estados.
- **b)** Evitar estados al maximo y calcular valores a partir de las props cuando sea posible.
- **c)** Nunca usar useState, solo useReducer.
- **d)** Crear un estado para cada prop que reciba el componente.

---

## ¿Qué es el renderizado condicional en React?

El renderizado condicional es la forma de mostrar un componente u otro dependiendo de una condición.

Para hacer renderizado condicional en React usamos el operador ternario:

```jsx
function Button({ text }) {
  return text ? <button>{text}</button> : null
}
```

En este caso, si la prop `text` existe, se renderiza el botón. Si no existe, no se renderiza nada.

Es común encontrar implementaciones del renderizado condicional con el operador `&&`, del tipo:

```jsx
function List({ listArray }) {
  return listArray?.length && listArray.map(item => item)
}
```

Parece que tiene sentido... si el `length` es positivo (mayor a cero) pintamos el map. !Pues no! ❌ Cuidado, si tiene `length` de cero ya que se pintará en el navegador un 0.

Es preferible utilizar el operador ternario. _Kent C. Dodds_ tiene un artículo interesante hablando del tema. [Use ternaries rather than && in JSX](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el renderizado condicional en React?

- **a)** Es optimizar el rendimiento de la aplicacion.
- **b)** Es mostrar un componente u otro dependiendo de una condicion.
- **c)** Es validar las props de un componente.
- **d)** Es aplicar estilos CSS de forma dinamica.

**2.** ¿Cual es la forma recomendada de hacer renderizado condicional en React?

- **a)** Usando if/else dentro del JSX directamente.
- **b)** Usando el operador ternario (condicion ? a : b).
- **c)** Usando switch/case dentro del return.
- **d)** Usando el hook useCondition().

**3.** ¿Cual es el problema de usar el operador && con arrays de longitud 0?

- **a)** Produce un error de JavaScript.
- **b)** Se renderiza el numero 0 en el navegador en lugar de no mostrar nada.
- **c)** Se muestra undefined en pantalla.
- **d)** El componente no se renderiza nunca.

---

## ¿Cómo puedes aplicar clases CSS a un componente en React y por qué no se puede usar `class`?

Nota: aunque el enunciado hable de "componente", la prop `className` se aplica sobre los elementos JSX/HTML que el componente renderiza.

En React usamos la prop `className` para definir el valor del atributo `class` del HTML:

```jsx
function Button({ text }) {
  return <button className='button'>{text}</button>
}
```

Es decir, las clases que pones en `className` son clases HTML normales (pueden usarse para CSS, tests, selectores, utilidades, etc.). En JSX no se usa `class` porque es una palabra reservada en JavaScript, por eso React utiliza `className`.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que prop se usa para aplicar clases CSS a un componente en React?

- **a)** class
- **b)** cssClass
- **c)** className
- **d)** styleClass

**2.** ¿Por que no se puede usar 'class' para aplicar clases CSS en JSX?

- **a)** Porque 'class' es una palabra reservada en JavaScript.
- **b)** Porque los navegadores no reconocen 'class'.
- **c)** Porque React no soporta CSS.
- **d)** Es una decision de diseno sin razon tecnica.

---

## ¿Cómo puedes aplicar estilos en línea a un componente en React?

Nota: al igual que con `className`, el estilo en línea se asigna a elementos JSX/HTML renderizados por el componente.

Para aplicar estilos CSS en línea a un componente en React usamos la prop `style`. La diferencia de cómo lo haríamos con HTML, es que en React los estilos se pasan como un objeto y no como una cadena de texto (esto puede verse más claro con los dobles corchetes, los primeros para indicar que es una expresión JavaScript, y los segundos para crear el objeto):

```jsx
function Button({ text }) {
  return <button style={{ color: 'red', borderRadius: '2px' }}>{text}</button>
}
```

Fíjate que, además, los nombres de las propiedades CSS están en camelCase.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se pasan los estilos en linea en React?

- **a)** Como una cadena de texto igual que en HTML.
- **b)** Importando un archivo .css directamente.
- **c)** Como un objeto JavaScript, no como una cadena de texto.
- **d)** Usando la funcion createStyle().

**2.** ¿En que formato deben estar los nombres de las propiedades CSS en React?

- **a)** En snake_case (ej: border_radius).
- **b)** Solo se permiten propiedades de una sola palabra.
- **c)** En camelCase (ej: borderRadius, backgroundColor).
- **d)** En MAYUSCULAS (ej: BORDERRADIUS).

**3.** ¿Cual es la sintaxis correcta para aplicar estilos en linea en React?

- **a)** styles=['color: red']
- **b)** style={color: 'red', fontSize: '16px'}
- **c)** style={{ color: 'red', fontSize: '16px' }}
- **d)** style="color: red; font-size: 16px"

---

## ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?

En la práctica, esa condición termina afectando a props de estilo (`style`, `className`) sobre los elementos renderizados por el componente.

Puedes aplicar estilos de forma condicional a un componente en React usando la prop `style` y un operador ternario:

```jsx
function Button({ text, primary }) {
  return <button style={{ color: primary ? 'red' : 'blue' }}>{text}</button>
}
```

En el caso anterior, si la prop `primary` es `true`, el botón tendrá el color rojo. Si no, tendrá el color azul.

También puedes seguir la misma mecánica usando clases. En este caso, usamos el operador ternario para decidir si añadir o no la clase:

```jsx
function Button({ text, primary }) {
  return <button className={primary ? 'button-primary' : ''}>{text}</button>
}
```

También podemos usar bibliotecas como `classnames`:

```jsx
import classnames from 'classnames'

function Button({ text, primary }) {
  return <button className={classnames('button', { primary })}>{text}</button>
}
```

En este caso, si la prop `primary` es `true`, se añadirá la clase `primary` al botón. Si no, no se añadirá. En cambio la clase `button` siempre se añadirá.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se pueden aplicar estilos de forma condicional en React?

- **a)** No es posible aplicar estilos condicionales en React.
- **b)** Usando la prop style con un operador ternario.
- **c)** Usando el hook useStyle().
- **d)** Solo se puede hacer con styled-components.

**2.** ¿Que biblioteca se puede usar para facilitar la aplicacion de clases condicionales?

- **a)** react-class-manager
- **b)** classnames
- **c)** css-loader
- **d)** react-css

**3.** ¿Como se aplican clases CSS de forma condicional sin usar bibliotecas externas?

- **a)** Usando if/else dentro del JSX.
- **b)** No es posible sin bibliotecas externas.
- **c)** Usando document.getElementById().classList.
- **d)** Usando el operador ternario en className: className={condicion ? 'clase' : ''}

---

## ¿Qué es el renderizado de listas en React?

El renderizado de listas es la forma de iterar un array de elementos y renderizar elementos de React para cada uno de ellos.

Para hacer renderizado de listas en React usamos el método `map` de los arrays:

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```

En este caso, se renderiza una lista de elementos usando el componente `List`. El componente `List` recibe una prop `items` que es un array de objetos del tipo `[{ id: 1, name: "John Doe" }]`. El componente `List` renderiza un elemento `li` por cada elemento del array.

El elemento `li` tiene una prop `key` que es un identificador único para cada elemento. Esto es necesario para que React pueda identificar cada elemento de la lista y actualizarlo de forma eficiente. Más adelante hay una explicación más detallada sobre esto.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que metodo de array se usa para renderizar listas en React?

- **a)** El metodo filter().
- **b)** El metodo reduce().
- **c)** El hook useList().
- **d)** El metodo map().

**2.** ¿Para que sirve la prop 'key' al renderizar listas?

- **a)** Para que React pueda identificar cada elemento y actualizarlo de forma eficiente.
- **b)** Es opcional y no tiene ninguna funcion especifica.
- **c)** Para ordenar los elementos alfabeticamente.
- **d)** Para encriptar los datos del elemento.

**3.** ¿Que caracteristica debe tener el valor de la prop 'key'?

- **a)** Debe ser un identificador unico para cada elemento.
- **b)** Debe ser un UUID generado automaticamente.
- **c)** Debe ser el indice del array.
- **d)** Debe ser siempre un numero entero.

---

## ¿Cómo puedes escribir comentarios en React?

Si vas a escribir un comentario fuera del renderizado de un componente, puedes usar la sintaxis de comentarios de JavaScript sin problemas:

```jsx
function Button({ text }) {
  // Esto es un comentario
  /* Esto es un comentario
  de varias líneas */

  return <button>{text}</button>
}
```

Si vas a escribir un comentario dentro del renderizado de un componente, debes envolver el comentario en llaves y usar siempre la sintaxis de comentarios de bloque:

```jsx
function Button({ text }) {
  return (
    <button>
      {/* Esto es un comentario en el render */}
      {text}
    </button>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se escribe un comentario dentro del renderizado (JSX) de un componente?

- **a)** Envolviendo el comentario en llaves con sintaxis de bloque: {/* comentario */}
- **b)** Usando el hook useComment().
- **c)** Usando <!-- comentario --> como en HTML.
- **d)** No es posible escribir comentarios dentro del JSX.

**2.** ¿Como se escribe un comentario fuera del renderizado de un componente?

- **a)** Usando la funcion React.comment().
- **b)** Usando la sintaxis normal de JavaScript: // o /* */
- **c)** Usando <!-- --> como en HTML.
- **d)** No se pueden escribir comentarios fuera del JSX.

---

## ¿Cómo añadir un evento a un componente en React?

De nuevo, estrictamente hablando, el evento se conecta en el elemento JSX renderizado (`button`, `input`, `form`, etc.), aunque lo configuremos desde el componente.

En React, los eventos se registran con props que siguen la convención `on` + nombre del evento en _camelCase_ (`onClick`, `onChange`, `onSubmit`, etc.).

La clave es pasar una función como manejador del evento, no ejecutar la función durante el render.

```jsx
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>
}
```

En este caso, `Button` recibe una prop `onClick` y delega en ella su comportamiento al hacer clic. Este patrón permite crear componentes más reutilizables y desacoplados.

Si necesitas añadir lógica intermedia (tracking, validaciones, etc.), puedes encapsularla en una función interna:

```jsx
function Button({ text, onClick }) {
  const handleClick = event => {
    // lógica previa
    onClick(event)
  }

  return <button onClick={handleClick}>{text}</button>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es la sintaxis para anadir un evento click a un boton en React?

- **a)** onclick="funcion()"
- **b)** onClick={funcion}
- **c)** @click={funcion}
- **d)** click={funcion}

**2.** ¿En que formato deben escribirse los nombres de los eventos en React?

- **a)** En camelCase (ej: onClick, onChange, onMouseOver).
- **b)** Cualquier formato es valido.
- **c)** En MAYUSCULAS (ej: ONCLICK).
- **d)** En kebab-case (ej: on-click, on-change).

**3.** ¿Que se pasa como valor a la prop de evento en React?

- **a)** Un numero identificador del evento.
- **b)** Una cadena de texto con el nombre de la funcion.
- **c)** Un boolean indicando si el evento esta activo.
- **d)** Una funcion (referencia a funcion, no su invocacion).

---

## ¿Cómo puedo pasar un parámetro a una función que maneja un evento en React?

Para pasar un parámetro a una función que maneja un evento en React podemos usar una función anónima:

```jsx
function Button({ id, text, onClick }) {
  return <button onClick={() => onClick(id)}>{text}</button>
}
```

Cuando el usuario hace clic en el botón, se ejecuta la función `onClick` pasándole como parámetro el valor de la prop `id`.

También puedes crear una función que ejecuta la función `onClick` pasándole el valor de la prop `id`:

```jsx
function Button({ id, text, onClick }) {
  const handleClick = event => {
    // handleClick recibe el evento original
    onClick(id)
  }

  return <button onClick={handleClick}>{text}</button>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se puede pasar un parametro a una funcion que maneja un evento en React?

- **a)** No es posible pasar parametros a funciones de eventos.
- **b)** Usando una funcion anonima: onClick={() => handleClick(id)}
- **c)** Usando el atributo data-param en el elemento.
- **d)** Concatenando el parametro al nombre de la funcion.

**2.** ¿Que problema hay al escribir onClick={handleClick(id)} directamente?

- **a)** Solo funciona con parametros de tipo string.
- **b)** No hay ningun problema, es la forma correcta.
- **c)** React ignora completamente la llamada.
- **d)** La funcion se ejecuta inmediatamente al renderizar, no al hacer click.

---

## ¿Qué es el estado en React?

El estado es un objeto que contiene datos que pueden cambiar en el tiempo. En React, el estado se usa para controlar los cambios en la interfaz.

Para que entiendas el concepto, piensa en el interruptor de una habitación. Estos interruptores suelen tener dos estados: encendido y apagado. Cuando accionamos el interruptor y lo ponemos en `on` entonces la luz se enciende y cuando lo ponemos en `off` la luz se apaga.

Este mismo concepto se puede aplicar a la interfaz de usuario. Por ejemplo, el botón Me Gusta de Facebook tendría el estado de `meGusta` a `true` cuando el usuario le ha dado a Me Gusta y a `false` cuando no lo ha hecho.

No solo podemos tener en el estado valores booleanos, también podemos tener objetos, arrays, números, etc.

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

Al usar el hook `useState` este devolverá un `array` de dos posiciones:

0. El valor del estado.
1. La función para cambiar el estado.

Suele usarse desestructuración para facilitar la lectura y ahorrarnos algunas líneas de código. Por otro lado, al pasarle un dato como parámetro al `useState` le estamos indicando su estado inicial.

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


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el estado en React?

- **a)** Una funcion que se ejecuta al cargar el componente.
- **b)** Un metodo del ciclo de vida del componente.
- **c)** Un objeto que contiene datos que pueden cambiar en el tiempo y controla la interfaz.
- **d)** Un archivo de configuracion de la aplicacion.

**2.** ¿Que hook se usa para crear estado en componentes funcionales?

- **a)** useMemo
- **b)** useRef
- **c)** useContext
- **d)** useState

**3.** ¿Que devuelve el hook useState?

- **a)** Una promesa que resuelve al valor del estado.
- **b)** Solo la funcion para modificar el estado.
- **c)** Un array con el valor del estado y la funcion para cambiarlo.
- **d)** Un objeto con propiedades value y setValue.

---

## ¿Qué son los hooks?

Los Hooks son funciones especiales de React que permiten usar estado, efectos y otras capacidades del framework dentro de componentes funcionales.

Antes de su aparición, estas capacidades se asociaban sobre todo a componentes de clase. Con hooks, el modelo funcional pasó a ser la opción principal.

Algunos hooks fundamentales son:

- `useState`: para estado local.
- `useEffect`: para sincronizar efectos secundarios.
- `useMemo` y `useCallback`: para optimización de cálculos y referencias.
- `useRef`: para referencias mutables o acceso al DOM.

Además, React permite crear _custom hooks_, que son una forma excelente de reutilizar lógica con estado entre componentes sin duplicar código.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son los Hooks en React?

- **a)** Eventos del navegador capturados por React.
- **b)** Una API que permite tener estado y otras caracteristicas de React en componentes funcionales.
- **c)** Metodos exclusivos de los componentes de clase.
- **d)** Funciones para conectar React con bases de datos.

**2.** ¿Por que fueron creados los Hooks?

- **a)** Para mejorar el rendimiento de las animaciones.
- **b)** Para reemplazar completamente el uso de JSX.
- **c)** Para simplificar la sintaxis de CSS en React.
- **d)** Para permitir usar estado y otras caracteristicas sin necesidad de crear clases.

**3.** ¿Que significa el nombre 'Hooks' (ganchos)?

- **a)** Es un acronimo de Higher Order Oriented Key System.
- **b)** Que atrapan errores en tiempo de ejecucion.
- **c)** Que conectan diferentes aplicaciones entre si.
- **d)** Que permiten 'enganchar' componentes funcionales a las caracteristicas de React.

---

## ¿Qué hace el hook `useState`?

El hook `useState` es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza

Recibe un parámetro:

- El valor inicial de nuestra variable de estado.

Devuelve un array con dos variables:

- En primer lugar tenemos la variable que contiene el valor
- La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos
- Cabe destacar que la función proporciona cómo parámetro el valor actual del propio estado. Ex: `setIsOpen(isOpen => !isOpen)`

En este ejemplo mostramos como el valor de `count` se inicializa en 0, y también se renderiza cada vez que el valor es modificado con la función `setCount` en el evento `onClick` del button:

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Aumentar</button>
    </>
  )
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que se utiliza el hook useState?

- **a)** Para crear referencias a elementos del DOM.
- **b)** Para memorizar calculos costosos.
- **c)** Para crear variables de estado cuyo valor puede cambiar y causa re-renderizado.
- **d)** Para definir el estilo CSS del componente.

**2.** ¿Que parametro recibe useState?

- **a)** El nombre de la variable de estado.
- **b)** Una funcion callback.
- **c)** El valor inicial del estado.
- **d)** Una referencia a otro componente.

**3.** ¿Como se puede acceder al valor actual del estado dentro de la funcion set?

- **a)** Llamando a getState() previamente.
- **b)** Accediendo a useState.current.
- **c)** Pasando una funcion como parametro: setCount(count => count + 1)
- **d)** No es posible acceder al valor actual.

---

## ¿Qué hace el hook `useReducer`?

`useReducer` es un hook para gestionar estado cuando las transiciones son más complejas que un simple "setear valor".

Es especialmente útil cuando:

- El estado tiene varios campos relacionados.
- Hay varias acciones que modifican ese estado.
- Quieres centralizar la lógica de actualización en una única función (`reducer`).

Su firma básica es:

```jsx
const [state, dispatch] = useReducer(reducer, initialState)
```

- `state`: estado actual.
- `dispatch`: función para enviar acciones.
- `reducer(state, action)`: función pura que devuelve el siguiente estado.

Ejemplo:

```jsx
import { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
```

`useState` suele ser más simple para casos sencillos; `useReducer` brilla cuando necesitas reglas de negocio más explícitas y escalables.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para qué sirve useReducer?

- **a)** Para memorizar valores calculados entre renders.
- **b)** Para crear referencias al DOM sin re-renderizar.
- **c)** Para gestionar estado complejo con una función reducer y acciones.
- **d)** Para validar el tipo de las props en tiempo de ejecución.

**2.** ¿Qué devuelve useReducer?

- **a)** Solo el estado, sin forma de actualizarlo.
- **b)** Un array con el estado actual y la función dispatch.
- **c)** Una ref mutable con el último estado.
- **d)** Un objeto con getState y subscribe.

**3.** ¿Cuándo suele preferirse useReducer frente a useState?

- **a)** Únicamente en Server Components.
- **b)** Cuando el estado es complejo o las actualizaciones dependen de la lógica anterior.
- **c)** Solo en componentes de clase.
- **d)** Solo para estilos en línea.

---

## ¿Qué significa la expresión "subir el estado"?

Cuando varios componentes necesitan compartir los mismos datos de un estado, entonces se recomienda elevar ese estado compartido hasta su ancestro común más cercano.

Dicho de otra forma. Si dos componentes hijos comparten los mismos datos de su padre, entonces mueve el estado al padre en lugar de mantener un estado local en sus hijos.

Para entenderlo, lo mejor es que lo veamos con un ejemplo. Imagina que tenemos una lista de regalos deseados y queremos poder añadir regalos y mostrar el total de regalos que hay en la lista.

```jsx
import { useState } from 'react'

export default function App() {
  return (
    <>
      <h1>Lista de regalos</h1>
      <GiftList />
      <TotalGifts />
    </>
  )
}

function GiftList() {
  const [gifts, setGifts] = useState([])

  const addGift = () => {
    const newGift = prompt('¿Qué regalo quieres añadir?')
    setGifts([...gifts, newGift])
  }

  return (
    <>
      <h2>Regalos</h2>
      <ul>
        {gifts.map(gift => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
      <button onClick={addGift}>Añadir regalo</button>
    </>
  )
}

function TotalGifts() {
  const [totalGifts, setTotalGifts] = useState(0)

  return (
    <>
      <h2>Total de regalos</h2>
      <p>{totalGifts}</p>
    </>
  )
}
```

¿Qué pasa si queremos que el total de regalos se actualice cada vez que añadimos un regalo? Como podemos ver, no es posible porque el estado de `totalGifts` está en el componente `TotalGifts` y no en el componente `GiftList`. Y como no podemos acceder al estado de `GiftList` desde `TotalGifts`, no podemos actualizar el estado de `totalGifts` cuando añadimos un regalo.

Tenemos que subir el estado de `gifts` al componente padre `App` y le pasaremos el número de regalos como prop al componente `TotalGifts`.

```jsx
import { useState } from 'react'

export default function App() {
  const [gifts, setGifts] = useState([])

  const addGift = () => {
    const newGift = prompt('¿Qué regalo quieres añadir?')
    setGifts([...gifts, newGift])
  }

  return (
    <>
      <h1>Lista de regalos</h1>
      <GiftList gifts={gifts} addGift={addGift} />
      <TotalGifts totalGifts={gifts.length} />
    </>
  )
}

function GiftList({ gifts, addGift }) {
  return (
    <>
      <h2>Regalos</h2>
      <ul>
        {gifts.map(gift => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
      <button onClick={addGift}>Añadir regalo</button>
    </>
  )
}

function TotalGifts({ totalGifts }) {
  return (
    <>
      <h2>Total de regalos</h2>
      <p>{totalGifts}</p>
    </>
  )
}
```

Con esto, lo que hemos hecho es _elevar el estado_. Lo hemos movido desde el componente `GiftList` al componente `App`. Ahora pasamos como prop los regalos al componente `GiftList` y una forma de actualizar el estado, y también hemos pasado como prop al componente `TotalGifts` el número de regalos.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-qitkys?file=App.tsx)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que significa 'subir el estado' en React?

- **a)** Mejorar el rendimiento del estado.
- **b)** Convertir el estado local en estado global de Redux.
- **c)** Enviar el estado a un servidor remoto.
- **d)** Mover el estado al componente ancestro comun mas cercano cuando varios componentes lo necesitan.

**2.** ¿Cuando se recomienda subir el estado?

- **a)** Solo cuando el estado es de tipo objeto.
- **b)** Solo cuando se usa TypeScript.
- **c)** Cuando varios componentes hijos necesitan compartir los mismos datos.
- **d)** Solo en aplicaciones con mas de 100 componentes.

**3.** Al subir el estado, ¿como comparten los componentes hijos los datos?

- **a)** Los datos se almacenan en el DOM.
- **b)** Los hijos se comunican entre si sin pasar por el padre.
- **c)** El componente padre pasa los datos como props a los hijos.
- **d)** Se usa el hook useSyncState().

---

## ¿Qué hace el hook `useEffect`?

El hook `useEffect` se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.

Recibe dos parámetros:

- La función que se ejecutará al cambiar las dependencias o al renderizar el componente.
- Un array de dependencias. Si cambia el valor de alguna dependencia, ejecutará la función.

En este ejemplo mostramos un mensaje en consola cuando carga el componente y cada vez que cambia el valor de `count`:

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


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que se usa el hook useEffect?

- **a)** Para validar las props del componente.
- **b)** Para ejecutar codigo cuando se renderiza el componente o cuando cambian las dependencias.
- **c)** Para crear variables de estado.
- **d)** Para memorizar valores calculados.

**2.** ¿Que parametros recibe useEffect?

- **a)** Una referencia y un callback.
- **b)** Solo una funcion, sin mas parametros.
- **c)** Tres parametros: funcion, dependencias y timeout.
- **d)** Una funcion y un array de dependencias.

**3.** ¿Cuando se ejecuta la funcion de useEffect?

- **a)** Solo cuando el usuario interactua con el componente.
- **b)** Antes de que se renderice el componente.
- **c)** Cada segundo automaticamente.
- **d)** Cuando se renderiza el componente y cuando cambia alguna dependencia del array.

---

## Explica casos de uso del hook `useEffect`

Podemos usar el hook `useEffect` de diferentes formas, tales como:

- Ejecutar código cuando se renderiza el componente, cuando cambian las dependencias del efecto o cuando se desmonta el componente.
- Por eso puede ser útil para hacer llamadas a APIs, ya que sea nada más montar el componente o cuando cambian las dependencias.
- Realizar tracking de eventos, como Google Analytics, para saber qué páginas visitan los usuarios.
- Podemos validar un formulario para que cada vez que cambie el estado, podamos actualizar la UI y mostrar dónde están los errores.
- Podemos suscribirnos a eventos del navegador, como por ejemplo el evento `resize` para saber cuando el usuario cambia el tamaño de la ventana.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es un caso de uso comun de useEffect?

- **a)** Importar modulos de forma sincrona.
- **b)** Definir el estado inicial del componente.
- **c)** Hacer llamadas a APIs cuando se monta el componente.
- **d)** Compilar el codigo JSX.

**2.** ¿Para que se puede usar useEffect con eventos del navegador?

- **a)** Para crear nuevos eventos personalizados del navegador.
- **b)** Para desactivar eventos del navegador permanentemente.
- **c)** Para suscribirse a eventos como resize y desuscribirse al desmontar.
- **d)** Para reemplazar los eventos nativos por eventos de React.

**3.** ¿Se puede usar useEffect para validar formularios?

- **a)** Si, para actualizar la UI mostrando errores cada vez que cambia el estado.
- **b)** No, useEffect solo funciona con peticiones HTTP.
- **c)** No, la validacion debe hacerse solo con HTML5.
- **d)** Solo si se usa una libreria externa de validacion.

---

## Cómo suscribirse a un evento en `useEffect`

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

  return <p>Abre la consola y redimensiona la ventana</p>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que es importante desuscribirse de eventos en useEffect?

- **a)** Para evitar fugas de memoria cuando el componente se desmonta.
- **b)** Para que los estilos CSS funcionen correctamente.
- **c)** Para mejorar el SEO de la aplicacion.
- **d)** Para que el componente se renderice mas rapido.

**2.** ¿Como se desuscribe de un evento en useEffect?

- **a)** Usando el hook useUnsubscribe().
- **b)** Usando window.clearEvent().
- **c)** Llamando a useEffect.cleanup() manualmente.
- **d)** Devolviendo una funcion de limpieza que llama a removeEventListener.

**3.** ¿Cuando se ejecuta la funcion de limpieza (cleanup) de useEffect?

- **a)** Inmediatamente despues de montar el componente.
- **b)** Cuando el componente se desmonta del arbol de componentes.
- **c)** Solo al refrescar la pagina.
- **d)** Nunca se ejecuta automaticamente.

---

## ¿Qué hace el hook `useId`?

`useId` es un hook para generar identificadores únicos que se pueden pasar a los atributos de las etiquetas HTML y es especialmente útil para accesibilidad.

Llama `useId` en el nivel superior del componente para generar una ID única:

```jsx
import { useId } from 'react'
function PasswordField() {
  const passwordHintId = useId()
  // ...
```

A continuación, pasa el ID generado a diferentes atributos:

```jsx
<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
```

La etiqueta `aria-describedby` te permite especificar que dos etiquetas están relacionadas entre sí, puede generar una identificación única con useId donde incluso si `PasswordField` aparece varias veces en la pantalla, las identificaciones generadas no chocarán.

El ejemplo completo sería así:

```jsx
import { useId } from 'react'

function PasswordField() {
  const passwordHintId = useId()

  return (
    <>
      <label>
        Password:
        <input type='password' aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        El password debe ser de 18 letras y contener caracteres especiales
      </p>
    </>
  )
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  )
}
```

Como ves en `App` estamos usando el componente dos veces. Si pusieramos una id a mano, por ejemplo `password`, entonces la ID no sería única y quedaría duplicada. Por eso es importante que generes la ID automáticamente con `useId`.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Para que se usa el hook useId?

- **a)** Para obtener el id del componente actual.
- **b)** Para identificar errores en el componente.
- **c)** Para obtener el id del usuario autenticado.
- **d)** Para generar identificadores unicos que se pueden pasar a atributos HTML.

**2.** ¿Para que es especialmente util useId?

- **a)** Para mejorar el rendimiento de la aplicacion.
- **b)** Para accesibilidad, como relacionar inputs con sus descripciones usando aria-describedby.
- **c)** Para hacer peticiones HTTP.
- **d)** Para gestionar el estado global.

**3.** ¿Que ventaja tiene useId cuando un componente se usa multiples veces?

- **a)** Genera IDs unicos para cada instancia, evitando duplicados.
- **b)** Genera un error si hay mas de una instancia.
- **c)** Solo funciona con la primera instancia del componente.
- **d)** Requiere pasar un prefijo manual para evitar colisiones.

---

## ¿Cómo podemos ejecutar código cuando el componente se monta?

Podemos ejecutar código cuando el componente se monta usando el hook `useEffect` sin pasarle ninguna dependencia. En este caso, la función que se pasa como primer parámetro se ejecutará cuando el componente se monte.

```jsx
import { useEffect } from 'react'

function Component() {
  useEffect(() => {
    console.log('El componente se ha montado')
  }, [])

  return <p>Abre la consola y re-dimensiona la ventana</p>
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Como se ejecuta codigo solo cuando el componente se monta?

- **a)** Usando useEffect con un array de dependencias vacio [].
- **b)** Usando el hook useMount().
- **c)** Usando useEffect sin segundo parametro.
- **d)** Llamando al codigo directamente en el cuerpo de la funcion.

**2.** ¿Por que el array de dependencias vacio hace que el efecto se ejecute solo al montar?

- **a)** Porque al no haber dependencias, no hay nada que pueda cambiar y disparar el efecto de nuevo.
- **b)** Porque es una convencion del equipo de React.
- **c)** Porque React interpreta [] como 'ejecutar una vez'.
- **d)** Es un comportamiento especial solo para arrays vacios.

---

## ¿Qué son los Fragments en React?

Los _Fragments_ permiten agrupar varios elementos JSX sin añadir nodos extra al DOM.

En React, un componente debe devolver un único elemento raíz. `Fragment` resuelve ese requisito sin introducir un `div` adicional que pueda afectar al layout o a los estilos.

Para crear un Fragment en React usamos el componente `Fragment`:

```jsx
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <h1>Titulo</h1>
      <p>Párrafo</p>
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
      <p>Párrafo</p>
    </>
  )
}
```

Si necesitas añadir una `key` (por ejemplo, al renderizar una lista), debes usar la versión explícita con `Fragment`:

```jsx
import { Fragment } from 'react'

function List({ items }) {
  return items.map(item => (
    <Fragment key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </Fragment>
  ))
}
```


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son los Fragments en React?

- **a)** Comentarios especiales dentro del JSX.
- **b)** Pedazos de codigo que se ejecutan de forma aislada.
- **c)** Partes del Virtual DOM que se actualizan.
- **d)** Una forma de agrupar elementos sin anadir un elemento extra al DOM.

**2.** ¿Cual es la sintaxis abreviada para Fragment?

- **a)** [] ... []
- **b)** <frag> ... </frag>
- **c)** <react> ... </react>
- **d)** <> ... </>

**3.** ¿Por que React requiere un solo elemento raiz en los componentes?

- **a)** Porque React no permite devolver varios elementos, solo un elemento raiz.
- **b)** Es solo una convencion, se pueden devolver multiples elementos.
- **c)** Solo es necesario en TypeScript.
- **d)** Es un requisito del navegador, no de React.

---

## ¿Por qué es recomendable usar Fragment en vez de un div?

Las razones por las que es recomendable usar Fragment en vez de un `div` a la hora de envolver varios elementos son:

- Los `div` añaden un elemento extra al DOM, mientras que los Fragments no. Esto hace que el número de elementos HTML y la profundidad del DOM sea menor.
- Los elementos envueltos con Fragment son afectados directamente por las propiedades _flex_ o _grid_ de CSS de su elemento padre. Si usas un `div` es posible que tengas problemas con el alineamiento de los elementos.
- Los Fragments son más rápidos que los `div` ya que no tienen que ser renderizados.
- Los `div` aplican CSS por defecto (hace que lo que envuelve el `div` se comporte como un bloque al aplicar un `display: block`) mientras que los Fragment no aplican ningún estilo por defecto.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que Fragment es mejor que div para envolver elementos?

- **a)** Porque div esta deprecado en React.
- **b)** Porque es mas facil de escribir.
- **c)** Porque no anade elementos extra al DOM y no afecta el layout CSS.
- **d)** Porque Fragment permite aplicar estilos inline.

**2.** ¿Que problema puede causar usar div con CSS flex o grid?

- **a)** Puede afectar el alineamiento porque div crea un nivel extra en el DOM.
- **b)** Flex y grid no funcionan con div.
- **c)** Produce errores de JavaScript.
- **d)** Solo afecta en navegadores moviles.

**3.** ¿Que estilo aplica div por defecto que Fragment no aplica?

- **a)** position: relative.
- **b)** display: flex.
- **c)** display: inline.
- **d)** display: block, haciendo que se comporte como un bloque.

---

## ¿Qué es el Compound Components Pattern?

Es un patrón de diseño de componentes que se basa en crear un componente padre con un solo objetivo, proporcionarle a sus hijos las propiedades necesarias para que se rendericen sin problemas.

Permite una estructura declarativa a la hora de construir nuevos componentes, además ayuda a la lectura del código por su simplicidad y limpieza.

Un ejemplo de este diseño sería una lista que renderiza los elementos hijos:

```jsx
<List>
  <ListItem>Cat</ListItem>
  <ListItem>Dog</ListItem>
</List>
```

```jsx
const List = ({ children, ...props }) => <ul {...props}>{children}</ul>

const ListItem = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

export { List, ListItem }
```

Este es un ejemplo sencillo, pero los componentes pueden ser tan complejos como quieras y tanto el padre como los hijos pueden tener sus propios estados.

Enlaces de interés:

- [Lleva tu React al siguiente nivel con Compound Pattern by dezkareid en el blog de Platzi](https://platzi.com/blog/lleva-tu-react-al-siguiente-nivel-con-compound-pattern/?utm_source=twitter&utm_medium=organic&utm_campaign=PLA_TW_BLOG_202205_react_compound_pattern)

- [Compound Components by Jenna Smith](https://jjenzz.com/compound-components) <strong>en inglés</strong>
- [Compound Components Lesson by Kent C. Dodds](https://egghead.io/lessons/react-write-compound-components) <strong>en inglés</strong>


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el Compound Components Pattern?

- **a)** Un patron exclusivo de componentes de clase.
- **b)** Una forma de compilar varios componentes en uno solo.
- **c)** Un patron donde el componente padre proporciona a sus hijos las propiedades necesarias para renderizarse.
- **d)** Un metodo para combinar CSS de multiples componentes.

**2.** ¿Que ventajas ofrece el Compound Components Pattern?

- **a)** Permite una estructura declarativa y mejora la legibilidad del codigo.
- **b)** Reduce el tamano del bundle de la aplicacion.
- **c)** Reemplaza la necesidad de usar Context.
- **d)** Hace que los componentes no necesiten estado.

---

## ¿Cómo puedes inicializar un proyecto de React desde cero?

Existen diversas formas de inicializar un proyecto de React desde cero. Entre las más populares están:

- [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
npm create vite@latest my-app -- --template react
```

- [Create React App](https://create-react-app.dev/docs/getting-started)

```bash
npx create-react-app my-app
```

> La opción más popular y recomendada hoy en día es Vite. <small>Fuente [npm trends](https://npmtrends.com/@vitejs/plugin-react-vs-create-react-app).</small>

Usando un Framework, entre las más populares están:

- [Nextjs](https://nextjs.org/docs/getting-started)

```bash
npx create-next-app@latest my-app
```

- [Gatsby](https://www.gatsbyjs.com/docs/quick-start/)

```bash
npm init gatsby
```

> La opción más popular y recomendada hoy en día es Nextjs. <small>Fuente [npm trends](https://npmtrends.com/gatsby-vs-next)</small>

Cada uno de ellos es un empaquetador de aplicaciones web. Se encargan de resolver las dependencias de tu proyecto, levantar un entorno de desarrollo que se refresca automáticamente con cada cambio y de empaquetar tu aplicación para producción con todos los archivos estáticos necesarios y mucho más.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cual es la herramienta mas popular y recomendada para inicializar un proyecto React hoy en dia?

- **a)** Parcel
- **b)** Create React App
- **c)** Vite
- **d)** Webpack

**2.** ¿Cual es el framework de React mas popular actualmente?

- **a)** RedwoodJS
- **b)** Next.js
- **c)** Astro
- **d)** Remix

**3.** ¿Que funcion tienen los empaquetadores como Vite o Webpack?

- **a)** Solo gestionan las variables de entorno.
- **b)** Exclusivamente sirven para compilar TypeScript.
- **c)** Unicamente minifican archivos CSS.
- **d)** Resolver dependencias, levantar entorno de desarrollo y empaquetar para produccion.

---

## ¿Qué es React DOM?

React DOM es la librería que se encarga de renderizar los componentes de React para el navegador. Hay que tener en cuenta que React es una biblioteca que se puede usar en diferentes entornos (dispositivos móviles, apps de escritorio, terminal...).

Mientras que la biblioteca de _React_, a secas, es el motor de creación de componentes, hooks, sistema de props y estado... _React DOM_ es la librería que se encarga de renderizar los componentes de React específicamente en el navegador.

_React Native_, por ejemplo, haría lo mismo, pero para dispositivos móviles.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es React DOM?

- **a)** La libreria que se encarga de renderizar componentes de React en el navegador.
- **b)** El nucleo principal de React que crea componentes.
- **c)** La API del Document Object Model nativa del navegador.
- **d)** Una herramienta para depurar aplicaciones React.

**2.** ¿Cual es la diferencia entre React y React DOM?

- **a)** No hay diferencia, son la misma libreria.
- **b)** React DOM solo funciona con componentes de clase.
- **c)** React DOM es una version antigua de React.
- **d)** React es el motor de componentes y hooks, React DOM renderiza especificamente para el navegador.

**3.** ¿Que equivalente a React DOM existe para dispositivos moviles?

- **a)** React Android
- **b)** React Mobile
- **c)** No existe equivalente para moviles.
- **d)** React Native

---

## ¿Qué JavaScript necesito para aprender React?

##### JavaScript que necesitas para aprender React

**Para aprender y dominar React necesitas saber JavaScript.** A diferencia de otros frameworks y bibliotecas, como _Angular_ y _Vue_, que se basan en su propio _DSL_ (Domain-Specific Language), React usa una extensión de la sintaxis de JavaScript llamada _JSX_. Más adelante lo veremos en detalle pero, al final, no deja de ser azúcar sintáctico para escribir menos JavaScript.

**En React todo es JavaScript.** Para bien y para mal. Este libro da por sentados unos conocimientos previos del lenguaje de programación pero antes de empezar vamos a hacer un pequeño repaso por algunas de las características más importantes que necesitarás conocer.

**Si ya dominas JavaScript puedes saltarte este capítulo** y continuar con el libro, pero recuerda que siempre podrás revisar este capítulo como referencia.

##### EcmaScript Modules o ESModules

Los **EcmaScript Modules** es la forma nativa que tiene JavaScript para importar y exportar variables, funciones y clases entre diferentes ficheros. Hoy en día, especialmente si trabajamos con un empaquetador de aplicaciones como Webpack, vamos a estar trabajando constantemente con esta sintaxis.

Por un lado podemos crear módulos exportándolos por defecto:

```js
// sayHi.js
// exportamos por defecto el módulo sayHi
export default sayHi (message) {
    console.log(message)
}

// index.js
// este módulo lo podremos importar con el nombre que queramos
import sayHi from './sayHi.js'

// al ser el módulo exportado por defecto podríamos usar otro nombre
import miduHi from './sayHi.js'
```

También podemos hacer exportaciones nombradas de módulos, de forma que un módulo tiene un nombre asignado y para importarlo necesitamos usar exactamente el nombre usado al exportarlo:

```js
// sayHi.js
// podemos usar exportaciones nombradas para mejorar esto
export const sayHi = message => console.log(message)

// y se pueden hacer tantas exportaciones de módulos nombrados como queramos
export const anotherHi = msg => alert(msg)

// index.js
// ahora para importar estos módulos en otro archivo podríamos hacerlo así
import { sayHi, anotherHi } from './sayHi.js'
```

Los _imports_ que hemos visto hasta aquí se conocen como _imports estáticos_. Esto significa que ese módulo será cargado en el momento de la carga del archivo que lo importa.

También existen los _imports dinámicos_, de forma que podamos importar módulos que se carguen en el momento de la ejecución del programa o cuando nosotros decidamos (por ejemplo, como respuesta a un click).

```js
document.querySelector('button').addEventListener('click', () => {
  // los imports dinámicos devuelven una Promesa
  import('./sayHi.js').then(module => {
    // ahora podemos ejecutar el módulo que hemos cargado
    module.default('Hola')
  })
})
```

Los imports dinámicos son útiles también cuando trabajamos con empaquetadores como Webpack o Vite, ya que esto creará unos _chunks_ (fragmentos) que se cargarán fuera del bundle general. ¿El objetivo? Mejorar el rendimiento de la aplicación.

Existen más sintaxis para trabajar con módulos, pero con saber las que hemos visto ya sería suficiente para seguir el libro.

**¿Por qué es importante?**

Para empezar React te ofrece diferentes partes de su biblioteca a través de módulos que podrás importar. Además nuestros componentes los tendremos separados en ficheros y, cada uno de ellos, se podrá importar utilizando _ESModules_.

Además, por temas de optimización de rendimiento, podremos importar de forma dinámica componentes y así mejorar la experiencia de nuestros usuarios al necesitar cargar menos información para poder utilizar la página.

##### Operador condicional (ternario)

Las ternarias son una forma de realizar condiciones sin la necesidad de usar la sintaxis con `if`. Se podría decir que es una forma de atajo para evitar escribir tanto código.

```js
if (number % 2 === 0) {
  console.log('Es par')
} else {
  console.log('Es impar')
}

// usando ternaria
number % 2 === 0 ? console.log('Es par') : console.log('Es impar')
```

**¿Por qué es importante?**

En las interfaces gráficas es muy normal que, dependiendo del estado de la aplicación o los datos que nos lleguen, vamos a querer renderizar una cosa u otra en pantalla. Para realizar esto, en lugar de utilizar `if` se usan las ternarias ya que queda mucho más legible dentro del _JSX_.

##### Funciones flecha o Arrow Functions

Las _funciones flecha_ o _arrow function_ fueron añadidas a JavaScript en el estándar ECMAScript 6 (o ES2015). En principio parece que simplemente se trata de una sintaxis alternativa más simple a la hora de crear expresiones de funciones:

```js
const nombreDeLaFuncion = function (param1, param2) {
  // instrucciones de la función
}

const nombreDeLaFuncion = (param1, param2) => {
  // con arrow function
  // instrucciones de la función
}
```

Pero además del cambio de sintaxis existen otras características de las funciones flechas que se usan constantemente en React.

```js
// return implícito al escribir una sola línea
const getName = () => 'midudev'

// ahorro de parentésis para función de un parámetro
const duplicateNumber = num => num * 2

// se usan mucho como callback en funciones de arrays
const numbers = [2, 4, 6]
const newNumbers = numbers.map(n => n / 2)
console.log(newNumbers) // [1, 2, 3]
```

También tiene algunos cambios respecto al valor de `this` pero, aunque es aconsejable dominarlo, no es realmente necesario para poder seguir con garantías el libro.

**¿Por qué es importante?**

Aunque hace unos años con React se trabajaba principalmente con clases, desde la irrupción de los hooks en la versión 16.8 ya no se usan mucho. Esto hace que se usen mucho más funciones.

Las funciones flecha, además, puedes verlas fácilmente conviviendo dentro de tus componentes. Por ejemplo, a la hora de renderizar una lista de elementos ejecutarás el método `.map` del array y, como callback, seguramente usarás una función flecha anónima.

##### Parámetros predeterminados (default values)

En JavaScript puedes proporcionar valores por defecto a los parámetros de una función en caso que no se le pase ningún argumento.

```js
// al parámetro b le damos un valor por defecto de 1
function multiply(a, b = 1) {
  return a * b
}

// si le pasamos un argumento con valor, se ignora el valor por defecto
console.log(multiply(5, 2)) // 10

// si no le pasamos un argumento, se usa el valor por defecto
console.log(multiply(5)) // 5

// las funciones flecha también pueden usarlos
const sayHi = (msg = 'Hola React!') => console.log(msg)
sayHi() // 'Hola React!'
```

**¿Por qué es importante?**

En React existen dos conceptos muy importantes: **componentes y hooks**. No vamos a entrar en detalle ahora en ellos pero lo importante es que ambos son construidos con funciones.

Poder añadir valores por defecto a los parámetros de esas funciones en el caso que no venga ningún argumento **es clave** para poder controlar React con éxito.

Los componentes, por ejemplo, pueden no recibir parámetros y, pese a ello, seguramente vas a querer que tengan algún comportamiento por defecto. Lo podrás conseguir de esta forma.

##### Template Literals

Los template literals o plantillas de cadenas llevan las cadenas de texto al siguiente nivel permitiendo expresiones incrustadas en ellas.

```js
const inicio = 'Hola'
const final = 'React'

// usando una concatenación normal sería
const mensaje = inicio + ' ' + final

// con los template literals podemos evaluar expresiones
const mensaje = `${inicio} ${final}`
```

Como ves, para poder usar los template literals, necesitas usar el símbolo ```

Además, nos permiten utilizar cadenas de texto de más de una línea.

**¿Por qué es importante?**

En React esto se puede utilizar para diferentes cosas. No sólo es normal crear cadenas de texto para mostrar en la interfaz... también puede ser útil para crear clases para tus elementos HTML de forma dinámica. Verás que los template literales están en todas partes.

##### Propiedades abreviadas

Desde _ECMAScript 2015_ se puede iniciar un objeto utilizado nombre de propiedades abreviadas. Esto es que si quieres utilizar como valor una variable que tiene el mismo nombre que la key, entonces puedes indicar la inicialización una vez:

```js
const name = 'Miguel'
const age = 36
const book = 'React'

// antes haríamos esto
const persona = { name: name, age: age, book: book }

// ahora podemos hacer esto, sin repetir
const persona = { name, age, book }
```

**¿Por qué es importante?**

En React se trata muchas veces con objetos y siempre vamos a querer escribir el menor número de líneas posible para mantener nuestro código fácil de mantener y entender.

##### La desestructuración

La sintaxis de _desestructuración_ es una expresión de JavaScript que permite extraer valores de Arrays o propiedades de objetos en distintas variables.

```js
// antes
const array = [1, 2, 3]
const primerNumero = array[0]
const segundoNumero = array[1]

// ahora
const [primerNumero, segundoNumero] = array

// antes con objetos
const persona = { name: 'Miguel', age: 36, book: 'React' }
const name = persona.name
const age = persona.age

// ahora con objetos
const { age, name } = persona

// también podemos añadir valores por defecto
const { books = 2 } = persona
console.log(persona.books) // -> 2

// también funciona en funciones
const getName = ({ name }) => `El nombre es ${name}`
getName(persona)
```

**¿Por qué es importante?**

En React hay mucho código básico que da por sentado que conoces y dominas esta sintaxis. Piensa que los objetos y los arreglos son tipos de datos que son perfectos para guardar datos a representar en una interfaz. Así que poder tratarlos fácilmente te va a hacer la vida mucho más fácil.

##### Métodos de Array

Saber manipular arreglos en JavaScript es básico para considerar que se domina. Cada método realiza una operación en concreto y devuelve diferentes tipos de datos. Todos los métodos que veremos reciben un callback (función) que se ejecutará para cada uno de los elementos del array.

Vamos a revisar algunos de los métodos más usados:

```js
// tenemos este array con diferentes elementos
const networks = [
  {
    id: 'youtube',
    url: 'https://midu.tube',
    needsUpdate: true
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/midudev',
    needsUpdate: true
  },
  {
    id: 'instagram',
    url: 'https://instagram.com/midu.dev',
    needsUpdate: false
  }
]

// con .map podemos transformar cada elemento
// y devolver un nuevo array
networks.map(singleNetwork => singleNetwork.url)
// Resultado:
  [
    'https://midu.tube',
    'https://twitter.com/midudev',
    'https://instagram.com/midu.dev'
  ]

// con .filter podemos filtrar elementos de un array que no
// pasen una condición determinada por la función que se le pasa.
// Devuelve un nuevo array.
networks.filter(singleNetwork => singleNetwork.needsUpdate === true)
// Resultado:
[
  { id: 'youtube', url: 'https://midu.tube', needsUpdate: true },
  { id: 'twitter', url: 'https://twitter.com/midudev', needsUpdate: true }
]

// con .find podemos buscar un elemento de un array que
// cumpla la condición definida en el callback
networks.find(singleNetwork => singleNetwork.id === 'youtube')
// Resultado:
{ id: 'youtube', url: 'https://midu.tube', needsUpdate: true }

// con .some podemos revisar si algún elemento del array cumple una condición
networks.some(singleNetwork => singleNetwork.id === 'tiktok') // false
networks.some(singleNetwork => singleNetwork.id === 'instagram') // true
```

**¿Por qué es importante?**

En React es muy normal almacenar los datos que tenemos que representar en la UI como array. Esto hace que muchas veces necesitemos tratarlos, filtrarlos o extraer información de ellos. Es primordial entender, conocer y dominar al menos estos métodos, ya que son los más usados.

##### Sintaxis Spread

La sintaxis de spread nos permite expandir un iterable o un objeto en otro lugar dónde se espere esa información. Para poder utilizarlo, necesitamos utilizar los tres puntos suspensivos `...` justo antes.

```js
const networks = ['Twitter', 'Twitch', 'Instagram']
const newNetwork = 'Tik Tok'
// creamos un nuevo array expandiendo el array networks y
// colocando al final el elemento newNetwork
// utilizando la sintaxis de spread
const allNetworks = [...networks, newNetwork]
console.log(allNetworks)
// -> [ 'Twitter', 'Twitch', 'Instagram', 'Tik Tok' ]
```

Esto mismo lo podemos conseguir con un objeto, de forma que podemos expandir todas sus propiedades en otro objeto de forma muy sencilla.

```js
const midu = { name: 'Miguel', twitter: '@midudev' }
const miduWithNewInfo = {
  ...midu,
  youtube: 'https://youtube.com/midudev',
  books: ['Aprende React'],
}
console.log(miduWithNewInfo)
// {
//   name: 'Miguel',
//   twitter: '@midudev',
//   youtube: 'https://youtube.com/midudev',
//   books: [ 'Aprende React' ]
// }
```

Es importante notar que esto hace una copia, sí, pero superficial. Si tuviéramos objetos anidados dentro del objeto entonces deberíamos tener en cuenta que podríamos mutar la referencia. Veamos un ejemplo.

```js
const midu = {
  name: 'Miguel',
  twitter: '@midudev',
  experience: {
    years: 18,
    focus: 'javascript',
  },
}

const miduWithNewInfo = {
  ...midu,
  youtube: 'https://youtube.com/midudev',
  books: ['Aprende React'],
}

// cambiamos un par de propiedades de la "copia" del objeto
miduWithNewInfo.name = 'Miguel Ángel'
miduWithNewInfo.experience.years = 19

// hacemos un console.log del objeto inicial
console.log(midu)

// en la consola veremos que el nombre no se ha modificado
// en el objeto original pero los años de experiencia sí
// ya que hemos mutado la referencia original
// {
//   name: 'Miguel',
//   twitter: '@midudev',
//   experience: { years: 19, focus: 'javascript' }
// }
```

**¿Por qué es importante?**

En React es muy normal tener que añadir nuevos elementos a un array o crear nuevos objetos sin necesidad de mutarlos. El operador Rest nos puede ayudar a conseguir esto. Si no conoces bien el concepto de valor y referencia en JavaScript, sería conveniente que lo repases.

##### Operador Rest

La sintaxis `...` hace tiempo que funciona en JavaScript en los parámetros de una función. A esta técnica se le llamaba _parámetros rest_ y nos permitía tener un número indefinido de argumentos en una función y poder acceder a ellos después como un array.

```js
function suma(...allArguments) {
  return allArguments.reduce((previous, current) => {
    return previous + current
  })
}
```

Ahora el operador rest también se puede utilizar para agrupar el resto de propiedades un objeto o iterable. Esto puede ser útil para extraer un elemento en concreto del objeto o el iterable y crear una copia superficial del resto en una nueva variable.

```js
const midu = {
  name: 'Miguel',
  twitter: '@midudev',
  experience: {
    years: 18,
    focus: 'javascript',
  },
}

const { name, ...restOfMidu } = midu

console.log(restOfMidu)
// -> {
//   twitter: '@midudev',
//   experience: {
//     years: 18,
//     focus: 'javascript'
//   }
// }
```

También podría funcionar con arrays:

```js
const [firstNumber, ...restOfNumbers] = [1, 2, 3]
console.log(firstNumber) // -> 1
console.log(restOfNumbers) // -> [2, 3]
```

**¿Por qué es importante?**

Es una forma interesante de _eliminar_ (de forma figurada) una propiedad de un objeto y creando una copia superficial del resto de propiedades. A veces puede ser interesante para extraer la información que queremos de unos parámetros y dejar el resto en un objeto que pasaremos hacia otro nivel.

##### Encadenamiento opcional (Optional Chaining)

El operador de encadenamiento opcional `?.` te permite leer con seguridad el valor de una propiedad que está anidada dentro de diferentes niveles de un objeto.

De esta forma, en lugar de revisar si las propiedades existen para poder acceder a ellas, lo que hacemos es usar el encadenamiento opcional.

```js
const author = {
  name: 'Miguel',
  libro: {
    name: 'Aprendiendo React',
  },
  writeBook() {
    return 'Writing!'
  },
}

// sin optional chaining
author === null || author === undefined
  ? undefined
  : author.libro === null || author.libro === undefined
    ? undefined
    : author.libro.name

// con optional chaining
author?.libro?.name
```

**¿Por qué es importante?**

Un objeto es una estructura de datos que es perfecta a la hora de representar muchos elementos de la UI. ¿Tienes un artículo? Toda la información de un artículo seguramente la tendrás representada en un objeto.

Conforme tu UI sea más grande y compleja, estos objetos tendrán más información y necesitarás dominar el encadenamiento opcional `?.` para poder acceder a su información con garantías.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que son los ESModules en JavaScript?

- **a)** Un sistema de testing para JavaScript.
- **b)** La forma nativa de JavaScript para importar y exportar variables, funciones y clases entre ficheros.
- **c)** Una libreria externa para manejar dependencias.
- **d)** Un tipo de componente de React.

**2.** ¿Cual es la diferencia entre export default y exportacion nombrada?

- **a)** Export default permite importar con cualquier nombre; la nombrada requiere usar el nombre exacto.
- **b)** Export default es mas rapido que la nombrada.
- **c)** La nombrada solo funciona con funciones, no con variables.
- **d)** Solo se puede usar export default en React.

**3.** ¿Por que se usan las ternarias en lugar de if en React?

- **a)** Porque React no soporta la sintaxis if.
- **b)** Porque son expresiones que pueden usarse directamente dentro del JSX para renderizado condicional.
- **c)** Porque if esta deprecado en JavaScript moderno.
- **d)** Porque if solo funciona en componentes de clase.

**4.** ¿Que hace el operador spread (...) con un array?

- **a)** Convierte el array en un string.
- **b)** Elimina todos los elementos del array.
- **c)** Expande los elementos del array en otro lugar donde se espera esa informacion.
- **d)** Duplica cada elemento del array.

**5.** ¿Que es la desestructuracion en JavaScript?

- **a)** Una forma de eliminar propiedades de un objeto.
- **b)** Una sintaxis que permite extraer valores de arrays u objetos en variables distintas.
- **c)** Una tecnica para romper referencias de objetos.
- **d)** Una forma de destruir objetos de la memoria.

**6.** ¿Que hace el encadenamiento opcional (?.) en JavaScript?

- **a)** Encadena multiples funciones en una sola linea.
- **b)** Permite leer con seguridad el valor de una propiedad anidada sin verificar manualmente cada nivel.
- **c)** Crea una cadena de texto con las propiedades.
- **d)** Hace las propiedades opcionales en TypeScript.

---

## ¿Qué es el Virtual DOM?

El **Virtual DOM** es una representación en memoria del DOM real. React la usa para calcular de forma eficiente qué partes de la interfaz han cambiado y actualizar solo lo necesario en el navegador.

Cuando el estado o las props de un componente cambian:

1. React genera un nuevo árbol virtual.
2. Lo **compara** (diff) con el árbol anterior.
3. Aplica al DOM real el **mínimo de mutaciones** posible (commit).

No es un “DOM más rápido”: el Virtual DOM añade un paso intermedio. La ganancia viene de **evitar trabajo innecesario en el DOM real**, que es caro de tocar.

Hoy React usa el algoritmo **Fiber** por debajo, pero el concepto de Virtual DOM sigue siendo útil para entender por qué no mutamos el DOM a mano y por qué las `key` importan al reconciliar listas.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es el Virtual DOM?

- **a)** Una copia exacta y permanente del DOM en el disco duro.
- **b)** Un framework de enrutado de React.
- **c)** Un navegador embebido dentro de React.
- **d)** Una representación en memoria del DOM que React usa para calcular cambios eficientemente.

**2.** ¿Cuál es la principal ventaja del Virtual DOM?

- **a)** Eliminar por completo la necesidad de JavaScript.
- **b)** Minimizar mutaciones costosas en el DOM real aplicando solo los cambios necesarios.
- **c)** Hacer que CSS no sea necesario.
- **d)** Sustituir al servidor en todas las apps.

**3.** ¿Qué hace React tras un cambio de estado respecto al Virtual DOM?

- **a)** Solo actualiza el localStorage.
- **b)** Convierte el Virtual DOM en WebAssembly.
- **c)** Envía el Virtual DOM al servidor para renderizarlo allí obligatoriamente.
- **d)** Genera un nuevo árbol virtual, lo compara con el anterior y aplica el diff al DOM real.

---

## ¿Por qué no se debe mutar el estado directamente en React?

Porque React decide cuándo volver a renderizar basándose en **actualizaciones de estado inmutables**. Si mutas el valor anterior y lo devuelves tal cual, React puede **no detectar el cambio** y la UI se queda desactualizada.

```jsx
// ❌ Mal: mutación directa
const [user, setUser] = useState({ name: 'midu', age: 30 })
user.age = 31
setUser(user) // misma referencia → React puede no re-renderizar

// ✅ Bien: nueva referencia
setUser({ ...user, age: 31 })
// o con función actualizadora
setUser(prev => ({ ...prev, age: prev.age + 1 }))
```

Con arrays pasa lo mismo: no uses `push`/`splice` sobre el array del estado; crea uno nuevo con `map`, `filter`, spread, etc.

Además, la inmutabilidad hace el código más predecible, facilita depurar y encaja con APIs como `React.memo` o el concurrent rendering.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por qué no debes mutar el estado directamente?

- **a)** Porque solo se puede usar strings como estado.
- **b)** Porque mutar el estado borra el localStorage.
- **c)** Porque JavaScript no permite mutar arrays.
- **d)** Porque React puede no detectar el cambio si la referencia no cambia y no re-renderizar.

**2.** ¿Cuál es la forma correcta de actualizar un objeto en el estado?

- **a)** Asignar window.user = user.
- **b)** Crear una nueva referencia, por ejemplo con spread: setUser({ ...user, age: 31 }).
- **c)** Usar document.write con el nuevo valor.
- **d)** Mutar user y no llamar a setUser.

**3.** ¿Qué forma de setState ayuda a basarte en el valor anterior de forma segura?

- **a)** setCount++ sin función.
- **b)** Solo setCount(count + 1) dentro de un setTimeout vacío sin deps.
- **c)** count = count + 1 sin setCount.
- **d)** La forma funcional: setCount(c => c + 1).

---

## ¿Qué es la composición de componentes y por qué React la prefiere a la herencia?

La **composición** consiste en combinar componentes pequeños para construir interfaces más complejas, normalmente con `children`, props de render o componentes “ranurados” (slots). React **no recomienda herencia de clases de componentes** para reutilizar UI.

```jsx
function Card({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      {children}
    </article>
  )
}

function Profile() {
  return (
    <Card title="Usuario">
      <Avatar />
      <Bio />
    </Card>
  )
}
```

Ventajas de la composición:

- Más flexible: el padre decide qué va dentro sin acoplar jerarquías rígidas.
- Más legible: el árbol JSX describe la UI.
- Encaja con patrones como Compound Components, slots o providers de contexto.

La herencia en componentes de clase suele volverse frágil y difícil de mantener; la composición escala mejor.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué es la composición de componentes?

- **a)** Heredar estilos CSS de un componente padre automáticamente.
- **b)** Combinar componentes pequeños (p. ej. con children) para construir UIs más complejas.
- **c)** Copiar y pegar JSX entre archivos sin props.
- **d)** Usar solo un único componente App con todo el HTML.

**2.** ¿Por qué React prefiere composición a herencia?

- **a)** Porque es más flexible, legible y evita jerarquías de clases frágiles.
- **b)** Porque la composición es más lenta siempre.
- **c)** Porque la herencia está prohibida en JavaScript.
- **d)** Porque la herencia solo funciona en Vue.

**3.** ¿Qué prop facilita la composición de UI genérica?

- **a)** ref como string "myRef".
- **b)** class en lugar de className.
- **c)** children (y a veces slots o render props).
- **d)** innerHTML como prop oficial de React.

---


{pagebreak}

## Solucionario

*Comprueba tus respuestas cuando hayas terminado las preguntas del capítulo.*

### ¿Qué es React?

1. **c)** React es una biblioteca de JavaScript para construir interfaces de usuario.
2. **a)** Lo creó Jordan Walke en 2011 mientras trabajaba en Facebook.

### ¿Cuáles son las características principales de React?

1. **a)** La componetización, dividiendo la UI en componentes independientes y reutilizables.
2. **c)** Para optimizar el rendimiento, comparando la representación en memoria con el DOM real y aplicando solo los cambios necesarios.
3. **d)** A que el desarrollador describe qué se debe mostrar, y React se encarga del cómo hacerlo.
4. **a)** Que los datos fluyen en una sola dirección, típicamente de componentes padres a componentes hijos.
5. **d)** Ejecutarse tanto en el cliente como en el servidor, y usarse para crear apps nativas (React Native).
6. **c)** React actualiza el DOM Virtual, lo compara con el DOM real para encontrar las diferencias y aplica solo esos cambios de forma eficiente.

### ¿Qué significa exactamente que sea declarativo?

1. **a)** Le decimos qué debe renderizar y React se encarga de cómo hacerlo.
2. **a)** const element = document.createElement('h1'); element.innerHTML = 'Hello, world'
3. **a)** Declarativa.

### ¿Qué es un componente?

1. **a)** Una pieza de codigo que renderiza una parte de la interfaz.
2. **a)** Usando funciones o clases.
3. **d)** Pueden ser parametrizados, reutilizados y contener su propio estado.

### ¿Qué es JSX?

1. **b)** Una extension de JavaScript que permite escribir codigo similar a HTML.
2. **a)** Usar React.createElement() manualmente.
3. **b)** Porque mejora la legibilidad del codigo y es mas facil de entender.

### ¿Cómo se transforma el JSX?

1. **d)** Usando un transpilador o compilador como Babel o SWC.
2. **c)** Babel.
3. **a)** Si, Deno tiene soporte nativo para la sintaxis JSX.

### ¿Cuál es la diferencia entre componente y elemento en React?

1. **c)** Una funcion o clase que recibe props y devuelve un elemento.
2. **d)** Un objeto que representa un nodo del DOM o una instancia de un componente.
3. **b)** type (tipo de elemento) y props (propiedades incluyendo children).

### ¿Cómo crear un componente en React?

1. **c)** Usando funciones.
2. **b)** Para que React pueda distinguir entre componentes y elementos HTML.
3. **a)** El metodo render().

### ¿Qué son las props en React?

1. **c)** Son datos que se pasan de un componente a otro.
2. **c)** A traves del objeto props que recibe la funcion como parametro.
3. **d)** Envolviendola con llaves {}.

### ¿Qué es y para qué sirve la prop `children` en React?

1. **b)** Una prop especial que contiene los elementos que envuelve un componente.
2. **c)** Para crear componentes reutilizables que pueden envolver contenido dinamico.
3. **b)** A traves de props.children.

### ¿Qué diferencia hay entre props y state?

1. **a)** Se pasan como argumentos desde un componente padre.
2. **c)** Dentro del propio componente.
3. **a)** No, las props son inmutables y no se pueden modificar desde el componente hijo.

### ¿Se puede inicializar un estado con el valor de una prop? ¿Qué pasa si lo haces y qué hay que tener en cuenta?

1. **b)** Si, pero el estado no se actualizara automaticamente si la prop cambia.
2. **c)** Anadir el prefijo 'initial' a la prop, como initialValue.
3. **b)** Evitar estados al maximo y calcular valores a partir de las props cuando sea posible.

### ¿Qué es el renderizado condicional en React?

1. **b)** Es mostrar un componente u otro dependiendo de una condicion.
2. **b)** Usando el operador ternario (condicion ? a : b).
3. **b)** Se renderiza el numero 0 en el navegador en lugar de no mostrar nada.

### ¿Cómo puedes aplicar clases CSS a un componente en React y por qué no se puede usar `class`?

1. **c)** className
2. **a)** Porque 'class' es una palabra reservada en JavaScript.

### ¿Cómo puedes aplicar estilos en línea a un componente en React?

1. **c)** Como un objeto JavaScript, no como una cadena de texto.
2. **c)** En camelCase (ej: borderRadius, backgroundColor).
3. **c)** style={{ color: 'red', fontSize: '16px' }}

### ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?

1. **b)** Usando la prop style con un operador ternario.
2. **b)** classnames
3. **d)** Usando el operador ternario en className: className={condicion ? 'clase' : ''}

### ¿Qué es el renderizado de listas en React?

1. **d)** El metodo map().
2. **a)** Para que React pueda identificar cada elemento y actualizarlo de forma eficiente.
3. **a)** Debe ser un identificador unico para cada elemento.

### ¿Cómo puedes escribir comentarios en React?

1. **a)** Envolviendo el comentario en llaves con sintaxis de bloque: {/* comentario */}
2. **b)** Usando la sintaxis normal de JavaScript: // o /* */

### ¿Cómo añadir un evento a un componente en React?

1. **b)** onClick={funcion}
2. **a)** En camelCase (ej: onClick, onChange, onMouseOver).
3. **d)** Una funcion (referencia a funcion, no su invocacion).

### ¿Cómo puedo pasar un parámetro a una función que maneja un evento en React?

1. **b)** Usando una funcion anonima: onClick={() => handleClick(id)}
2. **d)** La funcion se ejecuta inmediatamente al renderizar, no al hacer click.

### ¿Qué es el estado en React?

1. **c)** Un objeto que contiene datos que pueden cambiar en el tiempo y controla la interfaz.
2. **d)** useState
3. **c)** Un array con el valor del estado y la funcion para cambiarlo.

### ¿Qué son los hooks?

1. **b)** Una API que permite tener estado y otras caracteristicas de React en componentes funcionales.
2. **d)** Para permitir usar estado y otras caracteristicas sin necesidad de crear clases.
3. **d)** Que permiten 'enganchar' componentes funcionales a las caracteristicas de React.

### ¿Qué hace el hook `useState`?

1. **c)** Para crear variables de estado cuyo valor puede cambiar y causa re-renderizado.
2. **c)** El valor inicial del estado.
3. **c)** Pasando una funcion como parametro: setCount(count => count + 1)

### ¿Qué hace el hook `useReducer`?

1. **c)** Para gestionar estado complejo con una función reducer y acciones.
2. **b)** Un array con el estado actual y la función dispatch.
3. **b)** Cuando el estado es complejo o las actualizaciones dependen de la lógica anterior.

### ¿Qué significa la expresión "subir el estado"?

1. **d)** Mover el estado al componente ancestro comun mas cercano cuando varios componentes lo necesitan.
2. **c)** Cuando varios componentes hijos necesitan compartir los mismos datos.
3. **c)** El componente padre pasa los datos como props a los hijos.

### ¿Qué hace el hook `useEffect`?

1. **b)** Para ejecutar codigo cuando se renderiza el componente o cuando cambian las dependencias.
2. **d)** Una funcion y un array de dependencias.
3. **d)** Cuando se renderiza el componente y cuando cambia alguna dependencia del array.

### Explica casos de uso del hook `useEffect`

1. **c)** Hacer llamadas a APIs cuando se monta el componente.
2. **c)** Para suscribirse a eventos como resize y desuscribirse al desmontar.
3. **a)** Si, para actualizar la UI mostrando errores cada vez que cambia el estado.

### Cómo suscribirse a un evento en `useEffect`

1. **a)** Para evitar fugas de memoria cuando el componente se desmonta.
2. **d)** Devolviendo una funcion de limpieza que llama a removeEventListener.
3. **b)** Cuando el componente se desmonta del arbol de componentes.

### ¿Qué hace el hook `useId`?

1. **d)** Para generar identificadores unicos que se pueden pasar a atributos HTML.
2. **b)** Para accesibilidad, como relacionar inputs con sus descripciones usando aria-describedby.
3. **a)** Genera IDs unicos para cada instancia, evitando duplicados.

### ¿Cómo podemos ejecutar código cuando el componente se monta?

1. **a)** Usando useEffect con un array de dependencias vacio [].
2. **a)** Porque al no haber dependencias, no hay nada que pueda cambiar y disparar el efecto de nuevo.

### ¿Qué son los Fragments en React?

1. **d)** Una forma de agrupar elementos sin anadir un elemento extra al DOM.
2. **d)** <> ... </>
3. **a)** Porque React no permite devolver varios elementos, solo un elemento raiz.

### ¿Por qué es recomendable usar Fragment en vez de un div?

1. **c)** Porque no anade elementos extra al DOM y no afecta el layout CSS.
2. **a)** Puede afectar el alineamiento porque div crea un nivel extra en el DOM.
3. **d)** display: block, haciendo que se comporte como un bloque.

### ¿Qué es el Compound Components Pattern?

1. **c)** Un patron donde el componente padre proporciona a sus hijos las propiedades necesarias para renderizarse.
2. **a)** Permite una estructura declarativa y mejora la legibilidad del codigo.

### ¿Cómo puedes inicializar un proyecto de React desde cero?

1. **c)** Vite
2. **b)** Next.js
3. **d)** Resolver dependencias, levantar entorno de desarrollo y empaquetar para produccion.

### ¿Qué es React DOM?

1. **a)** La libreria que se encarga de renderizar componentes de React en el navegador.
2. **d)** React es el motor de componentes y hooks, React DOM renderiza especificamente para el navegador.
3. **d)** React Native

### ¿Qué JavaScript necesito para aprender React?

1. **b)** La forma nativa de JavaScript para importar y exportar variables, funciones y clases entre ficheros.
2. **a)** Export default permite importar con cualquier nombre; la nombrada requiere usar el nombre exacto.
3. **b)** Porque son expresiones que pueden usarse directamente dentro del JSX para renderizado condicional.
4. **c)** Expande los elementos del array en otro lugar donde se espera esa informacion.
5. **b)** Una sintaxis que permite extraer valores de arrays u objetos en variables distintas.
6. **b)** Permite leer con seguridad el valor de una propiedad anidada sin verificar manualmente cada nivel.

### ¿Qué es el Virtual DOM?

1. **d)** Una representación en memoria del DOM que React usa para calcular cambios eficientemente.
2. **b)** Minimizar mutaciones costosas en el DOM real aplicando solo los cambios necesarios.
3. **d)** Genera un nuevo árbol virtual, lo compara con el anterior y aplica el diff al DOM real.

### ¿Por qué no se debe mutar el estado directamente en React?

1. **d)** Porque React puede no detectar el cambio si la referencia no cambia y no re-renderizar.
2. **b)** Crear una nueva referencia, por ejemplo con spread: setUser({ ...user, age: 31 }).
3. **d)** La forma funcional: setCount(c => c + 1).

### ¿Qué es la composición de componentes y por qué React la prefiere a la herencia?

1. **b)** Combinar componentes pequeños (p. ej. con children) para construir UIs más complejas.
2. **a)** Porque es más flexible, legible y evita jerarquías de clases frágiles.
3. **c)** children (y a veces slots o render props).
