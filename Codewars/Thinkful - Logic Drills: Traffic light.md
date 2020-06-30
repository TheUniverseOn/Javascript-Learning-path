You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.


### My solution 
function updateLight(current) {
var myObj = {
green: 'yellow', 
yellow: 'red', 
red: 'green',
}

 return current.replace(/green,yellow,red|yellow|red|green/gi,function(matched){

return myObj[matched]
})



### Another solution
return ({
 green: 'yellow', 
 yellow: 'red', 
 red: 'green',


 }[current])
 }



describe("Sample tests", function(){
  Test.assertEquals(updateLight("green"), "yellow");
  Test.assertEquals(updateLight("yellow"), "red");
  Test.assertEquals(updateLight("red"), "green");
});
