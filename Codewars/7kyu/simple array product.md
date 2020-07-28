n this Kata, you will be given 2 or more arrays of integers, both positive and negative. Your task is to find the maximum product that can be formed by taking one element from each array.

Examples:
solve([[1, 2],[3, 4]]) = 8, given by 2 * 4
solve([[10,-15],[-1,-3]]) = 45, given by (-15) * (-3)
```
let first = (a1, a2) => a1.reduce((sum, curr)=> sum.concat(a2.map(e=> e*curr)), []), 
  a= arr.slice(1).reduce((sum, curr)=> first(sum, curr), arr[0])
  return Math.max(...a)
  }
  
  ```
  
  describe("Basic tests", function(){
Test.assertEquals(solve([[1, 2],[3, 4]]),8);
Test.assertEquals(solve([[10,-15],[-1,-3]]),45);
Test.assertEquals(solve([[-1,2,-3,4],[1,-2,3,-4]]),12);
Test.assertEquals(solve([[-11,-6],[-20,-20],[18,-4],[-20, 1]]),17600);
Test.assertEquals(solve([[14,2],[0,-16],[-12,-16]]),3584);
Test.assertEquals(solve([[-3,-4],[1,2,-3]]),12);
});
