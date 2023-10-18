/* Challenge: Double and Sum
Write a function called doubleAndSum that takes an array of numbers as input, 
doubles each number, and returns the sum of the doubled values.*/

function doubleAndSum(arr){
    return arr
            .map(n=> n*2)
            .reduce((a,b)=> a+b,0)
            
}
console.log(doubleAndSum([1,2,3,4,5,6,7,8,9]))