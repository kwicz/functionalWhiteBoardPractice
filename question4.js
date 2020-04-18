// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true


// with Recursion -- WORKS!
const containsDuplicates = (string, index=1) => {
  if (string == "") {
    return false;
  }
  if (index == string.length) {
    return false;
  } else {
    const duplicatePosition = string.search(string[index]);
    if (duplicatePosition != index) {
      return true;
    } else {
      return containsDuplicates(string, index + 1);
    }
  }
}