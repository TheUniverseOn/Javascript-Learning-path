
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.






function wordsToMarks(string){
  //your code here

  return string.split("").reduce((accu, curr)=> accu+curr.charCodeAt()-96,0   )
}


describe("Basic tests",_=>{
  Test.assertEquals(wordsToMarks("attitude"), 100);
  Test.assertEquals(wordsToMarks("friends"), 75);
  Test.assertEquals(wordsToMarks("family"), 66);
  Test.assertEquals(wordsToMarks("selfness"), 99);
  Test.assertEquals(wordsToMarks("knowledge"), 96);
});
