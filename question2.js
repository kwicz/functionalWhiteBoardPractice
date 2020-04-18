// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]


// with recursion - WORKS!
let uniqueArray = [];
const deduper = (array, uniqueArray, counter = 0) => {
  if (array === []) {
    return array;
  }
  if (counter === array.length) {
    return uniqueArray;
  } else {
    if (uniqueArray.includes(array[counter])) {
      return deduper(array, uniqueArray, counter + 1);
    } else {
      uniqueArray.push(array[counter]);
      return deduper(array, uniqueArray, counter + 1);
    }
  }
};

// without recursion - WORKS!
const youMakeMeWannaDupe = (array) => {
  const uniqueArray = new Set(array);
  return uniqueArray;
}
