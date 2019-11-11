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



The next method is the values method. This method will be used retrieve an array 
of all values instances present in the dictionary: 

this.values = function(){
var values = [];
 for(var k in items){  //1
  if(this.has(k)){
values.push(items[k]); //2

}
return values; 
}
}

First, we iterate through all the attributes from the items object(//1) 
 Just to make sure it exists,  we will use the has function to verify the 
 key really exists, and then we will add its value to the values array(//2). At the 
 end, we simply return all the values found; 
 
 
 The clear,size, keys, and getItems methods
 Tge clear and size methods are exactly the same as those from 
 Set class. 
 
 The keys method returns all the keys used to identify a value 
 in the Dictionary class. To retrieve all the kets from a JS object, we can 
 use the "keys" method from Object class by passsing our Object as a parameter: 
 
 
 this.keys = function(){
return Object.keys(items)
}
 FYI, we can verify the output of the items property, let's 
implement a methid called getItems that will return the "items" variable 
like this : 

this.getItems = function(){
return items;

}

Using the Dictionary class
 first of all, we will create an instance of Dictionary class, and then
 we will add three e-mails to it. We will use the Dictionary
 instance to exemplify an e-mail address book.  
 
 Let's execute some codenising the class we created: 

var dictionary: new Dictionary(); 
dictionary.set("pixelspony", "hello@pixelspony.com");

if we execute this code: we will get true

console.log(dictionary.has("hello"))//true

The following code will output 1 because wr have added only 1
element
console.log(dictionary.size()): //1

console.log(dictionary.values()) ; // ["hello@pixelspony.com"]
console.log(dictionary.keys()) ; // ["pixelspony"]
console.log(dictionary.get("pixelspony")) ; // ["hello@pixelspony.com"]


The hash table 
HashTable aka HashMap, a hash implementation of the Dictionary class
 
 
 Hashing consists of finding a value in a data structure in the
the shortest time possible. In the above get method snippet, we
need to iterate through the structure until we find it. When we use 
the hash function, wr already know which position the value is in, so
wr can simply retirve it. A hash function is a function that, given a 
key, will return an address in the table where the value is.








