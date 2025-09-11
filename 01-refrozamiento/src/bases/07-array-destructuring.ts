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

console.log('Estas son pruebas en la branch');

const [name, setName] = useState('Goku');
console.log(name); // Goku
setName('Vegeta'); // Imprime "Vegeta"
