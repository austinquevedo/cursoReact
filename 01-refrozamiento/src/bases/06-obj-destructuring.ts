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
  key: 'Iroman',
  address: '123 Hero Street',
};

const { id, name, age } = person;

// console.log({ name, age, key });

const useContext = ({ id, name, age, key }: Hero) => {
  return {
    keyId: key,
    user: { name, age },
    id: id,
  };
};

const context = useContext(person);

console.log(context.user.name);

console.log(context);

console.log({ id }, { name }, { age });
