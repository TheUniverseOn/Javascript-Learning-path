const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };
  
  //ES6 allows me to remove the function keyword and colon altogether when I want to define functions in objects. Like the example below.
const person = {
name: "sophonias", 
sayHey() {
return `${this.name} is my name. how are you?`;
}
};
