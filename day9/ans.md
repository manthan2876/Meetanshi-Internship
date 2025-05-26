## Questions
```
(1) Given an array of objects representing users, write a function that:
        Extracts id, name, and isAdmin from each object.
        Ensures isAdmin defaults to false if missing.
        Returns an array of formatted strings like "User: Alice (ID: 1) - Admin: false".
    const users = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie", isAdmin: false }
    ]; 
(2) Closure & Function Execution Order
    Question:
    What will be logged to the console, and why?
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
(3) Async/Await & Event Loop
    Question:
    What will be the output of the following code, and why?
    console.log("Start");
    setTimeout(() => {
        console.log("Timeout");
    }, 0);
    Promise.resolve().then(() => {
        console.log("Promise");
    });
    console.log("End");
(4) Prototypal Inheritance & this
    Question:
    What will be logged, and how does this work here?
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
    const john = new Person("John");
    setTimeout(john.sayHello, 1000);
(5) Generators & Iterators
    Question:
    Complete the generateSequence function to produce numbers following the pattern: 1, 4, 9, 16, 25... (squares of natural numbers).
    function* generateSequence() {
        // Implement logic here
    }
    const generator = generateSequence();
    console.log(generator.next().value); // 1
    console.log(generator.next().value); // 4
    console.log(generator.next().value); // 9
    console.log(generator.next().value); // 16
    console.log(generator.next().value); // 25
(6) Deep Cloning Objects Without JSON.stringify
    Question:
    Write a function deepClone(obj) that deeply clones a given JavaScript object, including nested objects and arrays.
    Example:
    const obj = {
        name: "Alice",
        details: {
            age: 25,
            hobbies: ["Reading", "Cycling"]
        }
    };
    const clonedObj = deepClone(obj);
    clonedObj.details.age = 30;
    console.log(obj.details.age); // Should still be 25
(7) Debouncing a Function
    Question:
    Implement a debounce function that ensures the passed function executes only after a specified delay. If the function is called again before the delay expires, reset the timer.
    Example:
    const logMessage = debounce(() => console.log("Hello"), 1000);
    logMessage();
    logMessage();
    logMessage();
    // "Hello" should appear only *once* after 1 second, not multiple times.
(8) Asynchronous Parallel Execution
    Question:
    Write an async function parallelExecution that takes an array of async functions and executes them in parallel. The function should return an array of resolved values in the same order as input.
    Example:
    async function task1() {
        return new Promise(resolve => setTimeout(() => resolve("Task 1 Done"), 3000));
    }
    async function task2() {
        return new Promise(resolve => setTimeout(() => resolve("Task 2 Done"), 1000));
    }
    async function parallelExecution(tasks) {
        // Implement logic here
    }
    parallelExecution([task1, task2]).then(console.log);
    // Output: ["Task 1 Done", "Task 2 Done"]
(9) Custom Promise Implementation
    Question:
    Implement a basic version of JavaScript’s Promise class (MyPromise) that supports .then chaining.
    Example:
    const myPromise = new MyPromise((resolve, reject) => {
        setTimeout(() => resolve("Success"), 1000);
    });
    myPromise.then(value => {
        console.log(value); // "Success" after 1 second
    });
(10)Custom map Function Without Using Array.map
    Question:
    Implement a custom version of the map function on JavaScript’s prototype.
    Example:
    Array.prototype.customMap = function(callback) {
        // Implement logic here
    };
    const numbers = [1, 2, 3];
    const squared = numbers.customMap(num => num * num);
    console.log(squared); // [1, 4, 9]
(11)Rate Limiting (Throttle)
    Question:
    Implement a throttle function that ensures a function executes at most once every specified time interval.
    Example:
    const log = throttle(() => console.log("Hello"), 2000);
    log(); // Executes immediately
    log(); // Ignored (since 2 seconds haven’t passed)
    setTimeout(log, 2500); // Executes after 2.5 seconds 
```

## answers
```
(1) const users = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie", isAdmin: false }
    ];
    function formatUsers(users) {
    return users.map(({ id, name, isAdmin = false }) =>
        `User: ${name} (ID: ${id}) - Admin: ${isAdmin}`
    );
    }
    console.log(formatUsers(users));
(2) 1
    2
    1
    3
    2
    this will be logged on the console because there are two instence of function will be work as different counters.
(3) Start
    End
    Promise
    Timeout
    this will be output of the code because first Synchronous code will be executed then microtask like promise will be executed then macrotask like setTimeout will be executed.
(4) Hello, my name is undefined
    this will print after i second because here sayHello is called without explicit object context so this keyword inside of the function will refer as globalThis which don't have any name property.
(5) function* generateSequence() {
    for (let n = 1; ; n++) {
        yield n * n;
    }
    }
    const generator = generateSequence();
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
(6) const obj = {
    name: "Alice",
    details: {
        age: 25,
        hobbies: ["Reading", "Cycling"],
    },
    };
    function deepClone(obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }

        if (typeof obj === Array) {
            return obj.map(deepClone);
        }

        const clonedObj = {};
        for (const element in obj) {
            if (obj.hasOwnProperty(element)) {
                clonedObj[element] = deepClone(obj[element]);
            }
        }
        return clonedObj;
    }
    const clonedObj = deepClone(obj);
    clonedObj.details.age = 30;
    console.log(obj.details.age);
(7) function debounce(fun, delay){
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
(8) async function task1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Task 1 Done"), 3000)
    );
    }
    async function task2() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Task 2 Done"), 1000)
    );
    }
    async function parallelExecution(tasks) {
        const promises = tasks.map(task => task());
        return await Promise.all(promises);
    }
    parallelExecution([task1, task2]).then(console.log);
(9) class MyPromise {
        static PENDING = 'pending';
        static FULFILLED = 'fulfilled';
        static REJECTED = 'rejected';
        constructor(callback) {
            this.state = MyPromise.PENDING;
            this.value = undefined;
            this.handlers = [];

            try {
                callback(this._resolve.bind(this), this._reject.bind(this));
            } catch (error) {
                this._reject(error);
            }
        }
        _resolve(value) {
            if (this.state !== MyPromise.PENDING) return;
            this.state = MyPromise.FULFILLED;
            this.value = value;
            this._processHandlers();
        }
        _reject(reason) {
            if (this.state !== MyPromise.PENDING) return;
            this.state = MyPromise.REJECTED;
            this.value = reason;
            this._processHandlers();
        }
        then(onFulfilled, onRejected) {
            return new MyPromise((resolve, reject) => {
                this.handlers.push({
                    onFulfilled: typeof onFulfilled === 'function' ? onFulfilled : (v) => v,
                    onRejected: typeof onRejected === 'function' ? onRejected : (err) => { throw err; },
                    resolve,
                    reject
                });
                this._processHandlers();
            });
        }
        _processHandlers() {
            if (this.state === MyPromise.PENDING) return;
            while (this.handlers.length > 0) {
                const { onFulfilled, onRejected, resolve, reject } = this.handlers.shift();
                try {
                    const result = this.state === MyPromise.FULFILLED
                        ? onFulfilled(this.value)
                        : onRejected(this.value);
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            }
        }
    }
    const myPromise = new MyPromise((resolve, reject) => {
        setTimeout(() => resolve("Success"), 1000);
    });
    myPromise.then(value => {
        console.log(value);
    });
(10)Array.prototype.customMap = function(callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    return newArray;
    };
    const numbers = [1, 2, 3];
    const squared = numbers.customMap(num => num * num);
    console.log(squared);
(11)function throttle(fn, waitTime) {
        let last = 0;
        return function(...args) {
            const now = Date.now();
            if (now - last >= waitTime) {
                fn.apply(this, args);
                last = now;
            }
        };
    }
    const log = throttle(() => console.log("Hello"), 2000);
    log(); // "Hello" (executes immediately)
    log(); // Ignored (called within 2 seconds)
    setTimeout(log, 2500); // "Hello" (executes at 2500ms)
```