//Validacion  final de  la subida a Git

//nuevos cambios para ver si se suben a git
import { describe, expect, test } from "vitest";
import { add, substract, divide, multiply, potencia } from "./math.helper";

describe("Suma", () => {
  // Esto es un comentario de prueba
  test("Suma de dos numeros", () => {
    // 1 Arrange o preparacion
    // y ahora que hago
    const a = 4;
    const b = 2;

    // 2 Act, accion o aplicar estimulos
    const resultadoAdd = add(a, b);

    // 3 Assert
    expect(resultadoAdd).toBe(a + b);
  });

  //Este es un comentario de prueba para ver si se actualiza el archivo
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
test("potencia", () => {
  //arrange
  const base = 3;
  const exponente = 4;
  //act
  const resultadoPotencia = potencia(base, exponente);
  //assert
  expect(resultadoPotencia).toBe(Math.pow(base, exponente));
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

describe("Resta", () => {
  test("Resta de dos numeros", () => {
    // Arrange
    const a = 10;
    const b = 4;

    // Act
    const resultadoSubstract = substract(a, b);
    // Assert
    expect(resultadoSubstract).toBe(a - b);
  });
});
