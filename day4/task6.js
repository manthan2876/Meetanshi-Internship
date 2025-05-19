const num = parseInt(prompt("Enter number: "));

function loose(num){
    if(num%2=="0")
    console.log("Even");
    else
        console.log("Odd");
}

function strict(num){
    if(num%2===0)
        console.log('Even');
    else
        console.log("Odd");
}

console.log("Using loose comparision ", num , " is ");
loose(num);
console.log("Using strict comparision ", num , " is ");
strict(num);