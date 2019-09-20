/* Regular Expressions are used in programminng lnaguages to match parts of strings. You can 
create patterns to help you do that matching 

if you want to find the word "the" in the string "The dog chased the goat" you can could use the 
following regualr expression /the/. Notice that qoute marks are required within the regualr expression

Javascript has multiple ways to use regexes. One way to test a regex is using .test() method
. The .test() method takes the regex, applies it to a string(which is places inside the paranetheses) 
and returns true or false if your pattern finds something or now*/

let name = "Sophonias"; 
let Regex = /Soph/; 
console.log(Regex.test(name)); 


You can match both cases using what is called a flag. There are other flags but here you'll
focus on the flag that ignores case - the iflag. You can use it by appending it to the regex.
An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".

let tester = 'sophonias';
let Regex = /Sophonias/i; 
console.log(Regex.test(tester)); //prints true even though there is an Uppercase of S. 
