

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'



### My other solution
```
function removeDuplicateWords (s) {
  // your perfect code...
  let splitted =  s.split(' ')
  return [...new Set(splitted)].join(' ')
  
}

### Set object lets you store unique values of any type. In other words, Set will automatically remove duplicates for us 
```
### My other solution 

function removeDuplicateWords (s) {
  let splitted =  s.split(' ')
 return splitted.filter((word, index)=>  splitted.indexOf(word) === index).join(' ')
}
Test.describe('Example tests', _ => {
  Test.it('should handle example case', _ => {
    Test.assertEquals(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
  });
});
