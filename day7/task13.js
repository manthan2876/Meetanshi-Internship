let str = prompt("Enter string: ");
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