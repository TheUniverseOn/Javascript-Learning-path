Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]



```
function divisibleBy(numbers, divisor){
return numbers.filter(i=> i % divisor ===0)
}

```


Test.describe("Sample tests", function() {
  Test.it("should pass sample tests", function() {
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
  })  
})      
