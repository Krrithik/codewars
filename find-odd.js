// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(numbers){
    let output = null;
    if(!Array.isArray(numbers)){
        throw new Error('numbers should be an array');
    }
    let uniqueNumbers = new Set();
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        uniqueNumbers.add(element);
        console.log(`i is ${element}`);

        
    }
    console.log(`Size of uniqueNumbers: ${uniqueNumbers.size}`);
}

let inputNumbers = [1,2,4,1,5,3,2,2]
let result = findOdd(inputNumbers.sort());
//testing branches.