let sentense = "Hello! welcome to javascript learning.";

(function reverseWord(sentense){
    let arr = sentense.split(/[ .,!]/g,);
    arr.reverse();
    arr = arr.filter((element)=> element!=="");
    sentense ="";
    arr.forEach(element => {
        sentense+=(element+" ");
    });
    sentense+=".";
    console.log(sentense);
})(sentense);
