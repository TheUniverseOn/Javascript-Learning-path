//objects
var obj1 = {
  name: "sophonias", 
  programmingLang: "Javascript"
}; 

obj1.greeting = function(){
  console.log('Hello');
   console.log(arguments); //{name: "sophonias", programmingLang: "Javascript", greeting: ƒ}
   console.log(this);
}




//understanding this (this binding) 

this is 
1. Estbalished at runtime, when a function is invoked 
2. Determined by how a function is invoked, not where the function is defined. 
3. A reference to the object 


this is not 
The function. Though it is estbalished when the function is invoked, it is not the function. 



//normal function invocation using Strict mode 
//this will not be bound to the global object. 


"use strict"
var name = "global"; 

var fun = function(){
  var name = 'fun'; 
  console.log(this); 
  console.log(this.name); //Uncaught TypeError: Cannot read property 'name' of undefined
}
