// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(a, b) {
    a = a.replace(/[^\w]/g,"").toLowerCase().split('');
    b = b.replace(/[^\w]/g,"").toLowerCase().split('');
    a = a.sort()
    b = b.sort()
    if(a.length != b.length)
        return false;
    else{
        for(let i=0;i<a.length;i++){
            if(a[i] != b[i])
                return false;
        }
        return true;
    }
}

module.exports = anagrams;
