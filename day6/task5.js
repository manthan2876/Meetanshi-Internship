const bracket = "({[()]})";
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