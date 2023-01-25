const weight = 55;
const height = 1.55;

function calculatesBMI(h, w) {
    return w / (h * h);
}

const BMI = calculatesBMI(height, weight);
console.log(BMI);

if(BMI < 18.5) {
    console.log("Underweight");
}
else if(BMI >= 18.5 && BMI < 24.9) {
    console.log("Normal");
}
else if(BMI >= 25 && BMI < 29.9) {
    console.log(Overweight);
}
else if(BMI >= 30) {
    console.log("Obses");
}
else {
    console.log("Please Enter correct value");
}