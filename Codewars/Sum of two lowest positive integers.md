Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.



```
function sumTwoSmallestNumbers(numbers) {  

let min = Math.min(...numbers)
let nextMin = Math.min(...numbers.filter(n=> n !== min)
return numbers = Number(min+nextMin)
}
```

describe("Your function", _ => {
  it("should work for basic tests", _ => {
    Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
});
