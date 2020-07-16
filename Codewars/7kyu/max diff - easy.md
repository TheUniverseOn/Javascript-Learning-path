You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

The list(lst) contains integers, that means it may contain some negative numbers.

If the list is empty or contains a single element, return 0.

The list(lst) is not sorted.

maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7

```
function maxDiff(list) {
  
  return list.length >1 ? Math.max(...list)- Math.min(...list) : 0
};
```

Test.describe('Basic tests', function() {

  Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
  Test.assertEquals(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
  Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
  Test.assertEquals(maxDiff([16]), 0);
  Test.assertEquals(maxDiff([]), 0);

});
