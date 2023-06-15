// function add(n1, n2) {
//     return n1 + n2;
//   }

//   const add1 = function(n1,n2) {
//     return n1+n2
//   }

//   const add2 = (n1,n2) => {
//     return n1 + n2
//   };

//   const squared = x => x*x;

//   console.log(squared(5));


// console.log(add(2,3), add1(2,3), add2(2,3));

// Array Map
let sum = 0;

function convertToNumber(item) {
    return  Number(item)
}

function addToSum(item){
     sum+=item;
}
x = ['2', '3', '4'];

//  y = x.map(item => Number(item));
 y = x.map(convertToNumber );
 //y.forEach(addToSum);


 const initialValue = 0;
 const sum1 = y.reduce(
   (accumulator, currentValue) => {return accumulator + currentValue; }
 );
 
console.log(sum1);

// callback function : A function passed as an argument to another function or method.