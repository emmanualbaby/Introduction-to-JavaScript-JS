// JavaScript Array Methods

let fruits = ["Apple", "Banana", "Cherry"];

// toString() method
let fruitsString = fruits.toString();
console.log("Array as string: " + fruitsString); // Output: Array as string: Apple,Banana,Cherry

// join() method
let fruitsJoin = fruits.join(" - ");
console.log("Array joined with ' - ': " + fruitsJoin); // Output: Array joined with ' - ': Apple - Banana - Cherry

// pop() method
let lastFruit = fruits.pop();
console.log("Popped fruit: " + lastFruit); // Output: Popped fruit: Cherry
console.log("Array after pop: " + fruits); // Output: Array after pop: Apple,Banana

// push() method
fruits.push("Date");
console.log("Array after push: " + fruits); // Output: Array after push: Apple,Banana,Date

// shift() method
let firstFruit = fruits.shift();
console.log("Shifted fruit: " + firstFruit); // Output: Shifted fruit: Apple
console.log("Array after shift: " + fruits); // Output: Array after shift: Banana,Date

// unshift() method
fruits.unshift("Elderberry");
console.log("Array after unshift: " + fruits); // Output: Array after unshift: Elderberry,Banana,Date

// length property
let fruitsLength = fruits.length;
console.log("Array length: " + fruitsLength); // Output: Array length: 3

// delete operator
delete fruits[1];
console.log("Array after delete: " + fruits); // Output: Array after delete: Elderberry,,Date

// concat() method
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated array: " + allFruits); // Output: Concatenated array: Elderberry,,Date,Fig,Grape

// splice() method
fruits.splice(1, 1, "Blueberry", "Cherry");
console.log("Array after splice: " + fruits); // Output: Array after splice: Elderberry,Blueberry,Cherry,Date

// slice() method
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced array: " + slicedFruits); // Output: Sliced array: Blueberry,Cherry

// sort() method
fruits.sort();
console.log("Sorted array: " + fruits); // Output: Sorted array: Blueberry,Cherry,Date,Elderberry

// reverse() method
fruits.reverse();
console.log("Reversed array: " + fruits); // Output: Reversed array: Elderberry,Date,Cherry,Blueberry

// indexOf() method
let cherryIndex = fruits.indexOf("Cherry");
console.log("Index of Cherry: " + cherryIndex); // Output: Index of Cherry: 2

// lastIndexOf() method
let lastIndex = fruits.lastIndexOf("Date");
console.log("Last index of Date: " + lastIndex); // Output: Last index of Date: 1

// includes() method
let includesBanana = fruits.includes("Banana");
console.log("Includes Banana: " + includesBanana); // Output: Includes Banana: false

// forEach() method
fruits.forEach(function(item, index) {
  console.log("Fruit at index " + index + ": " + item);
});

// map() method
let upperFruits = fruits.map(function(item) {
  return item.toUpperCase();
});
console.log("Uppercase fruits: " + upperFruits); // Output: Uppercase fruits: ELDERBERRY,DATE,CHERRY,BLUEBERRY

// filter() method
let longFruits = fruits.filter(function(item) {
  return item.length > 5;
});
console.log("Long fruits: " + longFruits); // Output: Long fruits: Elderberry,Blueberry

// reduce() method
let fruitString = fruits.reduce(function(total, item) {
  return total + item;
});
console.log("Concatenated fruits: " + fruitString); // Output: Concatenated fruits: ElderberryDateCherryBlueberry

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

// find() method
let foundFruit = fruits.find(function(item) {
  return item.length > 5;
});
console.log("Found fruit: " + foundFruit); // Output: Found fruit: Elderberry

// findIndex() method
let foundIndex = fruits.findIndex(function(item) {
  return item.length > 5;
});
console.log("Found index: " + foundIndex); // Output: Found index: 0

// from() method
let arrayFromString = Array.from("Hello");
console.log("Array from string: " + arrayFromString); // Output: Array from string: H,e,l,l,o

// isArray() method
let isArray = Array.isArray(fruits);
console.log("Is array: " + isArray); // Output: Is array: true

// keys() method
let keys = fruits.keys();
for (let key of keys) {
  console.log("Key: " + key);
}

// entries() method
let entries = fruits.entries();
for (let entry of entries) {
  console.log("Entry: " + entry);
}

// fill() method
let filledArray = fruits.fill("Kiwi", 1, 3);
console.log("Filled array: " + filledArray); // Output: Filled array: Elderberry,Kiwi,Kiwi,Blueberry
