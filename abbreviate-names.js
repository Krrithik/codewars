/* Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevNames(inputName) {
  let twoWords = inputName.split(" ");
  let firstLetters = twoWords.map((x) => x.charAt(0).toUpperCase());
  let initials = firstLetters.join(".");
  return initials;
}

let inputName = "sam harris";
let result = abbrevNames(inputName);
console.log(result);
