import { expect, test } from "vitest";
import { add, substract, divide, multiply, potencia } from "./math.helper";

test("Suma de dos numeros", () => {
  // 1 Arrange
  const a = 4;
  const b = 2;

  // 2 Act
  const resultadoAdd = add(a, b);

  // 3 Assert
  expect(resultadoAdd).toBe(a + b);
});

test("potencia de numeros", () => {
  //arrange
  const base = 3;
  const exponente = 4;
  //act
  const resultadoPotencia = potencia(base, exponente);
  //assert
  expect(resultadoPotencia).toBe(Math.pow(base, exponente));
});

test("Test para la multiplicacion", () => {
  // Arrange
  const a = 5;
  const b = 3;

  // Act
  const resultadoMultiply = multiply(a, b);

  // Assert
  expect(resultadoMultiply).toBe(a * b);
});

test("Resta de dos numeros", () => {
  // Arrange
  const a = 10;
  const b = 4;

  // Act
  const resultadoSubstract = substract(a, b);
  // Assert
  expect(resultadoSubstract).toBe(a - b);
});
