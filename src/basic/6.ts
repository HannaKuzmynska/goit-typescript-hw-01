// Інтерфейс для адреси
interface Address {
  city: string;
  country: string;
}

// Інтерфейс для користувача
interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

// Об'єкт mango з адресою
const mango: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

// Об'єкт poly без адреси
const poly: User = {
  name: 'Poly',
  age: 30,
  email: 'poly@example.com',
};

console.log(mango);
console.log(poly);