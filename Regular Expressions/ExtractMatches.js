//We can also also Extract patterns from strings using .match()

let extractor = "Extract the word 'coding' from this string.";
let Regex = /coding/gi; 
console.log(extractor.match(Regex)); //[ 'coding' ] ​​


let twinkleFinder = "Twinkle, twinkle, little star";
let Regex = /Twinkle/gi; 
console.log(twinkleFinder.match(Regex));  // console.log(twinkleFinder.match(Regex)); 



//Inside a character set, you can define a range of characters to match using a hyphencharacter: -.

//For example, to match lowercase letters athrough eyou would use [a-e].
let extractor= "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a-e]/gi;
console.log(extractor.match(vowelRegex)); //
 
[ 'B', 
  'e', 
  'a', 
  'e', 
  'b', 
  'e', 
  'a', 
  'b', 
  'e', 
  'c', 
  'd', 
  'e', 
  'a', 
  'e', 
  'e', 
  'd', 
  'c', 
  'e', 
  'c', 
  'e', 
  'd' ] 

