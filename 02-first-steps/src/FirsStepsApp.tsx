
import { ItemCounter } from "./shopping-cart/ItemCounter";


import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  title: {
    color: '#1a73e8',
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
    letterSpacing: '0.5px',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.08)',
  },

  item: {
    background: 'linear-gradient(145deg, #ffffff, #f4f4f4)',
    padding: '1rem 1.25rem',
    margin: '1rem auto',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.25s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
      background: 'linear-gradient(145deg, #f8faff, #e9f1ff)',
    },
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
itemsInCart.push({ productName: 'Iphone 17 PRO MAX', Quantity: 1 });

export function FirstStepsApp() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}> Shopping Cart </h1>
      {itemsInCart.map(({ productName, Quantity }) => (
        <ItemCounter
          key={productName}
          name={productName}
          quantity={Quantity} />
      ))}
    </>
  )
}


