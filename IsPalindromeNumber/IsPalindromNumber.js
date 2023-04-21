"use strict";

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  let firstHalf;
  let lastHalf;
  if (x < 0) return false;

  const str = x.toString();
  let splits = str.split("");

  firstHalf = str.slice(0, splits.length / 2);

  if (splits.length % 2 !== 0) {
    lastHalf = str.slice(splits.length / 2 + 1).split('').reverse().join('');
  } else {
    lastHalf = str.slice(splits.length / 2).split('').reverse().join('');
  }

  return firstHalf === lastHalf;
}

isPalindrome(1221);

/* one liner solution:
var isPalindrome = function(x) {
    return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
};
 */
