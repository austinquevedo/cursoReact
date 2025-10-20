import { expect, test } from "vitest";
import { add, substract, divide, multiply } from "./math.helper";

test("Dos numeros positivos", () => {
  // 1 Arrange
  const a = 4;
  const b = 2;

  // 2 Act
  const resultadoAdd = add(a, b);

  // 3 Assert

  expect(resultadoAdd).toBe(a + b);
});
