/* Just like people inherit genes from their parents, an object inherits its prototype directly 
from the constructor function that created it. For example, here the Bird constructor creates the duck object:*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

        Dog.prototype.isPrototypeOf(beagle)


/* Whenever the new  operator is put infront of a function call these four things happen 
1. It creates a brand new empty object out of thin air
2. then it links that new empty object to another object
3. It envokes the function that it was called infront of with this keyword pointing at the object
4.when the function is returned, if the function does't return an object, the new keyword assumes you meant to return the new keyword(in the baove example (beagle) is renamed) */



