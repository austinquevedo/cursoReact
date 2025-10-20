
import { ItemCounter } from "./shopping-cart/ItemCounter";


import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    color: '#1a73e8',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    margin: '12px auto',
    borderRadius: 8,
    width: '120%',
    boxShadow: '0 12px 10px rgba(0,0,0,0.1)',
  },
});

interface CartItem {
  productName: string;
  Quantity: number;
}

const itemsInCart: CartItem[] = [
  { productName: 'Nintendo Switch 2', Quantity: 2 },
  { productName: 'Pro Controller', Quantity: 6 },
  { productName: 'Super Smash', Quantity: 1 },
  { productName: 'Nintendo Pro MAx', Quantity: 4 },
];

//Agregar un nuevo item al carrito
itemsInCart.push({ productName: 'New Product', Quantity: 1 });

export function FirstStepsApp() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}> Shopping Cart </h1>

      {itemsInCart.map(({ productName, Quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={Quantity} />
      ))}

    </>
  );
}
