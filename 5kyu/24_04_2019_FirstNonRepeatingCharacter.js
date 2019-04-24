// 24/04/2019
// https://www.codewars.com/kata/first-non-repeating-character

function firstNonRepeatingLetter(s) {
    let letter = '';
    if(s.length === 0) {
        return '';
    }

    for (let i = 0; i < s.length; i++) {
        letter = s[i];
        if (s.toLowerCase().indexOf(letter.toLowerCase()) === s.toLowerCase().lastIndexOf(letter.toLowerCase())){
            return letter;
        }
        letter = '';
    }
    return letter;
}


console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');