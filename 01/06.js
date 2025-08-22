function fetchFake() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1500));
}

// Обработай ошибку, если fetchFake занимает более 1 секунды (Promise.race)
