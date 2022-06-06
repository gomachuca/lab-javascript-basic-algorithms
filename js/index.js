// Iteration 1: Names and Input
let hacker1 = "jorge";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "machuca";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let driverCapitals = "";

for (let i = 0; i < hacker1.length; i++) {
  let upperCaseLetter = hacker1[i].toUpperCase();

  // if it is the first letter to be added, then add it without the space
  if (i === 0) {
    driverCapitals = driverCapitals + upperCaseLetter;
  } else {
    driverCapitals = driverCapitals + " " + upperCaseLetter;
  }
}

console.log("driverCapitals", driverCapitals);

let reversedName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName = reversedName + hacker1[i];
}

console.log("reversedName", reversedName);

//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`
let longestWord = "";
if (hacker1.length >= hacker2.length) {
  longestWord = hacker1;
} else {
  longestWord = hacker2;
}

// the loop runs for every character and compares them.
for (let i = 0; i < longestWord.length; i++) {
  if (hacker1 === hacker2) {
    // first condition, in case they actually have the same name
    console.log("What?! You both have the same name?");
    break;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    // second condition will check if the letter of the driver is lower (goes first) or doesn't exist.
    console.log(`The driver ${hacker1} goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined) {
    // third condition will check if the letter of the navigator is lower (goes first) or doesn't exist.
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`);
    break;
  }
  // loop will continue running for each character until it found one match, then it breaks the loop.
}
// Iteration 1: Names and Input

// ### Iteration 3: Loops
//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`

//   3.2 Print all the characters of the navigator's name, in reverse order.
//   i.e. `"nhoJ"`

// Iteration 2: Conditionals

// a reverse loop:
// starts at the variable length - 1 (the last index),
// goes while i is higher or equal to 0
// and decreases the variable i

// Iteration 3.3 lexicographic

// first we identify the longest word for the loop
