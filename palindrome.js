/* Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama". */



function isPalindrome(inputString) {
    
    let lowerCaseString = inputString.toLowerCase().replace(/[^a-z0-9]/gi ,'');
    console.log(lowerCaseString);
    let inputArray = lowerCaseString.split('');
    let reversedString = inputArray.reverse().join('');
    console.log(reversedString);
    if (lowerCaseString === reversedString) {
        return true;
    } else {
        return false;
    }
} 
   

let inputString = 'A man, a plan, a canal – Panama';
let result = isPalindrome(inputString);
console.log(result); 
