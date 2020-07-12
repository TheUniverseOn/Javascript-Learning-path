
he aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive



```
var splitInParts = function(s, partLength){
  // Good Luck!
  let array = []; 
  for(var i = 0; i < s.length; i+=partLength){
    array.push(s.slice(i, i+partLength))
  }
  return array.join(' ')
    
  }
  ```
  
Test.assertEquals(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
Test.assertEquals(splitInParts("HelloKata", 1), "H e l l o K a t a")
Test.assertEquals(splitInParts("HelloKata", 9), "HelloKata")
