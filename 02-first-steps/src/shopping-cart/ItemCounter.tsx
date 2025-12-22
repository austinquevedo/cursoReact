// ...existing code...
import { useState } from 'react';
// import './itemCounter.css'
import Styles from './itemCounter.module.css';

interface Props {
  name: string;
  quantity: number | undefined; // ? significa que es opcional
}


export function ItemCounter({ name, quantity = 1 }: Props) {

  //Los hooks deben ir siempre al inicio de la funcional componente
  const [count, setCount] = useState(quantity ?? 0); //Si quantity es undefined, usar 0

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handelSustract = () => {
    if (count == 1) return;
    setCount(count - 1);
  }

  // const ceroContador = () => {
  //   setCount(0);
  // }

  const itemClass = `${Styles.item} ${count < 1 ? Styles["ina-ctive"] : Styles.active}`;


  const handleClick = () => {
    console.log(`Clicked on item: ${name}`);
  }

  return (
    <section className={itemClass} onClick={handleClick}>

      <span className={Styles.productName} style={{ color: count === 1 ? 'red' : 'black' }}>
        {name}
      </span>

      <button className={Styles.button} onClick={handleAdd}>+1</button>
      <span className={Styles.span}>{count}</span>
      <button className={Styles.button} onClick={handelSustract} >-1</button >
    </section >
  );
}
