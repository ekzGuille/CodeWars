// 12_04_2019
// https://www.codewars.com/kata/find-the-missing-element-between-two-arrays

function findMissing(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  for (let index = 0; index < arr1.length; index++) {
    if (arr2[index] !== arr1[index]) {
      return arr1[index];
    }
  }
}

console.log(findMissing([1, 2, 3], [1, 3]), 2);
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
console.log(findMissing([7], []), 7);
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);
