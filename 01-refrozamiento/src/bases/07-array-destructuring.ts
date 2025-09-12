const charactersName = ['Goku', 'Vegeta', 'Trunks'];

//captura el ultimo elemento del array
const [, , p3] = charactersName;

console.log({ p3 });

const returnArrayFn = (): [string, number] => {
  return ['ABC', 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(numbers + 11);
console.log({ letters, numbers });

//funcion que recibe un string y retorna un array con el string y una funcion

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
