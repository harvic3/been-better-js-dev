// Primitive types
const myNumber: number = 2019;
const myFloat: number = 3.1416;
const myString: string = 'Hello, alien!';
const myBoolean: boolean = true;
const myFalse: boolean = false;
const myNull: null = null;
const myUndefined: undefined = undefined;
// Special primitive types
// BigInt
const myBigInt: bigint = 100n;
// Symbol
const mySymbol: symbol = Symbol('mySymbol');

// Data structures
// Arrays types
const myNumberArray: number[] = [1, 2, 3, 4, 5];
const myNumberArray2: Array<string> = ['Hello', 'alien', 'Masters'];
const myStringArray: string[] = ['Hello', 'alien', 'Masters'];
const myStringArray2: Array<string> = ['Hello', 'alien', 'Masters'];
const myBooleanArray: boolean[] = [true, false, true, false];
const myMixedArray: (string | number | boolean)[] = [1, 'Hello', true];

// Tuple types
const myTuple: [string, number] = ['Hello', 2019];
const myTuple2 = ['Hello', 2019] as [string, number];
const myTuple3 = <[string, number]>['Hello', 2019];
const myTuple4: [string, boolean, number] = ['Hello', true, 2019];
const myTupleArray: [string, number][] = [['Hello', 2019], ['alien', 2020]];

// Object type
const myObject: object = { name: 'alien', year: 2019 }; // Is only an example, avoid using object because it is not type-safe and is like any

// any unknown types
const myAny = 'Hello, alien!' as any; // Avoid using any
const myUnknown: unknown = 'Hello, alien!'; // Use unknown instead of any

// Function types
// void
function log(message: string): void {
  console.log(message);
}

// never
function error(message: string): never {
  throw new Error(message);
}
