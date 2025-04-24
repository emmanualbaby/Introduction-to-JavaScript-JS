// JavaScript Array Search Methods

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

// indexOf() method
let indexOfCherry = fruits.indexOf("Cherry");
console.log("Index of 'Cherry': " + indexOfCherry); // Output: Index of 'Cherry': 2

// lastIndexOf() method
let lastIndexOfDate = fruits.lastIndexOf("Date");
console.log("Last index of 'Date': " + lastIndexOfDate); // Output: Last index of 'Date': 3

// includes() method
let includesBanana = fruits.includes("Banana");
console.log("Includes 'Banana': " + includesBanana); // Output: Includes 'Banana': true

// find() method
let foundFruit = fruits.find(function(item) {
  return item.startsWith("E");
});
console.log("Found fruit: " + foundFruit); // Output: Found fruit: Elderberry

// findIndex() method
let foundIndex = fruits.findIndex(function(item) {
  return item.startsWith("E");
});
console.log("Found index: " + foundIndex); // Output: Found index: 4

// filter() method
let filteredFruits = fruits.filter(function(item) {
  return item.length > 5;
});
console.log("Filtered fruits: " + filteredFruits); // Output: Filtered fruits: Banana,Cherry,Elderberry

// some() method
let someLongFruits = fruits.some(function(item) {
  return item.length > 5;
});
console.log("Some long fruits: " + someLongFruits); // Output: Some long fruits: true

// every() method
let allLongFruits = fruits.every(function(item) {
  return item.length > 5;
});
console.log("All long fruits: " + allLongFruits); // Output: All long fruits: false
