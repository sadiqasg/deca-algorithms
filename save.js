let result = {}

let count = [];
for (let i = 0; i < array.length; i++) {
  let curr = array[i];
  if (curr <= number) { count.push(array[i]) }

  if (!array.includes(number)) {
    result["occurrance"] = -1;
    result["count"] = count.length;
  } else {
    if (curr === number) {
      if (!result["occurrance"]) {
        result["occurrance"] = 1;
        result["count"] = count.length;
      } else { result["occurrance"]++ }
    }
  }
}
// console.log(result);
return result;

  // let occurance = 0;
  // let count = 0;

  // for (let i = 0; i < array.length; i++) {
  //   if (number === array[i]) {
  //     occurance++;
  //   } else if (array[i] < number) {
  //     count++;
  //   }
  // }

  // if (occurance === 0) {
  //   // return {
  //   //   occurance: -1,
  //   //   // count: occurance
  //   // };
  //   console.log({
  //     occurance: -1,
  //     // count: count
  //   });
  // } else {
  //   // return {
  //   //   occurance: occurance,
  //   //   // count: occurance
  //   // };
  //   console.log({
  //     occurance: occurance,
  //     // count: count - 1
  //   });
  // }