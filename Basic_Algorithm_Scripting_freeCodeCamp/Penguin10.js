/**classic one: FizzBuzz.

Write a program that prints the numbers from 1 to 100. 
But for multiples of three, print "Fizz" instead of the number, 
and for the multiples of five, print "Buzz". For numbers that are
 multiples of both three and five, print "FizzBuzz". */

function FizBuz(number) {
  for (let i = 1; i <= number; i++) {
    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }

    if (i % 5 === 0) {
      result += "Buzz!";
    }

    console.log(result || i);
  }
}

console.log(FizBuz(20))
