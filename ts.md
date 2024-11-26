# TypeScript Journey

Un viaje a través de TypeScript para comprender sus principales features y conceptos.

## ¿Qué es TypeScript?
A diferencia de lo que en general se piensa, **TypeScript (TS) NO ES un lenguaje como tal**. 
**TS básicamente es un superset para JavaScript** que permite controlar el desarrollo 
de proyectos o aplicaciones de software en JavaScript a través de tipado estático, facilitando los 
procesos de construcción y desarrollo mediante una mejor organización y auto-completado.

Pd: bendito seas, ¿por qué no llegaste antes?

## Algo de historia
TypeScript fue creado por **Anders Hejlsberg** en **Microsoft** y fue lanzado en **2012** después de 
dos años de desarrollo.
Su primera aparición fue en el framework **Angular 2** en el 2016 y desde entonces ha sido adoptado por diferentes 
frameworks, librerías y Runtime como **React**, **Vue**, **Node**, **Express**, **NestJS**, **Angular**, **Electron**, 
**Deno**, **Bum**, **etc**.

### Ruta de aprendizaje

Nuestra ruta de aprendizaje estará guiada por los siguientes temas:

  1. [Tipos primitivos](#tipos-primitivos)
  1. [Tipos básicos](#tipos-básicos)
  1. [Constructores](#constructores)
  1. [Tipos especiales](#tipos-especiales)
      1. [Partial](#partial)
      1. [Omit](#omit)
      1. [Pick](#pick)
      1. [Record](#record)
      1. [Exclude](#exclude)
      1. [Extract](#extract)
      1. [ReturnType](#returntype)
      1. [NonNullable](#nonnullable)
      1. [Readonly](#readonly)
      1. [InstanceType](#instancetype)
      1. [Required](#required)
      1. [Otros](#otros)
  1. [Tipos avanzados](#tipos-avanzados)
  1. [POO](#poo)
  1. [Recursos](#recursos)


## Tipos primitivos

Son los tipos generales del lenguaje y propios de las tecnologías de computo con los cuales 
elaboramos estructuras de datos y las manipulamos a través de algoritmos.

Entre estos tenemos: `boolean`, `string`, `number`, `bigint`, `symbol`, `null`, `undefined`, `void` y `never`.

Definiciones: 
- `boolean`: Tipo de dato que representa un valor de verdad, puede ser `true` o `false`.
- `string`: Tipo de dato que representa una cadena de texto.
- `number`: Tipo de dato que representa un número, puede ser entero o decimal. (64 bits)
- `bigint`: Tipo de dato que representa un número entero de precisión arbitraria. (n bits)
- `symbol`: Tipo de dato que representa un identificador único.
- `null`: Tipo de dato que representa la ausencia de un valor.
- `undefined`: Tipo de dato que representa un valor no definido.
- `void`: Tipo de dato que representa la ausencia de un valor, se usa en funciones que 
no retornan nada.
- `never`: Tipo de dato que representa un valor que nunca ocurre.

Y con estos podemos crear estructuras de datos como: `object`, `array` y `tuple`.

[Ver ejemplos](./resources/primitives.ts)
[Siguiente](#tipos-básicos)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

## Tipos básicos

Son los tipos con los que construimos estructuras de datos más elaborados o complejas, 
como: `enum`, `type`, `interface` y `class`.

Definiciones:
- `enum`: Tipo de dato que representa un conjunto de constantes y pueden ser de diferentes 
tipos (string, boolean, number).
- `type`: Tipo de dato que representa una estructura de datos, básicamente un JSON.
- `interface`: Tipo de dato que representa una estructura de datos y se usa para definir contratos.
- `class`: Tipo de dato que representa una estructura de datos y se usa para definir estructuras 
que tienen comportamiento.

Y otros tipos como: `union`, `intersection`, `assertions`, `guards`, `literal`, `Promise`, `Function`, `CallableFunction`, etc.

Definiciones:
- `union`: Tipo de dato que representa un conjunto de tipos. (|)
- `intersection`: Tipo de dato que representa la combinación de dos o más tipos. (&)
- `assertions`: Tipo de dato que representa una afirmación de tipo. (as) 
- `guards`: Tipo de dato que representa una validación de tipo. (is) 
- `literal`: Tipo de dato que representa un valor específico.
- `Promise`: Tipo de dato que representa una promesa, se usa para manejar operaciones asíncronas.
- `Function`: Tipo de dato que representa una función.
- `CallableFunction`: Tipo de dato que representa una función que puede ser llamada.

[Ver ejemplos](./resources/basic.ts)
[Siguiente](#constructores)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

## Constructores

Aunque no es una característica propia de TypeScript, es importante conocer qué son los constructores 
en JavaScript y cómo se pueden utilizar.
Un constructor base en JavaScript es un Wrapper que me permite extender la funcionalidad de los tipos 
primitivos de JavaScript con el fin de aumentar la funcionalidad de los mismos, y entre ellos tenemos: 
`Number`, `String`, `Boolean`, `BigInt`, `Symbol`.

Definiciones:
- `Number`: Constructor que me permite extender la funcionalidad de los números.
- `String`: Constructor que me permite extender la funcionalidad de las cadenas de texto.
- `Boolean`: Constructor que me permite extender la funcionalidad de los valores de verdad.
- `BigInt`: Constructor que me permite extender la funcionalidad de los números enteros de precisión arbitraria.

Es importante saber que `Array`, `Object`, etc., también son constructores propios de JavaScript que extienden 
funcionalidades.
También es importante tener en cuenta que estos constructores primitivos se usan en casos especiales cuando se necesita 
realizar parseos o conversiones de datos.

[Ver ejemplos](./resources/constructors.ts)
[Siguiente](#tipos-especiales)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

## Tipos especiales

Son diferentes tipos utilitarios que TypeScript nos ofrece para crear y/o manipular 
estructuras de datos más complejas según necesidades muy puntuales.

Los que tienen un asterisco (*) son tipos que podrían tener otros usos, pero es importante saber 
cómo y para qué usarlos porque pueden funcionar de diferentes formas y hacer lo que ya hacen otros tipos.

### Partial
El tipo `Partial` nos permite crear un tipo a partir de otro tipo, pero con todas sus 
propiedades marcadas como opcionales.

- `Partial<T>`: Crea un tipo con todas las propiedades de `T` y las marca como opcionales.
```ts
type SomeType = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
};
type MyPartialType = Partial<SomeType>;
// MyPartialType será algo como: { prop1?: string; prop2?: number; propX?: boolean; propY?: string; }
```

[Ver ejemplos](./resources/partial.ts)
[Siguiente](#omit)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### Omit
El tipo `Omit` nos permite crear un tipo a partir de otro tipo, pero omitiendo propiedades 
específicas.

- `Omit<T, K>`: Crea un tipo con todas las propiedades de `T` excepto las propiedades que están en `K`.
```ts
type SomeType = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
};
type MyOmitType = Omit<SomeType, 'prop1' | 'prop2' | 'propX'>;
// MyOmitType será algo como: { propY: string; }
```

[Ver ejemplos](./resources/omit.ts)
[Siguiente](#pick)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### Pick
El tipo `Pick` nos permite crear un tipo a partir de otro tipo, pero seleccionando un conjunto 
de propiedades específicas.

- `Pick<T, K>`: Crea un tipo con un conjunto de propiedades de `T`.
```ts
type SomeType = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
};
type MyPickType = Pick<SomeType, 'prop2' | 'propX'>;
// MyPickType será algo como: { prop2: number; propX: boolean; }
```

[Ver ejemplos](./resources/pick.ts)
[Siguiente](#record)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### Record
El tipo `Record` nos permite crear un tipo con un conjunto de propiedades de un cierto tipo.

- `Record<K, T>`: Crea un tipo con un conjunto de propiedades de un cierto tipo.
```ts
type MyRecordType = Record<'prop1' | 'prop2' | 'propX', SomeType>;
type MyRecordType = Record<string, string | number | boolean>;
type MyRecordType = Record<number, SomeType>;
```

[Ver ejemplos](./resources/record.ts)
[Siguiente](#exclude)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### *Exclude
El tipo `Exclude` nos permite crear un tipo excluyendo ciertos tipos de un tipo de unión, 
básicamente es lo mismo que `Omit` pero con un enfoque en `union`.

- `Exclude<T, U>`: Crea un tipo excluyendo ciertos tipos de un tipo de unión.
```ts
type SomeType = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
};
type SomeTypeTwo = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
  propZ: string;
};
type UnionType = SomeType | SomeTypeTwo;
type MyExcludeType = Exclude<UnionType, SomeType>;
// MyExcludeType será algo como: SomeTypeTwo

// Observation (Es mejor usar Omit)
type MyExclude = Exclude<keyof SomeType, 'prop1' | 'prop2' | 'propX'>;
// MyExclude será algo como: { propY: string; }
```
**Observación:** No se debe confundir con lo que hace Omit. Omit es a nivel de props y 
este es a nivel de type.

[Ver ejemplos](./resources/exclude-extract.ts)
[Siguiente](#extract)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### *Extract
El tipo `Extract` nos permite crear un tipo extrayendo ciertos tipos de un tipo de unión,
básicamente es lo mismo que `Pick` pero con con un enfoque en `union`.

- `Extract<T, U>`: Crea un tipo extrayendo ciertos tipos de un tipo de unión.
```ts
type SomeType = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
};
type SomeTypeTwo = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
  propZ: string;
};
type UnionType = SomeType | SomeTypeTwo;
type MyExtractType = Extract<UnionType, SomeTypeTwo>;
// MyExtractType será algo como: SomeTypeTwo

// Observation (Es mejor usar Pick)
type MyExtract = Extract<keyof SomeType, 'prop1' | 'prop2' | 'propX'>;
// MyExtract será algo como: { prop1: string; prop2: number; propX: boolean; }
```
**Observación:** No de debe confundir con lo que hace Pick. Pick es a nivel de props 
y este es a nivel de type.

[Ver ejemplos](./resources/exclude-extract.ts)
[Siguiente](#returntype)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### ReturnType
El tipo `ReturnType` nos permite obtener el tipo de retorno de una función.

- `ReturnType<T>`: Obtiene el tipo de retorno de una función.
```ts
type SomeType = (txt: string) => string;
type MyReturnType = ReturnType<SomeType>;
// MyReturnType será algo como: string
```

[Ver ejemplos](./resources/non-nullable.ts)
[Siguiente](#nonnullable)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

#### NonNullable
El tipo `NonNullable` nos permite crear un tipo excluyendo `null` y `undefined` de un tipo 
existente para asegurar que un valor no sea `null` o `undefined`.

- `NonNullable<T>`: Crea un tipo excluyendo `null` y `undefined` de un tipo existente.
```ts
type SomeType = string | null | undefined;
type MyNonNullableType = NonNullable<SomeType>;
// MyNonNullableType será algo como: string
```

[Ver ejemplos](./resources/non-nullable.ts)
[Siguiente](#readonly)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### Readonly
El tipo `Readonly` nos permite crear un tipo que hace que todas las propiedades sean de solo lectura.

- `Readonly<T>`: Crea un tipo que hace que todas las propiedades sean de solo lectura.
```ts
type SomeType = {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
};

type MyReadonlyType = Readonly<SomeType>;
// MyReadonlyType será algo como: { readonly prop1: string; readonly prop2: number; readonly propX: boolean; readonly propY: string; }
```

[Ver ejemplos](./resources/readonly.ts)
[Siguiente](#instancetype)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

#### InstanceType
El tipo `InstanceType` nos permite obtener el tipo de instancia de un constructor.

- `InstanceType<T>`: Obtiene el tipo de instancia de un constructor.
```ts
class SomeType {
  prop1: string;
  prop2: number;
  propX: boolean;
  propY: string;
}

type MyInstanceType = InstanceType<typeof SomeType>;
// MyInstanceType será algo como: SomeType
```

[Ver ejemplos](./resources/instance.ts)
[Siguiente](#required)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### Required
El tipo `Required` nos permite crear un tipo que hace que todas las propiedades sean requeridas.

- `Required<T>`: Crea un tipo que hace que todas las propiedades sean requeridas.
```ts
type SomeType = {
  prop1?: string;
  prop2?: number;
  propX?: boolean;
  propY?: string;
};
type MyRequiredType = Required<SomeType>;
// MyRequiredType será algo como: { prop1: string; prop2: number; propX: boolean; propY: string; }
```

[Ver ejemplos](./resources/required.ts)
[Siguiente](#tipos-avanzados)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

### Otros
Existen otros tipos especiales de utilitarios que nos permiten realizar operaciones más avanzadas y complejas,

- `Parameters<T>`: Obtiene los tipos de los parámetros de una función.
- `ConstructorParameters<T>`: Obtiene los tipos de los parámetros de un constructor.
- `ThisParameterType<T[K]>`: Obtiene el tipo del parámetro `this` de una función.
- `OmitThisParameter<T[K]>`: Elimina el parámetro `this` de una función.
- `ThisType<T[K]>`: Crea un tipo que representa el tipo de `this` en una función.

[Ver ejemplos](./resources/other.ts)
[Siguiente](#tipos-avanzados)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

## Tipos avanzados
Con TS se pueden crear tipos más avanzados y complejos a nivel sintáctico y semántico usando palabras claves como: keyof, in, infer, extends, never, etc.

Definiciones:
- `keyof`: Palabra clave que nos permite acceder a las claves de un tipo.
- `in`: Palabra clave que nos permite iterar sobre las claves de un tipo.
- `infer`: 
- `extends`: Palabra clave que nos permite extender un tipo.

[Ver ejemplos](./resources/advanced.ts)
[Siguiente](#poo)

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

## POO

La programación orientada a objetos (POO) es un paradigma de programación que se basa en la
creación de objetos que interactúan entre sí para realizar una tarea y basa su estructura en
cuatro pilares fundamentales: herencia, polimorfismo, encapsulamiento y abstracción.

La POO es una forma de abstraer el mundo real en un programa de computadora, donde los objetos
tienen atributos y métodos que les permiten interactuar entre sí y en cierta forma simular el 
comportamiento de los objetos del mundo real.

### Herencia
La palabra clave es `extends` y nos permite crear una nueva clase a partir de una clase existente.

La herencia es un mecanismo que permite crear una nueva clase a partir de una clase existente,
donde la nueva clase hereda los atributos y métodos de la clase existente y puede agregar nuevos
atributos y métodos o modificar los existentes.

### Polimorfismo
La palabra clave es `super` y nos permite acceder a los métodos y atributos de la clase padre.

El polimorfismo es un mecanismo que permite que un objeto pueda tener diferentes formas o
comportamientos, es decir, que un objeto pueda ser tratado como si fuera de un tipo diferente al
que realmente es.

### Encapsulamiento (private #)
La palabra clave es `private` o un `#` al inicio del nombre de la variable y nos permite ocultar los 
detalles de implementación de un objeto.

El encapsulamiento es un mecanismo que permite ocultar los detalles de implementación de un objeto
y exponer solo los métodos y atributos que son necesarios para interactuar con el objeto.

### Abstracción
La palabra clave es `abstract` y nos permite crear una clase abstracta.

Una clase abstracta es una clase que no puede ser instanciada directamente, sino que debe ser
heredada por otra clase que implemente los métodos y atributos abstractos de la clase abstracta.

### Interfaces
Una interfaz es un contrato que define un conjunto de métodos y atributos que una clase debe
implementar para cumplir con el contrato.

### Clases
Una clase es una plantilla que define la estructura y el comportamiento de un objeto, es decir,
que define los atributos y métodos que tendrá el objeto y cómo se comportará el objeto.

**[⬆ Volver a TypeScript](#ruta-de-aprendizaje)**

## Recursos

En los siguientes enlaces podrás encontrar más información sobre TypeScript y profundizar en los conceptos aquí vistos y otros más.

- [TypeScript](https://www.typescriptlang.org/docs)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
