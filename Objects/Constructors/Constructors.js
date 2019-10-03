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
 
 
 

/**Extending Constrcutors to Receive Arguments 
 * 
 * The Bird constructor from the above example worked well. However, notice that all 
 * Birds that are created with the Bird consstructor are automatically named 'Albert', are blue, and have two legs 
 * > what if you want birda with different values for name and color? It's possible to chnage the properties of each bird manually but that
 * would be a lot of work
 * 
 * 
 */

 let swan = new Bird(); 
 swan.name = "Pino"; 
 swan.color = 'white'; 

 /** Suppose you were writing a program to keep track of hundreds or even \
  * thousands of different birds in an aviary. It would take alot of 
  * time to create all the birds, then change the properties to different values 
  * for every one
  * 
  * To more easily create different Bird Objects, you can design your Bird 
  * constrcutor to accept parameters */
 function Bird(name, color){
     this.name = name; 
     this.color = color; 
     this.numLegs = 2; 
 } 


 //Then pass in the values as arguments t degineeach unique bird into the Bird constructor; 
 let cardinal = new Bird('Cardie', 'red'); 
//This gives a new instance of Bird with name and color properties set to 
//Cardie' and Red;. the numLegs  property is still set to 2. 

// The cardinal has these properties 
console.log(cardinal)//Bird { name: 'Cardie', color: 'red', numLegs: 2 } 

/** The constrcutor is more flexible. It's now posssible to define the properties for each Bird at the time it 
 * is created, which is one way that Javascript constrcutors are so useful. They group objects together based
 * on shared characteristics and behaviour and define a blue print that automates their creation
  */




//Verify an Obect's Constrcutor with instanceof

  /** Anytime a construcotr function creates a new object, that object is said to be an
   * instance of its constrcutor. javascript gives a convenient way to verify this with the instanceOf operator. 
   * instanceOf allows you to compare an object to a constructor, returning 
   * true or false based on whether or not that object was created with the constructor. 
   * 
   */

//     function Bird(name, color){
//      this.name = name; 
//      this.color = color; 
//      this.numLegs = 2; 
//  } 
let crow = new Bird('Alexis',  'Black'); 
console.log(crow instanceof Bird); //true

/** If an object is created without using  a constrcutor, instanceof will veriffy that it is not 
 * an instance of that constructor
 */





 //Understand own properties 

 // In the following example, the  building constructor defines two properties: name and numFloors' 

 function Building(name){
     this.name = name; 
     this.numFloors = 4; 
 }
 let downTown = new Building('TheModernHouse')
 console.log(downTown)//Building { name: 'TheModernHouse', numFloors: 4 } 
 /** name and numFloors are called own properties, because they are defined directly on the instance object. That means that 
  * downTown has its own separate copy of these properties
  * In fact every instance of Building will have its own copy of these properties 
  * The following code adds all the own properties of downTown to array ownProps: 
  */
 
 let ownProps = []; 
 for(let property in downTown){
     if(downTown.hasOwnProperty(property)){
         ownProps.push(property)

     }
 }
 console.log(ownProps) //[ 'name', 'numFloors' ] 
