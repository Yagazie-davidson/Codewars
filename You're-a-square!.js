// Given an integral number, determine if it's a square number:
var isSquare = function (n) {
  return Math.sqrt(n) % 1 !== 0 ? false : true;
};
