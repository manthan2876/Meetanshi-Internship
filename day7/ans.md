## Questions
```
(1) Anagram Checker
    Write a function areAnagrams(str1, str2) that takes two strings as input and checks if they are anagrams. Ignore spaces and case sensitivity. Return true if they are anagrams, otherwise return false.
    For example:
    Input: "listen", "silent"
    Output: true
    Input: "hello", "world"
    Output: false
(2) Find Missing Number
    Write a function findMissingNumber(arr) that takes an array of numbers from 1 to n with one missing number and returns the missing number. The array contains n-1 numbers, and all numbers are unique.
    For example:
    Input: [1, 2, 4, 5] (n = 5)
    Output: 3
(3) Write a function that checks if a number is even or odd. 
(4) Write a loop to print numbers from 1 to 10.
(5) Write a function that takes two numbers as arguments and returns their sum.
(6) Create an array of five fruits and print the second fruit.
(7) Write a program to swap two numbers without using a third variable.
(8) Write a program to print the Fibonacci series up to n terms.
(9) Write a program to reverse a number. 
(10)Write a JavaScript program to determine whether a given year is a leap year or not.
(11)Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). 
(12)Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 
(13)Write a program to count the number of vowels in a string.
(14)Write a program to remove duplicates from an array.
(15)Write a program to merge two sorted arrays into one sorted array.
(16)Write a program to find the longest word in a sentence.  
(17)Write a program to reverse words in a sentence.
(18)Write a program to create a function that takes an array and returns the sum of all elements.
(19)Write a program to create a function that finds the factorial of a number using recursion.
(20)Write a JavaScript program to count the number of times a button is clicked.
(21)Write a JavaScript program to find the closest value to 100 from two numerical values. 
(22)Write a program to create a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.
```

## answers
```
(1) const str1 = "Silent";
    const str2 = "listen";
    function areAnagrams(str1, str2){
        let flag = true;
        str1 = str1.toLowerCase();
        str2 = str2.split(" ").join("");
        str2 = str2.toLowerCase();
        if(str1.length === str2.length){
            for(let i=0;i<str1.length;i++){
                if(!str2.includes(str1[i])){
                    flag=false;
                    break;
                }
            }
        } else flag = false;
        return flag;
    }
    console.log(areAnagrams(str1,str2)? `String "${str1}" and "${str2}" are anagrams.` : `String "${str1}" and "${str2}" aren't anagrams.`);
(2) const arr = [1,2,3,4,5,7];
    let i=0;
    function findMissingNumber(arr){
        if(arr.length===arr[arr.length-1]){
            arr.unshift(0);
            length= arr.length -1 ;
        } else length = arr.length;
        let cheker = 1;
        while(i<length && cheker === 1){
            cheker=arr[i+1]-arr[i];
            i++;
        }
        return cheker!==1 ? false : true;
    }
    console.log(findMissingNumber(arr)? "Nothing is missing" : `Missing number is ${i+1}`);
(3)const num =3;
    (function (num){
        return num%2==0 ? console.log("Even") : console.log("Odd");
    })(num);
(4)(function (n){
        let str ="";
        for(let i=0;i<n;i++){
            str+=((i+1)+" ");
        }
        console.log("Numbers up to",n,":",str);
    })(10);
(5)function add(a,b){
        return a+b;
    }
    console.log("sum of 5 and 3 is",add(5,3))
(6)const fruits = ["apple", "mango", "banana", "orange", "grapes"];
    console.log("Second fruit is:",fruits[1]);
(7)let a=2, b=3;
    console.log("Before swap\na=",a,"b=",b);
    function swap(a,b){
        a=(a+b);
        b=a-b;
        a=a-b;
        console.log("After swap\na=",a,"b=",b);
    }
    swap(2,3);
(8)function fibonacci(n){
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
(9) const number = 1234;
    console.log("Before reverse:",number);
    function reverse(num, reversed = 0) {
        if (num === 0) {
            return reversed;
        }
        return reverse(Math.floor(num / 10),reversed * 10 + num % 10);
    }
    console.log("After reverse:",reverse(number));
(10)let year = 1000;
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
(11)const a = parseInt(prompt("Enter first number: "));
    const b = parseInt(prompt("Enter first number: "));
    function mul (a,b){
        return a*b;
    }
    function div(a,b){
        return a/b;
    }
    console.log("Multiplication of a*b is",mul(a,b));
    console.log("Divison of a/b is",div(a,b));
(12)let str = prompt("Enter string: ");
    let position = parseInt(prompt("Enter position: "));
    position-=1;
    str = str.substring(0,position)+str.substring(position+1,str.length);
    console.log(str);
(13)let str = prompt("Enter string: ");
    let count = 0;
    function isVowel(character){
        let vowels="aeiouAEIOU";
        return vowels.includes(character);
    }
    (function (str){
        for(let i=0;i<str.length;i++){
            if(isVowel(str[i]))
                count++;
        }
        console.log("Number of vowels in string",str,"is",count);
    })(str);
(14)const arr = [1,2,3,3,4,4];
    const resultArray = [];
    (function (arr){
        for(let i=0;i<arr.length;i++){
            if(!resultArray.includes(arr[i])){
                resultArray.push(arr[i]);
            }
        }
        arr = resultArray;
        console.log(arr);
    })(arr);
(15)const arr1 = [1,3,5];
    const arr2 = [2,4,6];
    const resultArray= [];
    let i=0,j=0;
    function merge(arr1,arr2){
        while(i<arr1.length && j<arr2.length){
            if(arr1[i]<=arr2[j]){
                resultArray.push(arr1[i++]);
            } else {
                resultArray.push(arr2[j++]);
            }
        }
        while(i<arr1.length){
            resultArray.push(arr1[i++]);
        }
        while(j<arr2.length){
            resultArray.push(arr2[j++]);
        }
        console.log(resultArray);
    }
    merge(arr1,arr2);
(16)const sentense = "Hello welcome to javascript learning.";
    (function findLongestWord(sentense){
        const arr = sentense.split(/[,.! ]/g,);
        let max = arr[0].length;
        for(let i=0;i<arr.length;i++){
            if(arr[i].length>=max){
                max=arr[i].length;
            }
        }
        console.log(max);
    })(sentense);
(17)let sentense = "Hello! welcome to javascript learning.";
    (function reverseWord(sentense){
        let arr = sentense.split(/[ .,!]/g,);
        arr.reverse();
        arr = arr.filter((element)=> element!=="");
        sentense ="";
        arr.forEach(element => {
            sentense+=(element+" ");
        });
        sentense+=".";
        console.log(sentense);
    })(sentense);
(18)const arr = [1,2,3,4,5];
    function sumOfArray(arr){
        let sum = 0;
        arr.forEach(element => {
            sum+=element;
        });
        return sum;
    }
    console.log(`Summetion of [${arr}]'s all elements is ${sumOfArray(arr)}`);
(19)function fact(n){
        if(n===1||n===0){
            return 1;
        }
        return n * fact(n-1);
    }
    console.log("Factorial of 5 is",fact(5));
(20)<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <button onclick="countClick()">Click me</button>
        <button onclick="getCount()">Show count</button>
        <script>
            let count = 0;
            function countClick(){
                count++;
            }
            function getCount(){
                console.log("Button is clicked for ",count,"times.");
            }
        </script>
    </body>
    </html>
(21)const num1 = 114;
    const num2 = 114;
    function findClosest(num1,num2){
        return Math.abs(num1-100) < Math.abs(num2-100) ? num1 : num2;
    }
    console.log(findClosest(num1,num2));
(22)let arr = [false,0,"",null,undefined,NaN,1];
    (function removeFalsy(arr){
        arr = arr.filter(element => (element!==false && element!==0 && element!=="" && element!==null && element!==undefined && !Number.isNaN(element)));
        console.log(arr);
    })(arr);
```