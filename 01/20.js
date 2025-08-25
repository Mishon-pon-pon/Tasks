// Сделай асинхронный генератор, который возвращает случайные числа с интервалами 1 секунда


async function* randomNum(){
  while(true){
    await new Promise(resolve => setTimeout(() => resolve, 1000))
    yield Math.random() * 100
  }
}