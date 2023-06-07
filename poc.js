output = ``;


function countLike(names) {
  if (!Array.isArray(names))
    throw new Error("Incorrect input. Only array of strings are accepted");
  else {
    displayText();

  }
  console.log(names);
}

function displayText() {
  if ((names.length === 0)) {
    `no one likes this`;
  } else if ((names.length === 1)) {
    console.log(`${names[0]} likes this`);
  } else if ((names.length === 2)) {
    console.log(`${names[0]} and ${names[1]} like this`);
  } else if ((names.length === 3)) {
    console.log(`${names[0]}, ${names[2]} and ${names[3]} like this`);
  } else if (names.length >= 4) {
    console.log(
      `${names[0]},${names[1]} and ${names.length - 2} others like this`
    );
  }
}

names = ["loki", "steve"];

const result = countLike(names);
console.log(result);