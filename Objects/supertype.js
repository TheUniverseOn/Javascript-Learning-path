 // this is a supertype called animal that defined behaviors shared by all animals
 
 function Animal(){
 Animal.prototype.eat = function(){
 console.log(" nom nom"); 
 
 }
 
 /*How can we reuse Anima's methods inside Bird and Dog withiut defining them again. Well, we can do that by using a technqiue 
 called inheritance. 
 Let's create an instance of Animal using the new operator*/
 
 let animal = new Animal(); 
 
 /*There are some disadvanatges when using this sytax for inheritance, which are too complex for the scope of this 
 challenge. Instead, here is an alternative approach without those disadvantages */
 
 let animal = Object.create(Animal.prototype); 
 
 / * Object.create(ob) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the 
 recipe for creating an object. By setting the prototype of animal to be Animal's protype, I am effectively giving 
 the animal isntance the same recipe as any other instance of Animal. */
 
 animal.eat()//nom nom
 animal instanceof Animal; //true 
