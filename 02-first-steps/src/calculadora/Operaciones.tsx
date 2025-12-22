// src/core/Calculator.ts
export class Calculator {

    calcular(a: number, b: number, operador: string): number {
      switch (operador) {
        case "+":
          return this.sumar(a, b);
        case "-":
          return this.restar(a, b);
        case "*":
          return this.multiplicar(a, b);
        case "/":
          return this.dividir(a, b);
        case "raiz":
          return this.raiz(a);
        case "cuadrado":
          return this.cuadrado(a);
        default:
          throw new Error("Operador no soportado");
      }
    }
  
    sumar(a: number, b: number): number { return a + b; }
    restar(a: number, b: number): number { return a - b; }
    multiplicar(a: number, b: number): number { return a * b; }
    dividir(a: number, b: number): number {
      if (b === 0) throw new Error("No se puede dividir para 0");
      return a / b;
    }
    raiz(a: number): number {
      return Math.sqrt(a);
    }
    cuadrado(a: number): number {
      return Math.pow(a, 2);
    }
  }

