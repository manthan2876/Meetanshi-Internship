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
```