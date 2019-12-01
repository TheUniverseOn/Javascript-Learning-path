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
var student = "sophonias"; 


function ask(question){
console.log(student, question); //sophonias why?
}
function otherClass(){
    var student = "me"; 
    ask("why?"); 
    
    }
    
otherClass(); 


//fixing the above collison by putting them in different buckets by wrapping a function around it

var teacher = 'kyle simpson'; 


function anotherTeacher(){

    var teacher = 'Brian Holt';
    console.log(teacher); //Brian holt
}
anotherTeacher()
console.log(teacher)//kyle simpson 
//Even though there is a new scope to deal with the naming problem, we still have a name collision problem. 
/** The princple of least exposure says: you should default  to keeping everything private, and only exposing the
minimal neccessary. 
it 
1. avoid naming collision
2.Hiding something means: people can misuse it 
3. you also protect yourself from future refactoring */




//We can use IIFE to immediately invoke it. The below code anonymous; 

var teacher = 'Kyle Simpson'; 

(function anotherTeacher(){
    var teacher = "Brian Holt"; 
    console.log(teacher); //Brian Holt
})(); 
console.log(teacher)//Kyle Simpson 



//Block scoping 
//or we can use let instead of IIFE
var teacher = 'Kyle Simpson'; 

{
    let teacher = 'Brian Holt'; 
    console.log(teacher)//Brian Holt
}

console.log(teacher)//Kyle Simpson 
