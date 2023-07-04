/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" */

/* function spinWords(inputString) {
    inputArray = inputString.split(' ')
    finalArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        console.log(element);
        
        if (element.length >= 5) {
            reversedArray = element.split('').reverse();
            finalArray.push(reversedArray.join(''))
            console.log(finalArray);
        }else{
            
        }
    }
    
};

let inputString = 'This is another test';
let result = spinWords(inputString); */
//console.log(result);



function spinWords(inputString) {
  inputArray = inputString.split(" ");
  let finalArray = [];
  let elementArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    
    if (element.length < 5) {
      finalArray.push(element);
    } else if (element.length > 4) {
      reversedArray = element.split("").reverse();
      finalArray.push(reversedArray.join(""));
      console.log(finalArray);
    }
  }
};

let inputString = "This is another test";
let result = spinWords(inputString); 
//console.log(result);
