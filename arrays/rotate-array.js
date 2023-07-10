/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  if (nums === null || nums.length === 0) return
  // if (nums.length <= k) return
  if (k === 0) return
  k = k % nums.length
  nums.reverse();
  reverse(nums, k, nums.length - 1);
  reverse(nums, 0, k - 1)

  return nums;
};

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[end]; // 2
    nums[end] = nums[start]; // [2, 2]
    nums[start] = temp; //[7, 6, 5,1,2,3,4]
    start++;
    end--;
  }
}

// console.log('should be [5,6,7,1,2,3,4] ', rotate([1,2,3,4,5,6,7], 3))
// console.log('should be [3,99,-1,-100] ', rotate([-1,-100,3,99], 2))
console.log('should be [2,1] ', rotate([1,2], 3))
// console.log('should be [-1] ', rotate([-1], 2))

// [1, 2] 1
