
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"



```
var greet = function(name) {
 return (name.charAt(0) === name.charAt(0).toLowerCase()) ? 'Hello ' + name.slice(0,1).toUpperCase()+name.slice(1) +'!' :
   name.slice(0,1) === name.slice(0,1).toUpperCase() ?  'Hello '+ name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()+'!' :''
  
//return `Hello ${name.slice(0,1))}`
};
```


// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
Test.assertEquals(greet('riley'), 'Hello Riley!');
