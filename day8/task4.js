const user = { name: "David", address: { country: "Canada" } };
const city = user.address?.city;
const country = user.address?.country;
console.log(city,country);
// It's like "." operator but insted of throwing error on non defined proprties it will assign undefined.