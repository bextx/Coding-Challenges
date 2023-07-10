/**
 * Pair Sum
 * Write a function, pairSum, that takes in an array and a target sum as arguments.
 * The function should return an array containing a pair of indices whose elements sum to the given target.
 * The indices returned must be UNIQUE.
 * Be sure to return the indices, not the elements themselves.
 * There is guaranteed to be one such pair that sums to the target.
 * 
 * pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
 */

// BRUTE FORCE would be a nested loop
// [3, 2, 5, 4, 1] Loop through each of these // i = 3
// then loop through it again, and add each number to 3, and see if it = 8 
// Since we cannot have [0, 0] indices (have to be unique), the inner loop will start at 1, j = 2
// 3 + 2   3 + 5 (YES) 
// exit when it = 8, if no match is found, increment i (first loop)
// return the indices

// n is length of array
// when you nest loops it is O(n^2)


// Lets solve it in linear time and linear space!
// use a HashMap, or object in JS
// The HashMap will keep track of previous values
// Need to calculate the complement, complement = target - num
// complement = 8 - 3 
// store regular numbers in HashMap, { 3: 0 }
// as you iterate, you will find complement = 3  (8 - 5) 
// then return the value at key 3 (which is 0 index) and current index you're on (2)
// [0, 2]
// Time complexity is just O(n), n = length of array

const pairSum = (numbers, targetSum) => {
  const pairs = {};
  
  for (x = 0; x < numbers.length; x++) {
    const remainder = targetSum - numbers[x];
    
    if (remainder in pairs) {  return [x, pairs[remainder]]; }
    pairs[numbers[x]]= x;
  }
};


// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
// pairSum([1, 6, 7, 2], 13); // -> [1, 2]
// pairSum([9, 9], 18); // -> [0, 1]
// pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

/**
 * Pair Product
 * Write a function, pairProduct, that takes in an array and a target product as arguments.
 * The function should return an array containing a pair of indices whose elements multiply to the given target.
 * The indices returned must be unique. Be sure to return the indices, not the elements themselves.
 * There is guaranteed to be one such pair whose product is the target.
 * 
 * pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
 */

// Again, use a HashMap
// complement = target/num
// does complement exist in HashMap? No? Store current number and indices {4: 0}
// increment through array
// {4: 0, 7: 1, 9: 2, 2: 3 }
// at 5, we find the complement does exist in the HashMap (7)
// return the value of key 7, which is (1), then return current index for 5  which is 4
// [1, 4]

 const pairProduct = (numbers, targetProduct) => {
  const pairs = {};
  
  // my answer was checking if there were no remainders
  for (let x = 0; x < numbers.length; x++ ) {
    if (targetProduct % numbers[x] === 0) {
      const product = targetProduct/numbers[x];
      
      if (product in pairs) {
        return [pairs[product], x];
      }
      pairs[numbers[x]] = x;
    }
  }
};

const pairProductAnswerProvided = (numbers, targetProduct) => {
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;
    
    if (complement in previousNums) return [ previousNums[complement], i ];
    
    previousNums[num] = i;
  }
}

// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
// pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
