Test.assertEquals(catchSignChange([1, 3, 4, 5]), 0);
Test.assertEquals(catchSignChange([1, -3, -4, 0, 5]), 2);
Test.assertEquals(catchSignChange([]), 0);
Test.assertEquals(catchSignChange([-47,84,-30,-11,-5,74,77]), 3);



```
const catchSignChange = arr =>{
  let count = 0
  arr.map((num, index, arr)=> (num>=0&&arr[index+1]<0)||(num<0&&arr[index+1]>=0)?count++:count)

return count
   }
```

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

catchSignChange(arr) == 2;
