import { useState, useEffect } from "react";

export function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  // useEffect se ejecuta después de cada renderizado
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup: limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // El [] hace que se ejecute solo una vez (como componentDidMount)

  return <h2>Hora actual: {hora}</h2>;
}
