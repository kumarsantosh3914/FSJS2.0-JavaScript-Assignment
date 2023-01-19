console.log("Without using console.log()");
console.log("The value of 4 > 3 is true");
console.log("The value of 4 >= 3 is true");
console.log("The value of 4 < 3 is false");
console.log("The value of 4 <= 3 is false");
console.log("The value of 4 == 4 is true");
console.log("The value of 4 === 3 is true");
console.log("The value of 4 != 4 is false");
console.log("The value of 4 !== 4 is false");
console.log("The value of 4 != '4' is false");
console.log("The value of 4 == '4' is true");
console.log("The value of 4 === '4' is false");

console.log("After using console.log()");
console.log(`The value of 4 > 3 is ${4 > 3}`);
console.log(`The value of 4 >= 3 is ${4 >= 3}`);
console.log(`The value of 4 < 3 is ${4 < 3}`);
console.log(`The value of 4 <= 3 is ${4 <= 3}`);
console.log(`The value of 4 == 4 is ${4 == 4}`);
console.log(`The value of 4 === 4 is ${4 === 4}`);
console.log(`The value of 4 != 4 is ${4 != 4}`);
console.log(`The value of 4 !== 4 is ${4 !== 4}`);
console.log(`The value of 4 != '4' is ${4 != '4'}`);
console.log(`The value of 4 == '4' is ${4 == '4'}`);
console.log(`The value of 4 === 4 is ${4 === '4'}`);

const pyString = "python";
const jarString = "jargon";

if(pyString.length !== jarString.length) {
    console.log("truthy comparasion");
}
else {
    console.log("falsy comparasion");
}