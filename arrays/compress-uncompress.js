/**
 * Uncompress and Compress Two Pointer Solutions
 * 
 * Uncompress
 * Write a function, uncompress, that takes in a string as an argument.
 * The input string will be formatted into multiple groups according to the following pattern:
 * 
 * "2c3a1t"-> 'ccaaat'
 */

// Two Pointer Solution
// The first pointer is going through the string to check each character
// The second pointer is holding onto a past value so you can determine what the number will be.
// Could be 2, could be 11, could be 127, etc.

// one pointer (x) will find the end of any number sequence, increment this pointer until find alphabeta character // c
// we then need to slice that off, convert it to a number and then use that as the count to iterate
// when we iterate we will push the character the first pointer (x) is at into the array // cc
// increment x so its at a new point and then catch y up to speed // x = 3, y = 3
// then repeat the above logic and do it again


// Note: Using an Array, and pushing into it, then joining, is faster than building a string and concatting it
const uncompress = (s) => {
  const ArrayS = s.split("");
 
  let i = 0;
  // let output = ""; // using string is slower
  let output = []; // Array is faster
  for (let x = 0; x < s.length; x++) {
    if (isNaN(ArrayS[x])) {
      // const number = s.substring(i, x);
      const number = Number(s.slice(i, x));
      for (let y = 1; y <= number; y++) {
        // output = output.concat(ArrayS[x]) // JS these are immutable, slower
        // output += ArrayS[x]
        output.push(ArrayS[x]);
      }
      i = x + 1;
    }
  }
  
  // return output;
  return output.join('');
};

// uncompress("2c3a1t"); // -> 'ccaaat'
// uncompress("4s2b"); // -> 'ssssbb'
// uncompress("2p1o5p"); // -> 'ppoppppp'
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// uncompress("127y");


/**
 * Compress
 * Write a function, compress, that takes in a string as an argument.
 * The function should return a compressed version of the string where consecutive occurrences of the same
 * characters are compressed into the number of occurrences followed by the character.
 * Single character occurrences should not be changed. You can assume that the input only contains alphabetic characters.
 * 
 * 'aaa' compresses to '3a'
 * 'cc' compresses to '2c'
 * 't' should remain as 't'
 */


// Two Pointer Solution
// i will represent the start of a streak of the same letter
// j will represent the end of the streak
// compare i & j, if the same increment j - repeat until they do not match
// the count would be j's index - i's index 
// c c a   index: 0 1 2    2-0 = 2, if 1 do not add the number
// then add the character i is at  2c
// then increment i to match j's point in the string
// repeat until end
const compress = (s) => {
  let i = 0;
  let j = 1;
  let output = [];
  
  while(j <= s.length) {
    if (s[j] !== s[j-1]) {
      // If only 1 character, dont push number
      if (j-i !== 1) { output.push(String(j-i)); }
      i = j;
    
      output.push(s[j-1]);
    }
    
    j++;
  }
  
  return output.join('');
};


// console.log(compress('ssssbbz'));
// compress('ccaaatsss'); // -> '2c3at3s'
// compress('ssssbbz'); // -> '4s2bz'
// compress('ppoppppp'); // -> '2po5p'
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
