// 8 kyu

// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

export function sumMix(x: any[]): number {
  return x.reduce(
    (total: number, current) =>
      typeof current !== "number"
        ? (total += parseInt(current))
        : (total += current),
    0
  );
}
