 /* Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
This kind of character class is common enough that there is a shortcut for it, although it 
includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w.
This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers.
Note, this character class also includes the underscore character (_).*/ 

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length; //31 
