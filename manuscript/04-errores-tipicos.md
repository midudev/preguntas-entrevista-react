# Errores típicos en React

Preguntas de nivel **Errores típicos en React**. Tras cada explicación puedes encontrar un bloque *Pon a prueba*; las respuestas están al final del capítulo.

---

## ¿Qué quiere decir: Warning: Each child in a list should have a unique key prop?

Es un error bastante común en React y que puede parecernos un poco extraño si estamos empezando a aprender esta tecnología. Por suerte, es bastante sencillo de solucionar.

Básicamente, este mensaje aparece en la consola cuando estamos renderizando un listado dentro de nuestro componente, pero no le estamos indicando la propiedad "key". React usa esta propiedad para **determinar qué elemento hijo dentro de un listado ha sufrido cambios,** por lo que funciona como una especie de identificativo.

De esta manera, React utiliza esta información para **identificar las diferencias existentes con respecto al DOM** y optimizar la renderización del listado, determinando qué elementos necesitan volverse a calcular. Esto habitualmente pasa cuando agregamos, eliminamos o cambiamos el orden de los items en una lista.

Recomendamos revisar las siguientes secciones:

- [¿Qué es el renderizado de listas en React?](#qué-es-el-renderizado-de-listas-en-react)

- [¿Por qué puede ser mala práctica usar el ´index´ como key en un listado de React?](#por-qué-puede-ser-mala-práctica-usar-el-index-como-key-en-un-listado-de-react)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Cuando aparece el error 'Each child in a list should have a unique key prop'?

- **a)** Cuando renderizamos un listado sin indicar la propiedad 'key'.
- **b)** Nunca aparece este error.
- **c)** Cuando usamos componentes de clase.
- **d)** Cuando no importamos React.

**2.** ¿Para que usa React la propiedad 'key'?

- **a)** Para acceder al DOM.
- **b)** No tiene ninguna funcion.
- **c)** Para determinar que elemento hijo ha sufrido cambios y optimizar la renderizacion.
- **d)** Para validar props.

**3.** ¿Como se soluciona este error?

- **a)** Reiniciando el servidor.
- **b)** Usando componentes de clase.
- **c)** No se puede solucionar.
- **d)** Anadiendo la propiedad 'key' con un valor unico a cada elemento del listado.

---

## React Hook useXXX is called conditionally. React Hooks must be called in the exact same order in every component render

Una de las reglas de los hooks de React es que deben llamarse en el mismo orden en cada renderizado. React lo necesita para saber en qué orden se llaman los hooks y así mantener el estado de los mismos internamente. Por ello, los hooks no pueden usarse dentro de una condición `if`, ni un loop, ni tampoco dentro de una función anónima. Siempre deben estar en el nivel superior de la función.

Por eso el siguiente código es incorrecto:

```jsx
// ❌ código incorrecto por saltar las reglas de los hooks
function Counter() {
  const [count, setCount] = useState(0)

  // de forma condicional, creamos un estado con el hook useState
  // lo que rompe la regla de los hooks
  if (count > 0) {
    const [name, setName] = useState('midu')
  }

  return (
    <div>
      {count} {name}
    </div>
  )
}
```

También el siguiente código sería incorrecto, aunque no lo parezca, ya que estamos usando el segundo `useState` de forma condicional (pese a no estar dentro de un `if`) ya que se ejecutará sólo cuando `count` sea diferente a `0`:

```jsx
// ❌ código incorrecto por saltar las reglas de los hooks
function Counter() {
  const [count, setCount] = useState(0)

  // si count es 0, no se ejecuta el siguiente hook useState
  // ya que salimos de la ejecución aquí
  if (count === 0) return null

  const [name, setName] = useState('midu')

  return (
    <div>
      {count} {name}
    </div>
  )
}
```

Ten en cuenta que si ignoras este error, es posible que tus componentes no se comporten de forma correcta y tengas comportamientos no esperados en el funcionamiento de tus componentes.

Para arreglar este error, como hemos comentado antes, debes asegurarte de que los hooks se llaman en el mismo orden en cada renderizado. El último ejemplo quedaría así:

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  // movemos el hook useState antes del if
  const [name, setName] = useState('midu')

  if (count === 0) return null

  return (
    <div>
      {count} {name}
    </div>
  )
}
```

Recomendamos revisar las siguientes secciones:

- [¿Cuáles son las reglas de los hooks en React?](#cuáles-son-las-reglas-de-los-hooks-en-react)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Por que React necesita que los hooks se llamen en el mismo orden?

- **a)** Para facilitar el debugging.
- **b)** Para saber en que orden se llaman y mantener el estado internamente.
- **c)** No es necesario, es solo una recomendacion.
- **d)** Para compatibilidad con navegadores antiguos.

**2.** ¿Donde NO pueden usarse los hooks?

- **a)** En cualquier lugar, no hay restricciones.
- **b)** Dentro de condiciones if, loops o funciones anonimas.
- **c)** Solo en produccion.
- **d)** En componentes funcionales.

**3.** ¿Como se soluciona este error?

- **a)** Reiniciar el servidor.
- **b)** Mover los hooks al nivel superior de la funcion, antes de cualquier condicion.
- **c)** Usar componentes de clase.
- **d)** No se puede solucionar.

---

## Can’t perform a React state update on an unmounted component

Este error se produce cuando intentamos actualizar el estado de un componente que ya no está montado. Esto puede ocurrir cuando el componente se desmonta antes de que se complete una petición asíncrona, por ejemplo:

```jsx
function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies().then(() => {
      setMovies(data.results)
    })
  })

  if (!movies.length) return null

  return (
    <section>
      {movies.map(movie => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </article>
      ))}
    </section>
  )
}
```

Parece un código inofensivo, pero imagina que usamos este componente en una página. Si el usuario navega a otra página antes de que se complete la petición, el componente se desmontará y React lanzará el error, ya que intentará ejecutar el `setMovies` en un componente (Movies) que ya no está montado.

Para evitar este error, podemos usar una variable booleana con `useRef` que nos indique si el componente está montado o no. De esta manera, podemos evitar que se ejecute el `setMovies` si el componente no está montado:

```jsx
function Movies() {
  const [movies, setMovies] = useState([])
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    fetchMovies().then(() => {
      if (mounted.current) {
        setMovies(data.results)
      }
    })

    return () => (mounted.current = false)
  })

  // ...
}
```

Esto soluciona el problema pero **no evita que se haga la petición aunque el componente ya no esté montado**. Para cancelar la petición y así ahorrar transferencia de datos, podemos abortar la petición usando la API `AbortController`:

```jsx
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

Sólo ten en cuenta la compatibilidad de `AbortController` en los navegadores. En [caniuse](https://caniuse.com/#feat=abortcontroller) puedes ver que no está soportado en Internet Explorer y versiones anteriores de Chrome 66, Safari 12.1 y Edge 16.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Qué significa este warning?

- **a)** Se intentó hacer setState (o similar) cuando el componente ya no está montado.
- **b)** Que faltan keys en una lista.
- **c)** Que hay demasiados re-renders.
- **d)** Que PropTypes falló la validación.

**2.** ¿Cuál es una causa típica?

- **a)** Una petición async o un timer que resuelve después de desmontar el componente.
- **b)** Importar React en el archivo.
- **c)** Exportar el componente de forma nombrada.
- **d)** Usar Fragment.

**3.** ¿Cómo se mitiga a menudo?

- **a)** Usar Math.random en cada render.
- **b)** Cancelar la petición/timer en el cleanup del useEffect o ignorar el resultado si se desmontó.
- **c)** Poner el estado en una variable global mutable sin más.
- **d)** Quitar todas las keys.

---

## Too many re-renders. React limits the number of renders to prevent an infinite loop

Este error indica que algo dentro de nuestro componente está generando muchos pintados que pueden desembocar en un _loop_ (bucle) infinito. Algunas de las razones por las que puede aparecer este error son las siguientes:

1. **Llamar a una función que actualiza el estado en el renderizado del componente.**

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  // ❌ código incorrecto
  // no debemos actualizar el estado de manera directa
  setCount(count + 1)

  return <div>{count}</div>
}
```

Lo que sucede en este ejemplo, es que al _renderizarse_ el componente, se llama a la función `setCount` para actualizar el estado. Una vez el estado es actualizado, se genera nuevamente un _render_ del componente y se repite todo el proceso infinitas veces.

Una posible solución sería:

```jsx
function Counter() {
  // ✅ código correcto
  // se pasa el valor inicial deseado en el `useState`
  const [count, setCount] = useState(1)

  return <div>{count}</div>
}
```

**Llamar directamente a una función en un controlador de eventos.**

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  // ❌ código incorrecto
  //se ejecuta directamente la función `setCount` y provoca un renderizado infinito
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={setCount(count + 1)}>Incrementar</button>
    </div>
  )
}
```

En este código, se está ejecutando la función `setCount` que actualiza el estado en cada renderizado del componente, lo que provoca renderizaciones infinitas.

La manera correcta sería la siguiente:

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  // ✅ código correcto
  // se pasa un callback al evento `onClick`
  // esto evita que la función se ejecute en el renderizado
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}
```

**Usar incorrectamente el Hook de `useEffect`.**

Al ver este ejemplo:

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  // ❌ código incorrecto
  useEffect(() => {
    setCounter(counter + 1)
  }) // 👈️ no colocar el array de dependencias

  return <div>{count}</div>
}
```

Lo que ocurre, es que al no colocar un array de dependencias en el hook de `useEffect`, estamos provocando que el código que se encuentre dentro se ejecute en cada renderizado del componente. Al llamar al `setCounter` y actualizar el estado, obtenemos nuevamente renderizaciones infinitas.

Para solucionarlo, podemos hacer lo siguiente:

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  // ✅ código correcto
  // estamos indicando que sólo queremos que el código se ejecute una vez
  useEffect(() => {
    setCounter(counter + 1)
  }, []) //colocamos un array de dependencias vacío.

  return <div>{count}</div>
}
```

Estas son solo algunas de las posibles causas que podemos encontrar cuando nos topamos con este mensaje de error en el código. Si quieres complementar esta información, te recomendamos revisar las siguientes secciones:

- [¿Qué es el estado en React?](#qué-es-el-estado-en-react)
- [¿Qué son los hooks?](#qué-son-los-hooks)
- [¿Qué hace el hook useState?](#qué-hace-el-hook-usestate)
- [¿Qué hace el hook useEffect?](#qué-hace-el-hook-useeffect)
- [¿Cuáles son las reglas de los hooks en React?](#cuáles-son-las-reglas-de-los-hooks-en-react)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que indica el error 'Too many re-renders'?

- **a)** Que hay errores de sintaxis.
- **b)** Que algo esta generando muchos pintados que pueden causar un loop infinito.
- **c)** Que hay demasiados componentes.
- **d)** Que React necesita actualizarse.

**2.** ¿Cual es una causa comun de este error?

- **a)** Importar React.
- **b)** Llamar a setState directamente en el renderizado del componente.
- **c)** Usar useRef.
- **d)** Usar componentes funcionales.

**3.** ¿Que error comun causa este problema en onClick?

- **a)** Ejecutar la funcion directamente: onClick={setCount(count + 1)} en lugar de onClick={() => setCount(count + 1)}.
- **b)** Usar el evento click.
- **c)** No definir el handler.
- **d)** Usar botones.

**4.** ¿Que error con useEffect causa re-renders infinitos?

- **a)** No colocar el array de dependencias cuando se actualiza el estado dentro del efecto.
- **b)** Retornar una funcion de limpieza.
- **c)** Hacer peticiones async.
- **d)** Colocar array de dependencias vacio.

---

## ¿Qué diferencia existe entre Shadow DOM y Virtual DOM?

El **Shadow DOM** es una API del navegador que nos permite crear un árbol de nodos DOM independiente dentro de un elemento del DOM. Esto nos permite crear componentes que no interfieran con el resto de la aplicación. Se usa especialmente con Web Components.

El **Virtual DOM** es una representación del DOM en memoria. Esta representación se crea cada vez que se produce un cambio en el DOM. Esto nos permite comparar el DOM actual con el DOM anterior y así determinar qué cambios se deben realizar en el DOM real. Lo usa React y otras bibliotecas para hacer el mínimo número de cambios en el DOM real.


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el Shadow DOM?

- **a)** Un hook de React para manipular el DOM.
- **b)** Una API del navegador que permite crear un arbol de nodos DOM independiente dentro de un elemento.
- **c)** Una copia del DOM que se guarda en localStorage.
- **d)** Una representacion del DOM en memoria usada por React.

**2.** ¿Que es el Virtual DOM?

- **a)** Una representacion del DOM en memoria que permite comparar cambios y hacer actualizaciones minimas al DOM real.
- **b)** Una API nativa del navegador para encapsular componentes.
- **c)** Una tecnologia para crear Web Components.
- **d)** Un iframe invisible donde React renderiza componentes.

**3.** ¿Para que se usa principalmente el Shadow DOM?

- **a)** Para almacenar datos de sesion.
- **b)** Para optimizar el rendimiento de React.
- **c)** Para crear animaciones CSS avanzadas.
- **d)** Para crear Web Components que no interfieran con el resto de la aplicacion.

**4.** ¿Cual es la principal diferencia entre Shadow DOM y Virtual DOM?

- **a)** Virtual DOM solo funciona en Chrome, Shadow DOM en todos los navegadores.
- **b)** Shadow DOM es para CSS y Virtual DOM para JavaScript.
- **c)** Virtual DOM esta deprecado, Shadow DOM es su reemplazo.
- **d)** Shadow DOM es una API nativa del navegador; Virtual DOM es una representacion en memoria usada por React.

---

## ¿Qué es el Binding?

En React, el **Binding** se refiere a la forma en que se relaciona y sincroniza el **estado** _(state)_ de un componente con su **vista** _(render)_. El estado de un componente es un objeto que contiene información que puede ser utilizada para determinar cómo se debe mostrar el componente. Existen **dos** tipos de binding en React: **One-Way Binding** y **Two-Way Binding**.

**One-Way Binding** _(Enlace unidireccional)_:

En React se refiere a la capacidad de un componente para actualizar su **estado** _(state)_ y su **vista** _(render)_ de manera automática cuando cambia el estado, pero no permitiendo que la vista actualice el estado. En otras palabras, el **one-way binding** significa que el flujo de datos es unidireccional, desde el estado hacia la vista, y no al revés.

Por ejemplo:

```jsx
import React, { useState } from 'react'

function OneWayBindingExample() {
  const [name, setName] = useState('midu')

  return (
    <div>
      <p>Hello, {name}</p>
      <input
        type='text'
        placeholder='Enter your name'
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default OneWayBindingExample
```

_En este ejemplo, el componente tiene un estado inicial llamado **name** con el valor **midu**. La función **setName** se utiliza para actualizar el estado **name** cuando se produce un evento **onChange** en el input. Sin embargo, la **vista** (la linea que muestra **Hello, {name}**) no tiene la capacidad de actualizar el estado **name**._

**Two-Way Binding** _(Enlace bidireccional)_:

Se refiere a la capacidad de un componente para actualizar su estado y su vista de manera automática tanto cuando cambia el estado como cuando se produce un evento en la vista. En otras palabras, el **Two-Way Binding** significa que el flujo de datos es bidireccional, desde el estado hacia la vista y desde la vista hacia el estado. Para lograr esto se utilizan en conjunto con los eventos, como **onChange**, para capturar la información de los inputs y actualizar el estado, _React no proporciona un mecanismo nativo para two-way binding, pero se puede lograr utilizando librerías como react-forms o formik._

Por ejemplo:

```jsx
import React, { useState } from 'react'

function TwoWayBindingExample() {
  const [name, setName] = useState('midu')

  return (
    <div>
      <p>Hello, {name}</p>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default TwoWayBindingExample
```

_En este ejemplo, el componente tiene un estado inicial llamado **name** con el valor **midu**. La función **setName** se utiliza para actualizar el estado **name** cuando se produce un evento **onChange** en el input, y se puede ver reflejado en el valor del input. Sin embargo, en este caso se está utilizando el atributo **value** para que el valor del input sea actualizado con el valor del estado, es decir, se está actualizando tanto el estado como el input._

**Por si no quedó claro:**

En términos sencillos, el **Binding** en React puede compararse con una cafetera y una taza de café. **El estado** del componente sería la _cafetera_, y **la vista** del componente sería _la taza de café_.

En el caso del **One-Way Binding**, la cafetera solo puede verter café en una dirección, hacia la taza de café. Esto significa que la cafetera puede llenar automáticamente la taza de café con café fresco, pero la taza de café no puede devolver automáticamente el café a la cafetera. De esta manera, **el estado** del componente _(la cafetera)_ puede actualizar automáticamente **la vista** _(la taza de café)_ cuando cambia, pero la **vista** no puede actualizar automáticamente el **estado**.

En el caso del **Two-Way Binding**, la cafetera puede verter y recibir café en ambas direcciones, hacia y desde la taza de café (no sé por qué alguien necesitaría hacer algo así). Esto significa que la cafetera puede llenar y vaciar automáticamente la taza de café con café fresco. De esta manera, tanto **el estado** del componente como **la vista** pueden actualizarse automáticamente entre sí.

Sí quieres saber más comparto el siguiente enlace:  
[How To Bind Any Component to Data in React: One-Way Binding](https://www.telerik.com/blogs/how-to-bind-any-component-data-react-one-way-binding)


##### Pon a prueba

*Responde sin mirar el solucionario del final del capítulo. Marca una sola opción.*

**1.** ¿Que es el Binding en React?

- **a)** Una tecnica para optimizar el renderizado.
- **b)** La forma en que se relaciona y sincroniza el estado de un componente con su vista.
- **c)** Una forma de importar librerias externas.
- **d)** Un hook para manejar eventos.

**2.** ¿Que significa One-Way Binding (enlace unidireccional)?

- **a)** El flujo de datos va del estado hacia la vista, pero la vista no puede actualizar el estado directamente.
- **b)** Solo funciona con componentes funcionales.
- **c)** El componente solo puede renderizarse una vez.
- **d)** Solo se puede vincular un input por formulario.

**3.** ¿Como se logra el Two-Way Binding en React?

- **a)** Solo es posible con componentes de clase.
- **b)** Usando el atributo value junto con un evento onChange para sincronizar el estado con el input.
- **c)** No es posible hacer Two-Way Binding en React.
- **d)** Agregando la propiedad twoWay al componente.

**4.** ¿Cual es la diferencia clave entre los dos tipos de binding en un input?

- **a)** Two-Way Binding solo funciona con inputs de tipo text.
- **b)** En Two-Way Binding el input tiene el atributo value vinculado al estado; en One-Way Binding no.
- **c)** No hay diferencia, ambos funcionan igual.
- **d)** Two-Way Binding no puede usar eventos onChange.

---


{pagebreak}

## Solucionario

*Comprueba tus respuestas cuando hayas terminado las preguntas del capítulo.*

### ¿Qué quiere decir: Warning: Each child in a list should have a unique key prop?

1. **a)** Cuando renderizamos un listado sin indicar la propiedad 'key'.
2. **c)** Para determinar que elemento hijo ha sufrido cambios y optimizar la renderizacion.
3. **d)** Anadiendo la propiedad 'key' con un valor unico a cada elemento del listado.

### React Hook useXXX is called conditionally. React Hooks must be called in the exact same order in every component render

1. **b)** Para saber en que orden se llaman y mantener el estado internamente.
2. **b)** Dentro de condiciones if, loops o funciones anonimas.
3. **b)** Mover los hooks al nivel superior de la funcion, antes de cualquier condicion.

### Can’t perform a React state update on an unmounted component

1. **a)** Se intentó hacer setState (o similar) cuando el componente ya no está montado.
2. **a)** Una petición async o un timer que resuelve después de desmontar el componente.
3. **b)** Cancelar la petición/timer en el cleanup del useEffect o ignorar el resultado si se desmontó.

### Too many re-renders. React limits the number of renders to prevent an infinite loop

1. **b)** Que algo esta generando muchos pintados que pueden causar un loop infinito.
2. **b)** Llamar a setState directamente en el renderizado del componente.
3. **a)** Ejecutar la funcion directamente: onClick={setCount(count + 1)} en lugar de onClick={() => setCount(count + 1)}.
4. **a)** No colocar el array de dependencias cuando se actualiza el estado dentro del efecto.

### ¿Qué diferencia existe entre Shadow DOM y Virtual DOM?

1. **b)** Una API del navegador que permite crear un arbol de nodos DOM independiente dentro de un elemento.
2. **a)** Una representacion del DOM en memoria que permite comparar cambios y hacer actualizaciones minimas al DOM real.
3. **d)** Para crear Web Components que no interfieran con el resto de la aplicacion.
4. **d)** Shadow DOM es una API nativa del navegador; Virtual DOM es una representacion en memoria usada por React.

### ¿Qué es el Binding?

1. **b)** La forma en que se relaciona y sincroniza el estado de un componente con su vista.
2. **a)** El flujo de datos va del estado hacia la vista, pero la vista no puede actualizar el estado directamente.
3. **b)** Usando el atributo value junto con un evento onChange para sincronizar el estado con el input.
4. **b)** En Two-Way Binding el input tiene el atributo value vinculado al estado; en One-Way Binding no.
