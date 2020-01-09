
function a (){
    console.log('in fn a'); 
    
    function b(){
      console.log('In fn b');
      
      function c (){
        console.log('in fn c');
      }
      c();
    }
    b();
  }
  a();




//Modules
         var foo = (function coolModule() {
           var something = 'cool'; 
           var another = [1, 2, 3]; 

           function doSomething() {
           return something;
           }
           function doAnother(){
             return another.join("!"); 

           }
           return {
             doSomething: doSomething, 
             doAnother: doAnother
           }; 
         })(); 

         console.log(foo.doSomething()); //cool
         console.log(foo.doAnother()); //1!2!3 




// lexical scope 
//block scope 



/* Here, In the above example. We just turned our module function into an IIFE, and we immediately invoked it and assigned 
         // its return value directly to our single module instance identifier foo. 
         * 
         * Modules are just function, so they receive parameters. */  



function CoolModule(){
  var something = 'hello, cool'; 
  var another = [1, 2, 4, 6]; 

  function doSomething(){
    return something; 
  }

  function doAnother(){
    return another.join('!'); 
  }

  return {
    doSomething: doSomething, 
    doAnother: doAnother
  }
}
var foo = CoolModule(); 

console.log(foo.doAnother()); //1!2!4!6
console.log(foo.doSomething()); //hello cool


/*This is the pattern in JS we call module. The most commong way of implmenting 
the module pattern is often called revealing module, and it's the variation 
we present here. 

Let's examine some things about the code

First, coolModule() is just a function, but it has to be invoked for there to be a module 
instance created. Without the exectuion of the outer function, the creation of 
inner scope and closures would not occur. 

SECOND, the coolModule() function returns an object, denoted by the object-literal syntax {key : value, ..}
The object we return has refeences on it to our inner functions, but not to our inner
data variables. We keep those hidden and private. It's appropriate to think of 
this object return value as essentially a public API for out module. The object return value is 
ultimately assigned to the outer variable foo, and then we can access those property
methods on the API, like foo.doSomething()  */


