/* Challenge: Squares of Positives
Write a function called squaresOfPositives that takes an array of numbers as input 
and returns a new array containing the squares of all the positive numbers in the input array.*/

const sqrPositive = arr =>arr.filter(n=> n>0).map(n=> n*n)

console.log(sqrPositive([-1,2,-3,4,-5,6,-7,-8,-9,10]))