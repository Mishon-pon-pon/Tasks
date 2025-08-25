// Реализуй функцию repeatAsync(fn, times), которая вызывает асинхронную функцию fn заданное число раз


async function repeatAsync(fn, times) {
  for(let attempt = 0; attempt < times; attempt++ ) {
    try {
      return await fn
    } catch (error) {
      console.log('Something went wrong');
    }
  }
}