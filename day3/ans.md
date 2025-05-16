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
(9) let planet = prompt("Enter planet number:");
    console.log(typeof planet);
    switch(planet){
        case "1":
            console.log("Distance of Mercury from sun is 57,900,000.");
            break;
        case "2":
            console.log("Distance of Venus from sun is 108,200,000.");
            break;
        case "3":
            console.log("Distance of Earth from sun is 149,600,000.");
            break;
        case "4":
            console.log("Distance of Mars from sun is 227,900,000.");
            break;
        case "5":
            console.log("Distance of Jupiter from sun is 778,600,000.");
            break;
        case "6":
            console.log("Distance of Saturn from sun is 1,433,500,000.");
            break;
        case "7":
            console.log("Distance of Uranus from sun is 2,872,500,000.");
            break;
        case "8":
            console.log("Distance of Neptune from sun is 4,495,100,000.");
            break;
        default:
            console.log("Enter valid planet number");
    }
(10)let inputString = prompt("Enter first number:");
    const num1 = parseInt(inputString, 10);
    inputString = prompt("Enter second number:");
    const num2 = parseInt(inputString, 10);
    inputString = prompt("Enter third number:");
    const num3 = parseInt(inputString, 10);
    if(num1>num2 && num1>num3){
        console.log(num1," is biggest number.");
    } else {
        if(num2>num3){
            console.log(num2," is biggest number.");
        } else {
            console.log(num3," is biggest number.");
        }
    }
(11)function getZodiacSign(day, month) {
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
            return "♒";
        } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
            return "♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
            return "♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
            return "♌";
        } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
            return "♍";
        } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
            return "♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
            return "♏";
        } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
            return "♐";
        }
    }
    const day = parseInt(prompt("Enter the day of your birth:"));
    const month = parseInt(prompt("Enter the month of your birth (1-12):"));
    if ((isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) || ((day==30 || day==31) && month == 2)) {
        console.log("Invalid date input.");
    } else {
        const sign = getZodiacSign(day, month);
        console.log("Your zodiac sign is: " + sign);
    }
```