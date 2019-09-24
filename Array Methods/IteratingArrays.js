//Using for loop


var numbers = [1, 2, 3, 4, 5];
var length = numbers.length; 
for (var i = 0; i < length; i++){
    numbers[i] *=2; 
}
console.log(numbers) // //[ 3, 6, 9, 12, 15 ] 

//Using Map function 
var num = [1, 2, 3, 4, 5];
console.log(num.map(num => num * 3)) //[ 3, 6, 9, 12, 15 ] 
console.log() //

var pyramids = [1, 2, 4, 5, 6, 7]; 
console.log(pyramids.length) //


