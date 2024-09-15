// Функція showMessage: приймає рядковий параметр і не повертає значення (тип void)
function showMessage(message: string): void {
  console.log(message);
}

// Функція calc: приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція customError: не приймає параметрів і повертає помилку (тип never)
function customError(): never {
  throw new Error('Error');
}
