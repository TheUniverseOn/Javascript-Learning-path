
//You can search for a literal pattern with some flexibility with character classes. Character classes 
//allow you to define a group of characters you wish to match by placing them inside square ([and ]) brackets.



let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); 
// print: 
[ 'e', 
  'a', 
  'e', 
  'o', 
  'u', 
  'i', 
  'e', 
  'a', 
  'o', 
  'e', 
  'o', 
  'e', 
  'I', 
  'a', 
  'e', 
  'o', 
  'o', 
  'e', 
  'i', 
  'o', 
  'e', 
  'o', 
  'i', 
  'e', 
  'i' ] 
