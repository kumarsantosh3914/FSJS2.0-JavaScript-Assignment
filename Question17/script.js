const month = alert("Enter the month");

if(month === "February") {
    console.log("The number of days are either 28 or 29");
}
else if(month === "Jaunary" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
    console.log("The number of days are 31");
}
else if( month === "April" || month === "June" || month === "September" || month === "November") {
    console.log("The number of days are 30");
}
else {
    console.log("Enter a valid month");
}