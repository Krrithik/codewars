/* String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */



/* function repeatString(n,s) {
    let result = s.repeat(n);
    return result
    
}

console.log(repeatString(5,'k')); */




/* let repeatString = (n,s) => s.repeat(n)
console.log(repeatString(7,'Krrithik')); */



function repeatString(number,string) {
    let result = '';
    for (let i = 0; i < number; i++) {
        let element = string;
        result = result + element;
        
    }
    
    return result;
}

console.log(repeatString(7,'Krrithik'));

