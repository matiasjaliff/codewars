// 8 kyu
// Calculate average
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function findAverage(list) {
    return !list.length
        ? 0
        : list.reduce(function (sum, current) { return sum + current; }) / list.length;
}
