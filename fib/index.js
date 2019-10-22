// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     if(n < 2)
//         return n;
//     return fib(n-1)+fib(n-2);
// }
//memoized solutin
let dict = {};
function fib(n) {
    if (n < 2) {
        if (dict[n] == null)
            dict[n] = n;
        return dict[n];
    }
    if (!(dict[n] == null)) {
        return dict[n];
    }
    dict[n] = fib(n - 1) + fib(n - 2);
    return dict[n];
}
// function fib(n,dict = {}) {
//     if (n < 2){
//         if(dict[n] == null)
//             dict[n] = n;
//         return dict[n];
//     }
//     if(!(dict[n] == null)){
//         return dict[n];
//     }
//     dict[n] = fib(n - 1,dict) + fib(n - 2,dict);
//     return dict[n];
// }
module.exports = fib;
