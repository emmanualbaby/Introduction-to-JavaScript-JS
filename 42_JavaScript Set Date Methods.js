// JavaScript Set Date Methods

// Creating a new Date object
let currentDate = new Date();
console.log("Current Date: " + currentDate);

// Setting the full year
currentDate.setFullYear(2025);
console.log("Updated Year: " + currentDate); // Output: Updated Year: 2025

// Setting the month (0-11, where 0 = January and 11 = December)
currentDate.setMonth(11); // December
console.log("Updated Month: " + currentDate); // Output: Updated Month: December

// Setting the day of the month (1-31)
currentDate.setDate(31);
console.log("Updated Day: " + currentDate); // Output: Updated Day: 31

// Setting the hours (0-23)
currentDate.setHours(23);
console.log("Updated Hours: " + currentDate); // Output: Updated Hours: 23

// Setting the minutes (0-59)
currentDate.setMinutes(59);
console.log("Updated Minutes: " + currentDate); // Output: Updated Minutes: 59

// Setting the seconds (0-59)
currentDate.setSeconds(59);
console.log("Updated Seconds: " + currentDate); // Output: Updated Seconds: 59

// Setting the milliseconds (0-999)
currentDate.setMilliseconds(999);
console.log("Updated Milliseconds: " + currentDate); // Output: Updated Milliseconds: 999

// Setting the time in milliseconds since January 1, 1970
let newTimeInMillis = Date.now();
currentDate.setTime(newTimeInMillis);
console.log("Updated Time in milliseconds since January 1, 1970: " + currentDate);
