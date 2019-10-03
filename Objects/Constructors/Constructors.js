import { object } from "prop-types";

/** Constrcutors are functions that create new objects. They define properties and behaviours that will 
 * belong to the new object. Think of them as a blueprint for the creation of new objects
 */

//  Here is an eample of a constructor; 

function Bird(){
    this.name = 'Albert'; 
    this.color = 'blue'; 
    this.numLegs = 2; 
}

//To access the properties we need to create an instance of that object
//Notice in the code block below the 'new' operator is used when calling contrcutor. 
//this tells javascript to create a new instance of Bird callued Birdie. Without 
// the new operator, 'this' inside the constructor would not point of the newly
// created object, giving unexpected results 

var Birdie = new Bird(); 
console.log(Birdie.name); //Albert
//Now Birdie has all the properties defined inside the Bird constructor


Birdie.name = 'Einstein'; 
console.log(Birdie)//Bird { name: 'Einstein', color: 'blue', numLegs: 2 } 
//Like any other object we can access the properties and also modify like above

/** This constructor defines a Bird object with properties name color, and numLegs
 * set to Albert, blue, and 2, respectively. 
 * 
 * Constructors follow a few conventions
 * Constructors are defined with a capitalised name to disnguish them from 
 * the other function that are not constructors. 
 * 
 * Constructors use the keyword this to set properties of the object they 
 * will create. Inside the constructor, this refers to the new object it will 
 * create. 
 * 
 * Constructors define properties and behaviours instead of returning 
 * a value as other functions might
 
 
 
//Extending Constrcutors to Receive Arguments 
