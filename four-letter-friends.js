/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */



// function myFriends(inputArray) {
//   let output = [];

//   for (let i = 0; i < inputArray.length; i++) {
//     let element = inputArray[i];
//     if (element.length === 4) {
//       output.push(element);
//     }
//   }
//   return output;
// }


function myFriends(inputArray) {
    let output = inputArray.filter( e => e.length===4)
    return output;
  }
  
  

let inputArray = ["Ryan", "Kieran", "Jason", "Yous","Holland","Bran"];
let result = myFriends(inputArray);
console.log(result);
