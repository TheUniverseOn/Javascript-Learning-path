In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'



### solution 1 
  ```
function solve(st) {

  return Object.entries([...st].reduce((freq,curr, index) => (freq[curr] ? freq[curr][1] = index : freq[curr] =[index,index], freq), {}))
    .sort(([a1, b1], [a2, b2]) => b2[1] - b2[0] - b1[1] + b1[0] || a1.localeCompare(a2))[0][0];
  
  }
  ### solution 2 
  ```

function solve(st) {
  return [...new Set([...st])].map(c=> {
    return [c, st.lastIndexOf(c) -st.indexOf(c)]
  }).sort((a, b)=> {
    const c = b[1] -a[1]; 
    if(c===0) return a[0].localeCompare(b[0]); 
    return c; 
  })[0][0]
}
```


const chai = require("chai");
const assert = chai.assert;

describe("Example cases", function() {
  it("basic tests", function() {
    assert.strictEqual(solve('a'), 'a');
    assert.strictEqual(solve('aa'), 'a');
    assert.strictEqual(solve('bcd'), 'b');
    assert.strictEqual(solve('axyzxyz'), 'x');
    assert.strictEqual(solve('aabccc'), 'c'); 
  });
});




### new Set <a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set</a>


### String.localeCompare <a> https://www.oreilly.com/library/view/javascript-the-definitive/0596000480/re161.html</a>
