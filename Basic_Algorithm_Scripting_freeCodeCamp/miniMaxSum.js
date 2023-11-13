function miniMaxSum(arr) {
    arr.sort()
    let low_sum = 0
    let high_sum = 0
    
    for(let i=0;i<Math.min(arr.length,4);i++){
        low_sum += arr[i]
    }
    for(let j=1;j<Math.min(arr.length,5);j++){
        high_sum += arr[j]
    }
    console.log(low_sum,high_sum)

}
miniMaxSum([2,4,6,8,10])