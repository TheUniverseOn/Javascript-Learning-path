In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

```
const solve = (arr)=> [...new Set([...arr].reverse()).revere()
```
describe("Basic tests", function(){
Test.assertDeepEquals(solve([3,4,4,3,6,3]),[4,6,3]);
Test.assertDeepEquals(solve([1,2,1,2,1,2,3]),[1,2,3]);
Test.assertDeepEquals(solve([1,2,3,4]),[1,2,3,4]);
Test.assertDeepEquals(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
Test.assertDeepEquals(solve([1,2,1,2,1,1,3]),[2,1,3]);
});
