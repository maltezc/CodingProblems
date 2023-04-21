"use strict";

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // var longestCommonPrefix = fuction (strs, index = 0, final = "") {
  if (strs.length === 0) return "";
  let lengths = strs.map((str) => str.length);
  let min = Math.min(lengths);

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const str = strs[i];
    let chars = strs.map((str) => str[i]);
    let charSet = new Set(chars);

    if (charSet.size === 1) {
      prefix += [...charSet][0];
    } else {
      break;
    }
  }

  return prefix;

};

function flipString(str) {
  return str.split("").reverse().join("");
}

// let words = ["dog", "racecar", "car"];
// let words = [];
let words = ["flower", "flow", "flight"];
// let words = ["dogs", "dogs", "dogs"];
// let words = ["cars", "cats", "cards"];
longestCommonPrefix(words);

// return (new Set(nums)).size !== nums.length;
