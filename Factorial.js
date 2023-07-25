// Using a Loop
function factorial(num) {
  let result = 1;
  if (num === 1) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
