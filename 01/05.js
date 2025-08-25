function asyncSum(a, b) {
  return new Promise((resolve) => setTimeout(() => resolve(a + b), 1000));
}

async function sum() {
  const first = await asyncSum(1, 2);
  const second = await asyncSum(3, 4);
  const third = await asyncSum(5, 6);
  console.log(first + second + third);
}
// Напиши функцию, складывающую числа через await
