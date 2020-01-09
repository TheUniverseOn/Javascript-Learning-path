# Asynchrony.js
Expressing and manipulating program behaviour spread out over a period a time is essential part of building programmes. Given JS is a single threaded language, there has to be a way to bridge this gap of timing between different programs. For example, waiting for user input, requesting data from a database or file system, sending data across the network and waiting for a response, or performing a repeated task at a fixed interval of time (I.e animation ). In all these various ways, the program I write has to manage state across the Gao in time. 

The simplest(best) way to make a program wait  from now until later is to use a function, called a callback function. 

function now() {
return 21; 
}

function later(){

answer = answer * 2; 
console.log(“ the answer to everything:”, answer); 
}

var answer = now(); 

setTimeout(later, 1000);

There are two parts to this program. The first part that will run now and the second part that will run later. More explicitly put. 

Now : 

function now(){
return 21; 
}

function later (){
var answer = now(); 

setTimeout(later, 1000); 
}
__**Later**__: 
answer = answer * 2; 
console.log(“ the answer to everything:”, answer); 


The now part runs automatically, as soon I execute the program. But setTimeout(...) also sets up an event(a time-out) to happen later, so the contents  inside of  the later() function will be executed at a later a time (1,000 ms from now) 
Any time you wrap a portion of code into aa function and specify that it should be executed in response to an event such as timer, mouse click, Ajax response, etc. ) 
  I am  are creating a later  part  of my code, and thus introducing asynchrony to your program. 


