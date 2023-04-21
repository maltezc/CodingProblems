function isValidSubsequence(array, sequence) {
  let sequenceLength = sequence.length;
  let result = [];

  // while sequence has contents
  while (array.length !== 0) {
    // if array last item == sequence, pop both
    if (array.at(-1) === sequence.at(-1)) {
      array.pop();
      sequence.pop();
      result.push(true);
      if (sequence.length === 0) break;
    } else {
    // if array last item != sequence last, pop last in array
      array.pop();
    }
  }

  let finalLength = result.length === sequenceLength;
  console.log("sequenceLength: ", sequenceLength)
  // if trues in result === length of items in sequence, return true else false
  if (finalLength && result.every(x => x === true)) {
    return true;
  } else {
    return false;
  }
}

const array = [5,1,22,25,6,-1,8,10];
const sequence = [1,6,-1, 10]

isValidSubsequence(array, sequence)


// Do not edit the line below.




/* function isValidSubsequence(array, sequence) {
  let sequenceLength = sequence.length;
  // reverse sort array
  // reverse sort sequence
  // create result array
  let flippedArray = array.sort((a,b) => b - a);
  let flippedSequence = sequence.sort((a,b) => b - a)
  let result = [];

  console.log("flippedArray", flippedArray);
  console.log("flippedSequence", flippedSequence);

  let stringedArray = JSON.stringify(flippedArray);
  let stringedSquence = JSON.stringify(flippedSequence);

  // while sequence has contents
  while (flippedArray.length !== 0) {
    console.log("flippedArray while: ", flippedArray)
    console.log("flippedSequence while: ", flippedSequence)
    // if array last item == sequence, pop both
    if (flippedArray.at(-1) === flippedSequence.at(-1)) {
      flippedArray.pop();
      flippedSequence.pop();
      result.push(true);
    } else {
    // if array last item != sequence last, pop last in array
      flippedArray.pop();
    }
  }

  let finalLength = result.length === sequenceLength;
  console.log("sequenceLength: ", sequenceLength)
  // if trues in result === length of items in sequence, return true else false
  if (finalLength && result.every(x => x === true)) {
    return true;
  } else {
    return false;
  }
}

const array = [5,1,22,25,6,-1,8,10];
const sequence = [1,6,-1, 10]

isValidSubsequence(array, sequence)


// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
 */