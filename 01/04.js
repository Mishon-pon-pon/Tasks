function getData(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num), num * 300));
}

// Получи результаты 3 промисов параллельно через Promise.all
Promise.all([getData(1), getData(2), getData(3)])
  .then((res) => {
    res.forEach((item) => {
      console.log("item", item);
    });
  })
  .catch((e) => {
    throw e;
  });
