/* There are few reasons why arrays are not always the best data stucture to use for rganisign data. 
In many programming lanagauges, arrays are fixed in length, so it is hard to 
add new data when the last element of the array is reached. Adding and removing data 
from array is also difficult because you have to move aray elements up or down to reflect 
either an addition or a deletion. However, these problems do not come up with JS arrays, since we can use the split()
function without having to perfom additional array element accesses. 
The linked data can be used to almost every situation where a one-dimensional array is 
used, except when you need to access random elements of a list, When a random access is required, an array is 
the better data strucuture to use. 

Linked Lists defined. 

A linked list is collections of objects called nodes. Each node is linked to a successor 
node in the list using an object reference. The reference to another node is called 
a link. 
e.g

MILk -> Bread -> Eggs -> Bacon -> null
 
While array elements are references by their position, a linked list elements are 
references by their relationship to the other elements of the linked list. in the baove example
we say the 'Bread' follows the 'Milk'. Moving through a linked list involves following 
the links of the list from the beginning node to the end node(not incduing the header node, which sometimes 
used as a hook for entry into a linked list). Something else to notice in the figure is that we 
mark the end of a linked list by pointing to a null node. 
Many  linked lists include a special node, called the head, to denote the begining of a linked list. 

Header -> MILk -> Bread -> Eggs -> Bacon -> null  

An object based linked List design 

Example: 
*/

const n1 = {
 data: 100
}


/* A linked list is a squential collectios of elements. Each element is  called a node. Each node has two pieces of informatio 
Data value itself and a pointer that references the next node in the list. 
1. The length list has a head and a tail 
Head node points to the next node and and the next node points to the next node untilwe reach the tail node. This is a singlly 
linked list. 
A doubly linked has: Each node has a pointer to the next and another point to the previous node. Allows is to be traverse 
forward and backward. 

Real world application: Music player list(this can be a circular linked list where the head and tail can be linked ) 
Array: Direct access : Each element in an array is located next to each other. You can easily jump to any position 
Linked List: Squential Access: Each element remembers part of a specific order. Unlike arrays, the elements can be stored anywhere.
to get to an element you have to go through all elements required. because it's elements can be stored anywhere adding and removing 
can be its advantage. 

*/

class LinkedList {
 constructor(){
 this.tail = this.head = null; 
  this.length = 0; 
 }
 push(value) {
  
 }
 
 pop(value) {
  
 }
 _find(value, test=this.test){
  
 }
 test(a,b){
 return a === b; 
 }
 testIndex(search, __, i){
return search === i; 
 }
 get(index) {
 }
 delete(index) {
 }
 
}
  
  
  

class Node {
 constructor(value) {
  this.value = value; 
  this.next = null; 
}
}





// skelton 

function LinkedList(){


let Node = function(element) {
this.element = null; 
 this.next = null;

}
let head = null;
 let length = 0;
 
 
 this.append = function(element) {

  
  let node = new Node(element){
current; 
   
   if(head === null),
   head = node;

} else {
 current = head; 
 
 
 while(currrent= next) {
current = current.next; 

}
 
 current.next = node;
}
length++; 
}
}

// using the data structure 
let list = new LinkedList();
list.append(8);
list.append(18);
