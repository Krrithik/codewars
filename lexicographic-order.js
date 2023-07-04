/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates. */

function lexicographicOrder(a1, a2) {
  let output = [];
  for (let i = 0; i < a1.length; i++) {
    const element = a1[i];
    const elementFound = a2.find(function (item){
        return item.includes(element)
    })
    if (elementFound) {
        output.push(element)
    }
   
  }
  return output
}

s1 = ["arp", "live", "strong"];
s2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let result = lexicographicOrder(s1, s2);

console.log(result);
