const arr = [1,2,3,3,4,4];
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