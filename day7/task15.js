const arr1 = [1,3,5];
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