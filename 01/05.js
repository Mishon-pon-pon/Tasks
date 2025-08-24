function asyncSum(a, b) {
  return new Promise((resolve) => setTimeout(() => resolve(a + b), 1000));
}

// Напиши функцию, складывающую числа через await

async function fn() {
  const sum = await asyncSum(2, 3);
  console.log("sum", sum);
}

fn();
