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
