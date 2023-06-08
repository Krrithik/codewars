/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */


function digitalRoot(inputNumber) {
    let remainder;
    let sum = 0;
    while (inputNumber>0) {
      remainder = inputNumber % 10;
      sum += remainder;
      inputNumber = Math.floor(inputNumber / 10);
    }
    return sum;
  }
  
  let inputNumber = 2568;
  let result = digitalRoot(inputNumber);
  console.log(result);
 


/*  
  function digitalRoot(inputNumber) {
    if (inputNumber < 10) {
      return inputNumber;
    } else {
      let remainder;
      let sum = 0;
      while (inputNumber > 0) {
        remainder = inputNumber % 10;
        sum += remainder;
        inputNumber = Math.floor(inputNumber / 10);
      }
    }
  }
  
  let inputNumber = 2568;
  let result = digitalRoot(inputNumber);
  console.log(result); */


