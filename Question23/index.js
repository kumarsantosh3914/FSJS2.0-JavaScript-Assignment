const number = prompt("Enter a Positive number");

let isPrime;
if(number === 1) {
    console.log("1 is neither prime nor a composite number");
}
else if(number > 1) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrime = 1;
            break;
        }
    }
    if(isPrime === 1) {
        console.log("The number is not prime");
    }
    else {
        console.log("The number is prime");
    }
}