import { useState } from 'react';
import { Calculator } from './Operaciones';
import './CalculadoraUi.css';

export function CalculadoraUi() {
  const [display, setDisplay] = useState<string>('0');
  const [numero1, setNumero1] = useState<number | null>(null);
  const [operador, setOperador] = useState<string | null>(null);
  const [esperandoNumero, setEsperandoNumero] = useState<boolean>(false);

  const calc = new Calculator();

  const handleNumero = (num: string) => {
    if (esperandoNumero) {
      setDisplay(num);
      setEsperandoNumero(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperador = (op: string) => {
    const valorActual = parseFloat(display);

    if (numero1 === null) {
      setNumero1(valorActual);
    } else if (operador) {
      try {
        const result = calc.calcular(numero1, valorActual, operador);
        setDisplay(String(result));
        setNumero1(result);
      } catch {
        setDisplay('Error');
        setNumero1(null);
        setOperador(null);
        setEsperandoNumero(true);
        return;
      }
    }

    setEsperandoNumero(true);
    setOperador(op);
  };

  const handleOperadorEspecial = (op: string) => {
    const valorActual = parseFloat(display);
    switch (op) {
      case 'raiz': {
        const resultRaiz = calc.raiz(valorActual);
        setDisplay(String(resultRaiz));
        break;
      }
      case 'cuadrado': {
        const resultCuadrado = calc.cuadrado(valorActual);
        setDisplay(String(resultCuadrado));
        break;
      }
      default:
        setDisplay('Error');
        break;
    }
  };


  const handleIgual = () => {
    if (numero1 !== null && operador) {
      const valorActual = parseFloat(display);
      try {
        const result = calc.calcular(numero1, valorActual, operador);
        setDisplay(String(result));
        setNumero1(null);
        setOperador(null);
        setEsperandoNumero(true);
      } catch {
        setDisplay('Error');
        setNumero1(null);
        setOperador(null);
        setEsperandoNumero(true);
      }
    }
  };

  const handleLimpiar = () => {
    setDisplay('0');
    setNumero1(null);
    setOperador(null);
    setEsperandoNumero(false);
  };

  const handlePunto = () => {
    if (esperandoNumero) {
      setDisplay('0.');
      setEsperandoNumero(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="calculadora-container">
      <h2 className="calculadora-titulo">
        Calculadora
      </h2>

      {/* Pantalla de visualización */}
      <div className="calculadora-display">
        {display}
      </div>

      {/* Botones */}
      <div className="calculadora-botones">
        {/* Fila 1: Limpiar y operadores */}
        <button
          onClick={handleLimpiar}
          className="calculadora-boton calculadora-boton-limpiar"
        >
          C
        </button>
        <button
          onClick={() => handleOperador('/')}
          className="calculadora-boton calculadora-boton-operador"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperador('*')}
          className="calculadora-boton calculadora-boton-operador"
        >
          ×
        </button>
        <button
          onClick={() => handleOperador('-')}
          className="calculadora-boton calculadora-boton-operador"
        >
          −
        </button>

        {/* Fila (, ), SQRT (raiz cuadrada) */}
        <button
          onClick={() => handleNumero('(')}
          className="calculadora-boton calculadora-boton-numero"
        >
          (
        </button>
        <button
          onClick={() => handleNumero(')')}
          className="calculadora-boton calculadora-boton-numero"
        >
          )
        </button>

        
        <button
          onClick={() => handleOperadorEspecial('raiz')}
          className="calculadora-boton calculadora-boton-numero"
        >
          √ 
        </button>
        <button
          onClick={() => handleOperadorEspecial('cuadrado')}
          className="calculadora-boton calculadora-boton-numero"
        >
          x²
        </button>



        
        {/* Fila 2: 7, 8, 9, + */}
        <button
          onClick={() => handleNumero('7')}
          className="calculadora-boton calculadora-boton-numero"
        >
          7
        </button>
        <button
          onClick={() => handleNumero('8')}
          className="calculadora-boton calculadora-boton-numero"
        >
          8
        </button>
        <button
          onClick={() => handleNumero('9')}
          className="calculadora-boton calculadora-boton-numero"
        >
          9
        </button>
        <button
          onClick={() => handleOperador('+')}
          className="calculadora-boton calculadora-boton-operador"
        >
          +
        </button>

        {/* Fila 3: 4, 5, 6, = */}
        <button
          onClick={() => handleNumero('4')}
          className="calculadora-boton calculadora-boton-numero"
        >
          4
        </button>
        <button
          onClick={() => handleNumero('5')}
          className="calculadora-boton calculadora-boton-numero"
        >
          5
        </button>
        <button
          onClick={() => handleNumero('6')}
          className="calculadora-boton calculadora-boton-numero"
        >
          6
        </button>
        <button
          onClick={handleIgual}
          className="calculadora-boton calculadora-boton-igual"
        >
          =
        </button>

        {/* Fila 4: 1, 2, 3 */}
        <button
          onClick={() => handleNumero('1')}
          className="calculadora-boton calculadora-boton-numero"
        >
          1
        </button>
        <button
          onClick={() => handleNumero('2')}
          className="calculadora-boton calculadora-boton-numero"
        >
          2
        </button>
        <button
          onClick={() => handleNumero('3')}
          className="calculadora-boton calculadora-boton-numero"
        >
          3
        </button>

        {/* Fila 5: 0, . */}
        <button
          onClick={() => handleNumero('0')}
          className="calculadora-boton calculadora-boton-numero calculadora-boton-cero"
        >
          0
        </button>
        <button
          onClick={handlePunto}
          className="calculadora-boton calculadora-boton-numero"
        >
          .
        </button>
      </div>
    </div>
  );
}