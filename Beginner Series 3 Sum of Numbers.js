// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and
// return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
function getSum(a, b) {
  let start;
  let end;
  if (a < b) {
    start = a;
    end = b;
  } else {
    start = b;
    end = a;
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
