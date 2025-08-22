function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

// Выполни массив [() => wait(500), () => wait(1000), () => wait(1500)] последовательно
