/* IIFE stands for Immediately invoked function expression.  
It runs as soon as it's defined. */

(function () {
// console.log('my favorite number is 4') // my favorite number is 4
// }) (); 

 /*Here we have a function that simply prints out a string. We then call the function shortly after this point.();
// now the first thing to mention here is that, in the above example, our function is 
//safe -- safe insofar that it is  immutable(which is just a fancy, tehcnical term 
//for saying  it cannot be changed in the future)

//so that's great, our function  cannot be accessed and the technical term for it is
IIFE(Immeditely invoked function expression). We used IIFE when we wrapped out entire function in brackets. Once we wrap
it in IIFE we don't plan to call again so we create a function expression which are usually anonymous and don't have a function name, 
However, you can also create a Named Function Expression. 


When you want to call an IIFE simply add a pair of brackets at the end of the function just before the semi-colon
like this
*/

(function(){
    var x = 40; 
    var y = 50; 
    var answer = x + y; 
    console.log(answer);
})();
