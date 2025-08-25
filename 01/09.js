function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

// Выполни массив [() => wait(500), () => wait(1000), () => wait(1500)] последовательно
async function oneByOneExecution(funcArr) {
  const results = [];
  for (const func of funcArr) {
    const result = await func();
    results.push(result);
  }
  return results;
}