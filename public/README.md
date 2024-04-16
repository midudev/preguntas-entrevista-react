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
- [Documentación oficial de React actualizada](https://beta.reactjs.org/) en inglés



---

#### ¿Cuáles son las características principales de React?

Las características principales de React son:

- **Componentes**: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

- **Virtual DOM**: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.

- **Declarativo**: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.

- **Unidireccional**: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

- **Universal**: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.



---

#### ¿Qué significa exactamente que sea declarativo?

No le decimos cómo debe renderizar la interfaz a base de instrucciones. Le decimos qué debe renderizar y React se encarga de renderizarlo.

Un ejemplo entre declarativo e imperativo:

<pre><code class="language-js"><span class="token comment">// Declarativo</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> world<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

<span class="token comment">// Imperativo</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span>
element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'Hello, world'</span></code></pre>



---

#### ¿Qué es un componente?

Un componente es una pieza de código que renderiza una parte de la interfaz. Los componentes pueden ser parametrizados, reutilizados y pueden contener su propio estado.

En React los componentes se crean usando funciones o clases.



---

#### ¿Qué es JSX?

React usa JSX para declarar qué debe renderizar. JSX es una extensión de JavaScript que permite escribir un código más cercano visualmente a HTML, que mejora la legibilidad del código y hace que sea más fácil de entender.

Sin JSX, deberíamos usar `React.createElement` para crear los elementos de la interfaz manualmente de esta forma:

<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> createElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Hello</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// un componente es una función! 👀</span>
  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
    <span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token comment">// elemento a renderizar</span>
     <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// atributos del elemento</span>
    <span class="token string">'Hola Mundo 👋🌍!'</span> <span class="token comment">// contenido del elemento</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Esto es muy tedioso y poco legible. Por eso, React usa JSX para declarar qué debe renderizar. Por eso usamos JSX de esta forma:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Hello</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hola Mundo 👋🌍!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Ambos códigos son equivalentes.



---

#### ¿Cómo se transforma el JSX?

**El JSX se transforma en código JavaScript compatible en el navegador usando un *transpilador* o *compilador***. El más famoso es a día de hoy Babel, que utiliza una serie de plugins para ser compatible con la transformación, pero existen otros como SWC.

Puedes ver cómo se transforma el JSX en el [playground de código de Babel](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACQKYBt10QCgJSIDeAUIogE6pQjlIA8AFgIwB8yc6AhogLLgAm2QLwbgaR3APBuBYfYCEdAPTMWxAL5A&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.19.5&externalPlugins=&assumptions=%7B%7D).

Hay casos especiales en los que un transpilador no es necesario. Por ejemplo, **Deno tiene soporte nativo para la sintaxis JSX** y no es necesario transformar el código para hacerlo compatible.



---

#### ¿Cuál es la diferencia entre componente y elemento en React?

Un componente es una función o clase que recibe props y devuelve un elemento.
Un elemento es un objeto que representa un nodo del DOM o una instancia de un componente de React.

<pre><code class="language-js"><span class="token comment">// Elemento que representa un nodo del DOM</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'button button-blue'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'OK!'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Elemento que representa una instancia de un componente</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> Button<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'OK!'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo crear un componente en React?

Los componentes en React son funciones o clases que devuelven un elemento de React. Hoy en día lo más recomendado es usar funciones:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello World!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Pero también puedes usar una clase para crear un componente React:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello World!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

Lo importante es que el nombre de la función o clase empiece con una letra mayúscula. Esto es necesario para que React pueda distinguir entre componentes y elementos HTML.



---

#### ¿Qué son las props en React?

Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente `Button` que muestra un botón, puedes pasarle una prop `text` para que el botón muestre ese texto:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Podríamos entender que el componente `Button` es un botón genérico, y que la prop `text` es el texto que se muestra en el botón. Así estamos creando un componente reutilizable.

Debe considerarse además que al usar cualquier expresión JavaScript dentro de JSX debe envolverlos con `{}`, en este caso el objeto `props`, de otra forma JSX lo considerará como texto plano.

Para usarlo, indicamos el nombre del componente y le pasamos las props que queremos:

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Haz clic aquí<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Seguir a @midudev<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>

Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.



---

#### ¿Qué es y para qué sirve la prop `children` en React?

La prop `children` es una prop especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente.

Por ejemplo, si tenemos un componente `Card` que muestra una tarjeta con un título y un contenido, podemos usar la prop `children` para mostrar el contenido:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Card</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Y luego podemos usarlo de la siguiente forma:

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Título de la tarjeta<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contenido de la tarjeta</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span></code></pre>

En este caso, la prop `children` contiene el elemento `<p>Contenido de la tarjeta</p>`.

Conocer y saber usar la prop `children` es muy importante para crear componentes reutilizables en React.



---

####  ¿Qué diferencia hay entre props y state?

Las *props* son un objeto que **se pasan como argumentos de un componente padre a un componente hijo**. Son inmutables y no se pueden modificar desde el componente hijo.

El *state* es un valor que **se define dentro de un componente**. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente.

Así que mientras tanto *props* como *state* afectan al renderizado del componente, su gestión es diferente.



---

#### ¿Se puede inicializar un estado con el valor de una prop? ¿Qué pasa si lo haces y qué hay que tener en cuenta?

Sí, se puede inicializar el estado con el valor de una prop. Pero hay que tener en cuenta que, si la prop cambia, el estado no se actualizará automáticamente. Esto es porque el estado se inicializa una vez, cuando el componente se monta por primera vez.

Por ejemplo, con componentes funcionales:

<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Counter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Count</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Aumentar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Count</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

En este caso, el componente `Count` inicializa su estado con el valor de la prop `count`. Pero si cambia el valor de la prop `count`, el estado no se actualizará automáticamente. Por lo que al hacer click, siempre veremos el número 0 en pantalla.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-cdf8n9?file=App.tsx)

En este ejemplo, lo mejor sería simplemente usar la prop `count` en el componente `Count` y así siempre se volvería a renderizar.

**Es una buena práctica evitar al máximo los estados de nuestros componentes y, siempre que se pueda, simplemente calcular el valor a mostrar a partir de las props.**

En el caso que necesites inicializar un estado con una prop, es una buena práctica es añadir el prefijo de `initial` a la prop para indicar que es el valor inicial del estado y que luego no lo usaremos más:

<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Input</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initialValue <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Es un error muy común pensar que la prop actualizará el estado, así que tenlo en cuenta.



---

#### ¿Qué es el renderizado condicional en React?

El renderizado condicional es la forma de mostrar un componente u otro dependiendo de una condición.

Para hacer renderizado condicional en React usamos el operador ternario:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> text
    <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span></code></pre>

En este caso, si la prop `text` existe, se renderiza el botón. Si no existe, no se renderiza nada.

Es común encontrar implementaciones del renderizado condicional con el operador `&&`, del tipo:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> listArray <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> listArray<span class="token operator">?.</span>length <span class="token operator">&amp;&amp;</span> listArray<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Parece que tiene sentido... si el `length` es positivo (mayor a cero) pintamos el map. !Pues no! ❌ Cuidado, si tiene `length` de cero ya que se pintará en el navegador un 0.

Es preferible utilizar el operador ternario. *Kent C. Dodds* tiene un artículo interesante hablando del tema. [Use ternaries rather than && in JSX](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)



---

#### ¿Cómo puedes aplicar clases CSS a un componente en React y por qué no se puede usar `class`?

Para aplicar clases CSS a un componente en React usamos la prop `className`:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

La razón por la que se llama `className` es porque `class` es una palabra reservada en JavaScript. Por eso, en JSX, tenemos que usar `className` para aplicar clases CSS.



---

#### ¿Cómo puedes aplicar estilos en línea a un componente en React?

Para aplicar estilos CSS en línea a un componente en React usamos la prop `style`. La diferencia de cómo lo haríamos con HTML, es que en React los estilos se pasan como un objeto y no como una cadena de texto (esto puede verse más claro con los dobles corchetes, los primeros para indicar que es una expresión JavaScript, y los segundos para crear el objeto):

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">'2px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Fíjate que, además, los nombres de las propiedades CSS están en camelCase.



---

#### ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?

Puedes aplicar estilos de forma condicional a un componente en React usando la prop `style` y un operador ternario:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text<span class="token punctuation">,</span> primary <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> primary <span class="token operator">?</span> <span class="token string">'red'</span> <span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En el caso anterior, si la prop `primary` es `true`, el botón tendrá el color rojo. Si no, tendrá el color azul.

También puedes seguir la misma mecánica usando clases. En este caso, usamos el operador ternario para decidir si añadir o no la clase:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text<span class="token punctuation">,</span> primary <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>primary <span class="token operator">?</span> <span class="token string">'button-primary'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

También podemos usar bibliotecas como `classnames`:

<pre><code class="language-jsx"><span class="token keyword">import</span> classnames <span class="token keyword">from</span> <span class="token string">'classnames'</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text<span class="token punctuation">,</span> primary <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">classnames</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> primary <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, si la prop `primary` es `true`, se añadirá la clase `primary` al botón. Si no, no se añadirá. En cambio la clase `button` siempre se añadirá.



---

#### ¿Qué es el renderizado de listas en React?

El renderizado de listas es la forma de iterar un array de elementos y renderizar elementos de React para cada uno de ellos.

Para hacer renderizado de listas en React usamos el método `map` de los arrays:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, se renderiza una lista de elementos usando el componente `List`. El componente `List` recibe una prop `items` que es un array de objetos del tipo `[{ id: 1, name: "John Doe" }]`. El componente `List` renderiza un elemento `li` por cada elemento del array.

El elemento `li` tiene una prop `key` que es un identificador único para cada elemento. Esto es necesario para que React pueda identificar cada elemento de la lista y actualizarlo de forma eficiente. Más adelante hay una explicación más detallada sobre esto.



---

#### ¿Cómo puedes escribir comentarios en React?

Si vas a escribir un comentario fuera del renderizado de un componente, puedes usar la sintaxis de comentarios de JavaScript sin problemas:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Esto es un comentario</span>
  <span class="token comment">/* Esto es un comentario
  de varias líneas */</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Si vas a escribir un comentario dentro del renderizado de un componente, debes envolver el comentario en llaves y usar siempre la sintaxis de comentarios de bloque:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* Esto es un comentario en el render */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo añadir un evento a un componente en React?

Para añadir un evento a un componente en React usamos la sintaxis `on` y el nombre del evento nativo del navegador en *camelCase*:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, el componente `Button` recibe una prop `onClick` que es una función. Cuando el usuario hace clic en el botón, se ejecuta la función `onClick`.



---

#### ¿Cómo puedo pasar un parámetro a una función que maneja un evento en React?

Para pasar un parámetro a una función que maneja un evento en React podemos usar una función anónima:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> text<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onClick</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Cuando el usuario hace clic en el botón, se ejecuta la función `onClick` pasándole como parámetro el valor de la prop `id`.

También puedes crear una función que ejecuta la función `onClick` pasándole el valor de la prop `id`:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> text<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// handleClick recibe el evento original</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué es el estado en React?

El estado es un objeto que contiene datos que pueden cambiar en el tiempo. En React, el estado se usa para controlar los cambios en la interfaz.

Para que entiendas el concepto, piensa en el interruptor de una habitación. Estos interruptores suelen tener dos estados: encendido y apagado. Cuando accionamos el interruptor y lo ponemos en `on` entonces la luz se enciende y cuando lo ponemos en `off` la luz se apaga.

Este mismo concepto se puede aplicar a la interfaz de usuario. Por ejemplo, el botón Me Gusta de Facebook tendría el estado de `meGusta` a `true` cuando el usuario le ha dado a Me Gusta y a `false` cuando no lo ha hecho.

No solo podemos tener en el estado valores booleanos, también podemos tener objetos, arrays, números, etc.

Por ejemplo, si tienes un componente `Counter` que muestra un contador, puedes usar el estado para controlar el valor del contador.

Para crear un estado en React usamos el hook `useState`:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Aumentar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Al usar el hook `useState` este devolverá un `array` de dos posiciones:

0. El valor del estado.
1. La función para cambiar el estado.

Suele usarse desestructuración para facilitar la lectura y ahorrarnos algunas líneas de código. Por otro lado, al pasarle un dato como parámetro al `useState` le estamos indicando su estado inicial.

Con un componente de clase, la creación del estado sería así:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Aumentar
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué son los hooks?

Los Hooks son una API de React que nos permite tener estado, y otras características de React, en los componentes creados con una function.

Esto, antes, no era posible y nos obligaba a crear un componente con `class` para poder acceder a todas las posibilidades de la librería.

Hooks es gancho y, precisamente, lo que hacen, es que te permiten enganchar tus componentes funcionales a todas las características que ofrece React.



---

#### ¿Qué hace el hook `useState`?

El hook `useState` es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza

Recibe un parámetro:

- El valor inicial de nuestra variable de estado.

Devuelve un array con dos variables:

- En primer lugar tenemos la variable que contiene el valor
- La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos
- Cabe destacar que la función proporciona cómo parámetro el valor actual del propio estado. Ex: `setIsOpen(isOpen => !isOpen)`

En este ejemplo mostramos como el valor de `count` se inicializa en 0, y también se renderiza cada vez que el valor es modificado con la función `setCount` en el evento `onClick` del button:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">count</span> <span class="token operator">=></span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Aumentar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué significa la expresión "subir el estado"?

Cuando varios componentes necesitan compartir los mismos datos de un estado, entonces se recomienda elevar ese estado compartido hasta su ancestro común más cercano.

Dicho de otra forma. Si dos componentes hijos comparten los mismos datos de su padre, entonces mueve el estado al padre en lugar de mantener un estado local en sus hijos.

Para entenderlo, lo mejor es que lo veamos con un ejemplo. Imagina que tenemos una lista de regalos deseados y queremos poder añadir regalos y mostrar el total de regalos que hay en la lista.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Lista de regalos</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">GiftList</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TotalGifts</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">GiftList</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gifts<span class="token punctuation">,</span> setGifts<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addGift</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newGift <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'¿Qué regalo quieres añadir?'</span><span class="token punctuation">)</span>
    <span class="token function">setGifts</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>gifts<span class="token punctuation">,</span> newGift<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Regalos</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>gifts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">gift</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gift<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>gift<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addGift<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Añadir regalo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">TotalGifts</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>totalGifts<span class="token punctuation">,</span> setTotalGifts<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Total de regalos</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>totalGifts<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

¿Qué pasa si queremos que el total de regalos se actualice cada vez que añadimos un regalo? Como podemos ver, no es posible porque el estado de `totalGifts` está en el componente `TotalGifts` y no en el componente `GiftList`. Y como no podemos acceder al estado de `GiftList` desde `TotalGifts`, no podemos actualizar el estado de `totalGifts` cuando añadimos un regalo.

Tenemos que subir el estado de `gifts` al componente padre `App` y le pasaremos el número de regalos como prop al componente `TotalGifts`.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gifts<span class="token punctuation">,</span> setGifts<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addGift</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newGift <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'¿Qué regalo quieres añadir?'</span><span class="token punctuation">)</span>
    <span class="token function">setGifts</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>gifts<span class="token punctuation">,</span> newGift<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Lista de regalos</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">GiftList</span></span> <span class="token attr-name">gifts</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gifts<span class="token punctuation">}</span></span> <span class="token attr-name">addGift</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addGift<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TotalGifts</span></span> <span class="token attr-name">totalGifts</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gifts<span class="token punctuation">.</span>length<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">GiftList</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> gifts<span class="token punctuation">,</span> addGift <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Regalos</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>gifts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">gift</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gift<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>gift<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addGift<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Añadir regalo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">TotalGifts</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> totalGifts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Total de regalos</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>totalGifts<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Con esto, lo que hemos hecho es *elevar el estado*. Lo hemos movido desde el componente `GiftList` al componente `App`. Ahora pasamos como prop los regalos al componente `GiftList` y una forma de actualizar el estado, y también hemos pasado como prop al componente `TotalGifts` el número de regalos.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-qitkys?file=App.tsx)



---

#### ¿Qué hace el hook `useEffect`?

El hook `useEffect` se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.

Recibe dos parámetros:

- La función que se ejecutará al cambiar las dependencias o al renderizar el componente.
- Un array de dependencias. Si cambia el valor de alguna dependencia, ejecutará la función.

En este ejemplo mostramos un mensaje en consola cuando carga el componente y cada vez que cambia el valor de `count`:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'El contador se ha actualizado'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Aumentar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### Explica casos de uso del hook `useEffect`

Podemos usar el hook `useEffect` de diferentes formas, tales como:

- Ejecutar código cuando se renderiza el componente, cuando cambian las dependencias del efecto o cuando se desmonta el componente.
- Por eso puede ser útil para hacer llamadas a APIs, ya que sea nada más montar el componente o cuando cambian las dependencias.
- Realizar tracking de eventos, como Google Analytics, para saber qué páginas visitan los usuarios.
- Podemos validar un formulario para que cada vez que cambie el estado, podamos actualizar la UI y mostrar dónde están los errores.
- Podemos suscribirnos a eventos del navegador, como por ejemplo el evento `resize` para saber cuando el usuario cambia el tamaño de la ventana.



---

#### Cómo suscribirse a un evento en `useEffect`

Dentro de `useEffect` nos podemos suscribir a eventos del navegador, como el evento `resize` para saber cuando el usuario cambia el tamaño de la ventana. Es importante que nos desuscribamos cuando el componente se desmonte para evitar fugas de memoria. Para ello, tenemos que devolver una función dentro del `useEffect` que se ejecutará cuando el componente se desmonte.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Window</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'La ventana se ha redimensionado'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Abre la consola y redimensiona la ventana</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué hace el hook `useId`?

`useId` es un hook para generar identificadores únicos que se pueden pasar a los atributos de las etiquetas HTML y es especialmente útil para accesibilidad.

Llama `useId` en el nivel superior del componente para generar una ID única:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">function</span> <span class="token function">PasswordField</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> passwordHintId <span class="token operator">=</span> <span class="token function">useId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// ...</span></code></pre>

A continuación, pasa el ID generado a diferentes atributos:

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">aria-describedby</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>passwordHintId<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>passwordHintId<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span></code></pre>

La etiqueta `aria-describedby` te permite especificar que dos etiquetas están relacionadas entre sí, puede generar una identificación única con useId donde incluso si `PasswordField` aparece varias veces en la pantalla, las identificaciones generadas no chocarán.

El ejemplo completo sería así:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">PasswordField</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> passwordHintId <span class="token operator">=</span> <span class="token function">useId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
        Password:
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">aria-describedby</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>passwordHintId<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>passwordHintId<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        El password debe ser de 18 letras y contener caracteres especiales
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Choose password</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordField</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Confirm password</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PasswordField</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Como ves en `App` estamos usando el componente dos veces. Si pusieramos una id a mano, por ejemplo `password`, entonces la ID no sería única y quedaría duplicada. Por eso es importante que generes la ID automáticamente con `useId`.



---

#### ¿Cómo podemos ejecutar código cuando el componente se monta?

Podemos ejecutar código cuando el componente se monta usando el hook `useEffect` sin pasarle ninguna dependencia. En este caso, la función que se pasa como primer parámetro se ejecutará cuando el componente se monte.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'El componente se ha montado'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Abre la consola y re-dimensiona la ventana</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué son los Fragments en React?

Los *Fragments* son una forma de agrupar elementos sin añadir un elemento extra al DOM, ya que React no permite devolver varios elementos en un componente, solo un elemento raíz.

Para crear un Fragment en React usamos el componente `Fragment`:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Titulo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Párrafo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

También podemos usar la sintaxis de abreviatura:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Titulo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Párrafo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Por qué es recomendable usar Fragment en vez de un div?

Las razones por las que es recomendable usar Fragment en vez de un `div` a la hora de envolver varios elementos son:

- Los `div` añaden un elemento extra al DOM, mientras que los Fragments no. Esto hace que el número de elementos HTML y la profundidad del DOM sea menor.
- Los elementos envueltos con Fragment son afectados directamente por las propiedades *flex* o *grid* de CSS de su elemento padre. Si usas un `div` es posible que tengas problemas con el alineamiento de los elementos.
- Los Fragments son más rápidos que los `div` ya que no tienen que ser renderizados.
- Los `div` aplican CSS por defecto (hace que lo que envuelve el `div` se comporte como un bloque al aplicar un `display: block`) mientras que los Fragment no aplican ningún estilo por defecto.



---

#### ¿Qué es el Compound Components Pattern?  

Es un patrón de diseño de componentes que se basa en crear un componente padre con un solo objetivo, proporcionarle a sus hijos las propiedades necesarias para que se rendericen sin problemas.

Permite una estructura declarativa a la hora de construir nuevos componentes, además ayuda a la lectura del código por su simplicidad y limpieza.

Un ejemplo de este diseño sería una lista que renderiza los elementos hijos:

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ListItem</span></span><span class="token punctuation">></span></span><span class="token plain-text">Cat</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ListItem</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ListItem</span></span><span class="token punctuation">></span></span><span class="token plain-text">Dog</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ListItem</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span></code></pre>

<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ListItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> ListItem <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

Este es un ejemplo sencillo, pero los componentes pueden ser tan complejos como quieras y tanto el padre como los hijos pueden tener sus propios estados.

Enlaces de interés:

- [Lleva tu React al siguiente nivel con Compound Pattern by dezkareid en el blog de Platzi](https://platzi.com/blog/lleva-tu-react-al-siguiente-nivel-con-compound-pattern/?utm_source=twitter&utm_medium=organic&utm_campaign=PLA_TW_BLOG_202205_react_compound_pattern)

- [Compound Components by Jenna Smith](https://jjenzz.com/compound-components) <strong>en inglés</strong>
- [Compound Components Lesson by Kent C. Dodds](https://egghead.io/lessons/react-write-compound-components) <strong>en inglés</strong>



---

#### ¿Cómo puedes inicializar un proyecto de React desde cero?

Existen diversas formas de inicializar un proyecto de React desde cero. Entre las más populares están:

- [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

<pre><code class="language-bash"><span class="token function">npm</span> create vite@latest my-app -- <span class="token parameter variable">--template</span> react</code></pre>

- [Create React App](https://create-react-app.dev/docs/getting-started)

<pre><code class="language-bash">npx create-react-app my-app</code></pre>

> La opción más popular y recomendada hoy en día es Vite. <small>Fuente [npm trends](https://npmtrends.com/@vitejs/plugin-react-vs-create-react-app).</small>

Usando un Framework, entre las más populares están:

- [Nextjs](https://nextjs.org/docs/getting-started)

<pre><code class="language-bash">npx create-next-app@latest my-app</code></pre>

- [Gatsby](https://www.gatsbyjs.com/docs/quick-start/)

<pre><code class="language-bash"><span class="token function">npm</span> init gatsby</code></pre>

> La opción más popular y recomendada hoy en día es Nextjs. <small>Fuente [npm trends](https://npmtrends.com/gatsby-vs-next)</small>

Cada uno de ellos es un empaquetador de aplicaciones web. Se encargan de resolver las dependencias de tu proyecto, levantar un entorno de desarrollo que se refresca automáticamente con cada cambio y de empaquetar tu aplicación para producción con todos los archivos estáticos necesarios y mucho más.



---

#### ¿Qué es React DOM?

React DOM es la librería que se encarga de renderizar los componentes de React para el navegador. Hay que tener en cuenta que React es una biblioteca que se puede usar en diferentes entornos (dispositivos móviles, apps de escritorio, terminal...).

Mientras que la biblioteca de *React*, a secas, es el motor de creación de componentes, hooks, sistema de props y estado... *React DOM* es la librería que se encarga de renderizar los componentes de React específicamente en el navegador.

*React Native*, por ejemplo, haría lo mismo, pero para dispositivos móviles.



#### ¿Qué JavaScript necesito para aprender React?

##### JavaScript que necesitas para aprender React

**Para aprender y dominar React necesitas saber JavaScript.** A diferencia de otros frameworks y bibliotecas, como *Angular* y *Vue*, que se basan en su propio *DSL* (Domain-Specific Language), React usa una extensión de la sintaxis de JavaScript llamada *JSX*. Más adelante lo veremos en detalle pero, al final, no deja de ser azúcar sintáctico para escribir menos JavaScript.

**En React todo es JavaScript.** Para bien y para mal. Este libro da por sentados unos conocimientos previos del lenguaje de programación pero antes de empezar vamos a hacer un pequeño repaso por algunas de las características más importantes que necesitarás conocer.

**Si ya dominas JavaScript puedes saltarte este capítulo** y continuar con el libro, pero recuerda que siempre podrás revisar este capítulo como referencia.

##### EcmaScript Modules o ESModules

Los **EcmaScript Modules** es la forma nativa que tiene JavaScript para importar y exportar variables, funciones y clases entre diferentes ficheros. Hoy en día, especialmente si trabajamos con un empaquetador de aplicaciones como Webpack, vamos a estar trabajando constantemente con esta sintaxis.

Por un lado podemos crear módulos exportándolos por defecto:

<pre><code class="language-js"><span class="token comment">// sayHi.js</span>
<span class="token comment">// exportamos por defecto el módulo sayHi</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sayHi</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.js</span>
<span class="token comment">// este módulo lo podremos importar con el nombre que queramos</span>
<span class="token keyword">import</span> sayHi <span class="token keyword">from</span> <span class="token string">'./sayHi.js'</span>

<span class="token comment">// al ser el módulo exportado por defecto podríamos usar otro nombre</span>
<span class="token keyword">import</span> miduHi <span class="token keyword">from</span> <span class="token string">'./sayHi.js'</span></code></pre>

También podemos hacer exportaciones nombradas de módulos, de forma que un módulo tiene un nombre asignado y para importarlo necesitamos usar exactamente el nombre usado al exportarlo:

<pre><code class="language-js"><span class="token comment">// sayHi.js</span>
<span class="token comment">// podemos usar exportaciones nombradas para mejorar esto</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>

<span class="token comment">// y se pueden hacer tantas exportaciones de módulos nombrados como queramos</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">anotherHi</span> <span class="token operator">=</span> <span class="token parameter">msg</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

<span class="token comment">// index.js</span>
<span class="token comment">// ahora para importar estos módulos en otro archivo podríamos hacerlo así</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>sayHi<span class="token punctuation">,</span> anotherHi<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./sayHi.js'</span></code></pre>

Los *imports* que hemos visto hasta aquí se conocen como *imports estáticos*. Esto significa que ese módulo será cargado en el momento de la carga del archivo que lo importa.

También existen los *imports dinámicos*, de forma que podamos importar módulos que se carguen en el momento de la ejecución del programa o cuando nosotros decidamos (por ejemplo, como respuesta a un click).

<pre><code class="language-js">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// los imports dinámicos devuelven una Promesa</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./sayHi.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ahora podemos ejecutar el módulo que hemos cargado</span>
    module<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token string">'Hola'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>

Los imports dinámicos son útiles también cuando trabajamos con empaquetadores como Webpack o Vite, ya que esto creará unos *chunks* (fragmentos) que se cargarán fuera del bundle general. ¿El objetivo? Mejorar el rendimiento de la aplicación.

Existen más sintaxis para trabajar con módulos, pero con saber las que hemos visto ya sería suficiente para seguir el libro.

**¿Por qué es importante?**

Para empezar React te ofrece diferentes partes de su biblioteca a través de módulos que podrás importar. Además nuestros componentes los tendremos separados en ficheros y, cada uno de ellos, se podrá importar utilizando *ESModules*.

Además, por temas de optimización de rendimiento, podremos importar de forma dinámica componentes y así mejorar la experiencia de nuestros usuarios al necesitar cargar menos información para poder utilizar la página.

##### Operador condicional (ternario)

Las ternarias son una forma de realizar condiciones sin la necesidad de usar la sintaxis con `if`. Se podría decir que es una forma de atajo para evitar escribir tanto código.

<pre><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Es par'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Es impar'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// usando ternaria</span>
number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Es par'</span><span class="token punctuation">)</span> <span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Es impar'</span><span class="token punctuation">)</span></code></pre>

**¿Por qué es importante?**

En las interfaces gráficas es muy normal que, dependiendo del estado de la aplicación o los datos que nos lleguen, vamos a querer renderizar una cosa u otra en pantalla. Para realizar esto, en lugar de utilizar `if` se usan las ternarias ya que queda mucho más legible dentro del *JSX*.

##### Funciones flecha o Arrow Functions

Las *funciones flecha* o *arrow function* fueron añadidas a JavaScript en el estándar ECMAScript 6 (o ES2015). En principio parece que simplemente se trata de una sintaxis alternativa más simple a la hora de crear expresiones de funciones:

<pre><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">nombreDeLaFuncion</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// instrucciones de la función</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">nombreDeLaFuncion</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// con arrow function</span>
  <span class="token comment">// instrucciones de la función</span>
<span class="token punctuation">}</span></code></pre>

Pero además del cambio de sintaxis existen otras características de las funciones flechas que se usan constantemente en React.

<pre><code class="language-js"><span class="token comment">// return implícito al escribir una sola línea</span>
<span class="token keyword">const</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'midudev'</span>

<span class="token comment">// ahorro de parentésis para función de un parámetro</span>
<span class="token keyword">const</span> <span class="token function-variable function">duplicateNumber</span> <span class="token operator">=</span> <span class="token parameter">num</span> <span class="token operator">=></span> num <span class="token operator">*</span> <span class="token number">2</span>

<span class="token comment">// se usan mucho como callback en funciones de arrays</span>
<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNumbers<span class="token punctuation">)</span> <span class="token comment">// [1, 2, 3]</span></code></pre>

También tiene algunos cambios respecto al valor de `this` pero, aunque es aconsejable dominarlo, no es realmente necesario para poder seguir con garantías el libro.

**¿Por qué es importante?**

Aunque hace unos años con React se trabajaba principalmente con clases, desde la irrupción de los hooks en la versión 16.8 ya no se usan mucho. Esto hace que se usen mucho más funciones.

Las funciones flecha, además, puedes verlas fácilmente conviviendo dentro de tus componentes. Por ejemplo, a la hora de renderizar una lista de elementos ejecutarás el método `.map` del array y, como callback, seguramente usarás una función flecha anónima.

##### Parámetros predeterminados (default values)

En JavaScript puedes proporcionar valores por defecto a los parámetros de una función en caso que no se le pase ningún argumento.

<pre><code class="language-js"><span class="token comment">// al parámetro b le damos un valor por defecto de 1</span>
<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// si le pasamos un argumento con valor, se ignora el valor por defecto</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>

<span class="token comment">// si no le pasamos un argumento, se usa el valor por defecto</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>

<span class="token comment">// las funciones flecha también pueden usarlos</span>
<span class="token keyword">const</span> sayHi <span class="token operator">=</span> <span class="token punctuation">(</span>msg <span class="token operator">=</span> <span class="token string">'Hola React!'</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'Hola React!'</span></code></pre>

**¿Por qué es importante?**

En React existen dos conceptos muy importantes: **componentes y hooks**. No vamos a entrar en detalle ahora en ellos pero lo importante es que ambos son construidos con funciones.

Poder añadir valores por defecto a los parámetros de esas funciones en el caso que no venga ningún argumento **es clave** para poder controlar React con éxito.

Los componentes, por ejemplo, pueden no recibir parámetros y, pese a ello, seguramente vas a querer que tengan algún comportamiento por defecto. Lo podrás conseguir de esta forma.

##### Template Literals

Los template literals o plantillas de cadenas llevan las cadenas de texto al siguiente nivel permitiendo expresiones incrustadas en ellas.

<pre><code class="language-js"><span class="token keyword">const</span> inicio <span class="token operator">=</span> <span class="token string">'Hola'</span>
<span class="token keyword">const</span> final <span class="token operator">=</span> <span class="token string">'React'</span>

<span class="token comment">// usando una concatenación normal sería</span>
<span class="token keyword">const</span> mensaje <span class="token operator">=</span> inicio <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> final

<span class="token comment">// con los template literals podemos evaluar expresiones</span>
<span class="token keyword">const</span> mensaje <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>inicio<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>final<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></code></pre>

Como ves, para poder usar los template literals, necesitas usar el símbolo ```

Además, nos permiten utilizar cadenas de texto de más de una línea.

**¿Por qué es importante?**

En React esto se puede utilizar para diferentes cosas. No sólo es normal crear cadenas de texto para mostrar en la interfaz... también puede ser útil para crear clases para tus elementos HTML de forma dinámica. Verás que los template literales están en todas partes.

##### Propiedades abreviadas

Desde *ECMAScript 2015* se puede iniciar un objeto utilizado nombre de propiedades abreviadas. Esto es que si quieres utilizar como valor una variable que tiene el mismo nombre que la key, entonces puedes indicar la inicialización una vez:

<pre><code class="language-js"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'Miguel'</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">36</span>
<span class="token keyword">const</span> book <span class="token operator">=</span> <span class="token string">'React'</span>

<span class="token comment">// antes haríamos esto</span>
<span class="token keyword">const</span> persona <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">,</span> <span class="token literal-property property">book</span><span class="token operator">:</span> book <span class="token punctuation">}</span>

<span class="token comment">// ahora podemos hacer esto, sin repetir</span>
<span class="token keyword">const</span> persona <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> book <span class="token punctuation">}</span></code></pre>

**¿Por qué es importante?**

En React se trata muchas veces con objetos y siempre vamos a querer escribir el menor número de líneas posible para mantener nuestro código fácil de mantener y entender.

##### La desestructuración

La sintaxis de *desestructuración* es una expresión de JavaScript que permite extraer valores de Arrays o propiedades de objetos en distintas variables.

<pre><code class="language-js"><span class="token comment">// antes</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> primerNumero <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> segundoNumero <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">// ahora</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>primerNumero<span class="token punctuation">,</span> segundoNumero<span class="token punctuation">]</span> <span class="token operator">=</span> array

<span class="token comment">// antes con objetos</span>
<span class="token keyword">const</span> persona <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Miguel'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token literal-property property">book</span><span class="token operator">:</span> <span class="token string">'React'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> persona<span class="token punctuation">.</span>name
<span class="token keyword">const</span> age <span class="token operator">=</span> persona<span class="token punctuation">.</span>age

<span class="token comment">// ahora con objetos</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>age<span class="token punctuation">,</span> name<span class="token punctuation">}</span> <span class="token operator">=</span> persona

<span class="token comment">// también podemos añadir valores por defecto</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>books <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">=</span> persona
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona<span class="token punctuation">.</span>books<span class="token punctuation">)</span> <span class="token comment">// -> 2</span>

<span class="token comment">// también funciona en funciones</span>
<span class="token keyword">const</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">El nombre es </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token function">getName</span><span class="token punctuation">(</span>persona<span class="token punctuation">)</span></code></pre>

**¿Por qué es importante?**

En React hay mucho código básico que da por sentado que conoces y dominas esta sintaxis. Piensa que los objetos y los arreglos son tipos de datos que son perfectos para guardar datos a representar en una interfaz. Así que poder tratarlos fácilmente te va a hacer la vida mucho más fácil.

##### Métodos de Array

Saber manipular arreglos en JavaScript es básico para considerar que se domina. Cada método realiza una operación en concreto y devuelve diferentes tipos de datos. Todos los métodos que veremos reciben un callback (función) que se ejecutará para cada uno de los elementos del array.

Vamos a revisar algunos de los métodos más usados:

<pre><code class="language-js"><span class="token comment">// tenemos este array con diferentes elementos</span>
<span class="token keyword">const</span> networks <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'youtube'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://midu.tube'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">needsUpdate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://twitter.com/midudev'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">needsUpdate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'instagram'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://instagram.com/midu.dev'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">needsUpdate</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// con .map podemos transformar cada elemento</span>
<span class="token comment">// y devolver un nuevo array</span>
networks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">singleNetwork</span> <span class="token operator">=></span> singleNetwork<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
<span class="token comment">// Resultado:</span>
  <span class="token punctuation">[</span>
    <span class="token string">'https://midu.tube'</span><span class="token punctuation">,</span>
    <span class="token string">'https://twitter.com/midudev'</span><span class="token punctuation">,</span>
    <span class="token string">'https://instagram.com/midu.dev'</span>
  <span class="token punctuation">]</span>

<span class="token comment">// con .filter podemos filtrar elementos de un array que no</span>
<span class="token comment">// pasen una condición determinada por la función que se le pasa.</span>
<span class="token comment">// Devuelve un nuevo array.</span>
networks<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">singleNetwork</span> <span class="token operator">=></span> singleNetwork<span class="token punctuation">.</span>needsUpdate <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// Resultado:</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'youtube'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://midu.tube'</span><span class="token punctuation">,</span> <span class="token literal-property property">needsUpdate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://twitter.com/midudev'</span><span class="token punctuation">,</span> <span class="token literal-property property">needsUpdate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// con .find podemos buscar un elemento de un array que</span>
<span class="token comment">// cumpla la condición definida en el callback</span>
networks<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">singleNetwork</span> <span class="token operator">=></span> singleNetwork<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">'youtube'</span><span class="token punctuation">)</span>
<span class="token comment">// Resultado:</span>
<span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'youtube'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://midu.tube'</span><span class="token punctuation">,</span> <span class="token literal-property property">needsUpdate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

<span class="token comment">// con .some podemos revisar si algún elemento del array cumple una condición</span>
networks<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">singleNetwork</span> <span class="token operator">=></span> singleNetwork<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">'tiktok'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
networks<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">singleNetwork</span> <span class="token operator">=></span> singleNetwork<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">'instagram'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></code></pre>

**¿Por qué es importante?**

En React es muy normal almacenar los datos que tenemos que representar en la UI como array. Esto hace que muchas veces necesitemos tratarlos, filtrarlos o extraer información de ellos. Es primordial entender, conocer y dominar al menos estos métodos, ya que son los más usados.

##### Sintaxis Spread

La sintaxis de spread nos permite expandir un iterable o un objeto en otro lugar dónde se espere esa información. Para poder utilizarlo, necesitamos utilizar los tres puntos suspensivos `...` justo antes.

<pre><code class="language-js"><span class="token keyword">const</span> networks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Twitter'</span><span class="token punctuation">,</span> <span class="token string">'Twitch'</span><span class="token punctuation">,</span> <span class="token string">'Instagram'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newNetwork <span class="token operator">=</span> <span class="token string">'Tik Tok'</span>
<span class="token comment">// creamos un nuevo array expandiendo el array networks y</span>
<span class="token comment">// colocando al final el elemento newNetwork</span>
<span class="token comment">// utilizando la sintaxis de spread</span>
<span class="token keyword">const</span> allNetworks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>networks<span class="token punctuation">,</span> newNetwork<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allNetworks<span class="token punctuation">)</span>
<span class="token comment">// -> [ 'Twitter', 'Twitch', 'Instagram', 'Tik Tok' ]</span></code></pre>

Esto mismo lo podemos conseguir con un objeto, de forma que podemos expandir todas sus propiedades en otro objeto de forma muy sencilla.

<pre><code class="language-js"><span class="token keyword">const</span> midu <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Miguel'</span><span class="token punctuation">,</span> <span class="token literal-property property">twitter</span><span class="token operator">:</span> <span class="token string">'@midudev'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> miduWithNewInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>midu<span class="token punctuation">,</span>
  <span class="token literal-property property">youtube</span><span class="token operator">:</span> <span class="token string">'https://youtube.com/midudev'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Aprende React'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>miduWithNewInfo<span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   name: 'Miguel',</span>
<span class="token comment">//   twitter: '@midudev',</span>
<span class="token comment">//   youtube: 'https://youtube.com/midudev',</span>
<span class="token comment">//   books: [ 'Aprende React' ]</span>
<span class="token comment">// }</span></code></pre>

Es importante notar que esto hace una copia, sí, pero superficial. Si tuviéramos objetos anidados dentro del objeto entonces deberíamos tener en cuenta que podríamos mutar la referencia. Veamos un ejemplo.

<pre><code class="language-js"><span class="token keyword">const</span> midu <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Miguel'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twitter</span><span class="token operator">:</span> <span class="token string">'@midudev'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">experience</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">years</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">'javascript'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> miduWithNewInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>midu<span class="token punctuation">,</span>
  <span class="token literal-property property">youtube</span><span class="token operator">:</span> <span class="token string">'https://youtube.com/midudev'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Aprende React'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// cambiamos un par de propiedades de la "copia" del objeto</span>
miduWithNewInfo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Miguel Ángel'</span>
miduWithNewInfo<span class="token punctuation">.</span>experience<span class="token punctuation">.</span>years <span class="token operator">=</span> <span class="token number">19</span>

<span class="token comment">// hacemos un console.log del objeto inicial</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>midu<span class="token punctuation">)</span>

<span class="token comment">// en la consola veremos que el nombre no se ha modificado</span>
<span class="token comment">// en el objeto original pero los años de experiencia sí</span>
<span class="token comment">// ya que hemos mutado la referencia original</span>
<span class="token comment">// {</span>
<span class="token comment">//   name: 'Miguel',</span>
<span class="token comment">//   twitter: '@midudev',</span>
<span class="token comment">//   experience: { years: 19, focus: 'javascript' }</span>
<span class="token comment">// }</span></code></pre>

**¿Por qué es importante?**

En React es muy normal tener que añadir nuevos elementos a un array o crear nuevos objetos sin necesidad de mutarlos. El operador Rest nos puede ayudar a conseguir esto. Si no conoces bien el concepto de valor y referencia en JavaScript, sería conveniente que lo repases.

##### Operador Rest

La sintaxis `...` hace tiempo que funciona en JavaScript en los parámetros de una función. A esta técnica se le llamaba *parámetros rest* y nos permitía tener un número indefinido de argumentos en una función y poder acceder a ellos después como un array.

<pre><code class="language-js"><span class="token keyword">function</span> <span class="token function">suma</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>allArguments</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> allArguments<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">previous<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> previous <span class="token operator">+</span> current
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Ahora el operador rest también se puede utilizar para agrupar el resto de propiedades un objeto o iterable. Esto puede ser útil para extraer un elemento en concreto del objeto o el iterable y crear una copia superficial del resto en una nueva variable.

<pre><code class="language-js"><span class="token keyword">const</span> midu <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Miguel'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twitter</span><span class="token operator">:</span> <span class="token string">'@midudev'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">experience</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">years</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">'javascript'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>restOfMidu<span class="token punctuation">}</span> <span class="token operator">=</span> midu

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>restOfMidu<span class="token punctuation">)</span>
<span class="token comment">// -> {</span>
<span class="token comment">//   twitter: '@midudev',</span>
<span class="token comment">//   experience: {</span>
<span class="token comment">//     years: 18,</span>
<span class="token comment">//     focus: 'javascript'</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span></code></pre>

También podría funcionar con arrays:

<pre><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">[</span>firstNumber<span class="token punctuation">,</span> <span class="token operator">...</span>restOfNumbers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstNumber<span class="token punctuation">)</span> <span class="token comment">// -> 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>restOfNumbers<span class="token punctuation">)</span> <span class="token comment">// -> [2, 3]</span></code></pre>

**¿Por qué es importante?**

Es una forma interesante de *eliminar* (de forma figurada) una propiedad de un objeto y creando una copia superficial del resto de propiedades. A veces puede ser interesante para extraer la información que queremos de unos parámetros y dejar el resto en un objeto que pasaremos hacia otro nivel.

##### Encadenamiento opcional (Optional Chaining)

El operador de encadenamiento opcional `?.` te permite leer con seguridad el valor de una propiedad que está anidada dentro de diferentes niveles de un objeto.

De esta forma, en lugar de revisar si las propiedades existen para poder acceder a ellas, lo que hacemos es usar el encadenamiento opcional.

<pre><code class="language-js"><span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Miguel'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">libro</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Aprendiendo React'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">writeBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'Writing!'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// sin optional chaining</span>
<span class="token punctuation">(</span>author <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> author <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
    <span class="token operator">?</span> <span class="token keyword">undefined</span>
    <span class="token operator">:</span> <span class="token punctuation">(</span>author<span class="token punctuation">.</span>libro <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> author<span class="token punctuation">.</span>libro <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
    <span class="token operator">?</span> <span class="token keyword">undefined</span>
    <span class="token operator">:</span> author<span class="token punctuation">.</span>libro<span class="token punctuation">.</span>name 

<span class="token comment">// con optional chaining</span>
author<span class="token operator">?.</span>libro<span class="token operator">?.</span>name</code></pre>

**¿Por qué es importante?**

Un objeto es una estructura de datos que es perfecta a la hora de representar muchos elementos de la UI. ¿Tienes un artículo? Toda la información de un artículo seguramente la tendrás representada en un objeto.

Conforme tu UI sea más grande y compleja, estos objetos tendrán más información y necesitarás dominar el encadenamiento opcional `?.` para poder acceder a su información con garantías.



---

### Intermedio

#### ¿Cómo crear un hook personalizado (*custom hook*)?

Un hook personalizado es una función que empieza con la palabra `use` y que puede utilizar otros hooks. Son ideales para reutilizar lógica en diferentes componentes. Por ejemplo, podemos crear un hook personalizado para extraer la gestión del estado de un contador:

<pre><code class="language-js"><span class="token comment">// ./hooks/useCounter.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> increment<span class="token punctuation">,</span> decrement <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

Para usarlo en un componente:

<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./hooks/useCounter.js'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> increment<span class="token punctuation">,</span> decrement <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cuántos `useEffect` puede tener un componente?

Aunque normalmente los componentes de React solo cuentan con un `useEffect` lo cierto es que podemos tener tantos `useEffect` como queramos en un componente. Cada uno de ellos se ejecutará cuando se renderice el componente o cuando cambien las dependencias del efecto.



---

#### ¿Cómo podemos ejecutar código cuando el componente se desmonta del árbol?

Podemos ejecutar código cuando el componente se desmonta usando el hook `useEffect` y dentro devolver una función con el código que queremos ejecutar. En este caso, la función que se pasa como primer parámetro del `useEffect` se ejecutará cuando el componente se monte, y la función que es retornada se ejecutará cuando se desmonte.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'El componente se ha montado'</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'El componente se ha desmontado'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Ejemplo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Esto es muy útil para limpiar recursos que se hayan creado en el componente, como por ejemplo, eventos del navegador o para cancelar peticiones a APIs.



---

#### Cómo puedes cancelar una petición a una API en `useEffect` correctamente

Cuando hacemos una petición a una API, podemos cancelarla para evitar que se ejecute cuando el componente se desmonte usando `AbortController` como hacemos en este ejemplo:

<pre><code class="language-jsx"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Creamos el controlador para abortar la petición</span>
  <span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// Recuperamos la señal del controlador</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span> <span class="token operator">=</span> controller
  <span class="token comment">// Hacemos la petición a la API y le pasamos como options la señal</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts/1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">json</span> <span class="token operator">=></span> <span class="token function">setMessage</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// Si hemos cancelado la petición, la promesa se rechaza</span>
      <span class="token comment">// con un error de tipo AbortError</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Si se desmonta el componente, abortamos la petición</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>

Esto también funciona con `axios`:

<pre><code class="language-jsx"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Creamos el controlador para abortar la petición</span>
  <span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// Recuperamos la señal del controlador</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span> <span class="token operator">=</span> controller
  <span class="token comment">// Hacemos la petición a la API y le pasamos como options la señal</span>
  axios
    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts/1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token function">setMessage</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// Si hemos cancelado la petición, la promesa se rechaza</span>
      <span class="token comment">// con un error de tipo AbortError</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Si se desmonta el componente, abortamos la petición</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>



---

#### ¿Cuáles son las reglas de los hooks en React?

Los hooks en React tienen dos reglas fundamentales:

- Los hooks solo se pueden usar en componentes funcionales o *custom hooks*.
- Los hooks solo se pueden llamar en el nivel superior de un componente. No se pueden llamar dentro de bucles, condicionales o funciones anidadas.



---

#### ¿Qué diferencia hay entre `useEffect` y `useLayoutEffect`?

Aunque ambos son muy parecidos, tienen una pequeña diferencia en el momento en el que se ejecutan.

`useLayoutEffect` se ejecuta de forma síncrona inmediatamente después que React haya actualizado completamente el DOM tras el renderizado. Puede ser útil si necesitas recuperar un elemento del DOM y acceder a sus dimensiones o posición en pantalla.

`useEffect` se ejecuta de forma asíncrona tras el renderizado, pero no asegura que el DOM se haya actualizado. Es decir, si necesitas recuperar un elemento del DOM y acceder a sus dimensiones o posición en pantalla, no podrás hacerlo con `useEffect` porque no tienes la garantía de que el DOM se haya actualizado.

Normalmente, el 99% de las veces, vas a querer utilizar `useEffect` y, además, tiene mejor rendimiento, ya que no bloquea el renderizado.



---

#### ¿Qué son mejores los componentes de clase o los componentes funcionales?

Desde que en *React 16.8.0* se incluyeron los hooks, los componentes de funciones pueden hacer casi todo lo que los componentes de clase.

Aunque no hay una respuesta clara a esta pregunta, normalmente los componentes funcionales son más sencillos de leer y escribir y pueden tener un mejor rendimiento en general.

Además, **los hooks solo se pueden usar en los componentes funcionales**. Esto es importante, ya que con la creación de custom hooks podemos reutilizar la lógica y podría simplificar nuestros componentes.

Por otro lado, los componentes de clase nos permiten usar el ciclo de vida de los componentes, algo que no podemos hacer con los componentes funcionales donde solo podemos usar `useEffect`.

**Referencias:**

- [Tweet de midudev donde muestra que los componentes funcionales se transpilan mejor que los de clases.](https://twitter.com/midudev/status/1065516163856310272)



---

#### ¿Cómo mantener los componentes puros y qué ventajas tiene?

Los componentes puros son aquellos que no tienen estado y que no tienen efectos secundarios. Esto quiere decir que no tienen ningún tipo de lógica que no sea la de renderizar la interfaz.

Son más fáciles de testear y de mantener. Además, son más fáciles de entender porque no tienen lógica compleja.

Para crear un componente puro en React usamos una function:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, el componente `Button` recibe una prop `text` que es un string. El componente `Button` renderiza un botón con el texto que recibe en la prop `text`.



---

#### ¿Qué es la hidratación (hydration) en React?

Cuando renderizamos nuestra aplicación en el servidor, React genera un HTML estático. Este HTML estático es simplemente un string que contiene el HTML que se va a mostrar en la página.

Cuando el navegador recibe el HTML estático, lo renderiza en la página. Sin embargo, este HTML estático no tiene interactividad. No tiene eventos, no tiene lógica, no tiene estado, etc. Podríamos decir que *no tiene vida*.

Para hacer que este HTML estático pueda ser interactivo, React necesita que el HTML estático se convierta en un árbol de componentes de React. Esto se llama **hidratación**.

De esta forma, en el cliente, React reutiliza este HTML estático y se dedica a adjuntar los eventos a los elementos, ejecutar los efectos que tengamos en los componentes y conciliar el estado de los componentes.



---

#### ¿Qué es el Server Side Rendering y qué ventajas tiene?

El *Server Side Rendering* es una técnica que consiste en renderizar el HTML en el servidor y enviarlo al cliente. Esto nos permite que el usuario vea la interfaz de la aplicación antes de que se cargue el JavaScript.

Esta técnica nos permite mejorar la experiencia de usuario y mejorar el SEO de nuestra aplicación.



---

#### ¿Cómo puedes crear un Server Side Rendering con React desde cero?

Para crear un Server Side Rendering con React desde cero podemos usar el paquete `react-dom/server` que nos permite renderizar componentes de React en el servidor.

Veamos un ejemplo de cómo crear un Server Side Rendering con React desde cero con Express:

<pre><code class="language-jsx"><span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">'express'</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom/server'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hola mundo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>

Esto nos devolverá el HTML de la aplicación al acceder a la ruta `/`.

<pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">data-reactroot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hola mundo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>



---

#### ¿Puedes poner un ejemplo de efectos colaterales en React?

Igual que las funciones en JavaScript, los componentes de React también pueden tener *side effects* (efectos colaterales). Un efecto colateral significa que el componente manipula o lee información que no está dentro de su ámbito.

Aquí puedes ver un ejemplo simple de un componente que tiene un efecto colateral. Un componente que lee y modifica una variable que está fuera del componente. Esto hace que sea imposible saber qué renderizará el componente cada vez que se use, ya que no sabemos el valor que tendrá `count`:

<pre><code class="language-jsx"><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Counters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span></code></pre>



---

#### ¿Qué diferencia hay entre componentes controlados y no controlados? ¿Qué ventajas y desventajas tienen?

A la hora de trabajar con formularios en React, tenemos dos tipos de componentes: los componentes controlados y los componentes no controlados.

**Componentes controlados:**
son aquellos que tienen un estado que controla el valor del componente. Por lo tanto, el valor del componente se actualiza cuando el estado cambia.

La ventaja de este tipo de componentes es que son más fáciles de testear porque no dependen de la interfaz. También nos permiten crear validaciones muy fácilmente. La desventaja es que son más complejos de crear y mantener. Además, pueden tener un peor rendimiento, ya que provocan un re-renderizado cada vez que cambia el valor del input.

**Componentes no controlados:** son aquellos que no tienen un estado que controle el valor del componente. El estado del componente lo controla el navegador de forma interna. Para conocer el valor del componente, tenemos que leer el valor del DOM.

La ventaja de este tipo de componentes es que se crean de forma muy fácil y no tienes que mantener un estado. Además, el rendimiento es mejor, ya que no tiene que re-renderizarse al cambiar el valor del input. Lo malo es que hay que tratar más con el DOM directamente y crear código imperativo.

<pre><code class="language-js"><span class="token comment">// Controlado:</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// No controlado:</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> defaultValue<span class="token operator">=</span><span class="token string">"foo"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token comment">// Usamos `inputRef.current.value` para leer el valor del input</span></code></pre>



---

#### ¿Qué son los High Order Components (HOC)?

Los High Order Components son funciones que reciben un componente como parámetro y devuelven un componente.

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">withLayout</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

En este caso, la función `withLayout` recibe un componente como parámetro y devuelve un componente. El componente devuelto renderiza el componente que se le pasa como parámetro dentro de un layout.

Es un patrón que nos permite reutilizar código y así podemos inyectar funcionalidad, estilos o cualquier otra cosa a un componente de forma sencilla.

Con la llegada de los hooks, los HOCs se han vuelto menos populares, pero todavía se usan en algunos casos.



---

#### ¿Qué son las render props?

Son un patrón de diseño de React que nos permite reutilizar código entre componentes e inyectar información en el renderizado de los componentes.

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DataProvider</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>target<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span></code></pre>

En este caso, el componente `DataProvider` recibe una función `render` como prop. Ahí le indicamos qué es lo que debe renderizar usando la información que recibe como parámetro.

La implementación del `DataProvider` con funciones podría ser la siguiente:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">DataProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> render <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'world'</span> <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">render</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

También se puede encontrar este patrón usando la prop `children` en los componentes.

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DataProvider</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>target<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DataProvider</span></span><span class="token punctuation">></span></span></code></pre>

Y la implementación sería similar:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">DataProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'world'</span> <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">children</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Este patrón es usado por grandes bibliotecas como `react-router`, `formik` o `react-motion`.



---

#### ¿Por qué no podemos usar un `if` en el renderizado de un componente?

En React, no podemos usar un `if` en el renderizado de un componente porque no es una expresión válida de JavaScript, es una declaración. Las expresiones son aquellas que devuelven un valor y las declaraciones no devuelven ningún valor.

En JSX solo podemos usar expresiones, por eso usamos ternarias, que sí son expresiones.

<pre><code class="language-jsx"><span class="token comment">// ❌ Esto no funciona</span>
<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token keyword">if</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> text <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">'Click'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// ✅ Esto funciona</span>
<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text <span class="token operator">?</span> text <span class="token operator">:</span> <span class="token string">'Click'</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

De la misma forma, tampoco podemos usar `for`, `while` o `switch` dentro del renderizado de un componente.



---

#### ¿Por qué debemos utilizar una función para actualizar el estado de React?

A la hora de actualizar el estado de React, debemos utilizar la función que nos facilita el hook `useState` para actualizar el estado.

<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>

¿Por qué es esto necesario? En primer lugar, el estado en React debe ser inmutable. Es decir, no podemos modificar el estado directamente, sino que debemos siempre crear un nuevo valor para el nuevo estado.

Esto nos permite que la integridad de la UI respecto a los datos que renderiza siempre es correcta.

Por otro lado, llamar a una función le permite a React saber que el estado ha cambiado y que debe re-renderizar el componente si es necesario. Además esto lo hace de forma asíncrona, por lo que podemos llamar a `setCount` tantas veces como queramos y React se encargará de actualizar el estado cuando lo considere oportuno.



---

#### ¿Qué es el ciclo de vida de un componente en React?

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



---

#### ¿Por qué puede ser mala práctica usar el `index` como key en un listado de React?

Cuando renderizamos una lista de elementos, React necesita saber qué elementos han cambiado, han sido añadidos o eliminados.

Para ello, React necesita una key única para cada elemento de la lista. Si no le pasamos una key, React usa el índice del elemento como key.

<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'Item 3'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, React usa el índice del elemento como `key`. Esto puede ser un problema si la lista se reordena o se eliminan elementos del array, ya que el índice de los elementos cambia.

En este caso, React no sabe qué elementos han cambiado y puede que se produzcan errores.

Un ejemplo donde se ve el problema:

<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'Item 3'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRemove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span>
    newItems<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span>newItems<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleRemove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Eliminar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Para qué sirve el hook `useMemo`?

El hook `useMemo` es un hook que nos permite memorizar el resultado de una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Doble: </span><span class="token punctuation">{</span>double<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, el componente `Counter` recibe una prop `count` que es un número. El componente calcula el doble de ese número y lo muestra en pantalla.

El hook `useMemo` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop `count`.

La ventaja es que si la prop `count` no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.



---

#### ¿Es buena idea usar siempre `useMemo` para optimizar nuestros componentes?

No. `useMemo` es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces el cálculo de un valor es tan rápido que no merece la pena memorizarlo. Incluso, en algunos casos, puede ser más lento memorizarlo que calcularlo de nuevo.



---

#### ¿Para qué sirve el hook `useCallback`?

El hook `useCallback` es un hook que nos permite memorizar una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count<span class="token punctuation">,</span> onIncrement <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handleIncrement <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">onIncrement</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> onIncrement<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleIncrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Incrementar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, el componente `Counter` recibe una prop `count` que es un número y una prop `onIncrement` que es una función que se ejecuta cuando se pulsa el botón.

El hook `useCallback` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop `count` o la prop `onIncrement`.

La ventaja es que si la prop `count` o la prop `onIncrement` no cambian, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.



---

#### ¿Es buena idea usar siempre `useCallback` para optimizar nuestros componentes?

No. `useCallback` es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces la creación de una función es tan rápida que no merece la pena memorizarla. Incluso, en algunos casos, puede ser más lento memorizarla que crearla de nuevo.



---

#### ¿Cuál es la diferencia entre `useCallback` y `useMemo`?

La diferencia entre `useCallback` y `useMemo` es que `useCallback` memoriza una función y `useMemo` memoriza el resultado de una función.

En cualquier caso, en realidad, `useCallback` es una versión especializada de `useMemo`. De hecho se puede simular la funcionalidad de `useCallback` con `useMemo`:

<pre><code class="language-js"><span class="token keyword">const</span> memoizedCallback <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>



---

#### ¿Qué son las refs en React?

Las refs nos permiten crear una referencia a un elemento del DOM o a un valor que se mantendrá entre renderizados. Se pueden declarar por medio del comando `createRef` o con el hook `useRef`.



---

#### ¿Cómo funciona el hook `useRef`?

En el siguiente ejemplo vamos a guardar la referencia en el DOM a un elemento `<input>` y vamos a cambiar el foco a ese elemento cuando hacemos clic en el botón.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">TextInputWithFocusButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputEl <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// `current` apunta al elemento inputEl montado</span>
    inputEl<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputEl<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onButtonClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Focus the input</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Creamos una referencia `inputEl` con `useRef` y la pasamos al elemento `<input>` como prop `ref`. Cuando el componente se monta, la referencia `inputEl` apunta al elemento `<input>` del DOM.

Para acceder al elemento del DOM, usamos la propiedad `current` de la referencia.



---

#### ¿Qué hace el hook `useLayoutEffect`?

`useLayoutEffect` funciona igual que el hook `useEffect`, con la excepción de que este se dispara sincrónicamente después de leer todas las mutaciones del DOM.

Llama `useLayoutEffect` en el nivel superior del componente.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLayoutEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

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



---

#### ¿Qué son los componentes *stateless*?

Los componentes *stateless* son componentes que no tienen estado. Estos componentes se crean con una `function` y no tienen acceso al estado de la aplicación. La ventaja que tienen estos componentes es que hace que sea más fácil crear componentes puros (que siempre renderizan lo mismo para unas mismas props).

<pre><code class="language-jsx"><span class="token comment">// Este es un ejemplo de componente stateless</span>
<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?

Para prevenir el comportamiento por defecto de un evento en React, debemos usar el método `preventDefault`:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Form</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onSubmit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Enviar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué es el `StrictMode` en React?

El `StrictMode` es un componente que nos permite activar algunas comprobaciones de desarrollo en React. Por ejemplo, detecta componentes que se renderizan de forma innecesaria o funcionalidades obsoletas que se están usando.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StrictMode</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Por qué es recomendable exportar los componentes de React de forma nombrada?

Los componentes de React se pueden exportar de dos formas:

- Exportación por defecto
- Exportación nombrada

Para exportar un componente por defecto, usamos la palabra reservada `default`:

<pre><code class="language-jsx"><span class="token comment">// button.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// App.jsx</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'./button.jsx'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span></code></pre>

La gran desventaja que tiene la exportación por defecto es que a la hora de importarlo puedes usar el nombre que quieras. Y esto trae problemas, ya que puedes no usar siempre el mismo en el proyecto o usar un nombre que no sea correcto con lo que importas.

<pre><code class="language-jsx"><span class="token comment">// button.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// App.jsx</span>
<span class="token keyword">import</span> MyButton <span class="token keyword">from</span> <span class="token string">'./button.jsx'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyButton</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// Otro.jsx</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'./button.jsx'</span>

<span class="token keyword">function</span> <span class="token function">Otro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span></code></pre>

Los exports nombrados nos obligan a usar el mismo nombre en todos los archivos y, por tanto, nos aseguramos de que siempre estamos usando el nombre correcto.

<pre><code class="language-jsx"><span class="token comment">// button.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// App.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./button.jsx'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo puedes exportar múltiples componentes de un mismo archivo?

Para exportar múltiples componentes de un mismo archivo, podemos usar la exportación nombrada:

<pre><code class="language-jsx"><span class="token comment">// button.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ButtonSecondary</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo puedo importar de forma dinámica un componente en React?

Para importar de forma dinámica un componente en React debemos usar la función `import()`, el método `lazy()` de React y el componente `Suspense`.

<pre><code class="language-jsx"><span class="token comment">// App.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./button.jsx'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Cargando botón...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// button.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">Botón cargado dinámicamente</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Vamos a ver en detalle cada uno de los elementos que hemos usado:

La función `import()` es parte del estándar de ECMAScript y nos permite importar de forma dinámica un módulo. Esta función devuelve una promesa que se resuelve con el módulo importado.

El método `lazy()` de React nos permite crear un componente que se renderiza de forma diferida. Este método recibe una función que debe devolver una promesa que se resuelve con un componente. En este caso, se resolverá con el componente que tenemos en el fichero `button.jsx`. Ten en cuenta que el componente que devuelve `lazy()` **debe ser un componente de React y ser exportado por defecto** (`export default`).

El componente `Suspense` nos permite mostrar un mensaje mientras se está cargando el componente. Este componente recibe una prop `fallback` que es el mensaje que se muestra mientras se está cargando el componente.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-n6zal2?file=App.tsx)



---

#### ¿Cuando y por qué es recomendable importar componentes de forma dinámica?

En React, nuestras aplicaciones están creadas a partir de componentes. Estos componentes se pueden importar de forma **estática o dinámica**.

La importación de componentes de forma estática es la forma más común de importar componentes en React. En este caso, los componentes se importan en la parte superior del fichero y se renderizan en el código. El problema es que, si siempre lo hacemos así, es bastante probable que estemos cargando componentes que no se van a usar desde el principio.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// importamos de forma estática el componente de la Modal</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SuperBigModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./super-big-modal.jsx'</span>

<span class="token comment">// mostrar modal si el usuario da click en un botón</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showModal<span class="token punctuation">,</span> setShowModal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowModal</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Mostrar modal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>showModal <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SuperBigModal</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Este componente `SuperBigModal` se importa de forma estática, por lo que se carga desde el principio. Pero, ¿qué pasa si el usuario no da click en el botón para mostrar la modal? En este caso, está cargando el componente pese a que no lo está usando.

Si queremos ofrecer la mejor experiencia a nuestros usuarios, debemos intentar que la aplicación cargue lo más rápido posible. Por eso, es recomendable importar de forma dinámica los componentes que no se van a usar desde el principio.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// importamos de forma dinámica el componente de la Modal</span>
<span class="token keyword">const</span> SuperBigModal <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./super-big-modal.jsx'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// mostrar modal si el usuario da click en un botón</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showModal<span class="token punctuation">,</span> setShowModal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowModal</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Mostrar modal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Cargando modal...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>showModal <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SuperBigModal</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

De esta forma, la parte de código que importa el componente `SuperBigModal` se carga de forma dinámica, es decir, cuando el usuario da click en el botón para mostrar la modal.

Dependiendo del empaquetador de aplicaciones web que uses y su configuración, es posible que el resultado de la carga sea diferente (algunos creará un archivo a parte del *bundle* principal, otros podrían hacer un streaming del HTML...) pero la intención del código es la misma.

Así que siempre debemos intentar cargar los componentes de forma dinámica cuando no se vayan a usar desde el principio, sobretodo cuando están detrás de la interacción de un usuario. Lo mismo podría ocurrir con rutas completas de nuestra aplicación. ¿Por qué cargar la página de *About* si el usuario está visitando la página principal?



---

#### ¿Sólo se pueden cargar componentes de forma dinámica si se exportan por defecto?

No, no es necesario que los componentes se exporten por defecto para poder cargarlos de forma dinámica. Podemos exportarlos de forma nombrada y cargarlos de forma dinámica... pero no es lo más recomendable ya que el código necesario es mucho más lioso.

<pre><code class="language-jsx"><span class="token comment">// button.jsx</span>
<span class="token comment">// exportamos el componente Button de forma nombrada</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">Botón cargado dinámicamente</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// app.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// Al hacer el import dinámico, debemos especificar el nombre del componente que queremos importar</span>
<span class="token comment">// y hacer que devuelva un objeto donde la key default pasar a ser el componente nombrado</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./button.jsx'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>Button<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> Button <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Cargando botón...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Otra opción es tener un fichero intermedio que exporte el componente de forma por defecto y que sea el que importemos de forma dinámica.

<pre><code class="language-jsx"><span class="token comment">// button-component.jsx</span>
<span class="token comment">// exportamos el componente Button de forma nombrada</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">Botón cargado dinámicamente</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// button.jsx</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Button <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./button-component.jsx'</span>

<span class="token comment">// app.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./button.jsx'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Cargando botón...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué es el contexto en React? ¿Cómo puedo crearlo y consumirlo?

El contexto es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

Para crear un contexto en React usamos el hook `createContext`:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>

Para usar el contexto, debemos envolver el árbol de componentes con el componente `Provider`:

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeContext.Provider</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeContext.Provider</span></span><span class="token punctuation">></span></span></code></pre>

Para consumir el contexto, debemos usar el hook `useContext`:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Haz clic aquí</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué es el `SyntheticEvent` en React?

El `SyntheticEvent` es una abstracción del evento nativo del navegador. Esto le permite a React tener un comportamiento consistente en todos los navegadores.

Dentro del `SyntheticEvent` puede encontrarse una referencia al evento nativo en su atributo `nativeEvent`

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Haz clic aquí</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Qué es `flushSync` en React?

`flushSync(callback)` Obliga a React a ejecutar de manera síncrona todas las actualizaciones de los state dentro del callback proporcionado. Así se asegura que el DOM se actualiza inmediatamente.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> flushSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// component no hace re-render 🚫</span>
    <span class="token function">flushSync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token comment">// component re-renderiza aquí 🔄</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// component ha sido re-renderizado y el DOM ha sido actualizado ✅</span>
    <span class="token function">flushSync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span>
      <span class="token comment">// component no hace re-render 🚫</span>
      <span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">"john@doe.com"</span><span class="token punctuation">)</span>
      <span class="token comment">// component re-renderiza aquí 🔄</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// component ha sido re-renderizado y el DOM ha sido actualizado ✅</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Haz clic aquí</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

NOTA: `flushSync` puede afectar significativamente el rendimiento. Úsalo con moderación.



---

#### ¿Qué son los Error Boundaries en React?

Los Error Boundaries son componentes que nos permiten manejar los errores que se producen en el árbol de componentes. Para crear un Error Boundary, debemos crear un componente que implemente el método `componentDidCatch`:

<pre><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Algo ha ido mal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

De esta forma podemos capturar los errores que se producen en el árbol de componentes y mostrar un mensaje de error personalizado mientras evitamos que nuestra aplicación se rompa completamente.

Ahora podemos envolver el árbol de componentes con el componente `ErrorBoundary`:

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span></code></pre>

Podemos crear un Error Boundary en cualquier nivel del árbol de componentes, de esta forma podemos tener un control más granular de los errores.

<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SpecificComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span></code></pre>

Por ahora no existe una forma nativa de crear un Error Boundary en una función de React. Para crear un Error Boundary en una función, puedes usar la librería [react-error-boundary](https://github.com/bvaughn/react-error-boundary).



---

#### ¿Qué son las Forward Refs?

El reenvío de referencia o *Forward Refs* es una técnica que nos permite acceder a una referencia de un componente hijo desde un componente padre.

<pre><code class="language-jsx"><span class="token comment">// Button.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> forwardRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border border-sky-500 bg-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Parent.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> <span class="token function-variable function">Parent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// Desde el padre podemos hacer focus</span>
    <span class="token comment">// al botón que tenemos en el hijo</span>
    ref<span class="token punctuation">.</span>current<span class="token operator">?.</span>focus<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>ref<span class="token punctuation">.</span>current<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">My button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este ejemplo, recuperamos la referencia del botón (elemento HTML `<button>`) y la recupera el componente padre (`Parent`), para poder hacer focus en él gracias al uso de `forwardRef` en el componente hijo (`Button`).

Para la gran mayoría de componentes esto no es necesario pero puede ser útil para sistemas de diseño o componentes de terceros reutilizables.



---

#### ¿Cómo puedo validar el tipo de mis props?

React proporciona una forma de validar el tipo de las props de un componente en tiempo de ejecución y en modo desarrollo. Esto es útil para asegurarnos de que los componentes se están utilizando correctamente.

El paquete se llama `prop-types` y se puede instalar con `npm install prop-types`.

<pre><code class="language-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

App<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span></code></pre>

En este ejemplo, estamos validando que la prop `title` sea de tipo `string` y que sea obligatoria.

Existen una colección de *PropTypes* ya definidas para ayudarte a comprobar los tipos de las props más comunes:

<pre><code class="language-js">PropTypes<span class="token punctuation">.</span>number <span class="token comment">// número</span>
PropTypes<span class="token punctuation">.</span>string <span class="token comment">// string</span>
PropTypes<span class="token punctuation">.</span>array <span class="token comment">// array</span>
PropTypes<span class="token punctuation">.</span>object <span class="token comment">// objeto</span>
PropTypes<span class="token punctuation">.</span>bool <span class="token comment">// un booleano</span>
PropTypes<span class="token punctuation">.</span>func <span class="token comment">// función</span>
PropTypes<span class="token punctuation">.</span>node <span class="token comment">// cualquier cosa renderizable en React, como un número, string, elemento, array, etc.</span>
PropTypes<span class="token punctuation">.</span>element <span class="token comment">// un elemento React</span>
PropTypes<span class="token punctuation">.</span>symbol <span class="token comment">// un Symbol de JavaScript</span>
PropTypes<span class="token punctuation">.</span>any <span class="token comment">// cualquier tipo de dato</span></code></pre>

A todas estas se le puede añadir la propiedad `isRequired` para indicar que es obligatoria.

> Otra opción es usar TypeScript, un lenguaje de programación que compila a JavaScript y que ofrece validación de tipos de forma estática. Ten en cuenta que mientras que TypeScript comprueba los tipos en tiempo de compilación, las PropTypes lo hacen en tiempo de ejecución.



---

#### ¿Cómo puedo validar las propiedades de un objeto con PropTypes?

Para validar las propiedades de un objeto que se pasa como prop, podemos usar la propiedad `shape` de `PropTypes`:

<pre><code class="language-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> text<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> title
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

App<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo puedo validar las propiedades de un array con PropTypes?

Para validar las propiedades de un array que se pasa como prop, podemos usar la propiedad `arrayOf` de `PropTypes`:

<pre><code class="language-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

App<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>
    PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span></code></pre>

En este caso estamos validando que `items` sea un array y que cada uno de sus elementos sea un objeto con la propiedad `text` de tipo `string`. Además, la prop es obligatoria.



---

#### ¿Cómo puedo inyectar HTML directamente en un componente de React?

Una de las razones por las que se creó React es para evitar los ataques XSS (*Cross-Site Scripting*), impidiendo que un usuario pueda inyectar código HTML en la página.

Por ello, React al intentar evaluar un string que contiene HTML lo escapa automáticamente. Por ejemplo, si intentamos renderizar el siguiente string:

<pre><code class="language-jsx"><span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">"&lt;h1>My title&lt;/h1>"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>html<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Veremos que en lugar de renderizar el HTML, lo escapa:

<pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>h1<span class="token entity named-entity" title="&gt;">&amp;gt;</span>My title<span class="token entity named-entity" title="&lt;">&amp;lt;</span>/h1<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>

Sin embargo, hay ocasiones en las que es necesario inyectar HTML directamente en un componente. Ya sea por traducciones que tenemos, porque viene el HTML desde el servidor y ya viene saneado, o por un componente de terceros.

Para ello, podemos usar la propiedad `dangerouslySetInnerHTML`:

<pre><code class="language-jsx"><span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">"&lt;h1>My title&lt;/h1>"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">__html</span><span class="token operator">:</span> html <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span></code></pre>

Ahora sí veremos el HTML renderizado:

<pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>My title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>

Como ves, **el nombre ya nos indica que es una propiedad peligrosa y que debemos usarla con cuidado.** Intenta evitarla siempre que puedas y sólo recurre a ella cuando realmente no tengas otra opción.



---

#### ¿Por qué puede ser mala idea pasar siempre todas las props de un objeto a un componente?

Digamos que tenemos un componente `App` que recibe un objeto `props` con todas las props que necesita:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Y que tenemos otro componente `Layout` que recibe un objeto `props` con todas las props que necesita:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este caso, `Layout` está pasando todas las props que recibe a `App`. Esto puede ser una mala idea por varias razones:

- Si `Layout` recibe una prop que no necesita, la pasará a `App` y éste puede que no la use. Esto puede ser confuso para el que lea el código.



---

#### ¿Cuál es el propósito del atributo "key" en React y por qué es importante usarlo correctamente al renderizar listas de elementos?

El propósito del atributo "key" en React es proporcionar una identificación única a cada elemento en una lista renderizada dinámicamente. Esto permite a React identificar qué elementos han cambiado, añadido o eliminado de la lista cuando se realiza una actualización. 

Cuando se renderiza una lista en React sin el atributo "key", React puede tener dificultades para identificar correctamente los cambios en la lista, lo que puede resultar en un comportamiento inesperado, como la re-renderización innecesaria de elementos o la pérdida de estado de los componentes.

Por lo tanto, es importante utilizar el atributo "key" de manera correcta y única para cada elemento de la lista, preferiblemente utilizando identificadores únicos de cada elemento en lugar de índices de array, para garantizar un rendimiento óptimo y un comportamiento predecible en la aplicación.

Ejemplo de cómo utilizar el atributo "key" en React:

<pre><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ListaItems</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>nombre<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ListaItems<span class="token punctuation">;</span></code></pre>

---



### Experto

#### ¿Es React una biblioteca o un framework? ¿Por qué?

Existe una fina línea hoy en día entre qué es una biblioteca o un framework. Oficialmente, React se autodenomina como biblioteca. Esto es porque para poder crear una aplicación completa, necesitas usar otras bibliotecas.

Por ejemplo, *React* no ofrece un sistema de enrutado de aplicaciones oficial. Por ello, hay que usar una biblioteca como [React Router](https://reactrouter.com/) o usar un *framework* como [Next.js](https://nextjs.org/) que ya incluye un sistema de enrutado.

Tampoco puedes usar React para añadir las cabeceras que van en el `<head>` en tu aplicación, y también necesitarás otra biblioteca o framework para solucionar esto.

Otra diferencia es que React no está opinionado sobre qué empaquetador de aplicaciones usar. En cambio `Angular` en su propio tutorial ya te indica que debes usar `@angular/cli` para crear una aplicación, en cambio React siempre te deja la libertad de elegir qué empaquetador usar y ofrece diferentes opciones.

Aún así, existe gente que considera a React como un framework. Aunque no hay una definición oficial de qué es un framework, la mayoría de la gente considera que un framework es una biblioteca que incluye otras bibliotecas para crear una aplicación completa de forma opinionada y casi sin configuración.

Por ejemplo, **Next.js se podría considerar un framework de React** porque incluye React, un sistema de enrutado, un sistema de renderizado del lado del servidor, etc.



---

#### ¿Para qué sirve el hook `useImperativeHandle`?

Nos permite definir qué propiedades y métodos queremos que sean accesibles desde el componente padre.

En el siguiente ejemplo vamos a crear un componente `TextInput` que tiene un método `focus` que cambia el foco al elemento `<input>`.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useImperativeHandle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">TextInput</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputEl <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">focus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      inputEl<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputEl<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Creamos una referencia `inputEl` con `useRef` y la pasamos al elemento `<input>` como prop `ref`. Cuando el componente se monta, la referencia `inputEl` apunta al elemento `<input>` del DOM.

Para acceder al elemento del DOM, usamos la propiedad `current` de la referencia.

Para que el componente padre pueda acceder al método `focus`, usamos el hook `useImperativeHandle`. Este hook recibe dos parámetros: una referencia y una función que devuelve un objeto con las propiedades y métodos que queremos que sean accesibles desde el componente padre.



---

#### ¿Para qué sirve el método `cloneElement` de React?

Te permite clonar un elemento React y añadirle o modificar las props que recibe.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> cloneElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> <span class="token function-variable function">Hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Hello</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>midudev<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'TMChein'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Madeval'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Gorusuke'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

En este ejemplo, clonamos `element` que tenía la prop `midudev` y le pasamos una prop `name` diferente cada vez. Esto renderizará tres veces el componente `Hello` con los nombres `TMChein`, `Madeval` y `Gorusuke`. Sin rastro de la prop original.

Puede ser útil para modificar un elemento que ya nos viene de un componente padre y del que no tenemos posibilidad de re-crear con el componente.

- [Código de ejemplo](https://stackblitz.com/edit/react-ts-tc39vr?file=App.tsx)



---

#### ¿Qué son los portales en React?

Los portales nos permiten renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.

Es perfecto para ciertos casos de uso como, por ejemplo, modales:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span>

<span class="token keyword">function</span> <span class="token function">Modal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createPortal</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Modal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'modal'</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

`createPortal` acepta dos parámetros:

- El primer parámetro es el componente que queremos renderizar
- El segundo parámetro es el nodo del DOM donde queremos renderizar el componente

En este caso el modal se renderiza en el nodo `#modal` del DOM.



---

#### ¿Por qué `StrictMode` renderiza dos veces la aplicación?

Cuando el modo `StrictMode` está activado, React monta los componentes dos veces (el estado y el DOM se preserva). Esto ayuda a encontrar efectos que necesitan una limpieza o expone problemas con *race conditions*.



---

#### ¿Qué problemas crees que pueden aparecer en una aplicación al querer visualizar listas de miles/millones de datos?

- **Tiempo de respuesta del servidor:** Hacer peticiones de millones de datos no es, en general, una buena estrategia. Incluso en el mejor de los casos, en el que el servidor solo debe devolver los datos sin tratarlos, hay un coste asociado al *parseo* y *envío* de los mismos a través de la red. Llamadas con un tamaño desmesurado pueden incurrir en interfaces lentas, e incluso en *timeouts* en la respuesta.
- **Problemas de rendimiento:** Aunque es cierto que **React** se basa en un modelo *declarativo* en el cual no debemos tener una exhaustivo control o gestión de cómo se *renderiza*, no hay que olvidar que malas decisiones técnicas pueden conllevar aplicaciones totalmente inestables incluso con las mejores tecnologías. No es viable *renderizar* un *DOM* con millones de elementos, el *navegador* no podrá gestionarlo y, tarde o temprano, la aplicación no será usable.

 Como developers, nuestra misión es encontrar el equilibrio entre rendimiento y experiencia, intentando priorizar siempre cómo el usuario sentirá la aplicación. No hay ningún caso lo suficientemente justificado para *renderizar* en pantalla miles de datos.

 **El espacio de visualización es limitado (*viewport*), al igual que deberían serlo los datos que añadimos al DOM.**



---

#### ¿Cómo puedes abortar una petición fetch con `useEffect` en React?

Si quieres evitar que exista una *race condition* entre una petición asíncrona y que el componente se desmonte, puedes usar la API de `AbortController` para abortar la petición cuando lo necesites:

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Movies</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>movies<span class="token punctuation">,</span> setMovies<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// creamos un controlador para abortar la petición</span>
    <span class="token keyword">const</span> abortController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// pasamos el signal al fetch para que sepa que debe abortar</span>
    <span class="token function">fetchMovies</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setMovies</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>results<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetch aborted'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// al desmontar el componente, abortamos la petición</span>
      <span class="token comment">// sólo funcionará si la petición sigue en curso</span>
      abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Debemos pasarle el parámetro signal al `fetch`</span>
<span class="token comment">// para que enlace la petición con el controlador</span>
<span class="token keyword">const</span> <span class="token function-variable function">fetchMovies</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> signal <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.themoviedb.org/3/movie/popular'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    signal <span class="token comment">// &lt;--- pasamos el signal</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

De esta forma evitamos que se produzca un error por parte de React de intentar actualizar el estado de un componente que ya no existe, además de evitar que se produzcan llamadas innecesarias al servidor.



---

#### ¿Qué solución/es implementarías para evitar problemas de rendimiento al trabajar con listas de miles/millones de datos?

##### Pagination

En lugar de recibir la lista en una sola llamada a la API (lo cual sería negativo tanto para el rendimiento como para el propio servidor y tiempo de respuesta de la API), podríamos implementar un sistema de paginación en el cual la API recibirá un *offset* o *rango* de datos deseados. En el FE nuestra responsabilidad es mostrar unos controles adecuados (interfaz de paginación) y gestionar las llamadas a petición de cambio de página para siempre limitar la cantidad de DOM renderizado evitando así una sobrecarga del *DOM* y, por lo tanto, problemas de rendimiento.

##### Virtualization

Existe una técnica llamada *Virtualización* que gestiona cuántos elementos de una lista mantenemos ***vivos*** en el *DOM*. El concepto se basa en solo montar los elementos que estén dentro del *viewport* más un *buffer* determinado (para evitar falta de datos al hacer scroll) y, en cambio, desmontar del *DOM* todos aquellos elementos que estén fuera de la vista del usuario. De este modo podremos obtener lo mejor de los dos mundos, una experiencia integrada y un DOM liviano que evitará posibles errores de rendimiento. Con esta solución también podremos aprovechar que contamos con los datos en memoria para realizar búsquedas/filtrados sin necesidad de más llamadas al servidor.

Puedes consultar esta librería para aplicar Virtualización con React: [React Virtualized](https://github.com/bvaughn/react-virtualized).

Hay que tener en cuenta que cada caso de uso puede encontrar beneficios y/o perjuicios en ambos métodos, dependiendo de factores como capacidad de respuesta de la API, cantidad de datos, necesidad de filtros complejos, etc. Por ello es importante analizar cada caso con criterio.



---

#### ¿Qué es el hook `useDebugValue`?

Nos permite mostrar un valor personalizado en la pestaña de *React DevTools* que nos permitirá depurar nuestro código.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDebugValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">useCustomHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token string">'custom value'</span>
  <span class="token function">useDebugValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span></code></pre>

En este ejemplo, el valor personalizado que se muestra en la pestaña de *React DevTools* es `custom value`.

Aunque es útil para depurar, no se recomienda usar este hook en producción.



---

#### ¿Qué es el `Profiler` en React?

El `Profiler` es un componente que nos permite medir el tiempo que tarda en renderizarse un componente y sus hijos.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Profiler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Profiler</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span> <span class="token attr-name">onRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> phase<span class="token punctuation">,</span> actualDuration</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>id<span class="token punctuation">,</span> phase<span class="token punctuation">,</span> actualDuration<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Profiler</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

El componente `Profiler` recibe dos parámetros:

- `id`: es un identificador único para el componente
- `onRender`: es una función que se ejecuta cada vez que el componente se renderiza

Esta información es muy útil para detectar componentes que toman mucho tiempo en renderizarse y optimizarlos.



---

#### ¿Cómo puedes acceder al evento nativo del navegador en React?

React no expone el evento nativo del navegador. En su lugar, React crea un objeto sintético que se basa en el evento nativo del navegador llamado `SyntheticEvent`. Para acceder al evento nativo del navegador, debemos usar el atributo `nativeEvent`:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">onClick</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Haz clic aquí</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo puedes registrar un evento en la fase de captura en React?

En React, los eventos se registran en la fase de burbuja por defecto. Para registrar un evento en la fase de captura, debemos añadir `Capture` al nombre del evento:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClickCapture</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Haz clic aquí</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Cómo puedes mejorar el rendimiento del Server Side Rendering en React para evitar que bloquee el hilo principal?

Aunque puedes usar el método `renderToString` para renderizar el HTML en el servidor, este método es síncrono y bloquea el hilo principal. Para evitar que bloquee el hilo principal, debemos usar el método `renderToPipeableStream`:

<pre><code class="language-jsx"><span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">const</span> stream <span class="token operator">=</span> <span class="token function">renderToPipeableStream</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token function">onShellReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// El contenido por encima de los límites de Suspense ya están listos</span>
      <span class="token comment">// Si hay un error antes de empezar a hacer stream, mostramos el error adecuado</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> didError <span class="token operator">?</span> <span class="token number">500</span> <span class="token operator">:</span> <span class="token number">200</span>
      res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span> <span class="token string">'text/html'</span><span class="token punctuation">)</span>
      stream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onShellError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Si algo ha ido mal al renderizar el contenido anterior a los límites de Suspense, lo indicamos.</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">500</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>
        <span class="token string">'&lt;!doctype html>&lt;p>Loading...&lt;/p>&lt;script src="clientrender.js">&lt;/script>'</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onAllReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Si no quieres hacer streaming de los datos, puedes usar</span>
      <span class="token comment">// esto en lugar de onShellReady. Esto se ejecuta cuando</span>
      <span class="token comment">// todo el HTML está listo para ser enviado.</span>
      <span class="token comment">// Perfecto para crawlers o generación de sitios estáticos</span>

      <span class="token comment">// res.statusCode = didError ? 500 : 200</span>
      <span class="token comment">// res.setHeader('Content-type', 'text/html')</span>
      <span class="token comment">// stream.pipe(res)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      didError <span class="token operator">=</span> <span class="token boolean">true</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span></code></pre>



---

#### ¿Qué diferencia hay entre `renderToStaticNodeStream()` y `renderToPipeableStream()`?

`renderToStaticNodeStream()` devuelve un stream de nodos estáticos, esto significa que no añade atributos extras para el DOM que React usa internamente para poder lograr la hidratación del HTML en el cliente. Esto significa que no podrás hacer el HTML interactivo en el cliente, pero puede ser útil para páginas totalmente estáticas.

`renderToPipeableStream()` devuelve un stream de nodos que contienen atributos del DOM extra para que React pueda hidratar el HTML en el cliente. Esto significa que podrás hacer el HTML interactivo en el cliente pero puede ser más lento que `renderToStaticNodeStream()`.



---

#### ¿Para qué sirve el hook `useDeferredValue`?

El hook `useDeferredValue` nos permite renderizar un valor con una prioridad baja. Esto es útil para renderizar un valor que no es crítico para la interacción del usuario.

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'¡Hola mundo!'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> deferredText <span class="token operator">=</span> <span class="token function">useDeferredValue</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">timeoutMs</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>App<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* Seguimos pasando el texto actual como valor del input */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      ...
      </span><span class="token punctuation">{</span><span class="token comment">/* Pero la lista de resultados se podría renderizar más tarde si fuera necesario */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MySlowList</span></span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deferredText<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

#### ¿Para qué sirve el método `renderToReadableStream()`?

Este método es similar a `renderToNodeStream`, pero está pensado para entornos que soporten Web Streams como `Deno`.

Un ejemplo de uso sería el siguiente:

<pre><code class="language-jsx"><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span> <span class="token operator">=</span> controller

<span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stream <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">renderToReadableStream</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">Success</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      signal<span class="token punctuation">,</span>
      <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token comment">// Si quieres enviar todo el HTML en vez de hacer streaming, puedes usar esta línea</span>
  <span class="token comment">// Es útil para crawlers o generación estática:</span>
  <span class="token comment">// await stream.allReady</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>stream<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> didError <span class="token operator">?</span> <span class="token number">500</span> <span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
    <span class="token string">'&lt;!doctype html>&lt;p>Loading...&lt;/p>&lt;script src="clientrender.js">&lt;/script>'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>



---

### ¿Cómo puedo hacer testing de un componente?

Para hacer testing de un componente, puedes usar la función `render` de la librería `@testing-library/react`. Esta función nos permite renderizar un componente y obtener el resultado.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Increment</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'Counter'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span>

  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Count: 0'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Increment'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Count: 1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>



---

### ¿Cómo puedo hacer testing de un hook?

Para hacer testing de un hook, puedes usar la función `renderHook` de la librería `@testing-library/react-hooks`. Esta función nos permite renderizar un hook y obtener el resultado.

<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> renderHook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react-hooks'</span>

<span class="token keyword">function</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> increment <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'useCounter'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderHook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>current<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token function">act</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>current<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>



---

#### ¿Qué es Flux?

*Flux* es un patrón de arquitectura de aplicaciones que se basa en un unidireccional de datos. En este patrón, los datos fluyen en una sola dirección: de las vistas a los stores.

No es específico de React y se puede usar con cualquier librería de vistas. En este patrón, los stores son los encargados de almacenar los datos de la aplicación. Los stores emiten eventos cuando los datos cambian. Las vistas se suscriben a estos eventos para actualizar los datos.

Esta arquitectura fue creada por Facebook para manejar la complejidad de sus aplicaciones. *Redux* se basó en este patrón para crear una biblioteca de gestión de estado global.



---

### Errores Típicos en React

#### ¿Qué quiere decir: Warning: Each child in a list should have a unique key prop?

Es un error bastante común en React y que puede parecernos un poco extraño si estamos empezando a aprender esta tecnología. Por suerte, es bastante sencillo de solucionar.

Básicamente, este mensaje aparece en la consola cuando estamos renderizando un listado dentro de nuestro componente, pero no le estamos indicando la propiedad "key". React usa esta propiedad para **determinar qué elemento hijo dentro de un listado ha sufrido cambios,** por lo que funciona como una especie de identificativo.

De esta manera, React utiliza esta información para **identificar las diferencias existentes con respecto al DOM** y optimizar la renderización del listado, determinando qué elementos necesitan volverse a calcular. Esto habitualmente pasa cuando agregamos, eliminamos o cambiamos el orden de los items en una lista.

Recomendamos revisar las siguientes secciones:

- [¿Qué es el renderizado de listas en React?](/qué-es-el-renderizado-de-listas-en-react)

- [¿Por qué puede ser mala práctica usar el ´index´ como key en un listado de React?](/por-qué-puede-ser-mala-práctica-usar-el-index-como-key-en-un-listado-de-react)



---

#### React Hook useXXX is called conditionally. React Hooks must be called in the exact same order in every component render

Una de las reglas de los hooks de React es que deben llamarse en el mismo orden en cada renderizado. React lo necesita para saber en qué orden se llaman los hooks y así mantener el estado de los mismos internamente. Por ello, los hooks no pueden usarse dentro de una condición `if`, ni un loop, ni tampoco dentro de una función anónima. Siempre deben estar en el nivel superior de la función.

Por eso el siguiente código es incorrecto:

<pre><code class="language-jsx"><span class="token comment">// ❌ código incorrecto por saltar las reglas de los hooks</span>
<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// de forma condicional, creamos un estado con el hook useState</span>
  <span class="token comment">// lo que rompe la regla de los hooks</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'midu'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

También el siguiente código sería incorrecto, aunque no lo parezca, ya que estamos usando el segundo `useState` de forma condicional (pese a no estar dentro de un `if`) ya que se ejecutará sólo cuando `count` sea diferente a `0`:

<pre><code class="language-jsx"><span class="token comment">// ❌ código incorrecto por saltar las reglas de los hooks</span>
<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// si count es 0, no se ejecuta el siguiente hook useState</span>
  <span class="token comment">// ya que salimos de la ejecución aquí</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'midu'</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Ten en cuenta que si ignoras este error, es posible que tus componentes no se comporten de forma correcta y tengas comportamientos no esperados en el funcionamiento de tus componentes.

Para arreglar este error, como hemos comentado antes, debes asegurarte de que los hooks se llaman en el mismo orden en cada renderizado. El último ejemplo quedaría así:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment">// movemos el hook useState antes del if</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'midu'</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Recomendamos revisar las siguientes secciones:

- [¿Cuáles son las reglas de los hooks en React?](/cuáles-son-las-reglas-de-los-hooks-en-react)



---

#### Can’t perform a React state update on an unmounted component

Este error se produce cuando intentamos actualizar el estado de un componente que ya no está montado. Esto puede ocurrir cuando el componente se desmonta antes de que se complete una petición asíncrona, por ejemplo:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Movies</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>movies<span class="token punctuation">,</span> setMovies<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchMovies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setMovies</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>results<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>movies<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>movies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">movie</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>movie<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>movie<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>movie<span class="token punctuation">.</span>overview<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Parece un código inofensivo, pero imagina que usamos este componente en una página. Si el usuario navega a otra página antes de que se complete la petición, el componente se desmontará y React lanzará el error, ya que intentará ejecutar el `setMovies` en un componente (Movies) que ya no está montado.

Para evitar este error, podemos usar una variable booleana con `useRef` que nos indique si el componente está montado o no. De esta manera, podemos evitar que se ejecute el `setMovies` si el componente no está montado:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Movies</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>movies<span class="token punctuation">,</span> setMovies<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> mounted <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    mounted<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token function">fetchMovies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>mounted<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setMovies</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>results<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> mounted<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span></code></pre>

Esto soluciona el problema pero **no evita que se haga la petición aunque el componente ya no esté montado**. Para cancelar la petición y así ahorrar transferencia de datos, podemos abortar la petición usando la API `AbortController`:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Movies</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>movies<span class="token punctuation">,</span> setMovies<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// creamos un controlador para abortar la petición</span>
    <span class="token keyword">const</span> abortController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// pasamos el signal al fetch para que sepa que debe abortar</span>
    <span class="token function">fetchMovies</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setMovies</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>results<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetch aborted'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// al desmontar el componente, abortamos la petición</span>
      <span class="token comment">// sólo funcionará si la petición sigue en curso</span>
      abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Debemos pasarle el parámetro signal al `fetch`</span>
<span class="token comment">// para que enlace la petición con el controlador</span>
<span class="token keyword">const</span> <span class="token function-variable function">fetchMovies</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> signal <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.themoviedb.org/3/movie/popular'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    signal <span class="token comment">// &lt;--- pasamos el signal</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

Sólo ten en cuenta la compatibilidad de `AbortController` en los navegadores. En [caniuse](https://caniuse.com/#feat=abortcontroller) puedes ver que no está soportado en Internet Explorer y versiones anteriores de Chrome 66, Safari 12.1 y Edge 16.



---

#### Too many re-renders. React limits the number of renders to prevent an infinite loop

Este error indica que algo dentro de nuestro componente está generando muchos pintados que pueden desembocar en un *loop* (bucle) infinito. Algunas de las razones por las que puede aparecer este error son las siguientes:

1. **Llamar a una función que actualiza el estado en el renderizado del componente.**

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// ❌ código incorrecto</span>
<span class="token comment">// no debemos actualizar el estado de manera directa</span>
  <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Lo que sucede en este ejemplo, es que al *renderizarse* el componente, se llama a la función `setCount` para actualizar el estado. Una vez el estado es actualizado, se genera nuevamente un *render* del componente y se repite todo el proceso infinitas veces.

Una posible solución sería:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ✅ código correcto</span>
  <span class="token comment">// se pasa el valor inicial deseado en el `useState`</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

**Llamar directamente a una función en un controlador de eventos.**

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// ❌ código incorrecto</span>
  <span class="token comment">//se ejecuta directamente la función `setCount` y provoca un renderizado infinito</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Incrementar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

En este código, se está ejecutando la función `setCount` que actualiza el estado en cada renderizado del componente, lo que provoca renderizaciones infinitas.

La manera correcta sería la siguiente:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// ✅ código correcto</span>
  <span class="token comment">// se pasa un callback al evento `onClick`</span>
  <span class="token comment">// esto evita que la función se ejecute en el renderizado</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Contador: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Incrementar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

**Usar incorrectamente el Hook de `useEffect`.**

Al ver este ejemplo:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// ❌ código incorrecto</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCounter</span><span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 👈️ no colocar el array de dependencias</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Lo que ocurre, es que al no colocar un array de dependencias en el hook de `useEffect`, estamos provocando que el código que se encuentre dentro se ejecute en cada renderizado del componente. Al llamar al `setCounter` y actualizar el estado, obtenemos nuevamente renderizaciones infinitas.

Para solucionarlo, podemos hacer lo siguiente:

<pre><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// ✅ código correcto</span>
  <span class="token comment">// estamos indicando que sólo queremos que el código se ejecute una vez</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCounter</span><span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//colocamos un array de dependencias vacío.</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span></code></pre>

Estas son solo algunas de las posibles causas que podemos encontrar cuando nos topamos con este mensaje de error en el código. Si quieres complementar esta información, te recomendamos revisar las siguientes secciones:

- [¿Qué es el estado en React?](/qué-es-el-estado-en-react)
- [¿Qué son los hooks?](/qué-son-los-hooks)
- [¿Qué hace el hook useState?](/qué-hace-el-hook-usestate)
- [¿Qué hace el hook useEffect?](/qué-hace-el-hook-useeffect)
- [¿Cuáles son las reglas de los hooks en React?](/cuáles-son-las-reglas-de-los-hooks-en-react)



---

#### ¿Qué diferencia existe entre Shadow DOM y Virtual DOM?

El **Shadow DOM** es una API del navegador que nos permite crear un árbol de nodos DOM independiente dentro de un elemento del DOM. Esto nos permite crear componentes que no interfieran con el resto de la aplicación. Se usa especialmente con Web Components.

El **Virtual DOM** es una representación del DOM en memoria. Esta representación se crea cada vez que se produce un cambio en el DOM. Esto nos permite comparar el DOM actual con el DOM anterior y así determinar qué cambios se deben realizar en el DOM real. Lo usa React y otras bibliotecas para hacer el mínimo número de cambios en el DOM real.



---

#### ¿Qué es el Binding?

En React, el **Binding** se refiere a la forma en que se relaciona y sincroniza el **estado** *(state)* de un componente con su **vista** *(render)*. El estado de un componente es un objeto que contiene información que puede ser utilizada para determinar cómo se debe mostrar el componente. Existen **dos** tipos de binding en React: **One-Way Binding** y **Two-Way Binding**.

**One-Way Binding** *(Enlace unidireccional)*:

En React se refiere a la capacidad de un componente para actualizar su **estado** *(state)* y su **vista** *(render)* de manera automática cuando cambia el estado, pero no permitiendo que la vista actualice el estado. En otras palabras, el **one-way binding** significa que el flujo de datos es unidireccional, desde el estado hacia la vista, y no al revés.

Por ejemplo:

<pre><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">OneWayBindingExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'midu'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Enter your name<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> OneWayBindingExample<span class="token punctuation">;</span></code></pre>

*En este ejemplo, el componente tiene un estado inicial llamado **name** con el valor **midu**. La función **setName** se utiliza para actualizar el estado **name** cuando se produce un evento **onChange** en el input. Sin embargo, la **vista** (la linea que muestra **Hello, {name}**) no tiene la capacidad de actualizar el estado **name**.*

**Two-Way Binding** *(Enlace bidireccional)*:

Se refiere a la capacidad de un componente para actualizar su estado y su vista de manera automática tanto cuando cambia el estado como cuando se produce un evento en la vista. En otras palabras, el **Two-Way Binding** significa que el flujo de datos es bidireccional, desde el estado hacia la vista y desde la vista hacia el estado. Para lograr esto se utilizan en conjunto con los eventos, como **onChange**, para capturar la información de los inputs y actualizar el estado, *React no proporciona un mecanismo nativo para two-way binding, pero se puede lograr utilizando librerías como react-forms o formik.*

Por ejemplo:

<pre><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">TwoWayBindingExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'midu'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Enter your name<span class="token punctuation">"</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TwoWayBindingExample<span class="token punctuation">;</span></code></pre>

*En este ejemplo, el componente tiene un estado inicial llamado **name** con el valor **midu**. La función **setName** se utiliza para actualizar el estado **name** cuando se produce un evento **onChange** en el input, y se puede ver reflejado en el valor del input. Sin embargo, en este caso se está utilizando el atributo **value** para que el valor del input sea actualizado con el valor del estado, es decir, se está actualizando tanto el estado como el input.*

**Por si no quedó claro:**

En términos sencillos, el **Binding** en React puede compararse con una cafetera y una taza de café. **El estado** del componente sería la *cafetera*, y **la vista** del componente sería *la taza de café*.

En el caso del **One-Way Binding**, la cafetera solo puede verter café en una dirección, hacia la taza de café. Esto significa que la cafetera puede llenar automáticamente la taza de café con café fresco, pero la taza de café no puede devolver automáticamente el café a la cafetera. De esta manera, **el estado** del componente *(la cafetera)* puede actualizar automáticamente **la vista** *(la taza de café)* cuando cambia, pero la **vista** no puede actualizar automáticamente el **estado**.

En el caso del **Two-Way Binding**, la cafetera puede verter y recibir café en ambas direcciones, hacia y desde la taza de café (no sé por qué alguien necesitaría hacer algo así). Esto significa que la cafetera puede llenar y vaciar automáticamente la taza de café con café fresco. De esta manera, tanto **el estado** del componente como **la vista** pueden actualizarse automáticamente entre sí.

Sí quieres saber más comparto el siguiente enlace:  
[How To Bind Any Component to Data in React: One-Way Binding](https://www.telerik.com/blogs/how-to-bind-any-component-data-react-one-way-binding)  



---
