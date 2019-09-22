//Splice changes the orginal array whereas slice() doesn't but both of them returns array object. 
var array = [1, 2, 3, 4, 5]; 
console.log(array.splice(2)); //This will return [3, 4, 5]

//The original array is effected resulting in array being [1,2] 



//splice can also do this 
var array = [1, 2, 3, 4, 5]; 
console.log(array.splice(3, 2, 'hey I am mr Splicer')); 
console.log(array) // returns this[ 1, 2, 3, 'hey I am mr Splicer' ]


..................slice(); 

var arr = [1, 2, 3, 4, 5]; 
console.log(arr.slice(4)) // returns [5];
console.log(arr) // returns [1, 2, 3, 4, 5]; 

With .splice() the original array is not affected and still returns [1, 2, 3, 4, 5]. 
