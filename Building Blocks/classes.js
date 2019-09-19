We understand the constructor functions and prototype> now it's easier to understand Class because Javascript
classes are nothing but just a new way of writing Constructor function by using the power of prototype. 

class Airplane {
    constructor(make, model, color){
        this.make = make; 
        this.model = model; 
        this.color = color; 
    }
    getName(){
        return this.make + " " + this.model;
    }
};

To be able create a new instance of class Airplane, we do this 

let plane400 = new Airplane("Airbus", "383", "Green"); 

So if you actually look at the way constructor is created, the class is very similar. By writing the above code, 
We have actually created a variable named Airplane which references to function constructor defined in the class, 
also we have added a method to the prototype of the variable Airplane same as below. 


class Airplane {
    constructor(make, model, color){
        this.make = make; 
        this.model = model; 
        this.color = color; 
    }
  Ariplane.prototype.getName(){
        return this.make + " " + this.model;
    }
};

let plane400 = new Airplane("Airbus", "383", "Green"); 


Class Features: 

1. Constructor 
Constructor is special function in the class declration, which defines a function, that represents the class itself. 
When you new up a class instance, the constructor is automatically called. 

let plane400 = new Airplane("Airbus", "383", "Green"); 

A constructor can use "super" keyword to call the constructor of the class its extending from. 
A class can not have more than 1 constructor function. 

2.Static methods 
Static methods are functions on class itself, and not its prototype, unike the other methods in the class, which are 
defined on its prototype. 
Static methods are declared using static keyword, are mostly used to create ultility functions. They are called without creating the instance of the class.



class Airplane {
    constructor(make, model, color){
        this.make = make; 
        this.model = model; 
        this.color = color; 
    }
  Ariplane.prototype.getName(){
        return this.make + " " + this.model;
    }
    static getColor(v){
    return v.color: 
    }
};

let plane400 = new Airplane("Airbus", "383", "Green"); 
Airplane.getColor(plane400); 


Getters/Setters
Class can also have a getter/setters to get the property value and or to set the property values. Something like below
class Ariplane2 {
constructor(model){
this.model = model; 
}
get model() {
return this._model; 
}

set mode(value){
this._model = vaue; 
}
}
