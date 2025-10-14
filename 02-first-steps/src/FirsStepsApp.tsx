import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {


  return (
    <>
      <h1>Carrito de compras</h1>
      <ItemCounter name='Nintendo switch 2' quantity={2} />
      <ItemCounter name="Pro Controller" quantity={6} />
      <ItemCounter name="Super Smash" quantity={4} />
      {/* <p>Esto es un parrafo!!</p>
      <button>Click me!</button>
    
      <div>
        <h2>Hola dentro de un div</h2>
        <button>Nuevo boton dentro del div</button>
      </div> */}

    </>
  )
}