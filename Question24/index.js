const oddArray = [];
const evenArray = [];

for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        evenArray[ i/2] = i;
    }
    else {
        oddArray[i/2 - 0.5] = i;
    }
}

console.log(oddArray);
console.log(evenArray);
