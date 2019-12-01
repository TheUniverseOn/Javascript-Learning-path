 var student = "sophonias"; 

 function otherClass(){
 var student = "me"; 

function ask(question){
  console.log(student, question); //me why?
 }

 ask("why?"); 
 }
 otherClass();
/** Lexical scope: console.log(student) is decided at compile time */


//dynamic scope doesn't exist in javascript
