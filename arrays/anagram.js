/**
 * Write a function, anagrams, that takes in two strings as arguments.
 * The function should return a boolean indicating whether or not the strings are anagrams.
 * Anagrams are strings that contain the same characters, but in any order.
 * 
 * anagrams('restful', 'fluster'); // -> true
 */

// Solution here is to get a count of each letter in each string and compare
// We will want to create a HashMap for each string, which in JS can just be a object
// key will be the character and value will be the count

// Object seems faster than using Map
// No nested loops, they follow each other
// Complexity n + m where n and m are the lengths of each string, Time 0(n + m)
// This is a Linear solution
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length ) { return false; }
  const count = {};
  
  for (let char of s1) {
    if (count[char] === undefined) {
      count[char] = 0;
    }
    
    count[char] += 1;
  }
  
  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    }
    count[char] -= 1;
  }
  
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  
  return true;
};

// Map seems slower than just an object
const anagramsWithMap = (s1, s2) => {
  if (s1.length !== s2.length ) { return false; }
  const countMap = new Map();
  
  for (let char of s1) {
    if (!(countMap.has(char))) {
      countMap.set(char, 0);
    }
    
    countMap.set(char, (countMap.get(char)) + 1);
  }
  
  for (let char of s2) {
    if (!countMap.has(char)) { return false }
    countMap.set(char, (countMap.get(char)) - 1);
  }

  for (let char of countMap.values() ) {
    if (char !== 0) { return false; }
  }
  
  return true;
};


//  anagrams('restful', 'fluster'); // -> true
//  anagrams('cats', 'tocs'); // -> false
//  anagrams('monkeyswrite', 'newyorktimes'); // -> true
//  anagrams('paper', 'reapa'); // -> false
//  anagrams('elbow', 'below'); // -> true
//  anagrams('tax', 'taxi'); // -> false
//  anagrams('taxi', 'tax'); // -> false
//  anagrams('night', 'thing'); // -> true
//  anagrams('abbc', 'aabc'); // -> false
