const countries = ["Africa", "Australia", "India", "France", "Ethiopia"];

let count = 0;
for(let i = 0; i < countries.length; i++) {
    if(countries[i] === "Ethiopia") {
        console.log("ETHIOPIA");
    }
    else if(countries[i] !== "Ethiopia") {
        count++;
    }
}

if(count === countries.length) {
    countries.push("Ethiopia");
}

console.log(countries);