const num1 = 50;
const num2 = 40;

const operator = prompt("Enter the operator");
switch(operator) {
    case "+":
        console.log(num1 - num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Please ! Enter a valid operator");
}