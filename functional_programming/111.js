function filterAndSum(arr){
    let sum = 0
    let filterEven = n => n%2 == 0
    const evenArr = arr.filter(filterEven)
    for(let i of evenArr){
        sum += i
    }return sum
}

console.log(filterAndSum([1,2,3,4,5,6,7,8,9]))

//////////////////////////////////////////////////////////////////////////////////////// 

function filterAndSum(arr) {
    return arr
        .filter(n => n % 2 === 0) 
        .reduce((acc, curr) => acc + curr, 0); 
}

console.log(filterAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
