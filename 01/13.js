async function* iteratorTest(waitTime) {
  while(true){
    await new Promise(resolve => setTimeout(resolve, waitTime));
    yield Math.random();
  }
  // Используй for await...of для обработки асинхронного генератора, который выдаёт числа через задержку
}
