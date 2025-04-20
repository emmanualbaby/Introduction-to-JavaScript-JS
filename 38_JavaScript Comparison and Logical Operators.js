// JavaScript Comparison Operators

let x = 10;
let y = 5;

console.log("x == y: " + (x == y)); // Output: false (equal to)
console.log("x != y: " + (x != y)); // Output: true (not equal to)
console.log("x === y: " + (x === y)); // Output: false (strict equal to)
console.log("x !== y: " + (x !== y)); // Output: true (strict not equal to)
console.log("x > y: " + (x > y)); // Output: true (greater than)
console.log("x < y: " + (x < y)); // Output: false (less than)
console.log("x >= y: " + (x >= y)); // Output: true (greater than or equal to)
console.log("x <= y: " + (x <= y)); // Output: false (less than or equal to)

// JavaScript Logical Operators

let a = true;
let b = false;

console.log("a && b: " + (a && b)); // Output: false (logical AND)
console.log("a || b: " + (a || b)); // Output: true (logical OR)
console.log("!a: " + (!a)); // Output: false (logical NOT)
console.log("!b: " + (!b)); // Output: true (logical NOT)

// Combining Comparison and Logical Operators

let age = 25;
let isAdult = (age >= 18) && (age <= 65);
console.log("Is adult: " + isAdult); // Output: true

let isChildOrSenior = (age < 18) || (age > 65);
console.log("Is child or senior: " + isChildOrSenior); // Output: false

let isNotAdult = !(age >= 18 && age <= 65);
console.log("Is not adult: " + isNotAdult); // Output: false
