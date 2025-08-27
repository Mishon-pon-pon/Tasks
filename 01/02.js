function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function oneByOne() {
  // вызови delay(1000) и delay(2000) последовательно, выведи промежуточные логи
  const startTime = new Date();
  console.log("Начало");
  await delay(1000);
  console.log("прошло", getElapsedTimeSec(startTime), "сек");
  await delay(2000);
  console.log("прошло", getElapsedTimeSec(startTime), "сек");
  console.log("Конец");
}

function getElapsedTimeSec(startTime) {
  return new Date(new Date().getTime() - startTime.getTime()).getSeconds();
}

oneByOne();
