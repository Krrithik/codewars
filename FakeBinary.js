/* 
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBinary(inputString) {
  if (inputString.length === 0) {
    throw new Error("input is an empty string");
  } else {
    let inputArray = inputString.split("").map(Number);
    outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
      const numbers = inputArray[i];
      if (numbers < 5) {
        outputArray.push(0);
      } else {
        outputArray.push(1);
      }
    }
    return outputArray.join('');
  }
}

let inputString = "299356888765233";
let result = fakeBinary(inputString);
console.log(result);
