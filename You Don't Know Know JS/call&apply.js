using call() and apply() function methods 


//allow you to invoke a function 


using a call//
1. function.call(this, arg1, arg2); 
2. The first argument is an object that will become of the value og thid. 
3. one or more arguments to be sent to the function may follow; 

uding apply

function.apply(this, [arg1. arg2]); 
the first argument is an object that will become the valye of this 
one or more arguments to be sent to the function may follow in a single array

var user1 = {
firstName: "Jon",
lastName: "Batista",
fullName: function(){
return this.firstName + " " + this.lastName
}
};

var user2 = {
firstName: "Sarah",
lastName: "West",
fullName: function(){
return this.firstName + " " + this.lastName
}
};

var greeting = function(term){
console.log(term + " " + this.firstName); 
}

greeting.call(user1, "Gooten Morgennn!", "!"); 
greeting.call(user2, "Hello, Gooten Afternoon", "!")

greeting.apply(user1, ["Gooten Morgennn!", "!"]); 
greeting.apply(user2, ["Hello, Gooten Afternoon", "!"])



//over-riding //call
console.log(user1.fullName.call(user2)); 
