## Questions

```
(1) Bank Account Balance Tracker
    Create a function trackBalance(transactions) that takes an array of transactions (both deposits and withdrawals) and calculates the final balance. Each transaction is represented by an object with a type ("deposit" or "withdrawal") and an amount. The function should:
    Start with an initial balance of 0.
    Loop through the transactions and update the balance.
    Ensure that withdrawals don't make the balance go below zero.
    Return the final balance after processing all transactions.
(2) Find the Second Largest Number
    Write a function secondLargest(arr) that takes an array of numbers and returns the second largest unique number in the array. If there is no second largest, return null.
    For example:
    Input: [1, 3, 5, 7, 5, 3]
    Output: 5
(3) FizzBuzz with Range and Custom Divisors
    Write a function customFizzBuzz(start, end, divisor1, divisor2) that prints the numbers between start and end (inclusive). For multiples of divisor1, print "Fizz", for multiples of divisor2, print "Buzz", and for numbers divisible by both, print "FizzBuzz". The function should accept customizable divisors instead of always using 3 and 5.
(4) Find All Substrings of a String
    Write a function getSubstrings(str) that returns an array of all substrings of a given string str. The function should generate all possible substrings, not just the ones of length 1. Implement this using a nested loop.
    For example:
    Input: "abc"
    Output: ["a", "ab", "abc", "b", "bc", "c"]
(5) Balanced Brackets
    Write a function areBracketsBalanced(str) that takes a string str and checks if the brackets (round, square, and curly) are properly balanced. The function should return true if all the brackets are properly paired, otherwise return false.
    For example:
    Input: "({[()]})"
    Output: true
    Input: "({[()]})("
    Output: false
(6) Flatten a Nested Array
    Write a function flattenArray(arr) that takes a nested array (an array of arrays) and returns a flattened array with all the elements at the same level. The function should handle arrays nested to any depth.
    For example:
    Input: [[1, 2, [3, 4]], 5, [6, [7, 8]]]
    Output: [1, 2, 3, 4, 5, 6, 7, 8] 
```

## answers
```markdown
(1) const account = [{
        amount : 1000,
        type : "deposit"
    },{
        amount : 1000,
        type : "deposit"
    },{
        amount : 500,
        type : "withdrawal"
    },{
        amount : 500,
        type : "withdrawal"
    },{
        amount : 500,
        type : "withdrawal"
    },{
        amount : 200,
        type : "withdrawal"
    },{
        amount : 500,
        type : "withdrawal"
    },{
        amount : 500,
        type : "withdrawal"
    }];
    let balance = 0;
    (function trackBalance(transactions){
        transactions.forEach(element => {
            if(element.type === "deposit"){
                balance += element.amount;
            } else if(element.type === "withdrawal"){
                if((balance - element.amount)>=0){
                balance -= element.amount;
                } else {
                    console.log("Withdrawal is not possible..");
                }
            }
        });
    })(account);
    console.log("Final balance: ",balance);
(2) const arr = [1, 3, 5, 7, 5, 3];
    let prevMax = 0;
    let max = arr[0];
    (function findSecondLargest(arr){
        arr.forEach((num) => {
            if(num>max){
                prevMax=max;
                max=num;
            }
        });
        console.log("Second largest element is: ", prevMax==0 ? "null" : prevMax);
    })(arr);
(3) const start = parseInt(prompt("Enter starting number: "));
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
(4) const str = prompt("Enter string: ");
    const length = str.length;
    let substr = [];
    let k=0;
    (function getSubstring(str){
        for(let i=0;i<length;i++){
            for(let j=0;j<length+1;j++){
                let sub = str.substring(i,j);
                if(!substr.includes(sub))
                    substr[k++] = sub;
            }
        }
        substr.shift();
    })(str);
    console.log(substr);
(5) const bracket = "({[()]})";
    let arr = [bracket[0]];
    let k=0;
    (function checkBrackets(bracket){
        for(let i=1;i<bracket.length;i++){
            arr.push(bracket[i]);
            if((arr[k]==="(" && bracket[i] === ")") || (arr[k]==="[" && bracket[i] === "]") || (arr[k]==="{" && bracket[i] === "}")){
                arr.pop();
                arr.pop();
                k-=2;
            }
            k++;
        }
    })(bracket);
    arr[0] ? console.log(false) : console.log(true);
(6) const arr = [[1, 2, [3, 4]], 5, [6, [7, 8]]];
    let resultArray = [];
    (function flattenArray(arr) {
    arr.forEach((array) => {
        if (typeof array === "object") {
            resultArray.push(flattenArray(array));
        } else {
        resultArray.push(array);
        }
    });
    resultArray = resultArray.filter((element)=>{
        return element !== undefined;
    })
    })(arr);
    console.log(resultArray);
```