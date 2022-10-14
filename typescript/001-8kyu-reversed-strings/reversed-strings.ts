// 8 kyu

// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

export default function solution(str: string): string {
  return str.split("").reverse().join("");
}
