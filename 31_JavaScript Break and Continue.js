// JavaScript break and continue

// Using break in a for loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log("Iteration: " + i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4

// Using continue in a for loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the rest of the loop iteration when i is 5
  }
  console.log("Iteration: " + i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
// Iteration: 6
// Iteration: 7
// Iteration: 8
// Iteration: 9

// Using break in a while loop
let count = 0;
while (count < 10) {
  if (count === 5) {
    break; // Exit the loop when count is 5
  }
  console.log("Count: " + count);
  count++;
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4

// Using continue in a while loop
count = 0;
while (count < 10) {
  count++;
  if (count === 5) {
    continue; // Skip the rest of the loop iteration when count is 5
  }
  console.log("Count: " + count);
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 6
// Count: 7
// Count: 8
// Count: 9
// Count: 10
