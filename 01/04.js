function getData(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num), num * 300));
}

// Получи результаты 3 промисов параллельно через Promise.all
