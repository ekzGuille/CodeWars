// 24/04/2019
// https://www.codewars.com/kata/array-dot-diff

function array_diff(a, b) {
  let difArray = [];

  a.forEach(el => {
    if (!b.includes(el)){
      difArray.push(el);
    }
  });
   return difArray;
}

console.log(array_diff([], [4, 5]), [], 'a was [], b was [4,5]');
console.log(array_diff([3, 4], [3]), [4], 'a was [3,4], b was [3]');
console.log(array_diff([1, 8, 2], []), [1, 8, 2], 'a was [1,8,2], b was []');