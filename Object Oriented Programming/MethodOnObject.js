/* objects can have a special type of property, called method 
Methods are properties that are functions. This adds different 
behaviour to an object. here is the example of our goat obejct with 
a method */

let goat = {
name: "fredo", 
numLegs: 4, 
sayEllo2myLittleFriend: function(){
{return `I am ${this.name} and I have ${this.numLegs} awesome legs`}; 
}};
console.log(goat.sayEllo2myLittleFriend()); 
