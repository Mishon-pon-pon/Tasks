function asyncCallback(callback) {
  setTimeout(() => callback("done"), 1200);
}

// Сделай обёртку callback-функции в промис
