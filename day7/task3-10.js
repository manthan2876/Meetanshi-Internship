//task3
const num =3;
(function (num){
    return num%2==0 ? console.log("Even") : console.log("Odd");
})(num);

//task4
(function (n){
    let str ="";
    for(let i=0;i<n;i++){
        str+=((i+1)+" ");
    }
    console.log("Numbers up to",n,":",str);
})(10);

//task5
function add(a,b){
    return a+b;
}
console.log("sum of 5 and 3 is",add(5,3))

//task6
const fruits = ["apple", "mango", "banana", "orange", "grapes"];
console.log("Second fruit is:",fruits[1]);

//task7
let a=2, b=3;
console.log("Before swap\na=",a,"b=",b);
function swap(a,b){
    a=(a+b);
    b=a-b;
    a=a-b;
    console.log("After swap\na=",a,"b=",b);
}
swap(2,3);

//task8
function fibonacci(n){
    if(n==1 || n==0)
        return 1;
    return fibonacci(n-2)+fibonacci(n-1);
}
(function (n){
    let str="";
    for(let i=0;i<n;i++){
        str+=(fibonacci(i)+" ");
    }
    console.log("Fibinacci series up to",n,":",str);
})(10);

//task9
const number = 1234;
console.log("Before reverse:",number);
function reverse(num, reversed = 0) {
    if (num === 0) {
        return reversed;
    }
    return reverse(Math.floor(num / 10),reversed * 10 + num % 10);
}
console.log("After reverse:",reverse(number));

//task10
let year = 1000;
function checkLeap(year){
    if( year % 400 == 0 ){
        return true;
    } else if ( year % 100 == 0){
        return false;
    } else if (year % 4 == 0){
        return true;
    } else {
        return false;
    }
}
console.log("Year",year,checkLeap(year)?"is leap year.":"isn't leap year");