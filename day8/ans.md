## Questions
```
(1) Object Destructuring
    Given the object below, extract name, age, and city using destructuring:
        const person = { name: "Alice", age: 25, address: { city: "New York", country: "USA" } };
    How do you provide default values while destructuring if a property does not exist in the object? Give an example.
    Using destructuring, extract the first and last properties from the user object while renaming them as firstName and lastName:
        const user = { first: "John", last: "Doe" };
(2) JSON (JavaScript Object Notation)
    Convert the following JavaScript object into a JSON string:
        const data = { id: 101, title: "JavaScript Basics", completed: false };
    Parse the following JSON string into a JavaScript object:
        const jsonString = '{"name":"Emma","score":90,"passed":true}';
    What will happen if you try to parse an invalid JSON string using JSON.parse()? How can you handle errors?
(3) Nullables & Advanced Operators
    What is the output of the following expression? Explain why.
    console.log(null == undefined);
    console.log(null === undefined);
(4) Given the object below, use optional chaining (?.) to safely access the city property inside address:
    const user = { name: "David", address: { country: "Canada" } };
(5) What is the difference between || (OR) and ?? (Nullish Coalescing Operator) in JavaScript? Provide an example.
    What is the result of the following code snippet?
    let value = null ?? "default value";
    console.log(value); 
(6) Given an array of objects representing users, write a function that:
        Extracts id, name, and isAdmin from each object.
        Ensures isAdmin defaults to false if missing.
        Returns an array of formatted strings like "User: Alice (ID: 1) - Admin: false".
    const users = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie", isAdmin: false }
    ]; 
```

## answers
```
(1) const person = { name: "Alice", age: 25, address: { city: "New York", country: "USA" } };
    const { name, age, address: {city , country} } = person;
    console.log(`Name: ${name}, Age: ${age}, Address: ${city}, ${country}`);
    const person2 = {};
    const { name2 = "Unknown", age2 = 0, address: { city2 = "Unknown City" , country2 = "Unknown country"} = {} } = person2;
    console.log(`Name: ${name2}, Age: ${age2}, Address: ${city2}, ${country2}`);
    const user = { first: "John", last: "Doe" };
    const { first: firstName, last: lastName } = user;
    console.log("Name:",firstName, lastName);
(2) const data = { id: 101, title: "JavaScript Basics", completed: false };
    console.log(JSON.stringify(data));
    const jsonString = '{"name":"Emma","score":90,"passed":true}';
    console.log(JSON.parse(jsonString));
    try {
    JSON.parse('invalid json');
    } catch (e) {
    console.error("Parsing failed:", e.message);
    }
(3) task3
    console.log(null == undefined);
    console.log(null === undefined);
    beacuse "==" will check only values while "===" will check both value and type
(4) const user = { name: "David", address: { country: "Canada" } };
    const city = user.address?.city;
    const country = user.address?.country;
    console.log(city,country);
    It's like "." operator but insted of throwing error on non defined proprties it will assign undefined.
(5) console.log(0 || "default");
    console.log(0 ?? "default");
    console.log(null || "default");
    console.log(null ?? "default");
    console.log(undefined || "default");
    console.log(undefined ?? "default");
    let value = null ?? "default value";
    console.log(value); 
    "||" will return the right-hand operand if the left-hand operand is any falsy value while "??" will return the right-hand operand only if the left-hand operand is strictly null or undefined.
(6) const users = [
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
```