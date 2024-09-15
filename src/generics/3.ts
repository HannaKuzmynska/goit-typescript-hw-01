function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objectA = { name: 'John' };
const objectB = { age: 30 };

const mergedObject = merge(objectA, objectB);

console.log(mergedObject); // { name: 'John', age: 30 }