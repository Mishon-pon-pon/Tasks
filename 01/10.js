// Есть массив промисов: [p1, p2, p3]
// Напиши функцию, которая возвращает результат первого завершившегося промиса (Promise.race)

async function promiseRace(pArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(pArr) || pArr.length === 0) {
      reject(new Error('Не правильный аргумент'));
      return;
    }
    for (let p of pArr) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}
