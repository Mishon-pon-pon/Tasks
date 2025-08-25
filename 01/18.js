// Используй AbortController для отмены fetch-запроса через 700мс после старта
async function abortFetch(url, timeout = 700) {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPromise = fetch(url, { signal });

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetchPromise;
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Время ожидания истекло, запрос отменён');
        } else {
            console.error('Ошибка запроса:', error);
        }
        throw error;
    }
  
}