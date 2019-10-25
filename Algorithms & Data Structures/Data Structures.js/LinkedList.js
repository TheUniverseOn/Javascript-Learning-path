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
