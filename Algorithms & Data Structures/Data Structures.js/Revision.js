
function HashTable() {
var table = []
}


 //the hash function. This is a private method of the "HashTabble" class
 
 var hashAlgo = function(key) {
var hash = 0; //1

for(var i = 0; i < key.length; i++){
hash += key.charCodeAt();
}
return hash % max; 
} 

/* Given a key parameter, we will generate a number based on the sum
of each char ASCII value that composes "key". So,first, we need a variable 
to store the sum(line {1}. Then, we will iterate through key(line {2}

and add the ASCII value of the corresponding */


now we have our "hash" function, we can implement the put method, as follows


this.put = function(key) {

var position = hashAlgo(key);
       table [position]=  value 
}


//retrieving value from the hashtable

this.get = function(key) {
table[hashAlgo(key)]
}



this.remove = function(key){
table[hashAlgo(key)]= undefined;
}


//using the HashTable class

var hash = new HashTable(); 
hash.put("sophonias", "software Engineer')
   hash.put("sophonias", "software Engineer')      
             
         //separate chaining 
 var ValuePair = function(key, value) {
this.key = key;
 this.value = value;
 
 this.toString = function() {
return '[' + this.key + ' - ' + this.value + ']'
 }
}
