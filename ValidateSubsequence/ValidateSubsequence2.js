function isValidSubsequence(array, sequence) {
  // Write your code here.
  let result = [];
  let seqIndex = 0;
  let arrayIndex = 0;

  while (seqIndex < sequence.length && seqIndex < array.length) {
    let arrayNum = array[arrayIndex];
    let seqNum = sequence[seqIndex];
    // if (seqIndex)
    if (arrayIndex === array.length) {
      seqIndex++;
      arrayIndex = seqIndex;
      return false;
    }
    if (seqNum === arrayNum) {
      result.push(true);
      arrayIndex++;
      seqIndex++;
    } else {
      arrayIndex++;
    }
  }

  let resultLengthMatch = result.length === sequence.length;
  let resultAllTrues = result.every((bool) => bool === true);

  return resultLengthMatch && resultAllTrues;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const array = [5,1,22,25,6,-1,8,10];
const sequence = [4, 5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];
// const sequence = [1,6,-1, 10]

isValidSubsequence(array, sequence);

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
