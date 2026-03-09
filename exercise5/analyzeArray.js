export function analyzeArray(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  let min = arr[0];
  let total = 0;
  arr.forEach((num) => {
    total += num;
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return {
    average: total / arr.length,
    max: max,
    min: min,
    length: arr.length,
  };
}
