//One can nest arrays like this 
[["Arsenal", 23], ["Everton", 30]]

//This is called multi-dimensinal Array. 


/*
Accessing Array data with indexs. 

We can access the data inside arrays using Indexes.
Array indexes are coded in the same bracket notation that strings use, execept that instead of speficiying a charcter, they are
speficfying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array is element 0

example */
var numbers = [ 100, 150, 200]; 
numbers[0]; // equals 100
var data = numbers[1]; //equals 150
//data equals 150; 



Unlike strings the entries of arrays are mutable and they can be changed freely. 


var numbers = [ 100, 150, 200]; 
numbers[0] = 99; // [99, 150m 200]

There shouldn't any spaces between the array name and the square brackets, like numbers [0]. Of course, JS will be able to 
run this code correctly but this can be confusing for other programmers. 



Okay, How do I access multi-dimensional Arrays With Indexes though?
One of the quickest way to think of multi-dimensional arrays is to see them as array of arrays. When I use brackets to access 
my array, the first set of btackets refers to the entries in the outer-most(the first level) array, and each additional pair
of brackets refers to the next level of entries inside. 


var stat = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];

console.log(stat[3][0]) //[ 10, 11, 12 ]
console.log(stat[3][1])
console.log(stat[2][1])//7
//notice there shouldn't any spaces between the array name and the brackets. 




//Manipulating Arrays with .push()

An easy way to append data to the end of an array is via the push() function. 
.push() takes one or more parameters and "pushes" them onto the end of the array. 

var bee = [1, 3, 5]; 
bee.push(9); // bee is now [1, 3, 5, 9]

bee.push(["days", 3]) //[ 1, 3, 5, 9, [ 'days', 3 ] ] 




/*Manipulating Arrays with .pop()
.pop() is used to "pop" a value off the end of an arra, We can store this "popped off" value by assigning it to 
a variable. In other words, .pop() remvoes the last element from an array and returns that element

Any type of entry can be popped off an array-numbers, strigns and even nested arrays. */

var pushedBytheBee = [1, 4, 6];
var onedown = pushedBytheBee.pop(); 

console.log(pushedBytheBee) // [1, 4]
console.log(onedown) // [6]




//Manipulating Arrays with .shift()

/* .pop() always removed the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), execept it removes the first 
element instead of the last. */

var pushedBytheBee = [1, 4, 6];
removeerror = pushedBytheBee.shift(); // [4, 6]




