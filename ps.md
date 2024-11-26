# Entendiendo a Promise

Para entender a Promise no necesitamos un libro con cientos de páginas, simplemente debemos conocer la necesidad que 
cubre, la evolución que ha tenido y sus aplicaciones reales para finalmente llegar a la comprensión de su concepto y 
algo no menos importante, explorar las buenas practicas.

### Preparar el ambiente
> Toma el código del servidor, organiza un archivo `index.ts` de un proyecto básico con TS en Node y ponlo a correr.
* [Código del servidor](./resources/server.ts)

## Definición general
Las promesas son el mecanismo que nos permite trabajar con operaciones asíncronas en JavaScript, es decir, que nos 
permiten realizar operaciones que toman tiempo en ejecutarse y como punto importante, que no bloquean el hilo 
principal de ejecución.

## Evolución
Las promesas surgieron como un concepto popularizado por librerías como `Q y Bluebird`. Fueron formalizadas e 
integradas al estándar del lenguaje en `ECMAScript 2015 (ES6)`, marcando un punto clave en su evolución y 
consolidación en el ecosistema JavaScript, sin embargo... ¿Cómo llegamos a las promesas tal como las conocemos hoy?

1. **Callbacks**
> No todo fue mágico como ahora, porque la primera forma de trabajar con operaciones asíncronas en JavaScript fue a 
través de **Callbacks**, lo que básicamente son funciones que se pasan como argumentos a otras funciones y que se 
ejecutan cuando la operación asíncrona ha terminado, devolviendo el valor que se pasó a la función callback, ya sea 
el resultado de la operación o un error.

Código base para Callback
```js
// Base code to fetch data with callback style. It's only for demonstration
function fetchApi(url, callback) {
  // Imaging fetching data from an API
  return fetch(url)
  .then((response) => {
    response.text().then((data) => {
      return callback(data);
    })
  }).catch((error) => {
    return callback(error);
  });
}
```

```js
function fetchData(callback) {
  // Imaging fetching data from an API
  return fetchApi("http://localhost:8080/api?word=hello", callback);
}

function myCallBack(data) {
  console.log(data);
}

// Using it
fetchData(myCallBack); // Output: hello
```

> Pero los **Callbacks** trajeron un problema llamado el **Callback hell**, que es cuando se anidan muchos Callbacks 
y esto se vuelve algo inmanejable, difícil de leer y mantener.

```js
function fetchDataOne(callback) {
  // Imaging fetching data from an API
  return fetchApi("http://localhost:8080/api?word=one", callback);
}

function fetchDataTwo(callback) {
  // Imaging fetching data from an API
  return fetchApi("http://localhost:8080/api?word=two", callback);
}

function fetchDataThree(callback) {
  // Imaging fetching data from an API
  return fetchApi("http://localhost:8080/api?word=three", callback);
}

function myCallbackHell(message) {
  console.log(message);
  return fetchDataOne(function(dataOne) {
    console.log(dataOne);
    return fetchDataTwo(function(dataTwo) {
      console.log(dataTwo);
      return fetchDataThree(function(dataThree) {
        console.log(dataThree);
        // Imagine more nested callbacks with many lines between them
      });
    });
  });
}

// Using it
myCallbackHell("Fetching data");

// Output: Fetching data
//         one
//         two
//         three
```

1. **Promises**
> Las promesas fueron la evolución a los callbacks y son una forma más elegante de trabajar con operaciones asíncronas 
en JavaScript, ya que nos permiten manejar el asincronismo de una forma más sencilla y legible.

```js
// It's only a demonstration, don't use it in real environment
function fetchApi(url) {
  // Imaging fetching data from an API
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => {
      response.text().then((data) => {
        return resolve(data);
      })
    }).catch((error) => {
      return reject(error);
    });
  });
}

// The correct way must be something like this
// function fetchApi(url) {
//   return fetch(url)
//   .then((response) => response.text())
//   .catch((error) => error);
// }
```

```js
function fetchDataOne(data) {
  return fetchApi("http://localhost:8080/api?word=" + data);
}

function fetchDataTwo(data) {
  return fetchApi("http://localhost:8080/api?word=" + data);
}

// Using it
const fetchData1 = fetchDataOne("Hello");

fetchData1
.then((data) => {
  console.log(data);
  return fetchDataTwo(data + " " + "alien");
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error);
});

// Output: Hello
//         Hello alien
```

1. **Async/Await**
> Async/Await es una forma más moderna de trabajar con promesas en JavaScript, ya que nos permite escribir código 
asíncrono de una manera mucho más fácil y legible.

```js
// It's only a demonstration, don't use it in real environment
// function fetchApi(url) {
//   // Imaging fetching data from an API
//   return new Promise((resolve, reject) => {
//     fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         response.text().then((data) => {
//           return resolve(data);
//         });
//       } else {
//         response.text().then((data) => {
//           return reject(data);
//         });
//       }
//     }).catch((error) => {
//       return reject(error);
//     });
//   });
// }

function fetchApi(url) {
  return fetch(url)
  .then((response) => response.text())
  .catch((error) => error);
}

function fetchDataOne(data) {
  return fetchApi("http://localhost:8080/api?word=" + data);
}

async function fetchDataTwo(data) {
  try {
    return await fetchApi("http://localhost:8080/api?word=" + data);
  } catch (error) {
    console.log("Catching error", error);
    throw error;
  }
}

// Using it
async function fetchData() {
  try {
    const data1 = await fetchDataOne("Hello");
    console.log(data1);
    const data2 = await fetchDataTwo(data1 + " alien");
    console.log(data2);
    const data2Error = await fetchDataTwo("");
    console.log(data2Error);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// Output: Hello
//         Hello alien
//         You were wrong
```

## Adaptando el pasado al presente.
> Existen librerías y paquetes que aún usan Callbacks, pero podemos adaptarlos a Promesas o Async/Await para mejorar 
su legibilidad y mantenimiento, y una herramienta que nos permite hacer esto es `util.promisify` de **NodeJS**.

```js
// Callback
function fetchApi(url, callback) {
  // Imaging fetching data from an API
  fetch(url)
  .then((response) => {
    response.text().then((data) => {
      callback(data);
    })
  }).catch((error) => {
    callback(error);
  });
}

// Using promisify
const { promisify } = require('util');

const fetchApiPromisified = promisify(fetchApi);

// Uso de la función promisificada
fetchApiPromisified("http://localhost:8080/api?word=hello")
  .then(data => console.log(data))
  .catch(error => console.error(error));
// Output: Hello
```

## Vamos al concepto
Una promesa es un objeto que representa el resultado de una operación asíncrona que puede estar en uno de los 
siguientes estados: `pendiente, resuelto o rechazado` (pending, resolved, rejected), y que requiere un correcto 
manejo del resultado de acuerdo a su estado final.

## Malas practicas y errores comunes
- No manejar los errores correctamente.

```js
// Bad practice
fetchApi("http://localhost:8080/api?word=hello")
.then((data) => {
  console.log(data);
});
// Output: Uncaught (in promise) Error: You were wrong

// Good practice
fetchApi("http://localhost:8080/api?word=hello")
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error);
});
```

- No devolver la promesa en una función asíncrona.

```js
// Bad practice
async function fetchData() {
  fetchApi("http://localhost:8080/api?word=hello")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
}

// Good practice
async function fetchData() {
  return fetchApi("http://localhost:8080/api?word=hello")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
}
```
- No usar `await` en una función asíncrona.
  
```js
// Bad practice
async function fetchData() {
  fetchApi("http://localhost:8080/api?word=hello")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
}

// Good practice*
async function fetchData() {
  const data = await fetchApi("http://localhost:8080/api?word=hello");
  console.log(data);
}

// Other way one with try/catch
async function fetchData() {
  try {
    const data = await fetchApi("http://localhost:8080/api?word=hello");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Other way two with direct return
async function fetchData() {
  return fetchApi("http://localhost:8080/api?word=hello")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
}
```

- No usar `try/catch` en una función asíncrona.

```js
// Bad practice
async function fetchData() {
  const data = await fetchApi("http://localhost:8080/api?word=hello");
  console.log(data);
}

// Good practice
async function fetchData() {
  try {
    const data = await fetchApi("http://localhost:8080/api?word=hello");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
> Plus

- No usar `Promise.all` para manejar múltiples promesas.

Se usa cuando necesitamos ejecutar múltiples promesas al mismo tiempo y esperar a que todas se resuelvan con éxito. 
Si alguna de ellas se rechaza, `Promise.all` se rechaza inmediatamente con el motivo de rechazo de esa promesa.

- No usar `Promise.race` para manejar múltiples promesas.

Se usa cuando necesitamos ejecutar múltiples promesas al mismo tiempo y queremos que la promesa devuelta se resuelva 
o se rechace tan pronto como cualquiera de las promesas se resuelva o se rechace.

- No usar `Promise.allSettled` para manejar múltiples promesas.

Se usa cuando necesitamos ejecutar múltiples promesas al mismo tiempo y obtener los resultados de todas ellas, 
independientemente de si se resuelven con éxito o se rechazan.

- No usar `Promise.any` para manejar múltiples promesas.

Se usa cuando necesitamos ejecutar múltiples promesas al mismo tiempo y queremos que la promesa devuelta se resuelva 
tan pronto como cualquiera de las promesas se resuelva con éxito. Si todas las promesas se rechazan, Promise.any se 
rechaza con un AggregateError.

## La pregunta de la encrucijada
Teniendo en cuenta lo que significa operación asincrónica, el siguiente fragmento de código es o no una Promise?

```js
function myNicePromise() {
    return new Promise((resolve, reject) => {
        let result = 0;
        for (let i = 0; i < 1e9; i++) {
            result += i;
        }
        return resolve(result);
    });
}

console.log("Started the task");
myNicePromise()
.then(result => {
    console.log("Result:", result);
})
.catch((error) => {
  console.log(error)
});
console.log("I finished");
```
