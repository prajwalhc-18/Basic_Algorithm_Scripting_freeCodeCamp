/* Challenge: Fibonacci Sequence

Write a function fibonacci(n) that takes a number n as its argument 
and returns the n-th number in the Fibonacci sequence. The Fibonacci sequence 
is defined as follows: the 0th number is 0, the 1st number is 1, and each 
subsequent number is the sum of the two preceding ones.

For example:

fibonacci(0) should return 0.
fibonacci(1) should return 1.
fibonacci(2) should return 1.
fibonacci(3) should return 2.
fibonacci(4) should return 3.
And so on...*/

const fibonacci = (n, memo = []) => {
    if (n <= 1) {
      return n;
    }
  
    if (typeof memo[n] === 'undefined') {
      memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
  
    return memo[n];
}

console.log(fibonacci(10))
