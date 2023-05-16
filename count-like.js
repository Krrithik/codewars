/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */

// names: array of strings

/* output = ``;
let displayText;

function countLike(names) {
  if (!Array.isArray(names)) throw new Error("Incorrect input. Only array of strings are accepted")
  else{
    displayText();
 }
    console.log(names);
}

function displayText(){
  if(names.length=0){ `no one likes this`;
 }else if(names.length=1){console.log(`${(names[0])} likes this`);
 }else if(names.length=2){console.log(`${(names[0])} and ${(names[1])} like this`);
 }else if(names.length=3){console.log(`${(names[0])}, ${(names[2])} and ${(names[3])} like this`);
 }else if(names.length>=4){console.log(`${(names[0])},${(names[1])} and ${names.length-2} others like this`);
  }
   }

names = ["loki", "steve"];

displayText();
const result = countLike(names);
console.log(result); */

function countLike(names) {
  if (!Array.isArray(names))
    throw new Error("Incorrect input. Only array of strings are accepted");
    switch (names.length) {
      case 0:
      return `${names[0]} likes this`;
        break;
      case 1:
        return `${names[0]} and ${names[1]} like this`;
        break;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
        break;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        break;
      default:
        return `${names[0]},${names[1]} and ${names.length - 2} others like this`;
        break;
    }
 
}

let names = ["loki", "steve", "travis", 
];
let result = countLike(names);
console.log(result);
