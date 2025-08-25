function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function oneByOne() {
  await delay(1000)
  console.log("1 second");

  await delay(2000)
  console.log("2 seconds");
  // вызови delay(1000) и delay(2000) последовательно, выведи промежуточные логи
}
