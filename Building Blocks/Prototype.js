Whenever a new function is created in Javascript, Javascript engine by default adds a 'prototype' property to it. 
This property is an object and we call it 'prototype object". By By default this prototype object has a constructor property which points back to our function,
and another property __proto__ which is an object, have a look at the following. 


function Airplane(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.getName = function() {
        return this.make + " " + this.model;
    }
}

The __proto__ property is called dunder proto. it points to the prototype property of our 
constructor function. have a look the following to see what I mean. 
Airplane.prototype //running Airplane.prototype
{constructor: ƒ}
constructor: ƒ Airplane(make, model, color)
__proto__: Object

Whenever a new instance of the constructor function is created this property is also copied to 
the instance along with tother properties and methods: 

var plane = new Airplane("Airbus", "2992", "blue") //new instance 

//calling plane result below
Airplane {make: "Airbus", model: "2992", color: "blue", getName: ƒ}
color: "blue"
getName: ƒ ()
make: "Airbus"
model: "2992"
__proto__: Object


------------------
The __proto__ object can be used to add new properties and methods to the constructor function using
the following syntax and they will be available to all the instances of the constructor function. 

plane.prototype.year = '2020'; 


This is really cool However if I want to make change in any primitive property, it will only be reflected 
in that instance and not among all instances. 

Airplane.prototype.year = "2022"
"2022"
plane
Airplane {make: "Airbus", model: "2992", color: "blue", getName: ƒ}
var plane3 =new Airplane("Boeing", "2BB", "White")
undefined
plane3
Airplane {make: "Boeing", model: "2BB", color: "White", getName: ƒ}
plane.year = '2019'
"2019"

more on prototype here https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b
