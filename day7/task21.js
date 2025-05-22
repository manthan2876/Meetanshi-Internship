const num1 = 114;
const num2 = 114;

function findClosest(num1,num2){
    return Math.abs(num1-100) < Math.abs(num2-100) ? num1 : num2;
}
console.log(findClosest(num1,num2));