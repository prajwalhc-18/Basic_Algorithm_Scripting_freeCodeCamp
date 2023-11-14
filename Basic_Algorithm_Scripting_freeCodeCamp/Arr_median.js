function findMedian(arr) {
  arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    const middleValues = arr.slice(middleIndex - 1, middleIndex + 1);
    return (middleValues[0] + middleValues[1]) / 2;
  } else {
    return arr[middleIndex];
  }
}

const array = [5, 2, 9, 1, 7,8];
console.log(findMedian(array));
