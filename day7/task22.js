let arr = [false,0,"",null,undefined,NaN,1];

(function removeFalsy(arr){
    arr = arr.filter(element => (element!==false && element!==0 && element!=="" && element!==null && element!==undefined && !Number.isNaN(element)));
    console.log(arr);
})(arr);