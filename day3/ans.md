## Questions

(1) What is the difference between var, let, and const in JavaScript?  
(2) How do you declare a variable in JavaScript? Give an example.  
(3) Write a JavaScript program to check if a number is positive, negative, or zero using an if-else statement.  
(4) Write a JavaScript program to check if a person is eligible to vote (age 18 or above).  
(5) learn document object in javascript.  
(6) Write a program to check whether a given number is divisible by both 3 and 5.  
(7) What is the difference between == and === in JavaScript?  
(8) Write a JavaScript program to check if a given year is a leap year or not.  

## answers
```markdown
(1)  var's scope: function scoped, can be reassign and redeclare.  
    let's scope: block scoped, can be reassign but redeclaration is not possible.  
    const's scope: block scoped, can't be reassign and redeclare.  
(2)  using var, let keyword  
    var str = "hello"  
    let str = "hello"  
(3)  let num = 0;  
    if(num>0){  
        console.log("number is positive.");  
    } else if (num<0) {  
        console.log("number is negative.");  
    } else {  
        console.log("number is zero.");  
    }  
(4)  let age = 17;  
    if(age>=18){  
        console.log("you are eligible for vote");  
    } else if (age < 18 && age > 0){  
        console.log("you are not eligible for vote");  
    } else {  
        console.log("enter valid age");  
    }  
(5)  
(6)  let num = 15;  
    if( num%3==0 && num%5==0){  
        console.log("number is divisible by 3 and 5 both")  
    } else {  
        console.log("number is not divisible by 3 and 5 both")  
    }  
(7)  "==" compares only value while "===" compares both value and type  
(8)  let year = 1000;  
    if( year % 400 == 0 ){  
        console.log("Year is leap year");  
    } else if ( year % 100 == 0){  
        console.log("Year is not leap year");  
    } else if (year % 4 == 0){  
        console.log("Year is leap year");  
    } else {  
        console.log("Year is not leap year");  
    }
```