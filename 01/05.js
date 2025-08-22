function asyncSum(a, b) {
  return new Promise((resolve) => setTimeout(() => resolve(a + b), 1000));
}

// Напиши функцию, складывающую числа через await
