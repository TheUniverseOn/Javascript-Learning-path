
/*In regular expressions, a greedy matching finds the longest possible part of a string that fits 
the regex pattern and returns it as a much. The alternative is called a lazy match, which finds the smallest
possible part of the string that satisfies the regex pattern

I can apply the regez /t[a-z]*i/ to the string 'titanic', this regex is basically a pattern that starts with 
t, ends with i, and has some letters in between

Regular expression are by default greedy, so the match would return ['titani']. it finds the largest 
sb-string possible to fit the pattern 
However, I can use ? charctaer to change it to lazy matching. 'titanic' matched against the adjusted 
regex of /t[a-z]*?i/ returns ['ti'] 
*/
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[h1.]*i?/; 
console.log(text.match(myRegex)); //[ '<h1', index: 0,  input: '<h1>Winter is coming</h1>', groups: undefined ] 
