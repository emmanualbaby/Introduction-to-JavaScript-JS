// JavaScript Random

// Generating a random number between 0 (inclusive) and 1 (exclusive)
let randomValue = Math.random();
console.log("Random value between 0 and 1: " + randomValue);

// Generating a random number between 0 and 10
let randomValue0To10 = Math.random() * 10;
console.log("Random value between 0 and 10: " + randomValue0To10);

// Generating a random integer between 0 and 10
let randomInt0To10 = Math.floor(Math.random() * 11);
console.log("Random integer between 0 and 10: " + randomInt0To10);

// Generating a random integer between two values (min and max, inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomIntBetween = getRandomInt(5, 15);
console.log("Random integer between 5 and 15: " + randomIntBetween);

// Generating a random element from an array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log("Random fruit: " + randomFruit);
