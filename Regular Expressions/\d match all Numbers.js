
// The shortcut to look for digit characters is \d, with a lowercase d.
// This is equal to the character class [0-9], which looks for a single character of any
// number between zero and nine.
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
console.log( numString.match(numRegex).length); //3
