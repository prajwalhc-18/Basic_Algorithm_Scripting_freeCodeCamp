function sumSqr(arr){
  let sum = arr.filter(n=> n%2 === 0).map(n=> n*n).reduce((a,b)=> a+b,0)
  return sum
}
console.log(sumSqr([1,2,3,4,5]))