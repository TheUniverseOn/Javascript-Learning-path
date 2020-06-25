
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.


```
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
let [first, last ]=  firstAndLast.split(' ')
console.log(first, ' ----', last)
  this.getFullName = function() {
    return first +' ' + last
  };
  this.getFirstName = function(){
    return first

  }
  this.getLastName = function(){
    return last

  }
  this.setFirstName = function (_first) {
   first = _first; 
  }
  this.setLastName = function (_last){
last = _last; 
  }
  this.setFullName = function(_firstAndLast){
[first, last] =_firstAndLast.split(' ')
  }

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

```
