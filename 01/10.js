// Есть массив промисов: [p1, p2, p3]
// Напиши функцию, которая возвращает результат первого завершившегося промиса (Promise.race)

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]()
        .then((res) => resolve(res))
        .catch((e) => reject(e));
    }
  });
}

const promises = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 1200)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 900)),
];

promiseRace(promises).then((res) => {
  console.log("res", res);
});
