/*Recursion is when you define something in terms of itself. I.e What is a human being? A human is a being. That would be a 
recurive defintion. 
In Computer Science Recursive is when a function calls itself. Altough, it maintains the state at different levels of recursion,
it also has a disadvantage that inherently leaves a large footprint as every function  call adds another call to the stack. Therefore,
a better way to solve some problems can be done through loops(more complicated) rather than recursion. However, readability can
be favorable than performance so recursion can also make sense to use. Always favour readability than performance. 



Fibonacci and factorial are good examples to use to show the power of Recursion. 
*/


function factorial(number){
  if(number === 1){
    return number; 
  
} else {
return number * factorial(number-1) 
  
}
}
  
console.log(factorial(10)) //3628800
console.log(factorial(5)) //120





function factorial(x) {
  if(x === 1){
    
    return 1; 
    
  } 
  return z * factorial ( x-1) 
}

console.log(factorial(3)) //6
