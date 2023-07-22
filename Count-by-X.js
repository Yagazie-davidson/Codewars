// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  let i = 1;
  while (z.length < n) {
    if (i % x == 0) {
      z.push(i);
    }
    i++;
  }
  return z;
}
