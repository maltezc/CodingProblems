"use strict"
function sortArray(array) {
  // given arr of ints, sort only the odds
  // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

  // use pointers in a while loop
  // set firstP to 0;
  // set secondP to 1;
  // send second p on its way
  // if it encouters an odd number, check if less than firstP
  //  if yes, switch it
  // if it reaches the end, move first p

  let firstP = 0;
  let secondP = 1;

  while (firstP < array.length) {
    let baseInt = array[firstP];
    let floaterInt = array[secondP];

    const baseIsOdd = isOdd(baseInt);
    const floaterIsOdd = isOdd(floaterInt);
    const bothAreOdd = baseIsOdd && floaterIsOdd;

    if (firstP === array.length-1) break;
    if (floaterInt < baseInt && bothAreOdd) {
      let temp = baseInt;
      array[firstP] = floaterInt;
      array[secondP] = temp;
    }
    secondP++;
    if (secondP === array.length) {
      firstP++;
      secondP = firstP + 1;
    }
  }
  return array;
}

function isOdd(int) {
  return int % 2 !== 0;
}

let testArr = [5, 8, 6, 3, 4];
sortArray(testArr);
