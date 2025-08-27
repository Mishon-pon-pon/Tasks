// Сделай асинхронный таймер: каждые 2 секунды выводит в консоль "tick", всего 5 раз

function timer(gap, times) {
  if (times) {
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("tick");
        timer(gap, times - 1);
        resolve();
      }, gap);
    });
  }
}

timer(2000, 5);
