/** STACKS
 * 
 * functions: push, pop, peek, length
*/


/*Stacks are efficient data strucutres because data can be added or removed only from the top of a stack, making these
procedures fast and easy to implement. Stacks are used extensively in programming language implementations for everything
from exp-ression evaluation to handing function calls. 

Stacks op-erations 
Stack is a list of elemenets that are accessible only from one end of the list, which is called the top. ONe common, 
real,–world examp-le of a stack is the stack of trays at a cafeteria. Trays are always removed from the top-, and when trays are 
put back on the stack after being washed, they are p-laced on the top- of the stack. The stack is known as lastp-in first out(LIFO) data 
structure.

Because of the Lastp-in, first out nature of the stack, any element that is not currently at the top- of the stack cannnot be accessed. 
To get to an element at the bottom of the stack, you have to dispose of all the elements above  it first. 

The two primary op-erations of a stack are adding elements to a stack and taking elements off a stack. Elements are added to a using the
the p-ush op-eration. Elements are taken off a stack using the pop- op-eration. 

Another common op-eration on a stack i viewing the element at the top- of the stack. The p-op- op-eration visits the top- of the stack 
but it p-ermanently removed the element from a stack. The peek op-eration returns the value stored at the top- of a stack without 
removing it from the stack. 

To keep- track of where the top- element is, as well as keeping track of where to add a new element, we use a top variable that is 
incremented when we push new elements onto the stack and is decremeneted when we pop elements off the stack. 

While pushing, and popping, and peekings are the primary operations associated with a stack, there are other operations we need 
to perform and properties, we need to perform and p-rop-erties we need to examine. The clear op-eration removes all the elements from
a stack. The length p-rop-erty holds the number of elements contained in a stack. We also define an empty property to let us know 
if a stack has no elements in it, though  we can use the length property for this as well. */


//FIFO : first in first out
//basic usage of stack using array 
var letters = []; 

var word = 'racecar'
var reverseWord = ''; 

//put letters of word into stack


for(var i = 0; i < word.length; i++){
letters.push(word[i])
}

for(var i = 0; i < word.length; i++){
    reverseWord += letters.pop(); 
}

if(reverseWord === word){
    console.log(word + " is a palindrome") //racecar is a palindrome 
} else {
    console.log(word + " is not a palindrome");
}

//stack methods 
/* push()
pop()
peek()
clear()
isEmpty()
size()*/
