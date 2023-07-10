
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
 var isBadVersion = function(version, bad) {
  return version === bad
 };

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(n, badVersion, isBadVersion) {
    if (n === 1) return n;
    
    let lo = 0;
    let hi = n;
    
    do {
      /**
       * However, the most practical way of utilizing the power of this operator
       * is to use it as a replacement for Math.floor() function as
       * double bitwise NOT performs the same operation a lot quicker.
       * You can use it, to convert any floating point number to a
       * integer without performance overkill that comes with Math.floor().
       */
        let mA = Math.floor(lo + (hi - lo)/2);
        // this is the key difference from my original answer
        let m = ~~(lo + (hi - lo) / 2);
        if (isBadVersion(m, badVersion)) {
            if (!isBadVersion(m - 1)) return m
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo <= hi);
};

console.log('should be 2: ', solution(2, 2, isBadVersion))
console.log('should be 1: ',  solution(1, 1, isBadVersion))
console.log('should be 4: ',  solution(5, 4, isBadVersion))
