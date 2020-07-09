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

```
function catchSignChange = (arr){
var count = 0
for(var i = 1; i < arr.length; i++){
if((arr[i-1] < 0 && arr[i] >=0 ) ||(arr[i-1] >= 0 && arr[i] < 0)){
count++
}
}
return count; 
}

```

### Intialise count at 0; 
for each number in arr after arr[0]
  if previous number is positive and current number is non-positive OR previous number negative and current number is non-negative 
  increment count 
  return count 
  if array is empty, return 0



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
