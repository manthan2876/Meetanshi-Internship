## Questions

```
(1) Basic if-else & Logical Operators
    Traffic Light System:
    Write a program that takes a lightColor variable ("red", "yellow", or "green") and prints:
    "Stop" for "red",
    "Slow down" for "yellow",
    "Go" for "green".  
(2) Login System:
    You have two variables: username and password. If both are correct ("admin" and "1234"), print "Login Successful", otherwise "Login Failed".  
(3) Number Range Check:
    Write a program that checks if a number is between 50 and 100 (inclusive) using logical operators.  
(4) == vs === Practice
    String vs Number Comparison:
    Declare a variable x = "10"; and check if x == 10 and x === 10. Print different messages for each case.  
(5) Falsy Values Check:
    Use an if condition to check if a variable y = 0; evaluates as false when using == but true when using ===.  
(6) Odd or Even Check (Loose vs Strict Comparison):
    Take an input number and check if it's even using == "0" vs === 0 in a modulus operation.  
(7) Ternary Operator Practice
    Voting Eligibility:
    Write a program that takes an age input and uses the ternary operator to print "Eligible to vote" if the age is 18 or more, otherwise "Not eligible".  
(8) Discount System:
    A user gets a 10% discount if they spend more than $100. Use a ternary operator to determine whether the discount applies.  
(9) Temperature Check:
    Create a program that takes a temperature value and uses a ternary operator to print "Hot" if it's above 30°C, otherwise "Cool".
(10)Logical Operators with Multiple Conditions
    Leap Year Checker:
    Write a program that checks if a given year is a leap year using logical conditions:
    The year must be divisible by 4.
    If the year is divisible by 100, it must also be divisible by 400.
```

## answers
```markdown
(1) const action = prompt("Enter action(Stop/ Slow down/ Go): ");
    if(action === "Stop")
        console.log("Red");
    else if (action === "Go slow")
        console.log("yellow");
    else if (action === "Go")
        console.log("Green");
    else
        console.log("Enter valid action");  
(2) const username = prompt("Enter username: ");
    const password = prompt("Enter password: ");
    if( username === "admin" && password === "1234")
        console.log("Login Successful.!");
    else
        console.log("Login Failed.!");  
(3) const num = parseInt(prompt("Enter number: "));
    if(num >= 50 && num <= 100)
        console.log("Number is in range.")
    else
        console.log("Number is out of reange.");
(4) const num = "10";
    console.log("num==10",num==10);
    console.log("num===10",num===10);
(5) const y = prompt("Enter y:");
    console.log(y==0);
    console.log(y===0);
(6) const num = parseInt(prompt("Enter number: "));
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
(7) const age = parseInt(prompt("Enter age: "));
    age>=18 ? console.log("Eligible to vote") : console.log("Not eligible"); 
(8) const amount = parseInt(prompt("Enter total amount: "));
    amount>100 ? console.log("Discount is applicable, Total amount = ",amount-(amount*.1)) : console.log("Discount isn't applicable, Total amount = ",amount);
(9) const temp = parseInt(prompt("Enter temprature: "));
    temp>30 ? console.log("Hot") : console.log("Cool");
(10)let year = parseInt(prompt("Enter year: "));
    year % 400 == 0 ? console.log("Year is leap year") : year % 100 == 0 ? console.log("Year is not leap year") : year % 4 == 0 ? console.log("Year is leap year") : console.log("Year is not leap year");
```