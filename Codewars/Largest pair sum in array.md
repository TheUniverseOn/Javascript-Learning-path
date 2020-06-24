


Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
[99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
Input sequence contains minimum two elements and every element is an integer.
```

function largestPairSum(numbers)
{
  //TODO: Write your Code 
 numbers.sort((a, b)=> (a-b))
 return numbers[numbers.length-1] + numbers[numbers.length-2]
}

```


Test.expect(largestPairSum([-10, -8, -16, -18, -19]) === -18 , "Sum should be -18");
