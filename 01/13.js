async function iteratorTest() {
  // Используй for await...of для обработки асинхронного генератора, который выдаёт числа через задержку
  for await (const num of asyncGenerator()) {
    console.log("num", num);
  }
}

async function* asyncGenerator() {
  for (let i = 0; i < 5; i++) {
    yield await new Promise((resolve) => setTimeout(() => resolve(i), 1000));
  }
}

iteratorTest();
