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

const charactersName = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = charactersName;

console.log({ p3 });

const returnArrayFn = (): [string, number] => {
  return ['ABC', 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(numbers + 11);
console.log({ letters, numbers });

const useState = (name: string) => {
  return [
    name,
    (newValue: string) => {
      return console.log(newValue);
    },
  ] as const;
};

const [name, setName] = useState('Goku');
console.log(name); // Goku
setName('Vegeta'); // Imprime "Vegeta"
