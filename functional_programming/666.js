/*Prime Number Sum Challenge
1. isPrime Function (5 points):

Implement a JavaScript function called isPrime that takes a positive integer 
as an argument and returns true if it's a prime number, and false otherwise. 
A prime number is a natural number greater than 1 that is not a product of two 
smaller natural numbers.

2. sumPrimes Function (10 points):

Implement a JavaScript function called sumPrimes that takes a positive integer, 
limit, as an argument and returns the sum of all prime numbers up to and including 
that limit. Utilize the isPrime function from question 1.

3. Functional Programming Refactor (5 points):

Refactor your solution using functional programming concepts. Rewrite the
 sumPrimes function as sumPrimesFunctional using array methods like filter and reduce.

*/
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;

    return true;
}

function sumPrimesFun(limit) {
    const primes = Array.from({ length: limit - 1 }, (_, index) => index + 2)
        .filter(isPrime);

    const sum = primes.reduce((acc, current) => acc + current, 0);

    return sum;
}

console.log(sumPrimesFun(10));
