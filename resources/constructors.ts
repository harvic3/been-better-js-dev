// Constructors
// Number
const myNumber = Number(17);
console.log(myNumber); // 17
const myNumberFromStr = Number("2019");
console.log(myNumberFromStr); // 2019
const myNumberFromStrWithSpaces = Number("  2019  ");
console.log(myNumberFromStrWithSpaces); // 2019
const myNumberFromStrWithSpacesAndText = Number("  2019  year");
console.log(myNumberFromStrWithSpacesAndText); // NaN
const myNumberFromEmptyStr = Number("");
console.log(myNumberFromEmptyStr); // 0
const myNumberFromNull = Number(null);
console.log(myNumberFromNull); // 0
const myNumberFromUndefined = Number(undefined);
console.log(myNumberFromUndefined); // NaN

// String
const myString = String(7); 
console.log(myString); // "7"
const myStringFromNum = String("Hi there");
console.log(myStringFromNum); // "Hi there"
const myStringNull = String(null);
console.log(myStringNull); // "null"
const myStringUndefined = String(undefined);
console.log(myStringUndefined); // "undefined"

// Boolean
const myBoolean = Boolean(1);
console.log(myBoolean); // true
const myBooleanFromNum = Boolean(0);
console.log(myBooleanFromNum); // false
const myBooleanFromStr = Boolean("Hello");
console.log(myBooleanFromStr); // true
const myBooleanFromEmptyStr = Boolean("");
console.log(myBooleanFromEmptyStr); // false
const myBooleanFromNull = Boolean(null);
console.log(myBooleanFromNull); // false
const myBooleanFromUndefined = Boolean(undefined);
console.log(myBooleanFromUndefined); // false

// BigInt
const myBigInt = BigInt(9007199254740991);
console.log(myBigInt); // 9007199254740991n
const myBigIntFromStr = BigInt("9007199254740991");
console.log(myBigIntFromStr); // 9007199254740991n
const myBigIntFromStrWithSpaces = BigInt("  9007199254740991  ");
console.log(myBigIntFromStrWithSpaces); // 9007199254740991n
const myBigIntFromStrWithSpacesAndText = BigInt("  9007199254740991  year");
console.log(myBigIntFromStrWithSpacesAndText); // SyntaxError
const myBigIntFromEmptyStr = BigInt("");
console.log(myBigIntFromEmptyStr); // 0n
const myBigIntFromNull = BigInt(null);
console.log(myBigIntFromNull); // TypeError
const myBigIntFromUndefined = BigInt(undefined);
console.log(myBigIntFromUndefined); // TypeError
const myBigIntFromNum = BigInt(12345678901234567890n) * BigInt(98765432109876543210n);
console.log(myBigIntFromNum); // 1219326311370217952237463801111263526900n
