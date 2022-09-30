// 8 kyu

// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(list: number[]): number {
  return !list.length
    ? 0
    : list.reduce((sum, current) => sum + current) / list.length;
}
