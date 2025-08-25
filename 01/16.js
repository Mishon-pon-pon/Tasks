// Есть функция fetchData(url) (возвращает промис). Напиши wrapper с логированием времени выполнения каждого запроса
function logTimeExecution(fetchData) {
  return async function(url) {
    const start = Date.now();
    try {
      const result = await fetchData(url);
      const end = Date.now();
      console.log(`Запрос выполнился через ${end - start} мс`);
      return result;
    } catch (error) {
      const end = Date.now();
      console.log(`Запрос упал ${end - start} мс`);
      throw error;
    }
  };  
}