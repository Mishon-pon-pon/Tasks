function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

// Выполни массив [() => wait(500), () => wait(1000), () => wait(1500)] последовательно

const asyncFnArray = [() => wait(500), () => wait(1000), () => wait(1500)];

function queueAsyncFnExe(arr) {
  if (arr[0]) {
    arr[0]()
      .finally(() => {
        queueAsyncFnExe(arr.slice(1));
      })
      .then((res) => {
        console.log("res", res);
      });
  }
}

queueAsyncFnExe(asyncFnArray);
