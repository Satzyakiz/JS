// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    n = parseInt(n)
    let rev = 0
    let x = n
    if(n<0)
        n = -n;
    while(n){
        let dig = n%10
        n = Math.floor(n/10)
        rev = rev*10 + dig
    }
    rev = x<0?-rev:rev;
    return rev;
}

module.exports = reverseInt;
