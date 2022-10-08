// 8 kyu

// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

export function positiveSum(arr) {
  if (!Array.isArray(arr))
    throw new Error("provided parameter must be an array");

  arr.forEach((element) => {
    if (typeof element !== "number" || isNaN(element)) {
      throw new Error("all elements in the array must be numbers");
    }
  });

  return arr.reduce((sum, current) => (current > 0 ? sum + current : sum), 0);
}
