function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("ok") : reject("fail");
    }, 500);
  });
}

// Обработай результат с помощью .then и .catch

randomPromise()
  .then((res) => {
    console.log("res", res);
  })
  .catch((e) => {
    throw e;
  });
