function myOptionalValue(): string | null | undefined {
  return "Hello, World!";
}

function myOptionalValueTwo(): string | null | undefined {
  return null;
}

// Explicit ReturnType
type MyReturnType = ReturnType<typeof myOptionalValue>;

// NonNullable type and ReturnType
let value: NonNullable<ReturnType<typeof myOptionalValue>>;

// Esto causará un error de compilación (transpilation) si `myOptionalValue` devuelve `null` o `undefined`
value = myOptionalValue()!;

console.log(value); // "Hello, World!"

// Esto causará un error de compilación (transpilation) si `myOptionalValueTwo` devuelve `null` o `undefined`
value = myOptionalValueTwo()!;
console.log(value); // null
