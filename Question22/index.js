const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let maxi = 0;

ages.sort();
console.log(ages);
console.log("Here is the min and max age");
console.log(`Min: ${ages[0]} and Max: ${ages[ages.length - 1]}`);

// Here is logic for find the median
if(ages.length % 2 === 0) {
    console.log("The median is: ", ages[(ages.length / 2) - 1] + " and " + ages[ages.length / 2]);
    // console.log(`The median are ${ages[(ages.length/2)-1]} and ${ages[ages.length/2]}`);
}
else {
    console.log("The median is: ", ages[ages.length / 2]);
}

// Here is the average of ages
let sum = 0;
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
// console.log(sum);
console.log("The average is: ", sum / ages.length);

// Find the range of the ages(max minus min)
console.log("The range of ages is: ", ages[ages.length - 1] - ages[0]);

const calDiff = (a, b) => {
    return Math.abs(a - b);
}

const differenceOne = calDiff(ages[0], sum / ages.length);
const differenceTwo = calDiff(ages[ages.length - 1], sum / ages.length);

console.log(differenceOne);
console.log(differenceTwo);