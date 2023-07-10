/**
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 * For example, given [100, 4, 200, 1, 3, 2],
 * the longest consecutive element sequence is [1, 2, 3, 4].
 * 
 * Return its length: 4.
 * Your algorithm should run in O(n) complexity.
 */

function findStreak(arr) {
  // remove dupes
  let count = 0;
  let answer = 0;
  const numSet = new Set(arr);

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      count = 1;
      let j = num + 1
      while (numSet.has(j)) {
        j++;
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer
}

console.log(findStreak([100, 4, 200, 1, 3, 2])); // 4
console.log(findStreak([1, 2, 2, 3])); // 3
