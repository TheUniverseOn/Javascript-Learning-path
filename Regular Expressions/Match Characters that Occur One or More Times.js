/*For example, /a+/gwould find one match in "abc"and return ["a"]. Because of the +, it would also find a single match in "aabc"and return ["aa"]. */
let name = "Sophonias";
let Regex = /s+/gi; // 
let result = name.match(Regex); // [ 'S', 's' ] 
