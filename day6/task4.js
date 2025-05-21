const str = prompt("Enter string: ");
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