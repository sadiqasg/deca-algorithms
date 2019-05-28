//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  //Type your solutions here
  let result = {};

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        result["index"] = array.indexOf(number);
        result["count"] = i + 1;
      } else if (!array.includes(number)) {
        result["index"] = -1;
        result["count"] = array.indexOf(array[i]) + 1;
      }
    }
  } else {
    result["index"] = -1;
    result["count"] = 0;
  }
  return result;
}

module.exports = binarySearch;
