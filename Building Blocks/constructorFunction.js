
function Airplane {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.getName = function () {
        return this.make + " " + this.model; 
    }
}
let plane = new Airplane("Airbus", 'b3900', 'blue');
let plane2= new Airplane("Boeing", 'A900', 'white');
By writing the last line of code we have created  new objects of type Airplane and we can create as 
many new objects as we want. There are few problems with this technique though, When we write new Airplne()
What Javascript engine does under the hood is that it makes a copy of our Airplane constructor function for each of our 
objects, each and evert property and method is copied to the new instance of the Airplane, and the problem 
here is that we don't want the member functions(methods) of out constructor function to be repeated in every object. 

plane6.year = '2019'
//to be able add this We will have to add it to the constructor function itself like this
function Airplane {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year; 
        this.getName = function () {
        return this.make + " " + this.model; 
    }
}


Next lesson to learn prototype(look through prototype.js for the lesson)

