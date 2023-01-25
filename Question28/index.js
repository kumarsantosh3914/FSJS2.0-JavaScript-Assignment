// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output.
let star = "";
for(let i = 0; i <= 3; i++) {
    for(let j = 0; j < i; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output.
let star0 = "";
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        star0 += "*";
    }
    star0 += "\n";
}
console.log(star0);

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output.
const nc = 3;
let star1 = "";
for(let i = 0; i < nc; i++) {
    for(let j = 0; j < nc - i; j++) {
        star1 += " ";
    }
    for(let j = 0; j <= 2 * i; j++) {
        star1 += "*";
    }
    star1 += "\n";
}
console.log(star1);