// Реализуй throttle для асинхронной функции (разрешать выполнение не чаще, чем раз в 1 сек)

function asyncThrottle(fn, delay = 1000) {
  let lastCall = 0;

  return async function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      return await fn.apply(this, args);
    } else {
      return Promise.resolve(null);
    }
  };
}
