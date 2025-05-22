let str = prompt("Enter string: ");
let position = parseInt(prompt("Enter position: "));
position-=1;
str = str.substring(0,position)+str.substring(position+1,str.length);
console.log(str);