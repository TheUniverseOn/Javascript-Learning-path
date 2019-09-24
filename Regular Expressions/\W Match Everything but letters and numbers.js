// Match Everything But Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(quoteSample.match(nonAlphabetRegex).length);
