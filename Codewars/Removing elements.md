

Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
```
function removeEveryOther(arr){
  //your code here
  return arr.filter(num=> arr.splice(0, 1))
}
```

### another solution 
function removeEveryOther(arr){
return arr.filter((num, index)=> index % 2 ===0
}

Test.describe("Basic tests",_=>{
Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
})
