"use strict"

function nonConstructibleChange(coins) {
  counts = coins.sort((a,b) => a-b);


  let currentChangeCreated = 0;

  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }

    currentChangeCreated += coin;
  }

  return currentChangeCreated;
}

// Do not edit the line below.
// exports.nonConstructibleChange = nonConstructibleChange;


let counts = [1,2,5];
// let counts = [5, 7, 1, 1, 2, 3, 22];
nonConstructibleChange(counts);