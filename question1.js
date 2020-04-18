// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%Jones"

// without recursion
const noSpaces = (string) => {
  const stringArray = string.split("");
  const noSpaceArray = stringArray.map(function(element) {
    if (element == " ") {
      newElement = "%20";
      return newElement;
    } else {
      return element;
    }
  });
  const fixedString = noSpaceArray.join("");
  return fixedString;
}

// with recursion - WORKS!
const recursionSpaceEliminator = (string, counter=0) => {
  const stringArray = string.split("");
  if (string === "") {
    return "";
  } else if (counter === string.length) {
    return string;
  } else if (stringArray[counter] === " ") {
    stringArray[counter] = "%20";
    const joinedString = stringArray.join("");
    return recursionSpaceEliminator(joinedString, counter + 1);
  } else {
    return recursionSpaceEliminator(string, counter + 1);
  }
}
