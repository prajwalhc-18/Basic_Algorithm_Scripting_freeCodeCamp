function findMissingNumber(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  let realSum = 0;
  let arrSum = 0;
  arr.forEach((element) => {
    arrSum += element;
  });
  for (let i = first; i <= last; i++) {
    realSum += i;
  }
  let missingNum = realSum - arrSum;
  return missingNum
}

// Example usage:
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([10, 11, 12, 14])); // Output: 13
