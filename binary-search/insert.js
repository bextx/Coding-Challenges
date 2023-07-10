/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let lo = 0;
  let hi = nums.length;
  
  do {
      let m = Math.floor(lo + (hi - lo) / 2);
      let v = nums[m];
      if (hi === lo) { return hi}

      if (target === v) {
          return m
      } else if (v > target) {
          hi = m;
      } else {
          lo = m + 1;
      }
  } while (lo <= hi);
};

console.log('should be 1: ', searchInsert([1,3,5,6], 2));
// console.log('should be 2: ', searchInsert([1,3,5,6], 5));
