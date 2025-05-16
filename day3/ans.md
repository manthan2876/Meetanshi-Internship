# Questions

(1) What is the difference between var, let, and const in JavaScript? <br>
(2) How do you declare a variable in JavaScript? Give an example. <br>
(3) Write a JavaScript program to check if a number is positive, negative, or zero using an if-else statement. <br>
(4) Write a JavaScript program to check if a person is eligible to vote (age 18 or above). <br>
(5) learn document object in javascript <br>
(6) Write a program to check whether a given number is divisible by both 3 and 5. <br>
(7) What is the difference between == and === in JavaScript? <br>
(8) Write a JavaScript program to check if a given year is a leap year or not. <br>

## answers

(1)  var's scope: function scoped, can be reassign and redeclare. <br>
    let's scope: block scoped, can be reassign but redeclaration is not possible. <br>
    const's scope: block scoped, can't be reassign and redeclare. <br>
(2)  using var, let keyword <br>
    var str = "hello" <br>
    let str = "hello" <br>
(3)  let num = 0; <br>
    if(num>0){<br>
        console.log("number is positive.");<br>
    } else if (num<0) {<br>
        console.log("number is negative.");<br>
    } else {<br>
        console.log("number is zero.");<br>
    }<br>
(4)  let age = 17;<br>
    if(age>=18){<br>
        console.log("you are eligible for vote");<br>
    } else if (age < 18 && age > 0){<br>
        console.log("you are not eligible for vote");<br>
    } else {<br>
        console.log("enter valid age");<br>
    }<br>
(5)  <br>
(6)  let num = 15;<br>
    if( num%3==0 && num%5==0){<br>
        console.log("number is divisible by 3 and 5 both")<br>
    } else {<br>
        console.log("number is not divisible by 3 and 5 both")<br>
    }<br>
(7)  "==" compares only value while "===" compares both value and type<br>
(8)  let year = 1000;<br>
    if( year % 400 == 0 ){<br>
        console.log("Year is leap year");<br>
    } else if ( year % 100 == 0){<br>
        console.log("Year is not leap year");<br>
    } else if (year % 4 == 0){<br>
        console.log("Year is leap year");<br>
    } else {<br>
        console.log("Year is not leap year");<br>
    }<br>
