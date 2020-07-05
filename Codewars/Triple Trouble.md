

Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.


```

function tripleTrouble(one, two, three){
  //Solution

  return one.split('').map((item, index)=> item +two[index] + three[index] ).join('')
 }
 ```
 ### Another  solution 
  ```
 const tripleTrouble = (one, two, three) => 
  one.split('').reduce((acc, c, i, array) => 
    [acc, one[i], two[i], three[i]].join(''), '')
    
     ```
    
    
 Test.assertEquals(tripleTrouble("this","test","lock"), "ttlheoiscstk");
Test.assertEquals(tripleTrouble("aa","bb","cc"), "abcabc");
Test.assertEquals(tripleTrouble("Bm", "aa", "tn"), "Batman");
Test.assertEquals(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
