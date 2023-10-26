/*Challenge 3: Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a 
subsequence of the first one.
 */

function isValidSubsequence(arr, arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr.includes(arr1[i])) {
            return false;
        }
    }
    return true;
}

console.log(isValidSubsequence([1, 2, 3, 4, 5, 6], [6, 1, 4, 3, 100]));
