// 24/04/2019
// https://www.codewars.com/kata/camelcase-method

String.prototype.camelCase = function () {
  let array = this.split(' ');
  let newWord = '';
  array.forEach(word => {
    newWord += word.charAt(0).toUpperCase().concat(word.substring(1));
  });
  return newWord;
}

console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");