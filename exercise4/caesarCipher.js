export function caesarCipher(str, shift) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");

  // Normalize shift to stay within 0-25
  const normalizedShift = ((shift % 26) + 26) % 26;

  return str
    .split("")
    .map((char) => {
      if (upper.includes(char)) {
        const index = upper.indexOf(char);
        return upper[(index + normalizedShift) % 26];
      }

      if (lower.includes(char)) {
        const index = lower.indexOf(char);
        return lower[(index + normalizedShift) % 26];
      }

      // Return punctuation, spaces, etc. as they are
      return char;
    })
    .join("");
}
