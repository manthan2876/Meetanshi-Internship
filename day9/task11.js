function throttle(fn, waitTime) {
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