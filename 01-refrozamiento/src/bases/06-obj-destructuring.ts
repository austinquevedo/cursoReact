interface Hero {
  id: number;
  name: string;
  age: number;
  address: string;
  key: string;
}

const person: Hero = {
  id: 12,
  name: 'Juan',
  age: 30,
  key: 'Iroman12',
  address: '123 Hero Street',
};

//Esto es un ejemplo de destructuring
const { name: heroName, age, address } = person;

// console.log({ name, age, key });

const useContext = ({ id, name, age, key }: Hero) => {
  return {
    keyId: key,
    user: { name, age },
    id: id,
  };
};

const {
  keyId,
  id,
  user: { name },
} = useContext(person);

console.log({ keyId, id, name });
