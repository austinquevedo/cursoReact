//Vamos a crear una interfaz
// El signo ? hace que sea opcional la implementación de la propiedad segun el template

interface Person {
  firstnNames: string;
  lastNames: string;
  age: number;
  isDeveloper: boolean;
  hobbies: string[];
  address?: Address;
}
interface Address {
  city: string;
  country: string;
}

const heman: Person = {
  firstnNames: 'Juan Carlo',
  lastNames: 'Lopez',
  age: 33,
  isDeveloper: false,
  hobbies: ['Futbol', 'Ecuavolley'],
  address: {
    city: 'Azogues',
    country: 'Ecuados',
  },
};

const iroman: Person = {
  firstnNames: 'Agustin',
  lastNames: 'Quevedo',
  age: 30,
  isDeveloper: true,
  hobbies: ['coding', 'gaming'],
  address: {
    city: 'Buenos Aires',
    country: 'Argentina',
  },
};

const spiderMan: Person = {
  firstnNames: 'Juan Carlos',
  lastNames: 'Lopez',
  age: 22,
  isDeveloper: true,
  hobbies: ['Ecuavolley', 'Futbol'],
  address: {
    city: 'Azogues',
    country: 'Ecuador',
  },
};

// Los 3 puntos se conoecen como spread operator, permite crear una copia superficial de un objeto
//const spiderMan = {...iroman};

//con la funcion struncturedClone se crea una copia superficial de un

// const spiderMan = structuredClone(iroman);

// spiderMan.firstnNames = 'Peter';
// spiderMan.age = 25; // Reasignación permitida
// spiderMan.lastNames = 'Parker'; // Reasignación permitida
// spiderMan.address.city = 'New York'; // Reasignación permitida
// spiderMan.address.country = 'USA';

// iroman.age = 47;
// iroman.lastNames = 'Sacoto'// Reasignación permitida

console.log({ iroman, spiderMan });
