interface User {
  uid: string;
  userName: string;
}

interface User2 {
  nombre: string;
  apellido: string;
}

function greet(name: string): string {
  return `Hola, ${name}!`;
}

const greet2 = (name: string) => `Hola, ${name}!`;

const user3 = (uid: string, userName: string): User => ({
  uid: uid,
  userName: userName,
});

const mensaje = greet('Agustin');
// const mensaje2 = greet2('Agustin');
// const mensaje3 = getUser2('ABC-123', 'aquevedo');

console.log(mensaje);
// console.log(mensaje2);
// console.log(mensaje3);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((value) => {
  console.log({ value });
});

myNumbers.forEach(console.log);

const cliente = (nombre: string, apellido: string): string =>
  `hola mi nombre es ${nombre} ${apellido}`;

const cliente2 = (nombre: string, apellido: string): User2 => ({
  nombre: nombre.toUpperCase(),
  apellido: apellido.toUpperCase(),
});

// console.log(cliente('Agustin', 'Quevedo'));

// console.log(cliente2('Agustin', 'Quevedo'));

// console.log(cliente2('Agustin', 'Quevedo'));

myNumbers.forEach((value, index, arr) => console.log({ index, value, arr }));

const datos1 = myNumbers.toString();
// myNumbers.forEach(console.log);
console.log({ datos1 });
