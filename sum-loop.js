let numbers = [4,3,3];

/* let sum = numbers.reduce(
(currentValue , accumulator ) => currentValue + accumulator
) */
let sum = 0;
 
// for (let index = 0; index < numbers.length; index++) {
//   let element = numbers[index];
//   sum = sum + element;
// }
let len = numbers.length;
let i = 0;

while (i < len) {
  sum = sum + numbers[i];
  i++;

}

console.log(sum);

