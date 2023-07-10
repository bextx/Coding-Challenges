
/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

 var isSubsequence = function(s, t) {
  // s will be smaller than t
  let j = 0;
  if (s.length > t.length) { return false }
  // for (let x = 0; x < t.length; x ++) {
  //   if (t.charAt())
  // }
  for (char of t) {
    if (char === s.charAt(j)) { j++; }
  }

  console.log(j)
  return s.length === j;
};


console.log('should be true ', isSubsequence('abc', 'ahbgdc'));
console.log('should be false ', isSubsequence('axc', 'ahbgdc'));



