// JavaScript if, else, and else if

let age = 25;

// if statement
if (age >= 18) {
  console.log("You are an adult.");
}

// if...else statement
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

// if...else if...else statement
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}

// Nested if statements
let score = 85;

if (score >= 60) {
  console.log("You passed.");
  if (score >= 90) {
    console.log("You got an A.");
  } else if (score >= 80) {
    console.log("You got a B.");
  } else if (score >= 70) {
    console.log("You got a C.");
  } else {
    console.log("You got a D.");
  }
} else {
  console.log("You failed.");
}
