async function task1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 Done"), 3000)
  );
}
async function task2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 2 Done"), 1000)
  );
}
async function parallelExecution(tasks) {
    const promises = tasks.map(task => task());
    return await Promise.all(promises);
}
parallelExecution([task1, task2]).then(console.log);