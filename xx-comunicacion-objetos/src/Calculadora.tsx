import { useState } from "react";
import { Numero } from "./numeros";
import "./calculadora.css";
import { Ventana } from "./ventanaCalculo";

export const Calculadora = () => {
  const [numeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const [operaciones] = useState(["+", "-", "*", "/", "=", "CE"]);

  const [numeroActual, setNumeroActual] = useState(0);
  const [operacionActual, setOperacionActual] = useState<string>("");
  const [numeroAnterior, setNumeroAnterior] = useState(0);
  const [calculo, setCalculo] = useState("");

  const handleClick = (numero: number) => {
    if (operacionActual === "") {
      // Si no hay operación pendiente, construimos el número actual
      const nuevoNumero = numeroActual * 10 + numero;
      setNumeroActual(nuevoNumero);
      setCalculo(nuevoNumero.toString());
    } else {
      // Si hay operación pendiente, construimos el segundo número
      const nuevoNumero = numeroActual * 10 + numero;
      setNumeroActual(nuevoNumero);
      setCalculo(
        numeroAnterior.toString() +
          " " +
          operacionActual +
          " " +
          nuevoNumero.toString()
      );
    }
  };

  const handleOperacion = (operacion: string) => {
    if (operacion === "CE") {
      setNumeroActual(0);
      setNumeroAnterior(0);
      setOperacionActual("");
      setCalculo("");
    } else {
      if (operacion === "=") {
        if (
          numeroAnterior !== 0 &&
          numeroActual !== 0 &&
          operacionActual !== ""
        ) {
          let resultado = 0;
          switch (operacionActual) {
            case "+":
              resultado = numeroAnterior + numeroActual;
              break;
            case "-":
              resultado = numeroAnterior - numeroActual;
              break;
            case "*":
              resultado = numeroAnterior * numeroActual;
              break;
            case "/":
              resultado = numeroAnterior / numeroActual;
              break;
          }
          setCalculo(resultado.toString());
          setNumeroActual(resultado);
          setNumeroAnterior(0);
          setOperacionActual("");
        }
      } else {
        if (numeroActual !== 0) {
          const numAnterior = numeroActual;
          setNumeroAnterior(numAnterior);
          setNumeroActual(0);
          setOperacionActual(operacion);
          setCalculo(numAnterior.toString() + " " + operacion);
        }
      }
    }
  };

  return (
    <div className="ventana-marco">
      <div className="ventana-header">
        <h1>Calculadora</h1>
      </div>
      <div className="calculadora-container">
        <Ventana numero={calculo || "0"} />
        <div className="botones-grid">
          {numeros.map((numero) => (
            <Numero
              key={numero}
              numero={numero}
              onClick={() => handleClick(numero)}
            />
          ))}
          {operaciones.map((operacion) => (
            <Numero
              key={operacion}
              operacion={operacion}
              onClick={() => handleOperacion(operacion)}
              className={operacion === "CE" ? "boton-ce" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
