/* Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

//note :-
//Dividend - The dividend is the number you are dividing up
//Divisor - The divisor is the number you are dividing by
//Quotient - The quotient is the answer




/* function bmi(weight, height) {
  let dividend = weight;
  let divisor = height * height;
  let quotient = dividend / divisor;

  if (quotient <= 18.5) {
    return "Underweight";
  } else if (quotient <= 25.0) {
    return "Normal";
  } else if (quotient <= 30.0) {
    return "Overweight";
  } else if (quotient > 30.0) {
    return "Obese";
  }
} */

function bmi(weight, height) {
  let dividend = weight;
  let divisor = height * height;
  let quotient = dividend / divisor;

  switch (quotient) {
    case  18.5:
      return "Underweight";
      break;
    case quotient <= 25.0:
      return "Normal";
      break;
    case quotient <= 30.0:
      return "Overweight";
      break;
    case quotient > 30.0 :
      return "Obese";
      break;
  }};

let weight = 80;
let height =  1.80;
let result = bmi(weight, height);
console.log(result);
