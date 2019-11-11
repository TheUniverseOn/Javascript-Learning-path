Sets, dictionaries, abd hashes store unique values. In a set, we are interested
in the value itself as tge primary element. In a dictionary(or map), we store values 
in pairs as [key,value]. The same goes for hashes(they store values in pairs, such as 
[key,value];however, the way that we implement these data structures is a 
little bit different. 

Dictionaries
A set is a collection of distinct elements(non repeated elements). A
dictionary is used to store [key,value] pairs, where the key is used to find 
a particular element. A dictionary is very similar to a set stores
a [key,key] collection of elements. A dictionary is also known as as
 a map.
 
 creating a dictionary
 
 Similarly to the Set class, ES6 also contains implementayion of the 
 Map class,also known as doctionary. 
 
 The skeleton of Dictionary class
 
 function Dictionary(){
var items = {};

}

Similar to the Set class, we will also store elements in an Object instead
of an array. 

declaring methods

set(key,value) : This adds a bew item to the dictionary
delete(key): This removes the value from the dictionary using the key.
has(key): This returns true if the key exists in the dictionary abd false
otherwise.
get(key): This returns a specific value searched by the key.
clear(): This removes all the items from the dictionary
size() ; This returns how many elements the dictionary contains. It is 
similar to the length property of the array. 

keys(): This returns an array of all the keys the dictionary contains.
values(): This returns an array of all the values of the dictionary. 


The has and Set methods 

has(key) method. we will implement this method because it will
be used in other methods, such as set and remove. The implementation is as follows: 

this.has = function(key) {
return key in items; 
}; 

The implementation is is exactly the same as what we did for 
 the Set class . we are using the JS in operator to verify is a
 property of the "items " object. 
 
 
 
 The next method is the set method: 

this.set = function (key, value){
items[key] = value //1
}

This receives a key and value parameter. We simply set the value 
to key property of the "items"  object. This method can be used 
to add new value or update an existing one. 


The delete method 
it's very similar to the delete method fron the Set class; The only
difference is that we will first search for key(instead of value) : 

this. this.delete = function(key){
if(this.has(key)){
delete items[key];
 return true; 
}
return false; 
}

The get and values methods
If we want to search for a particular item from the dictionary and 
retrieve its value, we can use the following method: 

this.get = function(key) {
return this.has(key) ? items[key] : undefined;
}

The get method will first verify that the value that we would 
like to retrieve exists (by searching for key) , and if that 
result is positive, its value is returned. if not, an undefined
value is returned(remember that undefined is different from null);
