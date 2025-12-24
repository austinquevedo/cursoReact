import { useState } from "react"
import { Hijo } from "./Hijo"

export const Padre = () => {
  const [mensaje, setMensaje] = useState('Esperando mensaje del hijo')

  return (
    <div>
      <h1>Panel de control de Padre</h1>
      <Hijo mensaje={mensaje} onClick={() => setMensaje('Mensaje desde el padre')} />
      <p>{mensaje}</p>
    </div>
  )
}