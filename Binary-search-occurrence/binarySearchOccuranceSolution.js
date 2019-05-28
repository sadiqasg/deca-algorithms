//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array

// For example
// binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 15) → {occurance: 1, count: 2}
// binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 11) → {occurance: -1, count: 3}

function binarySearchOccurance(array, number) {
  //Type your solutions here
  array.sort();

  let res = {};
  let mid = Math.floor(array.length / 2);

  if (!array.length) {
    res.occurance = -1,
    res.count = 1
  }
  
  if (array[0] === number || array[array.length - 1] === number) {
    res.occurance = 1,
    res.count = 1
  }

  return res;
  // if (start <= end) {
  //   if (array[mid] === number) {
  //   } else if (array[mid] < number && array.length > 1) {
  //     start = mid + 1;
  //   } else {
  //     start = mid - 1;
  //   }
  // }
}
// binarySearchOccurance([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)
// binarySearchOccurance([], 1);
binarySearchOccurance([0, 5, 10, 15, 15, 20, 22, 30, 35, 40], 15)
// binarySearchOccurance([0, 5, 10, 15, 20, 22, 30, 35, 40], 11);
// binarySearchOccurance([1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 9], 2)
// binarySearchOccurance([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)

module.exports = binarySearchOccurance;
