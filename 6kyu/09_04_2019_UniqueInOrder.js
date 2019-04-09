// 09/04/2019
// https://www.codewars.com/kata/unique-in-order

var uniqueInOrder = function (iterable) {
    let aux = [];
    let it = 0;
    if(iterable.length === 0) return [];
    if (typeof (iterable) === 'string') iterable = iterable.split("");
    aux.push(iterable[0]);

    for (let i = 0; i < iterable.length; i++) {
        const element = iterable[i];
        if (aux[it] !== element) {
            aux.push(element);
            it++;
        }
    }
    return aux;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
console.log(uniqueInOrder([]), [1, 2, 3])
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])