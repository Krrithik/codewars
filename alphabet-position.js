/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

 If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

 Example
 alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 */

function alphabetPosition(inputString) {
  let alphabets = " abcdefghijklmnopqrstuvwxyz";
  let inputArray = inputString.toLowerCase().split(" ");
  let resultArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    for (let j = 0; j < element.length; j++) {
        const subElement = element[j];
        if (alphabets.includes(subElement)) {
            let position = alphabets.indexOf(subElement);
            resultArray.push(position);
          }
        
    }

    
  }
  return resultArray.join(" ");
}

let inputString = "The sunset sets at twelve o' clock";
let result = alphabetPosition(inputString);
console.log(result);
