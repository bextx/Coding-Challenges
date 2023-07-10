/**
 * Most Frequent Character
 * 
 * Write a function, mostFrequentChar, that takes in a string as an argument.
 * The function should return the most frequent character of the string.
 * If there are ties, return the character that appears earlier in the string.
 * 
 * mostFrequentChar('bookeeper'); // -> 'e'
 */

// Solution involves looping through the string and saving the character and count into an object (HashMap)
// { b: 1, o: 2, k: 1, e: 3, p: 1, r: 1}
// Then looping over the string again and saving the first item into a variable as most frequent letter
// As you iterate over the string, compare the count of each letter to the previous. If greater, update variable
// if the same, ignore
// then return the frequent letter variable

// Provided answer
const mostFrequentChar = (s) => {
  const charMap = {};
  let keyChar = null; // most frequent

  for (let char of s) {
    if (!(char in charMap)) {
      charMap[char] = 0;
    }
    charMap[char] += 1
  }

  // loops over the string again, not the obj
  for (let char of s) {
    if (keyChar === null || count[char] > count[keyChar]) {
      keyChar = char;
    }
  }

  return keyChar;
}

// My answer - Not sure if Map is faster or slower
 const mostFrequentCharWithMap = (s) => {
  let count = 0;
  let charMap = new Map();
  let keyChar;
  for (let char of s) {
    const val = charMap.get(char, 1);
    if (val === undefined) {
      charMap.set(char, 1);
    } else {
      charMap.set(char, val + 1);
    }
    
  }
  
  // loops over the Map, not the string
  for (let [key, value] of charMap.entries()) {
    if (count < value) {
      count = value;
      keyChar = key;
    }
  }
  
  return  keyChar;
};

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
// mostFrequentChar('mississippi'); // -> 'i'
// mostFrequentChar('potato'); // -> 'o'
// mostFrequentChar('eleventennine'); // -> 'e'
// mostFrequentChar("riverbed"); // -> 'r'
