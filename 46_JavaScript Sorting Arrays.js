// JavaScript Sorting Arrays

let fruits = ["Banana", "Apple", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

// Sorting an array alphabetically
fruits.sort();
console.log("Alphabetically sorted fruits: " + fruits); // Output: Alphabetically sorted fruits: Apple,Banana,Cherry,Date,Elderberry,Fig,Grape

// Reversing an array
fruits.reverse();
console.log("Reversed fruits: " + fruits); // Output: Reversed fruits: Grape,Fig,Elderberry,Date,Cherry,Banana,Apple

// Sorting an array of numbers in ascending order
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {
  return a - b;
});
console.log("Numbers sorted in ascending order: " + numbers); // Output: Numbers sorted in ascending order: 1,5,10,25,40,100

// Sorting an array of numbers in descending order
numbers.sort(function(a, b) {
  return b - a;
});
console.log("Numbers sorted in descending order: " + numbers); // Output: Numbers sorted in descending order: 100,40,25,10,5,1

// Sorting an array of objects by a property
let cars = [
  {type: "Volvo", year: 2016},
  {type: "Saab", year: 2001},
  {type: "BMW", year: 2010}
];

cars.sort(function(a, b) {
  return a.year - b.year;
});
console.log("Cars sorted by year: ");
cars.forEach(function(car) {
  console.log(car.type + " " + car.year);
});
// Output:
// Cars sorted by year:
// Saab 2001
// BMW 2010
// Volvo 2016

// Sorting an array of objects by a string property
cars.sort(function(a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
console.log("Cars sorted by type: ");
cars.forEach(function(car) {
  console.log(car.type + " " + car.year);
});
// Output:
// Cars sorted by type:
// BMW 2010
// Saab 2001
// Volvo 2016
