import { type } from "os";

/* Values And Types 
Javascript has typed values, not typed variables. The following built-in 
types are available: 
1. string 
2. number
3. boolean 
4. null undefined 
6.  object 
6. sybmol (new to ES6 ) 

Javascript provides a typeof operator that can examine a value and tell you what type it is 


*/

var a; 
 console.log(typeof a); //"undefined"

 a = "hello world"; 
 console.log(typeof a); //"string"

 a = 42; 
console.log(typeof a); //"number"

a = true;
console.log(typeof a); //"boolean"

a = null; 
console.log(typeof a); //"object" //long standing bug in JS

a = undefined; 
console.log(typeof a); //"undefined"


a = {b: "c"}; 
console.log(typeof a); //"object"


/* The return value from the typeof operator is always one of size(6 including symbol) string values. That is, 
typeof 'abc' return 'string', nor string  


Notice how in this snippet the a variable holds every different type of value, and that despite the appearances, typeof a is not 
asking 'type of a', but rather for 'the type of the value currently in a'. Only values have types in Javascript; varibales are just simple container for those values 
*/

/* Objects 

The object type refers to a compound value where you can set properties9named locations) that 
each hold their own values of any type. This is perhaps one of the most useful value types in all of javascript 


*/


var obj = {
    a: 'hello worldd', 
    b: 42, 
    c: true
}; 

console.log(obj.a); //hello worldd ​​​​
console.log(obj.b); //42
console.log(obj["c"]);//true

/*properties can either be accessed with dot notation(i.e obj.a) or bracket notation 
(i.e obj['a']

Bracket notation is useful if you have a property name that has special characters in it, like 
obb['hello world!'] such properties are often refered to as keys when accesses va bracket ntoation.
The  [ ] notation required either a variable or a string literal(which needs to be wrapped in " " || ''

of course, bracket notation is also useful if you want to acess  a property/key but the 
name is stored in another varibale, such as */

var obj  = {
    a: 'hello world', 
    b: 42
}; 
var b = 'a'; 

console.log(obj[b]); //hello world 
console.log(obj['b']) //42

/* There are a couple of other values types that you will commonly interact with in JS
programs: array and function. But rather than being propert built-in types, these should be thought
of more like subtypes --specialised versions of the object type. 



Arrays
An array is an object that holds values(of any type) not particularly in named properties/keys, but 
rather in numerically positions. For example: 

*
  */

  var arr = [
      'Hey I am an array, but I am just a special object', 
      42, 
      true
  ]; 

  console.log(arr[0]); //Hey I am an array, but I am just an object 
  console.log(arr[1]); //42
  console.log(arr[2]); //true
  console.log(arr.length) //3

console.log(typeof arr) //object


/* Because arrays are special obejcts (as typeof implies), they can also have properties, including the 
automatically updated length property


You theoretically could use an array as a normal object with your own named 
properties, or you could use an object but only give it numeric properties( 0, 1, etc). similar to an array. however, this would generally be considered improper 
usage of the respective types. 

The best and most natural appraoch is to use arrays for numerically positioned values 
and use object s for named properties


Functions 

The other object subtype you will use all over your JS programs is  a function 

*/


function foo(){
    return 42; 
}

foo.bar = 'hello world'; 

console.log(typeof foo); //function 
console.log(typeof foo()); //number 
console.log(typeof foo.bar); //string

/* Again, functions are a subtype of objects --typeof returns 'function',which implies that a 
function is a main type --- and can thus have properties, but you will typically 
will only use function object properties(like foo.bar) in limited cases






Built-in type methods 


The built-in types and subtypes we've just discussed have behaviours exposes as properties and 
methods that are quite powerful and useful 

For example 
*/

var a = 'hello world'; 
var b = 3.14159; 

console.log(a.length) //11
console.log(b.toFixed(2)) //3.14
console.log(a.toUpperCase()) //HELLO WORLD


/* When you use a primitive value like 'Hello world as an object by referencing a property or method (e.g a.toUppercase() in the above snippet), JS automatically 'boxes' the value to 
its object wrapper counterpart(hidden under the covers)


A string value can be wrapper by a String object, a number can be wrapped 
by a Number object, and a boolean 

A string value can wrapped by a String object, a number can be wrapped by a Number object, and a boolean 
can be wrapped by a Boolean object. For the most part, you don't need to worry about 
or directly use these object wrapper forms of the values --prefer the primitive values forms in practically all 
cases and Javascript will take care of the rest for you. 



Comparing Values 

There are two main types of value comparison tghat you will need to make in your JS programs: equality and inquality. 
The result of any comparison is a strictly boolean value(true or false), regardless of what 
value types are compared. 


Coersion 

We talked breifly about the coersion in Chapter 1, but let's revisi it here. 

Coersion comes in two form in Javascript: explicit and implicit. Explicit coersion is simply that you can 
see obviously from the code that conversion from one type to another wil occur, whereas implict coersion is when the 
type conversion can happen as  more of a non-obvious side effect of some of other operation 


Here is an example of explicit coersion 


*/

var a = '42'; 
var b = Number(a); 

a; //"42"
b; //42

//here is an example of implicit coersion 

var a = '42'; 
var b = a * 1; //"42" implicitly coereced to 42 here. 
a; //"42"
b; //42




// Truthy and Falsy

/* The specific list of 'falsy' values in Javascript is as follows
"" (empty string )
0, -0, Nan (invalied number)
null, undefined 
false

Any value that's not on this 'falsy' list is 'truthy'. here are some examples of those. 


"Hello"
42
true
[]. [ 1, 2, "2", 4] (arrays)
{ }, { a: 42} (objects)
function foo(){..} (functions)






Equality 


There are four equality operators, ==, ===, != and !==. The ! forms are of course the symmeetric 
"not equal" versions of their counterparts; non-equality should not be confused with inequality  


The difference between == and === is usually characterised that == checks for value equality 
and === checks for both value and type equality. However, this is inaccurate. 
The proper way to characterize them is that == checks for value equality with coersion allowed, and ===
checks for value equality without allowing coersion; === is often called 'strict equality; for this reason 

Consider the implicit coersion that's allowed by the == loose-equality comparison 
and not allowed the === strict-equality:

*/

var  a = "42"; 
var b = 42;



console.log(a == b); //true  
console.log(a===b) //false

/* In the a == b comparison, JS notices that the types do not match, so it goes through an 
ordered series of steps to coerce one or both values to a different type 
until the types match, where then a simple  value equality can be checked

If you think about it, there's two possible ways a == b could give true via coersion. 
Either the comparison could end up as 42 == 42 or it could be "42" == "42", So which one is it?


The answer: "42" becomes 42, to make the comparison 42 == 42. In such a simple example, it doesn't 
really seem to matter which way that process goes, as the end result is the same. There are more 
complex cases where it matters not just what the end result of the comparison is,but how you get there


The a === b produces false, because the coersion is not allowed, so the simple value 
comparison obviously fails. Many developers feel that === is more predicable, so they 
advoate always using that form and staying away from ==. But == can be powerful is one spends time to learn 
it. 



To boil down a whole lot of details to a few simple takeways, and helo you know whether to use == or === in various situations, here 
are simple rules: 

--If either value(aka side) in a comparison could be ther true or false value, avoid == and use ===
--if either value in a comparison could be one of these specific values(0, "", or [] -- empty array), avoid == and use ===
--in all other cases, you're safe to use ==. Not onlt is it safe, but in many cases it simplieifes your code in a way that improves 
readability 




The != non equality form pairs with ==, and the !== form pairs with ===. All the rules and 
observations we just discussed hold symmetrically for these non-eqaulity comparisons

You should take special note of the == and === comparison rules if you're comparing two non-primitive 
values, like objects (including function and array). Because those values are actually held by reference, 
both == and === comparisons will simply check whether the references match, not anything about the underlying values.

For example, arrays s are by default coered to string by simply joining all the values with commams(, ) in between. 
You might think that two arrays with the same contents would be ==, but they are not. 



*/

var aa = [1, 2, 3]; 
var bb = [1, 2, 3]; 
var cc = "1, 2, 3"; 

console.log(aa ==cc);//false
console.log(bb == cc);//false
console.log(aa == bb); //false


// /* Function Scopes 

// You use the var keyword to declare a varibale that will belong to the current 
// function scope, or the global scope if at the top level outside of any function 




// Hoisting 

// Wherever a var appears inside a scope, that declaration is taken to belong to the 
// enitre scope and accessible everywhere throughout. 


// In a metaphor term, this characterstics is known as Hositing, when a var declaration is conceptually 
// "moved" to the top of its enclosing scope. Technically, this process is more accurately explained by how code is 
// compiled, 

// Consider this example 

// */ 

var num = 2; 
foo();  

function foo(){             // works because `foo()`
// declaration is "hoisted'
  num = 3; 
  console.log(num ) //3
  var num;                //declaration is 'hoisted'to the top of `foo()`
}
console.log(num); //2



/* Nested Scopes 

When you declare a variable, it is available anywhere in that scope, as well as 
any lower/inner scopes . For example */


function scoped() {
  var a = 1; 

  function bar(){
    var b  = 2; 

    function baz(){
      var c = 3; 

      console.log(a, b,c ); //1 2 3
    }

    baz(); 
    console.log(a, b); //2
  }

  bar(); 
  console.log(a); //1
}

scoped(); 

/* Notice that  c is not available inside of bar(0, because it's declared only 
inside the inner baz() scope, and that b is not available to foo() for the same reason . 

if you try to access a variable's value in a scope where it's not available, you will 
get a ReferenceError thrown. If you try to set a variable that has not been decalred. you will 
either end u( p creating  avariable in the top-level global scope(bad!) or getting an error. depending on 
'stric mode'. Let's look at an example


*/
"strict mode"
function foo(){
  
  a = 1; 
  console.log(a);//`a` is not formally declared 
}

foo(); 
a; //1 --oops, autho global variable 

/* The above code is very bad practice. Don't do it! Always formally declare your variables
 In addition to creatinf declarations for variables at the function level, ES6 lets you 
 declare variables to belong to individual blocks(pairs of {..}, using the let 
  keyword. Besides some nuanced details 
  , the scoping rules will behave roughly the same as we just saw) with fucntions  */


  function numB (){
    var a = 1; 

    if( a >= 1){
      var b = 2; 

      while(b < 5){
        var c = b * 2; 
        b++

console.log( a + c) //5, 7, 9
      }
    }
  }

numB();

/* Because of using let instead of var, b will belong only to the 
if statement and thus not to the whole foo() function's scope.
 Similarly, c belongs only to the while loop.
  Block scoping is very useful for managing your variable scopes 
  in a more fine-grained fashion, which can make your code much
   easier to maintain over time. 
   
   
   
   
   
   
   
   
   
   
   
   Conditionals 
   
   In addition to the if statement we introduced briefly in Chapter 1, JS provides 
   a few other conditionals mechanisms that we should know about 
   
   
   Sometimes you may find yourself writing a series of if...else...if statements like 
   this*/

   if(a == 2){
     //do something 
   }

   else if(a == 10){
     //do another thing
   }
   else if (a == 42){
     //do yet another thing 
   }
   else {
     //fallback to here. 
   }
   

   /* This strucuture works, but it's a little verbose because you need to 
   specify the a test for each case. Here's another option, the switch statement


   
    */
   
   */
  
  switch (a) {
    case 2:
      // do something
      return a * 3
      break;
    case 10:
      // do another thing
      break;
    case 42:
      // do yet another thing
      break;
    default:
      // fallback to here
  }

  /* The break; is important if you want only the statement(s) in one case
  to run. If you omit break from a case, and that case matches or runs, execution will 
  continue with the next case's statements regardless of that case matching. This is called 'fall through" is sometimes useful/desired.  */


  switch (a){
    case 2: 
    case 10: 
    //some cool stuff
    break; 
    case 42:
    //other stuff 
    break;
    default: 
    //fallback here
  }



switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

  /* Here, if a is either 2 or 10, it will execute the 'some cool stuff' code statements. 
  
  Another form of conditional in JS is the 'conditional operator', often called 
  'ternary operator' it's like a more concise form of single if..else statement, such as: 
   */

   var number = 42; 

   var b = (number > 41)  ? 'Hello' : 'world'; 

   console.log(b) //Hello
   // similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }

/* If the test expression (a > 41 here) evaluates as true, the first caluse ('hello') results, 
otherwise the second caluse ('world') results, and whatever the result is then gets
assigned to b. 

The conditional operator doesn't have to be used in an assignement, but that's defintetly 
the most common usage. 
*/



/* Strict  */
/* ES5 added a 'strict mode ' to the language, which tightens the rules for certain behaviours. Generally, these 
restrictions are seen as keeping the code to a safer and more appropriate set of  guidelines. Alos, adhering to strict mode 
makes your code generally more optimizable by the engine. Strict mode is a big win for cod and you should use it for all 
your programs

You can opt in to strict mode for an individual function, or an entire file, depending on where 
you can put the strict mode pragma: .  */


function foo(){
  "use strict"; 
  //this code is strict mode

  function bar(){
    //this code is strict mode 
  }
}

//this code is not strict mode 


// compare that to

// "use strict"; 
// function foo(){

//   //this code is strict mode

//   function bar(){
//     //this code is strict mode 
//   }
// }

 
// var a = 1;
// b = 2;


// delete this.a;
// delete this.b; 

// console.log(a)
// console.log(b)


//this code is  strict mode 

/*One key difference(improvement) with strict mode is diallowing the implicit auto-global variable declaration from ommiting the var: */



//Declared vs Undeclared variables

// function variabless(){
//   undeclaredVar = 'hello world, I am here and I am also globally accessible. '; 
//   var hellIamhere = 'hello world, I am here and I cant go anywhere';
  
//   }
  
//   variabless()
//   console.log(undeclaredVar); // hello world
//   console.log(hellIamhere);//declaredVar is not defined 
  
//   delete this.declaredVar
//   console.log(declaredVar)
  

  /* FUNCTIONS as values  
  
  So far, we've discussed functions as the primary mechanism of scope in Javascript. 
  You recall typical function declaration syntax as follows */

  function name(){

  }

  /* I came to realisation that name is basically just a variable in the outer enclosing 
  scope that's given a reference to the function being declared. Therefore, the function itself
  is a value,  just like any value i.e 42 or [1, 3, 5]
  
The outcome of realising is made me think I can pass a value(argument) to a function, but a function 
itself can be a value that's assigned to variables or passed to or 
returned from other functions

As such, a function value should be thought of as an expression, much like any other value or 
expression

Example */

// var nameX = function(){

// }; 


// var ourUser = function userName(){

// }; 

/* The first function expression assigned to the nameX variable is called anonmous function 
because it has no name 


The second function expression is called Named function(userName), it also has reference assigned to
the ourUser variable.   */



/* Immediately Invoked function Expressions(IIFEs)

In the above snippet, neither of the function expressions are executed -- if we were to execute them we could just 
do nameX() or ourUser(), for example.

There is another way to execute a function expression also, which is typically referred to 
as an immediately invoked function expression(IIFE) which sounds like a cool urban fashion brand name. 
 
})()*/
(function IIFE()
{ console.log( "Hello, I am being IIFEd!" );//Hello, I am being IIFEd! 
})();

/* What's happening here is that, the outer (..) that is surrounding the (function IFFE(){..}) function 
expression is just Javascript understanding and preventing the function from 
being treated like any normal function declaration. 

The final () on the end of the expression --the })(); line -- is what actually executed the function 
expression referenced immediately before it. 

It did look strange to me, however if you look at the similarties the code below is makes more sense*/

function notIIFE(){

}
//notIIFE function reference expression 
//then () executes it. 
notIIFE(); 

(function IIFE(){

})

//IIFE function expression 
//then () executes it 
(); 

/* As you can see, listing the (function IIFE(){..}}) before it's beeing executed with () is 
basically the same as including notIIFE beofre its executing (); in both cases, the function 
reference is executed with () immediately after it 

Because an IIFE is just a function, and functions create variable scope, using an IIFE  
in this way is to enable you to declate variables that won't affect the surrounding 
code outside of the IIFE*/

var num = 42; 
(function IIFE(){
  var num  = 20; 
  console.log(num); //20
})(); 

console.log(num); //42
//IIFE can also have return values; 

var num = (function IIFE(){
  return 42; 
})()

console.log(num); //42

/* The 42 values gets returned from the IIFE-named function being executed, and then 
assigned to num  

Closure

Closure is the least misunderstood and also the most important topics in Javascript.

In a very simplistic term, you can think of Closure as a way to 'remember' and continue to 
access a function's scope(its variables) even once the function has finished running 

Let's examine this with example */

function makeAdder(x){
  //parameter 'x' is an inner variable 

  
function add(y){ 
  return y + x;    //inner function 'add() uses x, so it has a "closure" over it. 
}
  return add; 
}
 
/* The reference to inner add(..) function that gets returned with each call 
to the outer makeAdder(..) is able to remember whatever x value was passed in to makeAdder(..). 
Let's see this by using makeAdder(...)*/

var plusOne = makeAdder(1); 

/**  'plus one' gets a reference to the inner 'add(..)'
 * function with cloure over the 'x' parameter of the outer 'makeAdder(..);
 * 
 * 
 */

var plusTen = makeAdder(10); 
/** 'plusTen' gets a reference to the inner 'add(..' function with closure over the 'x' parameter of the 
 * outer 'makeAdder(..); 
 */

  console.log(plusOne(3)); //4
  console.log(plusTen(10))

  /** How does this work 
   * When we call makeAdder(1); we get back a reference to its inner add(..) that remembers 
   * x as 1;. We call this function reference plusOne(..). 
   * 
   * When we call makeAdder(10), we get back another reference to its inner add(..) that
   * remembers x as 1. We call this function reference plusTen
   * 
   * When we call plusOne(3), it added 3(its inner y) to the 1(remembered by x), and we get 4
   * 
   * When we call plusTen(13), it adds 13 its inner y) to the 10 remebered by x) and we get 23. 
   */

   /* Modules
   
   The most common usage of closure in JS is the modules pattern. Modules let you define private 
   implementation details(variables, functions) that are hidden from the outside world, as 
   well as a public API that is accessible from the outside. 
   
   Example 
   
   */

   function User(){
     var username, password; 

     function doLogin(user, pw){
       username = user; 
       password = pw; 

       var publicAPI = {
         login: doLogin
       }; 
       return publicAPI; 
     }

     //create a user module instance
     var fred = User(); 
     fred.login('fred', '123444'); 


   }



   /* The User() function serves as an outer scope that holds the varibles 
   username and password, as well as the inner doLogin() function; these are all private inner 
   details of this User module that cannot be accesses from the outside world. 
   
   Executing User() creates an instance of the User module - a whole new scope is created, 
   and thus a whole new copy of each of these inner variables/functions. We assign this instance to 
   fred. If we run User() again, we'ld get a new instance entirely separate from fred
   
   The inner doLogin() function has a closure over username and password, meaning it will 
   retain its access to them even after the User() function finsihes running
   
   publicAPI is an object with one property/method on it, login, which is a reference 
   to the inner doLogin() function. When we return publicAPI from User(), it becomes an 
   instance we call fred
   
   At this point, the outer User() function has finished executin Normally, you'ld think the inner
   variables like username and password have gone away. But here they have not, because 
   there's a closyre in the login() function keeping them alive
   
   That's why we can call fred.login(..)-- the same as calling inner doLogin(..) --and it can still 
   access username and password variables*/






   /* Prototype
   
   When you reference a property on an object, if that property doesn't exist, JS will 
   automatically use that object's internal prototype reference to find another object to look 
   for the property on. 
   You could think of this almost as a fallback if the property is missing
   
   The internal prototype reference linkage from one objects to its fall back happens at 
   the time the object is created. The simplest way to illustrate it is with a built in utility called Object.create(..)
   
   
   */

   var foo = {
     a: 42
   }; 

   //create 'bar' and link it to 'foo
   var bar = Object.create(foo); 

   bar.b = 'Hello world!'; 
   console.log(bar.b); 
   console.log(bar.a); 
