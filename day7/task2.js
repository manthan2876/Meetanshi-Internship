const arr = [1,2,3,4,5,7];
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