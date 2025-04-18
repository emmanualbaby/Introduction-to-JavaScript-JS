// JavaScript while Loop

// Basic while loop
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4

// while loop with a condition
let number = 10;
while (number > 0) {
  console.log("Number: " + number);
  number--;
}
// Output:
// Number: 10
// Number: 9
// Number: 8
// Number: 7
// Number: 6
// Number: 5
// Number: 4
// Number: 3
// Number: 2
// Number: 1

// Infinite while loop (use with caution)
// Uncomment the following lines to see an infinite loop in action
// let infiniteCount = 0;
// while (true) {
//   console.log("Infinite Count: " + infiniteCount);
//   infiniteCount++;
// }

// while loop with an array
let fruits = ["Apple", "Banana", "Cherry"];
let index = 0;
while (index < fruits.length) {
  console.log("Fruit: " + fruits[index]);
  index++;
}
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Cherry
