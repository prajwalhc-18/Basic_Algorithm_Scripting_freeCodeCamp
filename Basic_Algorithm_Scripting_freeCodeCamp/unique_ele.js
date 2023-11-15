function findUnique(arr) {
  let numSet = new Set();

  for (let num of arr) {
      if (numSet.has(num)) {
          numSet.delete(num);
      } else {
          numSet.add(num);
      }
  }

  return numSet.values().next().value;
}

const arr = [4, 2, 3, 2, 3];
const result = findUnique(arr);
console.log(result);
