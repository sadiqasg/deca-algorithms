//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
  // Type your solutions here
  let leftSide = 0;
  let leftArr = [];
  for (let i = 0; i < array.length; i++) {
    leftSide += array[i];
    leftArr.push(array[i])

    let rightSide = 0;
    let rightArr = [];
    for (let j = i + 1; j < array.length; j++) {
      rightSide += array[j];
      rightArr.push(array[j])
    }
    if (leftSide === rightSide) return [leftArr.length, rightArr.length];
    if (rightSide <= 0) return -1;
  }
  if (leftSide <= 0) return -1;
}

module.exports = canBalance;
