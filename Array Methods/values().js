//The values() methods returns a new Array iterator object that contains the values for each index in the 
//the array

const array1 = ['a', 'b', 'c'];
const iterator = array1.values(); 

for(const value of iterator) {
    console.log(value); //a, b, c
}