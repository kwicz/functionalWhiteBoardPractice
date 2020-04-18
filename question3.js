// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

  // const kompressedArray = stringArray.map((element, index, stringArray) => {
  //   const newElement = (element == element[index + 1]) ? 
    // }
  // });

const stringKompressor = (string) => {
  if (string === "") {
    return string;
  }
  const stringArray = string.split("");
  const elementCounter = (stringArray, index=0) => {
    if (index === stringArray.length) {
      return newArray;
    } else {
      counter = 0
      if (string[index] === string[index + 1]) {

      }
    }
  }

}


// const newString = "";
// const containsDuplicates = (string, newString, index=1) => {
//   if (string == "") {
//     return string;
//   }
//   if (index == string.length) {
//     return newString;
//   } else {
//     const subString = string.substr(index);
//     const duplicates = duplicateCounter(subString, 1);
//     if (duplicates > 1) {
//       const frontString = string.substr(duplicates + 1);
//       const duplicatesString = duplicates.toString();
//       const newsubString = duplicatesString.concat(frontString);
//       const newNewString = newString.concat(newsubString);
//       return containsDuplicates(string, newNewString, index + 1);
//     } else {
//       return containsDuplicates(string, newString, index + 1)
//     }
//   }
// }

const duplicateCounter = (string, index, counter=0) => {
  if (string[index] === string[index-1]) {
    return duplicateCounter(string, index + 1, counter + 1)
  } else {
    return counter;
  }
}

const stringKompressor = (string, newString, index=0) => {
  if (index === string.length){
    return newString;
  } else if (string[index] === string[index - 1]) {
    const duplicates = duplicateCounter(string, 1);
    const stringRemainder = string.substr(duplicates);
    console.log("stringRemainder: ", stringRemainder);
    const duplicatesString = (duplicates + 1).toString();
    const newString = duplicatesString.concat(stringRemainder);
    return stringKompressor(string, newString, index + 1);
  } else {
    console.log("string: ", string);
    return stringKompressor(string, newString, index + 1)
  }
}
