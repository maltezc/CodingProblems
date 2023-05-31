function twoNumberSum(array, targetSum) {
  let tried = [];

  for (let num of array) {
    value = targetSum - num;
    if (tried.includes(value)) {
      return [num, value];
    }
    tried.push(num);
  }
  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
