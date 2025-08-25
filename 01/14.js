// Реализуй debounce для асинхронной функции (обещание возвращается только на последний вызов)
function asyncDebounce(fn, wait) {
  let timer = null;
  let lastArgs = null;
  let id = 0;
  let pending = []

  return (...args) => {
    id++;
    const thisId = id;
    lastArgs = args;

    const promise = new Promise((resolve, reject) => {
      pending.push({ id: thisId, resolve, reject });
    });

    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      const activeId = id;
      const currentPending = pending;
      pending = [];

      try {
        const result = await fn(...lastArgs);
        for (const p of currentPending) {
          if (p.id === activeId) p.resolve(result);
          else p.reject(new Error('debounced'));
        }
      } catch (err) {
        for (const p of currentPending) {
          if (p.id === activeId) p.reject(err);
          else p.reject(new Error('debounced'));
        }
      } finally {
        timer = null;
      }
    }, wait);

    return promise;
  };
}
