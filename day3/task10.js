let inputString = prompt("Enter first number:");
const num1 = parseInt(inputString, 10);
inputString = prompt("Enter second number:");
const num2 = parseInt(inputString, 10);
inputString = prompt("Enter third number:");
const num3 = parseInt(inputString, 10);

if(num1>num2 && num1>num3){
    console.log(num1," is biggest number.");
} else {
    if(num2>num3){
        console.log(num2," is biggest number.");
    } else {
        console.log(num3," is biggest number.");
    }
}