Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
```
var orderedCount = function (text) {
  // Implement me!
 
// let t = text.split('')                       
//   return count = new Map([...new Set(t)].map(x=> [x, t.filter(y=> y===y).length -1]))
// return text.split('').reduce((accu, curr)=> (curr===2)? ++accu : accu, 0)
  let x =  [...new Set(text)].map(x=> [x, text.split(x).length-1])
  return x
}
```
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const examples = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
];

describe("Sample Tests", function(){
    for (const [text, expected] of examples) {
        it('text: ' + JSON.stringify(text), function() {
            assert.deepEqual(orderedCount(text), expected);
        });
    }
});
