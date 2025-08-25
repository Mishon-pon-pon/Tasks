function fetchFake() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1500));
}

const result = Promise.race([
  fetchFake(),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout exceeded")), 1000)
  ),
]);

// Обработай ошибку, если fetchFake занимает более 1 секунды (Promise.race)
