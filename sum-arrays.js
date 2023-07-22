// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum(numbers) {
  let totalSum = 0;
  if (numbers.length < 1) {
    return 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    totalSum = totalSum + numbers[i];
  }
  return totalSum;
}
