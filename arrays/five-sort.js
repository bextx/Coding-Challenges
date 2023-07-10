/**
 * Five Set
 * 
 * Write a function, fiveSort, that takes in an array of numbers as an argument.
 * The function should rearrange elements of the array such that all 5s appear at the end.
 * Your function should perform this operation in-place by mutating the original array.
 * The function should return the array.
 * Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
 * 
 * fiveSort([12, 5, 1, 5, 12, 7]); -> [12, 7, 1, 12, 5, 5] 
 */

// Two Pointer Strategy
// Each pointer at each end of the array
// Then swap values
//   x               y
// [12, 5, 1, 5, 12, 7]
// need to increment y until it does not === a 5
// is y a 5? no, do not move it
// is x a 5? no? move it

//      x            y
// [12, 5, 1, 5, 12, 7]
// is y a 5? no, do not move it
// is x a 5? yes? swap with y

//      x            y
// [12, 7, 1, 5, 12, 5]
// is y a 5? yes? increment it
//      x         y
// [12, 7, 1, 5, 12, 5]
// is x a 5? no? increment it
//         x      y
// [12, 7, 1, 5, 12, 5]
// y will not move but x will...
//            x  y
// [12, 7, 1, 5, 12, 5]
// then they swap
//             x  y
// [12, 7, 1, 12, 5, 5]
// increment y - need a catch, does index of y and x = each other? Yes, end.
// n = array size
// Time: O(n)
// Space: O(1)

 const fiveSort = (nums) => {
  left = 0;  // x
  right = nums.length - 1;  // y

  while (left < right) {
    if (nums[right] === 5) {
      right --;
    } else if (nums[left] === 5) {
     [nums[left], nums[right]] = [nums[right], nums[left]]
      left ++;
    } else { left ++; }
  }
  
  return nums;
};

// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]); // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
// fiveSort([5, 5, 5, 1, 1, 1, 4]); -> [4, 1, 1, 1, 5, 5, 5]
// fiveSort([5, 5, 6, 5, 5, 5, 5]); -> [6, 5, 5, 5, 5, 5, 5] 
// fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]); -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

