// JavaScript Map Methods

// Creating a new Map
let fruitMap = new Map();

// Adding elements to a Map
fruitMap.set("a", "Apple");
fruitMap.set("b", "Banana");
fruitMap.set("c", "Cherry");

console.log("Fruit Map: ");
fruitMap.forEach((value, key) => {
  console.log(key + ": " + value);
});
// Output:
// a: Apple
// b: Banana
// c: Cherry

// Getting a value from a Map
let fruit = fruitMap.get("b");
console.log("Value for key 'b': " + fruit); // Output: Value for key 'b': Banana

// Checking if a key exists in a Map
let hasKey = fruitMap.has("c");
console.log("Has key 'c': " + hasKey); // Output: Has key 'c': true

// Removing an element from a Map
fruitMap.delete("a");
console.log("Fruit Map after delete: ");
fruitMap.forEach((value, key) => {
  console.log(key + ": " + value);
});
// Output:
// b: Banana
// c: Cherry

// Getting the size of a Map
let mapSize = fruitMap.size;
console.log("Map Size: " + mapSize); // Output: Map Size: 2

// Iterating over a Map
for (let [key, value] of fruitMap) {
  console.log(key + ": " + value);
}
// Output:
// b: Banana
// c: Cherry

// Converting a Map to an Array
let fruitArray = Array.from(fruitMap);
console.log("Fruit Array: " + fruitArray);
// Output: Fruit Array: [ [ 'b', 'Banana' ], [ 'c', 'Cherry' ] ]

// Clearing all elements from a Map
fruitMap.clear();
console.log("Fruit Map after clear: " + Array.from(fruitMap)); // Output: Fruit Map after clear: []
