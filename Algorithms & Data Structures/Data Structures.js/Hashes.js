three basic class: 

put(key,value): This adds new item to the hash table or update it
remove(key): This removes the value frkm the hash table using the key
get(key): This returns a specific balue searched by the key. 


The first method that we will implement before we implement before
these three methods are the "hash" function. This is a private method of the 
HashTable class: 

var loseloseHashCode = function() {
var hash = 0;
 for (var i = 0; i<key.length; i++){
hash += key.charCodeAt(i)
}
 
 return hash % max;//return the max table
}


Given a key parameter, we will generate a number based on the 
sum of each char ASCII value that composes key. So, first, we need a 
variable to store the sum(//1) . Then, wr will iterate through key(//2) 
 and then add the ASCII value of the corresponding character value from the ASCII table
 to the hash variable(to do so, we can use the charCodeAt method from the JS STRING CLASS 
line 3). Finally, we will return this hash value. To work with lowet numbers, we must 
use the rest of the  division (mod) of thevh hash number using an arbitraty number 




Now we have a hash function, wr can implement the put method, as follows : 

this.put = function(key, value){
 var postition = loseloseHashCode(key);//5
 console.log(position + ' -'+ key); //6
             table[position] = value; //7

}

First, for the given key parameter, we need to finda a positoon in the 
table using the "hash" function we created on line 5. For information purose, 
 we will log the  position on the console(//6). We can remove this line
  from the code as it is not necessary. Then, all we have to add
  add the value parameter to the position, which we found using the
  "hash" function.//7

  
  Retrieving a value from the "HashTable" instance is also simple. 
  We will implement the get methodbfor the purpose like this: 
  
  this.get = function(key){
return table[loseloseHashCode(key)]

}

First, we will retrieve the position key parameter using the  
hash function we created. This function will return the position of the value, and 
all we have do is access this position from the table array and return tjis value. 

The last method we will implement is the remove method,which is as 
follows: 

this.remove = function(key) {
table[loseloseHashCode ((key)] = undefined; 
} 
                        
                        
                 hsndling collisions 
        1. Separate chaining 
         2. Linear probing               
                        
                        
                        1. separate chaining consists of creating linked list for each position
                        of the table and storing the elements in it. it's the simplest technique to 
                        handle collision. it requires additional mdmory outside the hashTable instance. 
                        
