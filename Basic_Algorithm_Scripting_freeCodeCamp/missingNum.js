const array = [1, 3, 5, 6, 7, 9, 10];

function findMissingNumbers(arr, x, y) {
  let aa = [];
  for (let i = x; i <= y; i++) {
    if (!arr.includes(i)) aa.push(i);
  }
  return aa;
}

console.log(findMissingNumbers(array, 1, 10));
// Output: [2, 4, 8]
