
// The shortcut to look for digit characters is \d, with a lowercase d.
// This is equal to the character class [0-9], which looks for a single character of any
// number between zero and nine.
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
console.log( numString.match(numRegex).length); //3



// You can also search for non-digits using a similar shortcut that uses an uppercase Dinstead.

// The shortcut to look for non-digit characters is \D. 
// This is equal to the character class [^0-9], which looks for a single character that is not a number
// between zero and nine.

let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g; // Change this line
console.log( numString.match(numRegex).length); //24 



 let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g; // Change this line
console.log( numString.match(numRegex)); 

//
[ 'Y', 
  'o', 
  'u', 
  'r', 
  ' ', 
  's', 
  'a', 
  'n', 
  'd', 
  'w', 
  'i', 
  'c', 
  'h', 
  ' ', 
  'w', 
  'i', 
  'l', 
  'l', 
  ' ', 
  'b', 
  'e', 
  ' ', 
  '$', 
  '.' ]
