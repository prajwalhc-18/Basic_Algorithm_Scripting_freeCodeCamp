function findMissingNumber(arr){
  const n = arr.length+1
  const sumOfArr = arr.reduce((a,b)=> a+b,0)
  const realSum = (n*(n+1))/2
  return realSum-sumOfArr
}

console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5]))