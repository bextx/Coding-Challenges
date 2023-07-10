
/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to
 * get t. All occurrences of a character must be replaced with another character
 * while preserving the order of characters. No two characters may map to the
 * same character, but a character may map to itself.
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 */

var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  let sMap = {};
  let tMap = {};
  for (let x = 0; x < s.length; x ++) {
    const sVal = s.charAt(x);
    const tVal = t.charAt(x);
    if (!sMap[sVal]) { sMap[sVal] = tVal }
    if (!tMap[tVal]) { tMap[tVal] = sVal }
    if (tMap[tVal] !== sVal || sMap[sVal] !== tVal) { return false }
  }

  return true
}


console.log('should be true ', isIsomorphic('egg', 'add'));
console.log('should be false ', isIsomorphic('eggs', 'add'));
console.log('should be false ', isIsomorphic('foo', 'bar'));
console.log('should be false ', isIsomorphic('badc', 'baba'));
console.log('should be false ', isIsomorphic('bbbaaaba', 'aaabbbba'));


