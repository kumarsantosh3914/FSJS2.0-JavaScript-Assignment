const date = new Date();

console.log(`Today's date and time is:  ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`Today's date and time is:  ${date.getDate()}-${date.getFullYear()}-${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`Today's date and time is:  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);