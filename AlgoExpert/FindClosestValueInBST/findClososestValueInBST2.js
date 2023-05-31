function findClosestValueInBst(tree, target) {
  // Write your code here.
  console.log(tree)
  let result = findClosestValueInBstHelpher1(tree, target, tree.value)
  return result;
}

function findClosestValueInBstHelpher1(tree, target, closestNodeValue) {
  console.log({tree})
  // need to check for update to currentClosestVal
  let differenceOfTargetandCurrentClosest = Math.abs(target - closestNodeValue);
  let differenceOfTargetandCurrentNode = Math.abs(target - tree.value);

  console.log({target})
  console.log("current: ", tree.value)
  console.log({closestNodeValue})

  console.log({differenceOfTargetandCurrentClosest})
  console.log({differenceOfTargetandCurrentNode})

  if (differenceOfTargetandCurrentNode < differenceOfTargetandCurrentClosest) {
    closestNodeValue = tree.value
    console.log({closestNodeValue})
  }

  let leftIsNull = tree.left !== null
  let rightIsNull = tree.right !== null

  if (leftIsNull && target < tree.value) {
    console.log("left")
    console.log("leftval", tree.left)
    return findClosestValueInBstHelpher1(tree.left, target, closestNodeValue)
  } else if (rightIsNull && target > tree.value){
    console.log("right")
    console.log("rightval", tree.right)
    return findClosestValueInBstHelpher1(tree.right, target, closestNodeValue)
  } else {
    console.log("cloest", tree)
    console.log({closestNodeValue})
    return closestNodeValue
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
