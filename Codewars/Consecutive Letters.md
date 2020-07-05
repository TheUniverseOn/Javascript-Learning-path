In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True


```
function solve(str){
return "abcdefghijklmnopqrstuvwxyz".includes([...str]).sort().join('')
}
  ```
  
  
  ```
  function solve(str){
  return [...str].sort().map(item=> item.charCodeAt(0)).every((e,i,a)=> i?e-a[i-1]==1:true)
  }
   ```
    
  describe("Basic tests", function(){
Test.assertEquals(solve("abc"),true);
Test.assertEquals(solve("abd"),false);
Test.assertEquals(solve("dabc"),true);
Test.assertEquals(solve("abbc"),false);
});

