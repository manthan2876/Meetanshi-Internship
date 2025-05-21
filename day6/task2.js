const arr = [1, 3, 5, 7, 5, 3];

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
