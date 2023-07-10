/**
 * Intersection
 * Write a function, intersection, that takes in two arrays, a,b, as arguments.
 * The function should return a new array containing elements that are in both of the two arrays.
 * You may assume that each input array does not contain duplicate elements.
 * intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
 */

// Using a Set to find duplicates
// Add the first array to a Set
// iterate over second array, and if the number is already in the set, push to new result Array
// return new result Array

// O(n+m) where n and m are the lengths of the two arrays

 const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) { result.push(item); }
  }
  
  return result;
};

// this just uses an array, not a Set
const intersectionProvidedAnswer = (a, b) => {
  const result = [];
  for (let item of b) {
    if (a.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// intersection([2,4,6], [4,2]) // -> [2,4]
// intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
// intersection([0,1,2], [10,11]) // -> []
