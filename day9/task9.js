class MyPromise {
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

// Example usage
const myPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000);
});

myPromise.then(value => {
    console.log(value);
});
