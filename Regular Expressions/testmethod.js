/* Regular Expressions are used in programmung lnaguages to match parts of strings. You can 
create patterns to help you do that matching 

if you want to find the word "the" in the string "The dog chased the goat" you can could use the 
following regualr expression /the/. Notice that qoute marks are required within the regualr expression

Javascript has multiple ways to use regexes. One way to test a regex is using .test() method
. The .test() method takes the regex, applies it to a string(which is places inside the paranetheses) 
and returns true or false if your pattern finds something or now*/

let testStr = "Sophonias"; 
let testRegex = /Soph/; 
console.log(testRegex.test(testStr)); 

let tester = 'sophonias';
let Regex = /pho/; 
console.log(Regex.test(tester)); 
