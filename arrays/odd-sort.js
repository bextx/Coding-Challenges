
/**
 * You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 * Examples
 * 
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 * [ 1, 11, 2, 8, 3, 4, 5 ] => [ 1, 3, 2, 8, 5, 4, 11 ]
 */


function sortArray(array) {
  const sortedOddNum = [...array].sort((a, b) => a - b).filter(num => num % 2 !== 0)
  let j = 0

  return array.map((num, index) => {
    if (num % 2 === 0) {
      return num
    } else {
      const odd = sortedOddNum[j]
      j += 1
      return odd
    }
  })
}

console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]))


// Solution I saw online after submitting
// Just has the odd.shift() difference

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
