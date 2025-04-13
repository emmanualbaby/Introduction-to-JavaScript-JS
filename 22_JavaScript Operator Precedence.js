// JavaScript Operator Precedence

let a = 10;
let b = 5;
let c = 2;

// Multiplication and Division before Addition and Subtraction
let result1 = a + b * c; // 10 + (5 * 2) = 20
console.log("Result 1: " + result1); // Output: Result 1: 20

let result2 = (a + b) * c; // (10 + 5) * 2 = 30
console.log("Result 2: " + result2); // Output: Result 2: 30

// Parentheses to change precedence
let result3 = a / b * c; // (10 / 5) * 2 = 4
console.log("Result 3: " + result3); // Output: Result 3: 4

let result4 = a / (b * c); // 10 / (5 * 2) = 1
console.log("Result 4: " + result4); // Output: Result 4: 1

// Exponentiation before Multiplication and Division
let result5 = a * b ** c; // 10 * (5 ** 2) = 250
console.log("Result 5: " + result5); // Output: Result 5: 250

let result6 = (a * b) ** c; // (10 * 5) ** 2 = 2500
console.log("Result 6: " + result6); // Output: Result 6: 2500

// Logical AND before Logical OR
let result7 = true || false && false; // true || (false && false) = true
console.log("Result 7: " + result7); // Output: Result 7: true

let result8 = (true || false) && false; // (true || false) && false = false
console.log("Result 8: " + result8); // Output: Result 8: false

// Assignment operators
let result9 = a = b + c; // a = (5 + 2) = 7
console.log("Result 9: " + result9); // Output: Result 9: 7

let result10 = a += b * c; // a += (5 * 2) = 17
console.log("Result 10: " + result10); // Output: Result 10: 17
