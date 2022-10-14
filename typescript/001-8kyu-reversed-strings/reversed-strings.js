"use strict";
// 8 kyu
exports.__esModule = true;
// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str) {
    return str.split("").reverse().join("");
}
exports["default"] = solution;
