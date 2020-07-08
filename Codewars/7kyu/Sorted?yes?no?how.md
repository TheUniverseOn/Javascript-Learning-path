

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {
  let asce = [...array].sort((a, b)=> a-b)
  let desc= [...array].sort((a,b)=> b-a)
  
  if(array.every((number, index) => number ===asce[index])) 
    return 'yes, ascending'
   if(array.every((number, index)=> number ===desc[index]))
     return 'yes, descending' 
  return 'no'
 // return array === asce ? 'yes, ascending' : array === desc ? 'yes, descending' : 'no'
}

### samples tests 

describe("isSortedAndHow", function() {

  it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  });

});
