function* generateSequence() {
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