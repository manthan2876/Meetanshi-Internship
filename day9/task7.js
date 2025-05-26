function debounce(fun, delay){
    let id;
    return function(...args){
        clearTimeout(id);
        id = setTimeout(() =>  {
            fun.apply(this,args);
        },delay);
    };
}
const logMessage = debounce(() => console.log("Hello"), 1000);
logMessage();
logMessage();
logMessage();
// "Hello" should appear only *once* after 1 second, not multiple times.
