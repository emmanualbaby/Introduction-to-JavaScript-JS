// JavaScript Hoisting

// Hoisting with var
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// Hoisting with let and const (will cause ReferenceError)
try {
  console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
} catch (error) {
  console.log(error.message);
}
let hoistedLet = "I am not hoisted";
console.log(hoistedLet); // Output: I am not hoisted

try {
  console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
} catch (error) {
  console.log(error.message);
}
const hoistedConst = "I am not hoisted";
console.log(hoistedConst); // Output: I am not hoisted

// Function declarations are hoisted
hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
  console.log("I am a hoisted function");
}

// Function expressions are not hoisted
try {
  hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function
} catch (error) {
  console.log(error.message);
}
var hoistedFunctionExpression = function() {
  console.log("I am not a hoisted function expression");
};
hoistedFunctionExpression(); // Output: I am not a hoisted function expression
