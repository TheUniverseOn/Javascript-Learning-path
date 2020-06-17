Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


```
function descendingOrder(n){
let sorted = n.toString().split('')
return +sorted.sort((a, b)=> b-a.join(' ')

}
```

Test.assertEquals(descendingOrder(0), 0)
Test.assertEquals(descendingOrder(1), 1)
Test.assertEquals(descendingOrder(123456789), 987654321)
