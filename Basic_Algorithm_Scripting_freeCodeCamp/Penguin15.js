/*Challenge 1: Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Output should be [0, 1] because nums[0] + nums[1] equals 9.

 */
function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
}
console.log(twoSum([100,200,300,400,500],900))
