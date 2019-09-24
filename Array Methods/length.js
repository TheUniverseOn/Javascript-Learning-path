import { element } from "prop-types";

const arr = [11, 22, 33, 44, 55, 66];
console.log(arr.length); 



var namelistB = [];
namelistB.length = Math.pow(2, 32) -1;
console.log(namelistB.length);

const arrr = [1, 2]; 
console.log(arrr); 

arrr.length = 5; 
console.log(arrr); 

arrr.forEach(element =>console.log(element))




//Iterating over an array 
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length; 
for (var i = 0; i < length; i++){
    numbers[i] *=2; 
}
console.log(numbers)

var num = [1, 2, 3, 4, 5];
var len = num.length; 
console.log(num.map(num => num * 3))
console.log()

var pyramids = [1, 2, 4, 5, 6, 7]; 
console.log(len = pyramids.length)




// creating an array 

var fruits = ['Apple', 'Banana'];

console.log(fruits.length);

// access(Index into) an array item 
var first = fruits[0]; 
console.log(fruits[fruits.length-1]); 
console.log(first)
var newe = fruits.push('kiwi')
console.log(fruits)

console.log(fruits[fruits.length-1])

console.log(fruits.push('Mango', 'Pineapple', 'Grapes'))
console.log(fruits[fruits.length-1])



// Loop over an array 
// console.log(fruits.map(item => item))

fruits.forEach(function(item, index, array) {
    console.log(item, index)
})

// console.log(fruits.map((item, index =>  item + index)) )

const map = fruits.map((item, index) => {
    console.log(index); 
    return item + index;
});
console.log(map)




//Add an Array to the end of the array 
var newFruits = fruits.push('strawberry');
console.log(fruits) /*[ 'Apple', 
'Banana', 
'kiwi', 
'Mango', 
'Pineapple', 
'Grapes', 
'strawberry' ]  */

//remove array the end of the array 
var removedFruit = fruits.pop(); 
console.log(removedFruit) // strawberry

//remove from the first array 
var removeFirst = fruits.shift(); 
console.log(removeFirst) //Apple 

//add to the front of an array 
var addFront = fruits.unshift('blackberry');
console.log(fruits) /* [ 'blackberry', 'Banana', 'kiwi', 'Mango', 'Pineapple', 'Grapes' ]*/

//find the index of an item in the array 
fruits.push('avocado'); 
console.log(fruits) /* [ 'blackberry', 'Banana', 
'kiwi', 
'Mango', 
'Pineapple', 
'Grapes', 
'avocado' ] */

var pos = fruits.indexOf('Banana'); 
console.log(pos)//1

// remove an item by index position
var removedItem = fruits.splice(pos, 1, 'newfruit'); 
console.log(removedItem) //[ 'Banana' ] ​​
console.log(fruits) /*
[ 'blackberry', 
'newfruit', 
'kiwi', 
'Mango', 
'Pineapple', 
'Grapes', 
'avocado' ] */


//remove items from an index position 
var vegetables =['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables)   //[ 'Cabbage', 'Turnip', 'Radish', 'Carrot' ] 

var posi = 1, n = 2; 
console.log(posi)

var removedItems = vegetables.splice(posi, n); 
console.log(removedItems)

console.log(vegetables.splice())
console.log(vegetables)

var vegetable =['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetable.splice(1,2))
vegetable


// copy an Array 
var shallowCopy = fruits.slice(); 
console.log(shallowCopy)