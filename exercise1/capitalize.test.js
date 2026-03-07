import { capitalize } from "./capitalize";

test("enter capitalize to equal Capitalize", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test("enter empty string to equal empty string", () => {
  expect(capitalize("")).toBe("");
});
