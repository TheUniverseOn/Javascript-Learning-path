/* Objects in Js are collections of key/value pairs. The values can consist
of properties and methods and contain all other Javascript data types, such as strings, 
numbers and Booleans

All Objects in JS descend from the parent Object constructor. Object has many 
useful built-in methods we can use and access to make working with indvidual 
objects straightforward. Unlike Array prototype methods like sort() and reverse()
that are used on the array instance, Object methods are used directly on the 
the Object constructor, and use the object instance as a parameter. This is known as 
as static method



Object.create()
The Object.create() method is used to create a new object and link it to the 
prototype of an existing object

We can create a job object instance, and extend it to a more specific object */

//Initiliase an object with properties and methods 

const vacancy = {
    position: 'designer', 
    type: 'hourly', 
    isAvailable: true, 
    showDetails(){
        const accepting = this.isAvailable ? 'is accepting applications' : 'is not accepting applications';

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`)
    }
};

//use object.create to pass properties 

const engineer = Object.create(vacancy); 

engineer.position = 'engineer'; 
engineer.showDetails(); 
console.log(engineer.showDetails())
//The engineer position is hourly and is accepting applications

//The Engineer object now has one property -position - but all the other properties and 
//methods from 'vacancy' are available through the prototype. Object.create() is useful 
//for keeping code DRY(Do Not Repeat Yourself) by minimising duplication. 