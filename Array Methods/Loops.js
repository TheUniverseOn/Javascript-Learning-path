function lookup(searchStr){
try {
var id = getRecord(searchStr); 
  }
catch(err){
var id = -1; 
  }
return id; 
}
var teacher = "suzy"; 
teacher = 'Kyle'; 
const myTeacher = teacher; 
//Hoisting: mataphor for discussing the idea of lexical scope. 
function ask(question){
setTimeout(function waitASec(){
console.log(question); 
  }, 100); 
}
ask("what is closure?"); 
// function ask(question){
//   return function  holdIt(){
//   console.log(question); 
//   };
// }
// var myquestion = ask('What exactly is closure?')
// myquestion()
//closure is just preserving access to variables
// var teacher = "kyle"; 
// var myTeacher = function(){
//   console.log(teacher); 
// }
// teacher = "suzy"; 
// console.log(myTeacher()); 
// for (var i = 1; i <= 3; i++){
//   setTimeout(function(){
//     console.log(`i: ${i}`); 
//   }, i * 1000); 
// }
for (var i = 1; i <= 8; i++){
let j = i; 
return function holder(){
console.log(`j: ${j}`); 
  })
}
for (var i = 1; i <= 8; i++){
let j = i; 
setTimeout(function(){
console.log(`j: ${j}`); 
  }, j * 1000);
}
const game = {
'suspects' : [
    name: "Rusty", 
    color: "Orange"
  }, {
  name: "Miss Scartlet", 
  color: "red"
}
]
}
var gameloop = function(){
for(var i  = 0; i < games.suspects.length; i++ ){
console.log('outer loop')
for(var key in game.suspects[i]){
console.log('inner loop')
if(game.suspects[i] [key] ==='Rusty'){
console.log('Found' \'em !')
      } else{
console.log('next timme!')
      }
    }
  }
}
'Outer loop'
'inner loop'
'inner loop'
var suspects = [
  {
    name: "Rusty", 
    color: "Orange"
  }, {
  name: "Miss Scartlet", 
  color: "red"
  }
    ]
var [{color: firstColor}, {color: secondColor}]  = suspects;
var [{name: firstName}, {name: secondName}] = suspects
//LIst transformations 
function createSuspectsObj(name){
return{
    name: name, 
    color: name.split(" ")[2], 
speak(){
console.log(`my name is `, name);
    }
  }
};
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList = []; 
for(var i  = 0; i< suspects.length; i++){
suspectsList.push(createSuspectsObj(suspects[i])); 
}
// looping with .each \
_.each(suspects, function(name){
suspectsList.push(CreteSuspectObjects(name)); 
})
