const users = [
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