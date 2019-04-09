// 09/04/2019
// https://www.codewars.com/kata/string-ends-with

function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false