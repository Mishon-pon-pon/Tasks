// Реализуй простую очередь: функции в массиве выполняются одна за другой, каждая ждёт завершения предыдущей
async function runInOrder(functions) {
  for (const func of functions) {
    await func();
  }
}