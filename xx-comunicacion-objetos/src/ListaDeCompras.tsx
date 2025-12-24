import { useState } from "react"
import { ProductoItem } from "./ProductoItem"

type Producto = { id: number; nombre: string };

export const ListaDeCompras = () => {
  const [items, setItems] = useState<Producto[]>([
    {id: 1, nombre: 'Manzana'},
    {id: 2, nombre: 'Banana'},
    {id: 3, nombre: 'Pera'},
    {id: 4, nombre: 'Naranja'},
    {id: 5, nombre: 'Uva'},
    {id: 6, nombre: 'Sandia'},
    {id: 7, nombre: 'Melon'},
    {id: 8, nombre: 'Piña'},
    {id: 9, nombre: 'Mango'},
    {id: 10, nombre: 'Fresa'},
  ])


  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div>   
     {items.map(item => (
      <ProductoItem key={item.id} id={item.id} nombre={item.nombre} onDelete={handleDelete} />
     ))}
    </div>
  )
}