/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let x = 0;
  let j = 1;

  // WHILE LOOP WONT WORK IF THERE ARE NO ZEROES

  // while (x < j) {
  //   if (nums[j] === 0 && j <= nums.length) {
  //     console.log('nums[j] is 0 ', nums[j])
  //     j++;
  //     console.log('j ', j);
  //   }
  //   else if (nums[x] === 0) {
  //     [nums[j], nums[x]] = [nums[x], nums[j]]
  //     x++;
  //   }
  //   else {
  //       j++
  //     x++;
  //   }
    
  // }

var pos = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      console.log({
        i,
        val: nums[i],
        pos,
        nums
      })
       nums[pos++] = nums[i];
    }
}
for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
}

  return nums
    
};
console.log('should be [1,3,12,0,0]', moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([1, 2]))
