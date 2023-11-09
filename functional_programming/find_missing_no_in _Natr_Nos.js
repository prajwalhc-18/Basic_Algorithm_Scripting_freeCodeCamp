function find_num(arr){
    const n = arr.length+1
    const expected_sum = (n*(n+1))/2

    const actual_sum = arr.reduce((sum,n)=> sum+n,0)

    return expected_sum - actual_sum
}
console.log(find_num([1,2,3,4,5,6,8,9,10]))