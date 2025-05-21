const start = parseInt(prompt("Enter starting number: "));
const end = parseInt(prompt("Enter end number: "));
const divisor1 = parseInt(prompt("Enter first divisor number: "));
const divisor2 = parseInt(prompt("Enter second divisor number: "));

function isDivisable1(num, divisor1){
    if(num%divisor1===0) return true;
    return false;
}

function isDivisable2(num, divisor2){
    if(num%divisor2===0) return true;
    return false;
}

(function customFizzBuzz(start, end, divisor1, divisor2){
    for(let i=start; i<=end; i++){
        if(isDivisable1(i,divisor1) && isDivisable2(i,divisor2)){
                console.log(i,"FizzBuzz");
        } else {
            if(isDivisable1(i,divisor1)){
                console.log(i,"Fizz");
            } else if(isDivisable2(i,divisor2)){
                console.log(i,"Buzz");
            }
        }
    }

})(start, end, divisor1, divisor2);
