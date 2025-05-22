const sentense = "Hello welcome to javascript learning.";

(function findLongestWord(sentense){
    const arr = sentense.split(/[,.! ]/g,);
    let max = arr[0].length;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>=max){
            max=arr[i].length;
        }
    }
    console.log(max);
})(sentense);
