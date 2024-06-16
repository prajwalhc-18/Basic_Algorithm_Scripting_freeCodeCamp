function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}

// Example usage:
let arr = [2, 3, 4, 10, 40];
let x = 10;
console.log(linearSearch(arr, x));
