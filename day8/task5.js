console.log(0 || "default");
console.log(0 ?? "default");
console.log(null || "default");
console.log(null ?? "default");
console.log(undefined || "default");
console.log(undefined ?? "default");
let value = null ?? "default value";
console.log(value); 
// "||" will return the right-hand operand if the left-hand operand is any falsy value while "??" will return the right-hand operand only if the left-hand operand is strictly null or undefined