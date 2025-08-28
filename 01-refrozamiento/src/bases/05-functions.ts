interface User {
  uid: string;
  userName: string;
}

function greet(name: string): string {
  return `Hola, ${name}!`;
}

const greet2 = (name: string) => `Hola, ${name}!`;

const getUser2 = (uid: string, userName: string): User => ({
  uid: uid,
  userName: userName,
});

const mensaje = greet('Agustin');
const mensaje2 = greet2('Agustin');
const mensaje3 = getUser2('ABC-123', 'aquevedo');

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((value) => {
  console.log({ value });
});

myNumbers.forEach(console.log);
