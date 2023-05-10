function disemvowelTrolls(inputString) {
  let output = '';
  const vowels = ["a", "e", "i", "o", "u"];
  const inputArray = inputString.split("");
  for (let index = 0; index < inputArray.length; index++) {
    const inputCharacter = inputArray[index];
    switch (inputCharacter) {
      case "a":
      case "e":
      case "i":
    case "o":
      case "u":
        break;
      default:
        output +=inputCharacter
        break;
    }
  }
  return output;
}
const result = disemvowelTrolls('kumanan');
console.log(result);