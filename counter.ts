/**
 * 
 * @param init 
 * It should return an object with three functions.
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 * @returns function
 */

var createCounter = function(init) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = init; return count; }
    }
};

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter1 = createCounter(5)
// console.log(counter1.increment()) // 6
// console.log(counter1.reset()) // 5
// console.log(counter1.decrement()) // 4


// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter2 = createCounter(0)
// console.log(counter2.increment()) // 1
// console.log(counter2.increment()) // 2
// console.log(counter2.decrement()) // 1
// console.log(counter2.reset()) // 0
// console.log(counter2.reset()) // 0