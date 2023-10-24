/* Write a function called findMax that takes an array of numbers as an argument and returns 
the maximum number in the array.*/ 

function max(arr){
    return arr.length>0 ? Math.max(...arr):undefined
}

console.log(max([1,2,3,4,5,6,7,8,9]))