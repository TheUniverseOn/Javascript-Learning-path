
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /^C/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); // null


//but

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /^P/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); //[ 'P', index: 0, input: 'P1P2P3P4P5P6CCCP7P8P9', 
