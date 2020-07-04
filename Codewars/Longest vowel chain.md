
he vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:



```
const solve = s => Math.max(...(s.match(/[aeiou]+/g) || []).map(match => match.length))
```

describe("Basic tests", function(){
Test.assertEquals(solve("codewarriors"),2);
Test.assertEquals(solve("suoidea"),3);
Test.assertEquals(solve("ultrarevolutionariees"),3);
Test.assertEquals(solve("strengthlessnesses"),1);
Test.assertEquals(solve("cuboideonavicuare"),2);
Test.assertEquals(solve("chrononhotonthuooaos"),5);
Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);
});
