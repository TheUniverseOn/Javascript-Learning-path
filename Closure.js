A closure is the local variables for a function-kept alive the function
has returned. //javascriptkit.com

Closure is when a function is able to remember and access its 
lexical scope even when that function is executing outside its 
lexical scope.  //kyle simpson


A closure is a function having access to the parent scope, even 
after the parent function has closed. //W3C Schools 



var funct1 = function(){
var a = 2, 
     b = 3;
     
     var funct2 = function(){
console.log(a+b);
}

setTimeout(funct2, 3000); // funct2 retained access to funct1. 
//it still can access the variables a& b and print out the sum. 
}

funct1();
