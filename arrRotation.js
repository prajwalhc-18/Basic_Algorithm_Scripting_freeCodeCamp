function rotateArray(arr, rotation) {
  if (rotation > 0) {
    let n = arr.length;
    let k = rotation % n;
    return arr.slice(-k).concat(arr.slice(0, n - k));
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // OP: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 0)); // OP: [1, 2, 3, 4, 5]
console.log(rotateArray([1, 2, 3, 4, 5], 7)); // OP: [4, 5, 1, 2, 3]
