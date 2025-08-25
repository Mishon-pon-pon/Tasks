function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('ok') : reject('fail');
    }, 500);
  });
}

const promise = randomPromise();
const result = promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// Обработай результат с помощью .then и .catch
