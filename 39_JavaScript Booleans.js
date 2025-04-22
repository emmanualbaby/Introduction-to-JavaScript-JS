// JavaScript Booleans

// Boolean values
let isJavaScriptFun = true;
let isFishTasty = false;

console.log("Is JavaScript fun? " + isJavaScriptFun); // Output: Is JavaScript fun? true
console.log("Is fish tasty? " + isFishTasty); // Output: Is fish tasty? false

// Boolean expressions
let x = 10;
let y = 5;

let isEqual = (x == y);
console.log("Is x equal to y? " + isEqual); // Output: Is x equal to y? false

let isNotEqual = (x != y);
console.log("Is x not equal to y? " + isNotEqual); // Output: Is x not equal to y? true

let isGreaterThan = (x > y);
console.log("Is x greater than y? " + isGreaterThan); // Output: Is x greater than y? true

let isLessThan = (x < y);
console.log("Is x less than y? " + isLessThan); // Output: Is x less than y? false

// Using Boolean() function
let isStringEmpty = Boolean("");
console.log("Is the string empty? " + isStringEmpty); // Output: Is the string empty? false

let isNumberZero = Boolean(0);
console.log("Is the number zero? " + isNumberZero); // Output: Is the number zero? false

let isNull = Boolean(null);
console.log("Is null? " + isNull); // Output: Is null? false

let isUndefined = Boolean(undefined);
console.log("Is undefined? " + isUndefined); // Output: Is undefined? false

let isNaNValue = Boolean(NaN);
console.log("Is NaN? " + isNaNValue); // Output: Is NaN? false

let isNonEmptyString = Boolean("Hello");
console.log("Is the string non-empty? " + isNonEmptyString); // Output: Is the string non-empty? true

let isNonZeroNumber = Boolean(123);
console.log("Is the number non-zero? " + isNonZeroNumber); // Output: Is the number non-zero? true
