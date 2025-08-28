//Vamos a tratar sobre el uso de varisables con const y let

const firstName: string = 'Agustin';
let lastName = 'Quevedo';

let diceNumber: number = 10;
diceNumber = 3; //Se puede reasignar el valor de una variable declarada con let

const fullName = `${firstName} ${lastName}`;

const containLetterQ = fullName.includes('Q', 0);

console.log({ containLetterQ, diceNumber, fullName });
