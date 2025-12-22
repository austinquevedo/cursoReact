//Validacion  final de  la subida a Git

//nuevos cambios para ver si se suben a git
//linea 22
import { describe, expect, test } from "vitest";
import { add, substract, divide, multiply, potencia } from "./math.helper";

//Inicia el proceso de pruebas unitarias para la suma
describe("Pruebas de la operacion Suma", () => {
  // Suma de dos numeros positivos
  test("Suma de dos numeros positivos", () => {
    // 1 Arrange o preparacion
    // y ahora que hago
    const a = 4;
    const b = 2;

    // 2 Act, accion o aplicar estimulos
    const resultadoAdd = add(a, b);

    // 3 Assert
    expect(resultadoAdd).toBe(a + b);
  });

  //Suma de dos numeros negativos
  test("Suma de dos numeros negativos", () => {
    // Esto es el comentartio del test de la suma de dos numeros negativos
    // 1 Arrange o preparacion
    const a = -4;
    const b = -2;

    // 2 Act, accion o aplicar estimulos
    const resultadoAdd = add(a, b);

    // 3 Assert
    expect(resultadoAdd).toBe(a + b);
  });
  //Suma de un numero positivo y un numero negativo
  test("Suma de 1 numero positivo y un numero negativo", () => {
    // 1 Arrange o preparacion
    const a = -4;
    const b = 2;

    // 2 Act, accion o aplicar estimulos
    const resultadoAdd = add(a, b);

    // 3 Assert
    expect(resultadoAdd).toBe(a + b);
  });
});

//Inicia el proceso de pruebas unitarias para la potencia
describe("Prueba de la operación de potencia", () => {
  //Pruebas de potencia de dos numeros positivos
  test("potencia", () => {
    //arrange
    const base = 3;
    const exponente = 4;
    //act
    const resultadoPotencia = potencia(base, exponente);
    //assert
    expect(resultadoPotencia).toBe(Math.pow(base, exponente));
  });
  test("Potencia con exponente 0", () => {
    //arrange
    const base = 5;
    const exponente = 0;
    //act
    const resultadoPotencia = potencia(base, exponente);
    //assert
    expect(resultadoPotencia).toBe(1);
  });
});

describe("multiplicacion", () => {
  test("Test para la multiplicacion", () => {
    // Arrange
    const a = 5;
    const b = 3;

    // Act
    const resultadoMultiply = multiply(a, b);

    // Assert
    expect(resultadoMultiply).toBe(a * b);
  });
});

describe("Prueba de substract", () => {
  //Rsta de dos numeros positivos
  test("Resta de dos numeros", () => {
    // Arrange
    const a = 10;
    const b = 4;

    // Act
    const resultadoSubstract = substract(a, b);
    // Assert
    expect(resultadoSubstract).toBe(a - b);
  });
  //Resta de un numero positivo y un numero negativo
  test("Resta de un numero positivo y un numero negativo", () => {
    // Arrange
    const a = 7;
    const b = -3;

    // Act
    const resultadoSubstract = substract(a, b);
    // Assert
    expect(resultadoSubstract).toBe(a - b);
  });
});

describe("Prueba de divide", () => {
  //División de dos numeros positivos
  test("División de dos numeros positivos", () => {
    // Arrange
    const a = 10;
    const b = 2;

    // Act
    const resultadoDivide = divide(a, b);
    // Assert
    expect(resultadoDivide).toBe(a / b);
  });
  //División de un numero positivo y un numero negativo
  test("División de un numero positivo y un numero negativo", () => {
    // Arrange
    const a = 8;
    const b = -2;

    // Act
    const resultadoDivide = divide(a, b);
    // Assert
    expect(resultadoDivide).toBe(a / b);
  });
});
