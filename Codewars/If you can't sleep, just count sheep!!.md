If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

```
var countSheep = function (num, start = 1){
  //your code here
  let mapped =  [...Array(num).keys()].map(i=> i+start+ ' sheep...')
  return mapped.join('')

}

```

Test.assertEquals(countSheep(1), "1 sheep...");
Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
