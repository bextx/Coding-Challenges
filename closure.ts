// Closure is defined when a function is defined in another function
// + inner function references variables from outter function

// When inner function returns, it still has a reference to the
// outter function's scope and can continue to access it
// even when the outter function has completed execution

// This is one-way. This does not hold true for outter function to inner.

// Inner function can remember values from outter functioin and then
// use them later

// Use for retrival of dead values that are out of scope
// Helps keep variables or functions private

// Closures are useful for creating private variables and functions
// and PRESERVING STATE IN ASYNC CODE

// Source: [Cosmic_Phantom](https://leetcode.com/Cosmic_Phantom/)

/**
 * Given an integer n, return a counter function.
 * This counter function initially returns n and then returns
 * 1 more than the previous value every subsequent time it is called
 * (n, n + 1, n + 2, etc).
 * 
 * @returns number
 */
const makeCounter = (n) => {
    let count = 0;
    return () => {
        return n + count++;
    }
}

let counter = makeCounter(10);
counter();
counter();

// Can also write it as
// const makeCounter = function(n) {
//     return function() {
//         return n++;
//     }
// }