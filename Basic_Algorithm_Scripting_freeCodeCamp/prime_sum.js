function sumPrimes(num) {
  let sum = 0;

  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(100));
