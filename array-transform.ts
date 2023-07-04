/**
 * Given an integer array arr and a mapping function fn,
 * return a new array with a transformation applied to each element.
 * The returned array should be created such that
 * returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

// arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

function plusI(n, i) { return n + i; }

var map = function(arr: number[], fn: (a: number, b?: number) => number): number[] {
    // Use result = Array() instead of result = [], to avoid type never error.
    const result = Array();
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};


/**
 * Interesting way to type functions
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html
 */
// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//     return arr.map(func);
// }
   