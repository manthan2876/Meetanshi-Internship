const username = prompt("Enter username: ");
const password = prompt("Enter password: ");

if( username === "admin" && password === "1234")
    console.log("Login Successful.!");
else
    console.log("Login Failed.!");