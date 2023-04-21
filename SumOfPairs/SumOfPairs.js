function sumPairs(ints, s) {
  // initialize tracker for values that match s
  // set pointers
  // iterate through numbers
  //  if match add to tracker
  // loop through tracker and return one that has the smallest index

  let tracker = {};
  let trackerCount = 0;
  let baseI = 0;
  let roverI = 1;

  while (baseI < ints.length - 1) {
    let baseVal = ints[baseI];
    let roverVal = ints[roverI];

    if (baseVal + roverVal === s) {
      tracker[trackerCount] = {vals: [baseVal, roverVal], indices: [baseI, roverI]}
      trackerCount++;

    }

    roverI++;
    if (roverI === ints.length) {
      baseI++;
      roverI = baseI + 1;
    }
  }

  let lowest2ndIndex = {};
  for (let i in tracker) {
    let trackerI = tracker[i].indices[1];
    let lowestCurVal = undefined;
    if (lowest2ndIndex.indices !== undefined) {
       lowestCurVal = lowest2ndIndex.indices[1];
    }
    if (trackerI < lowestCurVal || lowestCurVal === undefined) {
      lowest2ndIndex = tracker[i];
    }
  }

  return lowest2ndIndex.vals || undefined;

//   return [0, 0] || undefined ;
}

sumPairs([5, 9, 13, -3], 10)
// sumPairs([0, 2, 0], 0)
// sumPairs([4, -2, 3, 3, 4], 8)
// sumPairs([10, 5, 2, 3, 7, 5], 10)
// sumPairs([1, 2, 3, 4, 1, 0], 2)
// sumPairs([20, -13, 40], -7)
// sumPairs([4, 3, 2, 3, 4],6)
// sumPairs([1, -2, 3, 0, -6, 1], -6)
