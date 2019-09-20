/* Constrcutors are functions that create new objects.They define 
properties and behavious taht will belong to the new object. Think of them 
as a blueprint for creation of new objects. 

Here is an example of a contructor: */
function owl(){
    this.name = "Aloa"; 
    this.color = "blue"; 
    this.nulLegs = 2; 
}
/*This constructor defines an owl object with properties name, color, and numLegs
set to Aloa, blue and 2

Constructors follow a few conventions: 
-Constrcutors are defined with a capitalised name to distinguish them from 
other function that are not constructors. 

-Constrcutors use the keyword this to set properties of the object 
they will create. Inside the constructor, this refers to the new object it will create

-Constructors define properties and behavious instead of returning a value as the other function might
 */

 function Builder() {
     this.name = 'Trump'; 
     this.years = 5; 
     this.buildingColor = "Gold"; 
 }
let trumpTower  = new Builder; 
console.log(trumpTower)

/* Notice that the new operator is used when calling a constructor. This tells javascript to create a new instance of Builder 
called trumpTower. without "new" operator, "this" inside the constructor would not point to the newly created object, giving 
unexpected results

Now trumpTower has all the properties defined inside the builder constructo

Just like any other object, its properties can be accessed and modified 
*/

et trumpTower  = new constructorr; 
console.log(trumpTower)

trumpTower.name = "The Golden Tower"; 
console.log(trumpTower.name); // The Golden Tower

