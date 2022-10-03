"use strict";
// 7 kyu
exports.__esModule = true;
exports.Kata = void 0;
// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        return parseInt(num
            .toString()
            .split("")
            .map(function (digit) { return Math.pow(Number(digit), 2); })
            .join(""));
    };
    return Kata;
}());
exports.Kata = Kata;
