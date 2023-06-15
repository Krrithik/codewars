/* Find Maximum and Minimum Values of a List
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors. */


function maximumAndminimum(inputArray) {

   /*   let max = Math.max(...inputArray);
     let min = Math.min(...inputArray); */
     
     let max = Math.max.apply(null,inputArray);
     let min = Math.min.apply(null,inputArray);
     let result = `min = ${min}, max = ${max}`;
     return result;
   }
   
   let inputArray = [45, 47, 7, 897, -78, 13];
  let output = maximumAndminimum(inputArray);
   console.log(output);

   
   //call and apply 