// 09/04/2019
// https://www.codewars.com/kata/find-the-unique-number-1

function findUniq(arr) {
    let solution;
    arr.map(element => {
        if (arr.indexOf(element) === arr.lastIndexOf(element)) {
            solution =  element;
        }
    });
    return solution;
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);