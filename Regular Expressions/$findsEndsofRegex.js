let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /9$/; // 
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); //[ '9', index: 20,  input: 'P1P2P3P4P5P6CCCP7P8P9', 
