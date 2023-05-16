function disemvowelTrolls(inputString) {
  const vowels = ["a", "e", "i", "o", "u"];
  const inputArray = inputString.toLowerCase().split("");
  // const inputArray = inputString.split("");
  let output = "";

  for (let index = 0; index < inputArray.length; index++) {
    const inputCharacter = inputArray[index];
    if (!vowels.includes(inputCharacter)) {
      output += inputCharacter;
    }
  }

  return output;
}


const result = disemvowelTrolls("kumanan");
const result1 = disemvowelTrolls('Ezhil')
console.log(result, result1); 
