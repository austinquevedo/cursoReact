// Vamos a trabajar arrays en TypeScript

// const myArray= [1, 2, 3, 4, 5, true, {}];
const myArray: number[] = [1, 2, 3, 4, 5, 6];

const myArray2 = [1, 2, 3, 4, '5', 6]; // Hace que el array sea inmutable

myArray.push(7);
myArray.push(10); // Agrega un elemento al final del array

for (const myNumber of myArray) {
  console.log(myNumber + 10); // Imprime cada elemento del array incrementado en 1
}

console.log(myArray2); // Imprime el array2 completo

myArray.values;

// const myArray2 = myArray;
// myArray2.push(8); // Agrega un elemento al final del array copiado

// console.log(myArray2); // Imprime el array copiado
// console.log(myArray);

// Lo mejor es hacer un structure de datos inmutable
// const myArray3 = [...myArray]; // Crea una copia del array original
// myArray3.push(9); // Agrega un elemento al final del array copiado

// const myArray4 = structuredClone(myArray3);

// console.log(myArray4); // Imprime el array copiado
