function isValidSubsequence(array, sequence) {
  let sPointer = 0;
  for (let index = 0; index < array.length; index++) {
    let arrVal = array[index];
    let seqVal = sequence[sPointer];
    if (seqVal === arrVal) {
      sequence[sPointer] = true;
      sPointer++;
    }
  }

  if (sequence.every(x => x === true)) return true;
  return false;
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [1, 6, -1, 10];
isValidSubsequence(arr, seq);

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;