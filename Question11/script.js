/**
 * 1. What is the year today ?
 * 2. What is the month today as a number ?
 * 3. What is the data today ?
 * 4. What is the day today as a number ?
 * 5. What is the hours now ?
 * 6. What is the minutes now ?
 * 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

const date = new Date();
const pastDate = new Date("1970-01-01");
const elapsed = (date - pastDate);


console.log("Today's year: ", date.getFullYear());
console.log("Today's month: ", date.getMonth());
console.log("Today's date: ", date.getDate());
console.log("Today's day: ", date.getDay());
console.log("Hours Now: ", date.getHours());
console.log("Minutes Now: ", date.getMinutes());
console.log("Second elapsed between 170-01-01 to 2023-01-16 is: ", elapsed / 1000);

