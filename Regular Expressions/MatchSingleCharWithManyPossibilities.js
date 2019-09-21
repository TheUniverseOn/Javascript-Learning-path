
//You can search for a literal pattern with some flexibility with character classes. Character classes 
//allow you to define a group of characters you wish to match by placing them inside square ([and ]) brackets.



let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
