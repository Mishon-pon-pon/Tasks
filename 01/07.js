// Реализуй функцию repeatAsync(fn, times), которая вызывает асинхронную функцию fn заданное число раз
function repeatAsync(fn, times) {
  if (times > 0) {
    fn().finally(() => {
      repeatAsync(fn, times - 1);
    });
  }
}

function asyncFn() {
  return new Promise((resolve) => {
    resolve(1);
  }).then((res) => {
    console.log("asyncFn is run");
  });
}

repeatAsync(asyncFn, 3);
