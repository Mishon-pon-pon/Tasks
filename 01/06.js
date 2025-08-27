function fetchFake() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1500));
}

// Обработай ошибку, если fetchFake занимает более 1 секунды (Promise.race)

Promise.race([
  fetchFake(),
  new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error("The promise is executed for more than 1 second")),
      1000
    );
  }),
])
  .then((res) => {
    console.log("res", res);
  })
  .catch((e) => {
    console.log("e", e);
  });
