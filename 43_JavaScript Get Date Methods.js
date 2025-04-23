// JavaScript Get Date Methods

// Creating a new Date object
let currentDate = new Date();
console.log("Current Date: " + currentDate);

// Getting the full year
let year = currentDate.getFullYear();
console.log("Year: " + year); // Output: Year: 2024

// Getting the month (0-11, where 0 = January and 11 = December)
let month = currentDate.getMonth();
console.log("Month: " + (month + 1)); // Output: Month: 12

// Getting the day of the month (1-31)
let day = currentDate.getDate();
console.log("Day: " + day); // Output: Day: 27

// Getting the day of the week (0-6, where 0 = Sunday and 6 = Saturday)
let dayOfWeek = currentDate.getDay();
console.log("Day of the Week: " + dayOfWeek); // Output: Day of the Week: 5

// Getting the hours (0-23)
let hours = currentDate.getHours();
console.log("Hours: " + hours); // Output: Hours: 18

// Getting the minutes (0-59)
let minutes = currentDate.getMinutes();
console.log("Minutes: " + minutes); // Output: Minutes: 7

// Getting the seconds (0-59)
let seconds = currentDate.getSeconds();
console.log("Seconds: " + seconds); // Output: Seconds: 0

// Getting the milliseconds (0-999)
let milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds: " + milliseconds); // Output: Milliseconds: 0

// Getting the time in milliseconds since January 1, 1970
let timeInMillis = currentDate.getTime();
console.log("Time in milliseconds since January 1, 1970: " + timeInMillis);

// Getting the timezone offset in minutes
let timezoneOffset = currentDate.getTimezoneOffset();
console.log("Timezone Offset (in minutes): " + timezoneOffset);
