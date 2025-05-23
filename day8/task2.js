const data = { id: 101, title: "JavaScript Basics", completed: false };
console.log(JSON.stringify(data));
const jsonString = '{"name":"Emma","score":90,"passed":true}';
console.log(JSON.parse(jsonString));
try {
  JSON.parse('invalid json');
} catch (e) {
  console.error("Parsing failed:", e.message);
}