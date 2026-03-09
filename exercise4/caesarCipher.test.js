import { caesarCipher } from "./caesarCipher";

test("caesarCipher shifts letters by the specified amount", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 2)).toBe("zab");
});

test("caesarCipher preserves case", () => {
  expect(caesarCipher("Hello", 3)).toBe("Khoor");
  expect(caesarCipher("AbC", 1)).toBe("BcD");
  expect(caesarCipher("XyZ", 2)).toBe("ZaB");
});

test("caesarCipher leaves non-alphabetic characters unchanged", () => {
  expect(caesarCipher("hello, world!", 3)).toBe("khoor, zruog!");
  expect(caesarCipher("123", 1)).toBe("123");
  expect(caesarCipher("!@#", 2)).toBe("!@#");
});

test("caesarCipher handles negative shifts", () => {
  expect(caesarCipher("khoor", -3)).toBe("hello");
  expect(caesarCipher("bcd", -1)).toBe("abc");
  expect(caesarCipher("zab", -2)).toBe("xyz");
});

test("caesarCipher handles shifts greater than 26", () => {
  expect(caesarCipher("hello", 29)).toBe("khoor");
  expect(caesarCipher("abc", 27)).toBe("bcd");
  expect(caesarCipher("xyz", 28)).toBe("zab");
});

