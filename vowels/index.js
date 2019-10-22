// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    arr = str.split('');
    for(let element of arr){
        if (element.toLowerCase() == 'a' || element.toLowerCase() == 'e' || element.toLowerCase() == 'i' || element.toLowerCase() == 'o' || element.toLowerCase() == 'u')
            count++;
    }
    return count;
}

module.exports = vowels;
