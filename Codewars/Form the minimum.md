
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

Playing with Numbers Series
Playing With Lists/Arrays Series
Bizarre Sorting-katas
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!








```
function minValue(values){
  //your code here
  return +(Array.from(new Set(values))).sort((a, b) => a-b).join('')
  
  }
  //new Set==unduplicated, unique values
  
//let myAnimals = new Set(['🐷', '🐢', '🐷', '🐷']); //   🐷, 🐢
  
  //Array.from() static method creates, and new shallow copied instance from the Array
  //console.log(Array.from([1, 2, 4], x=> x+x)) // Array[2,4,6]
  
 //console.log(Array.from(foo)) //['f', 'o', 'o']
  ```
describe("Basic tests",_=>{
  Test.assertEquals(minValue([1, 3, 1]), 13);
  Test.assertEquals(minValue([4, 7, 5, 7]), 457);
  Test.assertEquals(minValue([4, 8, 1, 4]), 148);
  Test.assertEquals(minValue([5, 7, 9, 5, 7]), 579);
  Test.assertEquals(minValue([6, 7, 8, 7, 6, 6]), 678);
  Test.assertEquals(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
  Test.assertEquals(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
  Test.assertEquals(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
  Test.assertEquals(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
});
