/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */

function binaryToNumber(inputArray) {


    let result = 0;
   let arrlength = inputArray.length 
    
  for (let i = arrlength-1 ; i >= 0; i--) {
    let element = inputArray[i];
    result += element*Math.pow(2, arrlength-1-i )
}
return result;
};

let inputArray = [1, 0, 1, 1];
let result = binaryToNumber(inputArray);
console.log(result);
