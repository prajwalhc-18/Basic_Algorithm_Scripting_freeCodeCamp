function arrayIntersection(arr1, arr2) {
  let a1 = new Set(arr1);
  let a2 = new Set(arr2);
  let intersection = [];

  for (let i of a1) {
    if (a2.has(i)) {
      intersection.push(i);
    }
  }
  return intersection;
}

// Test cases
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Should return [2, 3]
console.log(arrayIntersection([4, 5, 6], [7, 8, 9])); // Should return []
console.log(arrayIntersection([1, 2, 2, 3], [2, 2, 3, 4])); // Should return [2, 3]
