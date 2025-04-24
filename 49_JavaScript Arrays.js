// JavaScript Arrays

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits: " + fruits); // Output: Fruits: Apple,Banana,Cherry

// Accessing array elements
let firstFruit = fruits[0];
console.log("First fruit: " + firstFruit); // Output: First fruit: Apple

// Changing an array element
fruits[1] = "Blueberry";
console.log("Updated Fruits: " + fruits); // Output: Updated Fruits: Apple,Blueberry,Cherry

// Array length
let fruitsLength = fruits.length;
console.log("Number of fruits: " + fruitsLength); // Output: Number of fruits: 3

// Looping through an array
for (let i = 0; i < fruitsLength; i++) {
  console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}

// Adding elements to an array
fruits.push("Date");
console.log("Fruits after push: " + fruits); // Output: Fruits after push: Apple,Blueberry,Cherry,Date

// Removing the last element from an array
let lastFruit = fruits.pop();
console.log("Removed fruit: " + lastFruit); // Output: Removed fruit: Date
console.log("Fruits after pop: " + fruits); // Output: Fruits after pop: Apple,Blueberry,Cherry

// Removing the first element from an array
let firstRemovedFruit = fruits.shift();
console.log("Removed first fruit: " + firstRemovedFruit); // Output: Removed first fruit: Apple
console.log("Fruits after shift: " + fruits); // Output: Fruits after shift: Blueberry,Cherry

// Adding elements to the beginning of an array
fruits.unshift("Elderberry");
console.log("Fruits after unshift: " + fruits); // Output: Fruits after unshift: Elderberry,Blueberry,Cherry

// Finding the index of an element
let cherryIndex = fruits.indexOf("Cherry");
console.log("Index of Cherry: " + cherryIndex); // Output: Index of Cherry: 2

// Removing an element by index
fruits.splice(cherryIndex, 1);
console.log("Fruits after splice: " + fruits); // Output: Fruits after splice: Elderberry,Blueberry

// Slicing an array
let slicedFruits = fruits.slice(0, 1);
console.log("Sliced Fruits: " + slicedFruits); // Output: Sliced Fruits: Elderberry

// Concatenating arrays
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log("All Fruits: " + allFruits); // Output: All Fruits: Elderberry,Blueberry,Fig,Grape

// Sorting an array
allFruits.sort();
console.log("Sorted Fruits: " + allFruits); // Output: Sorted Fruits: Blueberry,Elderberry,Fig,Grape

// Reversing an array
allFruits.reverse();
console.log("Reversed Fruits: " + allFruits); // Output: Reversed Fruits: Grape,Fig,Elderberry,Blueberry
