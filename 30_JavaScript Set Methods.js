// JavaScript Set Methods

// Creating a new Set
let fruitSet = new Set();

// Adding elements to a Set
fruitSet.add("Apple");
fruitSet.add("Banana");
fruitSet.add("Cherry");
fruitSet.add("Apple"); // Duplicate elements are ignored

console.log("Fruit Set: " + Array.from(fruitSet)); // Output: Fruit Set: Apple,Banana,Cherry

// Checking if an element exists in a Set
let hasBanana = fruitSet.has("Banana");
console.log("Has Banana: " + hasBanana); // Output: Has Banana: true

// Removing an element from a Set
fruitSet.delete("Banana");
console.log("Fruit Set after delete: " + Array.from(fruitSet)); // Output: Fruit Set after delete: Apple,Cherry

// Getting the size of a Set
let setSize = fruitSet.size;
console.log("Set Size: " + setSize); // Output: Set Size: 2

// Iterating over a Set
for (let fruit of fruitSet) {
  console.log("Fruit: " + fruit);
}
// Output:
// Fruit: Apple
// Fruit: Cherry

// Converting a Set to an Array
let fruitArray = Array.from(fruitSet);
console.log("Fruit Array: " + fruitArray); // Output: Fruit Array: Apple,Cherry

// Clearing all elements from a Set
fruitSet.clear();
console.log("Fruit Set after clear: " + Array.from(fruitSet)); // Output: Fruit Set after clear: 
