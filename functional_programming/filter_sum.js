const arr = [1,3,4,7,8,9,4,1,2,6,22,44,4,5,6,5,98,7,6,21,45]

const squares = arr.filter(n=> n%2===1).map(n=>n*n).reduce((x,y)=> x+y,0)

console.log(squares)