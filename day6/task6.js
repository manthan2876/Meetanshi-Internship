const arr = [[1, 2, [3, 4]], 5, [6, [7, 8]]];
let resultArray = [];


(function flattenArray(arr) {
  arr.forEach((array) => {
    if (typeof array === "object") {
        resultArray.push(flattenArray(array));
    } else {
      resultArray.push(array);
    }
  });
  resultArray = resultArray.filter((element)=>{
    return element !== undefined;
  })
})(arr);

console.log(resultArray);
