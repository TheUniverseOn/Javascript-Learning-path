/* Just like people inherit genes from their parents, an object inherits its prototype directly 
from the constructor function that created it. For example, here the Bird constructor creates the duck object:*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

        Dog.prototype.isPrototypeOf(beagle)
