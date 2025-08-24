// Реализуй ограничение параллелизма при выполнении массива async-функций (не больше 2-х одновременно)

function asyncBarier(promises, times) {
  const map = new Map();
  for (let i = 0; i < promises.length; i++) {
    map.set(promises[i], null);
  }
  const indexes = [];
  for (let i = 0; i < times; i++) {
    indexes.push(i);
  }

  runPromise(promises, indexes, map);
}

function runPromise(promises, indexies, map) {
  const indxs = Array.from(indexies);

  const arr = [];
  for (let i = 0; i < indexies.length; i++) {
    if (map.get(promises[indexies[i]]) === null) {
      arr.push(promises[indexies[i]]);
      map.set(promises[indexies[i]], "do");
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i]()
      .then((res) => console.log(res))
      .finally(() => {
        map.set(arr[i], "done");
        promiseLoop: for (let j = 0; j < promises.length; j++) {
          if (promises[j] === arr[i]) {
            for (let m = 0; m < indexies.length; m++) {
              if (indexies[m] === j) {
                for (let n = 0; n < promises.length; n++) {
                  if (map.get(promises[n]) === null) {
                    indxs[m] = n;
                    break promiseLoop;
                  }
                }
              }
            }
          }
        }
        runPromise(promises, indxs, map);
      });
  }
}

asyncBarier(
  [
    () =>
      new Promise((resolve) => {
        console.log("work 1 promise");
        setTimeout(() => resolve("1 promise is done"), 1000);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 2 promise");
        setTimeout(() => resolve("2 promise is done"), 1001);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 3 promise");
        setTimeout(() => resolve("3 promise is done"), 1002);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 4 promise");
        setTimeout(() => resolve("4 promise is done"), 1003);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 5 promise");
        setTimeout(() => resolve("5 promise is done"), 1004);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 6 promise");
        setTimeout(() => resolve("6 promise is done"), 1005);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 7 promise");
        setTimeout(() => resolve("7 promise is done"), 1006);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 8 promise");
        setTimeout(() => resolve("8 promise is done"), 1007);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 9 promise");
        setTimeout(() => resolve("9 promise is done"), 1008);
      }),
    () =>
      new Promise((resolve) => {
        console.log("work 10 promise");
        setTimeout(() => resolve("10 promise is done"), 1009);
      }),
  ],
  3
);
