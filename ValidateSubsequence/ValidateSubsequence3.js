function isValidSubsequence(array, sequence) {
  console.log({ array });
  console.log({ sequence });

  while (array.length > 0) {
    let aPointer = array.length - 1;
    let sPointer = sequence.length - 1;

    let aValue = array[aPointer];
    let sValue = sequence[sPointer];

    if (sequence.length === 0) return true;
    if (aValue === sValue) {
      array.pop();
      sequence.pop();
    } else {
      array.pop();
    }
  }
  if (sequence.length === 0) return true;
  return false;
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [5, 1, 22, 25, 6, -1, 8, 10];

isValidSubsequence(arr, seq);

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
