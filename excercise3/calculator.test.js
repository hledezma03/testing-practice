import { calculator } from "./calculator";

test("calculator should perform basic arithmetic operations", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(4, 3)).toBe(12);
  expect(calculator.divide(10, 2)).toBe(5);
});
