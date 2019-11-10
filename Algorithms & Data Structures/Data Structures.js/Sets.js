/* A set is a collection of items that are unordered and consists of unique
elements(meaning they cannnot be repeated). This data structure uses the same math concept as 
finite sets but applied  to a  computer science data structure 

let's take a look at the math concept  of sets  before we dive into the compuuter 
science implementation of it. In mathematics, a set is a collection pd distinict objects 

For example, we have a set of natural numbers, which consists of integer numbers greater than 
or equal to 0-that  is N  = {0, 1,2,3,4,5,6, ...} The list of the objects 
within the set is surrounded by {} currely braces 

There is also the null set concept. A set with no element is called a null set or 
or an empty set. An example would be a set of prime numbers between 24 and 29. as there 
is mo prime number( a natural number greater than 1 that has no positive divisors other than 
1 and itself) between 24 /!; 29, the set will be empty. we will represent an empty
set with {}

creating a set

The 
we needti deckare these methods

The has(value) method
returns true if the value exists in the set and false orherwise

add(value) this adds a new item to the set


The implementation of this method will look like this 

this.has = function(value){
return value in items; 
}
As we are using an object to store all the values of  the set, we can use
JS in operator to verify that the given value is a property of the 
items object. 

However, there is a better way of implementing this method, which as follows

this.has = function(value) {
return items.hasOwnProperty(value) ;
}

All JS Objects have the hasOwnPropeerty method.This method returnss
a boolean inddicating whether trhe object has tthe specified property or not. 



The add method
The next method we will implement is the add method 


this.add = function(value){
if(!this.has(value)){
items[value]= value; //add value 
return true; 

}
return false; 

}

Given a value, we can check whether the value already exists 
in the set. If not, we add the value to the set and return true to indicate
that value was added. If the value already exists in the set, We simply 
return false to indicate that the value was not added. 



The delete and clear methods

Next, we will implement the remove method:



this.delete = function(value){
if(this.has(value){
delete items[value];//removing the value from the set
return true; 
 
 }
     
return false;
}



in the remove method, we will verify that the given value exists in the set. if this 
is positive, we will remove the value from the set and return trueto indicate
that the value was removed, otherwise, we will return false; 


As we are using an object to store the "items" object of the set, we can simply 
use the delete operator to remove the property from the "items" object.


To use the "Set" class, we can use the following code
as an example.

let set = new Set();
set.add(1);
set.add(2)


Just out of curosity,if we output the items variable on the console
after executing the previous code, this will be output 
Object {1: 1, 2: 2}


As we can note, it's an object with two properties.  The property 
name is the value we added to set abd its value, as well.

if we want remove all the values from the set, we can use the 
clear method,as follows: 

this.clear = function() {
items = {} // 3
} 

All we need to do to reset the items object is assign it to an empty
object again (//3)^. We could also iterate the set and remove all the
values one by one using the remove method, but this is too much 
work as we have an easier way of doing it. 
*/

