function Animal(){}
Animal.prototype.eat = function(){
return "nom nom nom"
}

function Bird(){}

//inherit all methods from Animal 
Bird.prototype = Object.create(Animal.prototype); 

//Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function(){
return 'peck peck'
}
/*As you can see behavior is shared through inheritance. However, there are cases when inheritance 
is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane They can 
fly both, but is not a type of Airplane and vice versa

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of function 
* /

//mixin 
let flymixin = function(obj){
    obj.fly = function(){
        return ('Flying, woosh')
    }
}

//the flymixin takes any object and gives it the fly method

let bird = {
    name: "Donald", 
    numLegs: 2
};

let plane = {
    model: '777', 
    numPassenegers: 500
}; 
//below bird and plane are passed into flymixin, which then 
//assigns the fly function to each object. Now bird and plane can 
//both fly; 
flymixin(bird)

flymixin(plane)

console.log(bird.fly())//Flying, woosh
console.log(plane.fly())//Flying, woosh

//Note how the mixin allows for the same fly methods to be 
//reused by unrelated objects bird and plane 
