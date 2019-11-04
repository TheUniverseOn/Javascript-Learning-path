/*making public property private by creating a variable within the constructor function. This changes
the scope of that variable to be within the constructor function versus available globally, This way, the variable 
can only be accesses and changed by methods also within the constructor function. 
*/

function Bird(){
let hatchedEgg = 10; //private variable 


//publicly available method that a bird object can use 
this.getHatchedEggCount = function(){
return hatchedEgg; 


}
}

let ducky = new Bird(); 
ducky.getHatchedEggCount(); //returns 10

/*here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because 
hatchedEgg is declared in the same context getHatchedEggCount. in Javascript, a function always 
has access to the context in which it was created. This is called closure. 
*/

function Bird() {

  let weight = 15; 
  this.getWeight = function(){
    return weight; 
  };


}
