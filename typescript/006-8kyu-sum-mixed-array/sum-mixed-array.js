"use strict";
// 8 kyu
exports.__esModule = true;
exports.sumMix = void 0;
// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x) {
    return x.reduce(function (total, current) {
        return typeof current !== "number"
            ? (total += parseInt(current))
            : (total += current);
    }, 0);
}
exports.sumMix = sumMix;
