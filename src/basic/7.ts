// Тип для вкладеного об'єкта details
interface Details {
  createAt: Date;
  updateAt: Date;
}

// Основний інтерфейс для сторінки
interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close'; 
  details?: Details; 
}

// Об'єкт page1 з усіма властивостями
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

// Об'єкт page2 без властивості details
const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

console.log(page1);
console.log(page2);