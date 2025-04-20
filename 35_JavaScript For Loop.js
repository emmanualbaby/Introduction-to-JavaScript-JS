// JavaScript for Loop

// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}
// Output:
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4

// Looping through an array
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}
// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Fruit 3: Cherry

// Nested for loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("i = " + i + ", j = " + j);
  }
}
// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// i = 2, j = 2
// i = 2, j = 3
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3

// Looping through an array of objects
let cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Accord", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 }
];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].make + " " + cars[i].model + " (" + cars[i].year + ")");
}
// Output:
// Toyota Camry (2020)
// Honda Accord (2019)
// Ford Mustang (2021)
