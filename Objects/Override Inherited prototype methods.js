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
