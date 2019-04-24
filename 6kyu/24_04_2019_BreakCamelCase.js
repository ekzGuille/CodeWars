// 24/04/2019
// https://www.codewars.com/kata/break-camelcase

function solution(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt(0) < 97) {
      newString += ' ';
    }
    newString += string[i];
  }
  return newString;
}


console.log(solution('camelCasing'), 'camel Casing')
