const obj = {
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