const person = { name: "Alice", age: 25, address: { city: "New York", country: "USA" } };
const { name, age, address: {city , country} } = person;
console.log(`Name: ${name}, Age: ${age}, Address: ${city}, ${country}`);
const person2 = {};
const { name2 = "Unknown", age2 = 0, address: { city2 = "Unknown City" , country2 = "Unknown country"} = {} } = person2;
console.log(`Name: ${name2}, Age: ${age2}, Address: ${city2}, ${country2}`);
const user = { first: "John", last: "Doe" };
const { first: firstName, last: lastName } = user;
console.log("Name:",firstName, lastName);