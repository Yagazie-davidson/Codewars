function binarySearch(list, item) {
  let min = 0;
  let max = list.length - 1; // 4
  let guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (item === list[guess]) {
      return guess;
    } else {
      if (list[guess] > item) {
        min = guess + 1;
      } else {
        min = guess - 1;
      }
    }
  }
}
