// JavaScript Template Strings

// Using template strings to create a string with embedded expressions
let firstName = "John";
let lastName = "Doe";
let age = 30;

// Template string with embedded expressions
let introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(introduction); // Output: Hello, my name is John Doe and I am 30 years old.

// Multiline strings using template literals
let multilineString = `This is a string
that spans multiple
lines.`;
console.log(multilineString);

// Expression interpolation
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

// Nested template literals
let nestedTemplate = `The result of ${`5 + 10 is ${5 + 10}`}.`;
console.log(nestedTemplate); // Output: The result of 5 + 10 is 15.
