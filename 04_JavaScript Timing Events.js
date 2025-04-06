//JavaScript Timing Events
// setTimeout and clearTimeout

// Set a timeout to execute a function after 2 seconds
let timeoutId = window.setTimeout(() => {
  console.log("Timeout executed");
}, 2000);

// Clear the timeout before it executes
window.clearTimeout(timeoutId);


// setInterval and clearInterval

// Set an interval to execute a function every 1 second
let intervalId = window.setInterval(() => {
  console.log("Interval executed");
}, 1000);

// Clear the interval after 5 seconds
window.setTimeout(() => {
  window.clearInterval(intervalId);
  console.log("Interval cleared");
}, 5000);
