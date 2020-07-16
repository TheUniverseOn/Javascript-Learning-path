In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates

### Not my solution but found it clever. 
```
function solve(a,b){
 //..  1

//return (a+b).split('').filter(x=> !a.includes(x) || !b.includes(x)).join('')
//
  let setA = new Set(a)
  let setB = new Set(b)
  return [...(a+b)].filter(c=> setA.has(c) ^ setB.has(c)).join('')
};
```
##### XOR 
```
const solve = (a,b)=> (a+b).split('').filter(x=> !a.includes(x) || !b.includes(x)).join('')
```
const solve = (a, b)=> (a+b).split('').filter(x=> a.includes(x) ^ b.includes(x)).join('')
describe("Basic tests", function(){
Test.assertEquals(solve("xyab","xzca"),"ybzc");
Test.assertEquals(solve("xyabb","xzca"),"ybbzc");
Test.assertEquals(solve("abcd","xyz"),"abcdxyz");
Test.assertEquals(solve("xxx","xzca"),"zca");
});

