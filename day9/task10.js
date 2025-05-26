Array.prototype.customMap = function(callback) {
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