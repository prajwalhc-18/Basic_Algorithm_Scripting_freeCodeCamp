/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
  const newArr = [];
  for(let ele of arr2){
    if(!arr1.includes(ele)){
      newArr.push(ele)
    }
  }
  for(let ele of arr1){
    if(!arr2.includes(ele)){
      newArr.push(ele)
    }
  }
  
  return newArr
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))