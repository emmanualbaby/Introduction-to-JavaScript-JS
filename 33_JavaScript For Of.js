// JavaScript for...of Loop

// Looping through the elements of an array
let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Cherry

// Looping through the characters of a string
let text = "Hello";

for (let char of text) {
  console.log("Character: " + char);
}
// Output:
// Character: H
// Character: e
// Character: l
// Character: l
// Character: o

// Looping through the values of a Set
let fruitSet = new Set(["Apple", "Banana", "Cherry"]);

for (let fruit of fruitSet) {
  console.log("Fruit from Set: " + fruit);
}
// Output:
// Fruit from Set: Apple
// Fruit from Set: Banana
// Fruit from Set: Cherry

// Looping through the values of a Map
let fruitMap = new Map([
  ["a", "Apple"],
  ["b", "Banana"],
  ["c", "Cherry"]
]);

for (let [key, value] of fruitMap) {
  console.log("Key: " + key + ", Value: " + value);
}
// Output:
// Key: a, Value: Apple
// Key: b, Value: Banana
// Key: c, Value: Cherry
