// Реализуй ограничение параллелизма при выполнении массива async-функций (не больше 2-х одновременно)

function runLimitedConcurrency(promises, times) {
  const promisesMap = new Map();
  for (let i = 0; i < promises.length; i++) {
    promisesMap.set(promises[i], null);
  }
  const execPromiseOnOneTimeIndexes = [];
  for (let i = 0; i < times; i++) {
    execPromiseOnOneTimeIndexes.push(i);
  }

  runPromise(promisesMap, times);
}

function runPromise(map, times) {
  const executablePromises = [];
  const dontExecutablePromises = [];
  for (const [promise, status] of map) {
    if (status === "do") {
      executablePromises.push(promise);
    }
    if (status === null) {
      dontExecutablePromises.push(promise);
    }
  }

  if (dontExecutablePromises.length == 0) {
    return;
  }

  for (let i = 0; i < times - executablePromises.length; i++) {
    map.set(dontExecutablePromises[i], "do");
    dontExecutablePromises[i]()
      .then((res) => console.log(res))
      .finally(() => {
        map.set(dontExecutablePromises[i], "done");
        runPromise(map, times);
      });
  }
}

const tasks = [
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
];

runLimitedConcurrency(tasks, 5);

