// JavaScript Date Formats

// Creating a new Date object
let currentDate = new Date();
console.log("Current Date: " + currentDate);

// ISO Date (YYYY-MM-DD)
let isoDate = currentDate.toISOString().split('T')[0];
console.log("ISO Date: " + isoDate); // Output: ISO Date: 2024-12-27

// Short Date (MM/DD/YYYY)
let shortDate = currentDate.toLocaleDateString('en-US');
console.log("Short Date: " + shortDate); // Output: Short Date: 12/27/2024

// Long Date (Month DD, YYYY)
let longDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
console.log("Long Date: " + longDate); // Output: Long Date: December 27, 2024

// Full Date and Time (Weekday, Month DD, YYYY, HH:MM:SS AM/PM)
let fullDateTime = currentDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
console.log("Full Date and Time: " + fullDateTime); // Output: Full Date and Time: Friday, December 27, 2024, 6:05:00 PM

// Custom Date Format (DD-MM-YYYY)
let customDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
console.log("Custom Date: " + customDate); // Output: Custom Date: 27-12-2024

// Custom Time Format (HH:MM:SS)
let customTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
console.log("Custom Time: " + customTime); // Output: Custom Time: 18:05:00
