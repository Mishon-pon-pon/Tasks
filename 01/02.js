function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function oneByOne() {
  // вызови delay(1000) и delay(2000) последовательно, выведи промежуточные логи
}
