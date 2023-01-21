var age = prompt("Enter your age: ");

if(age >= 18) {
    console.log("You are old enough to drive");
}
else {
    console.log("Wait another: ", 18 - age + " years" );
}