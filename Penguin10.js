/*Write a function that takes an array of numbers as an argument. 
The function should return a new array that contains only the unique elements 
from the original array, in the same order they appeared. Also, ensure that the 
solution has a time complexity better than O(n^2). */

function uniqueElements(arr) {
    let uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
  }
  
console.log(uniqueElements([1,2,111,3,2,1,1,2,3,1,2,3,1,]))