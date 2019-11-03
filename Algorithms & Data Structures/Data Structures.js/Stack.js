/** STACKS
 * 
 * functions: push, pop, peek, length
*/

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

