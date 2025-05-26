function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};
const john = new Person("John");
setTimeout(john.sayHello, 1000);
