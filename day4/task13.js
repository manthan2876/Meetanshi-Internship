const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

console.log("multiplication table of ",num1,"X",num2);
for(let i=1;i<=num1;i++){
    let str ="";
    for(let j=1;j<=num2;j++){
        str += `${i*j} `;
    }
    console.log(str);
}