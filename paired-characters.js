/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

 function pairedCharactersByKumanan(inputString) {


    let result = []
    let inputArray = inputString.toLowerCase().split('');
    if (inputArray.length%2 !== 0){
        inputArray.push('_');
    }
    
    for (let i = 0; i < inputArray.length; i += 2) {
        let pair = inputArray.slice(i, i + 2);
        result.push(pair.join(''));
}

console.log(result);

}

let inputString = 'qwertyuio';
let finalResult = pairedCharactersByKumanan(inputString);
console.log(finalResult);

//testing merge and branches. kumanan's changes