function getData(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num), num * 300));
}

const resArr = Promise.all([getData(1), getData(2), getData(3)]).then((data) =>
  console.log(data)
);

// Получи результаты 3 промисов параллельно через Promise.all
