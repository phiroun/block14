//number 1-100
//for each multiple of 3, print "Fizz" instead of number.
//for each multiple of 5, print "Buzz" instead of number.
//for numbers that are multiple of both 3 and 5, print "FizzBuzz" instead of number.

for (let i = 1; i <= 100; i++) {
  // If the current number is a multiple of both 3 and 5, then print "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // If the current number is a multiple of 3, then print "Fizz"
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // If the current number is a multiple of 5, then print "Buzz"
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // If the current number is not a multiple of both 3 and 5, then print that current number.
  else {
    console.log(i);
  }
}