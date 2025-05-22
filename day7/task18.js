const arr = [1,2,3,4,5];

function sumOfArray(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}
console.log(`Summetion of [${arr}]'s all elements is ${sumOfArray(arr)}`);