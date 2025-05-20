//named function
function sum (a,b){
    return a+b;
}
console.log(sum(5,3));

//anonymous function
const sumAnnonymous = function (a,b){
    return a+b;
}
console.log(sumAnnonymous(5,3));

//arrow function
const sumArrow = (a,b) => {
    return a+b;
}
console.log(sumArrow(5,3));

//function expressiom
const add = function(a, b) {
  return a + b;
};
console.log(add(5,3));

//default parameters
const addWithDefault = function(a=0,b=0){
    return a+b;
}
console.log(addWithDefault());

//callback function
function fun1(name, callback){
    console.log("hello,",name);
    callback();
}
function fun2(){
    console.log("How are you?")
}
fun1("Ram",fun2);

//IIFE
(() => {
    console.log("I ma immidiately invoked function.");
})();