Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

```

return s.split(' ').reduce((accu, current) => current.length  <= accu.length ? current : accu).length
```
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});
