// JavaScript Array Iteration Methods

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("for loop - Fruit " + (i + 1) + ": " + fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
  console.log("for...of loop - Fruit: " + fruit);
}

// forEach() method
fruits.forEach(function(fruit, index) {
  console.log("forEach() - Fruit " + (index + 1) + ": " + fruit);
});

// map() method
let upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log("map() - Uppercase Fruits: " + upperFruits);

// filter() method
let longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log("filter() - Long Fruits: " + longFruits);

// reduce() method
let fruitString = fruits.reduce(function(total, fruit) {
  return total + fruit + " ";
}, "");
console.log("reduce() - Concatenated Fruits: " + fruitString.trim());

// some() method
let someLongFruits = fruits.some(function(fruit) {
  return fruit.length > 5;
});
console.log("some() - Some long fruits: " + someLongFruits);

// every() method
let allLongFruits = fruits.every(function(fruit) {
  return fruit.length > 5;
});
console.log("every() - All long fruits: " + allLongFruits);

// find() method
let foundFruit = fruits.find(function(fruit) {
  return fruit.startsWith("E");
});
console.log("find() - Found fruit: " + foundFruit);

// findIndex() method
let foundIndex = fruits.findIndex(function(fruit) {
  return fruit.startsWith("E");
});
console.log("findIndex() - Found index: " + foundIndex);
