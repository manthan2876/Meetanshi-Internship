function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1();
counter1();
counter2();
counter1();
counter2();