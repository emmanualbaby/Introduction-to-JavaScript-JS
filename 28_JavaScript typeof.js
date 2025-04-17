// JavaScript typeof Operator

// Checking the type of a number
let num = 42;
console.log("Type of num: " + typeof num); // Output: Type of num: number

// Checking the type of a string
let str = "Hello, world!";
console.log("Type of str: " + typeof str); // Output: Type of str: string

// Checking the type of a boolean
let bool = true;
console.log("Type of bool: " + typeof bool); // Output: Type of bool: boolean

// Checking the type of an object
let obj = { name: "John", age: 30 };
console.log("Type of obj: " + typeof obj); // Output: Type of obj: object

// Checking the type of an array
let arr = [1, 2, 3];
console.log("Type of arr: " + typeof arr); // Output: Type of arr: object

// Checking the type of a function
let func = function() { return "Hello"; };
console.log("Type of func: " + typeof func); // Output: Type of func: function

// Checking the type of undefined
let undef;
console.log("Type of undef: " + typeof undef); // Output: Type of undef: undefined

// Checking the type of null
let nullValue = null;
console.log("Type of nullValue: " + typeof nullValue); // Output: Type of nullValue: object

// Checking the type of a symbol
let sym = Symbol("symbol");
console.log("Type of sym: " + typeof sym); // Output: Type of sym: symbol

// Checking the type of BigInt
let bigInt = BigInt(1234567890123456789012345678901234567890n);
console.log("Type of bigInt: " + typeof bigInt); // Output: Type of bigInt: bigint
