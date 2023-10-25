/* Write a function that takes two parameters, an array of numbers, 
and a target sum. The function should find and return the first pair of numbers 
in the array that add up to the target sum. If no such pair is found, return null. */

function findPair(arr, sum) {
  for (let i of arr) {
      for (let j of arr) {
          if (i + j === sum) {
              return [i, j];
          }
      }
  }
  return null;
}
console.log(findPair([1,2,3,4,5,6],10))