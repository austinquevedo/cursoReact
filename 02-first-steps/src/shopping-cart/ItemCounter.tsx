// se puede escribir rafc para crear este snippet

interface Props {
  name: string;
  quantity: number | undefined; // ? significa que es opcional
}


export const ItemCounter = ({ name, quantity }: Props) => {
  console.log('ItemCounter prop name:', name);
  return (
    <section>
      <span> {name} </span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );

}
