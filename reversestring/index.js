// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}
//Other solutions :
// function reverse(str) {
//     return str.split('').reduce((rev, ch) => ch + rev, '');
// }

// function reverse(str){
//     return str
//             .split('')
//             .reverse()
//             .join('')
// }
module.exports = reverse;

