//We can also also Extract patterns from strings using .match()

let extractor = "Extract the word 'coding' from this string.";
let Regex = /coding/gi; 
console.log(extractor.match(Regex)); //[ 'coding' ] ​​


let twinkleFinder = "Twinkle, twinkle, little star";
let Regex = /Twinkle/gi; 
console.log(twinkleFinder.match(Regex));  // console.log(twinkleFinder.match(Regex)); 
