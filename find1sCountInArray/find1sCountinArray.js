"use strict";

/* find1sCountInArray
given a sorted array of 0s and 1s, find the count of 1s in the array */

/**
 * find first index of 1
 * slice it to the end
 * return sliced length
 *
 */

function find1sCountInArray(arr) {
  let first = arr.findIndex(1);
  const sliced = arr.slice(first);
  return sliced.length;
}

// This should be binarySearch with 0(log n), see obsidian notes in whiteboarding
//