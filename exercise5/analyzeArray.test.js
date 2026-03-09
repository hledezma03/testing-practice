import { analyzeArray } from "./analyzeArray";

test("analyzeArray should return correct properties", () => {
  const inputArray = [1, 2, 3, 4, 5];
  const result = analyzeArray(inputArray);
  expect(result).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("handles an array with a single number", () => {
  const result = analyzeArray([10]);
  expect(result).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1,
  });
});

test("handles negative numbers correctly", () => {
  const result = analyzeArray([-1, -5, -2]);
  expect(result).toEqual({
    average: -2.6666666666666665,
    min: -5,
    max: -1,
    length: 3,
  });
});

test("returns null for an empty array", () => {
  expect(analyzeArray([])).toBeNull();
});
