//Returns the index of the first element in the array where predicate is true, and -1 otherwise.


//example 1
function finder(value){
    return value > 10;
}

var arr = [5, 12, 8, 130, 144].findIndex(finder);
console.log(arr)

//In above example, we have defined an array and the call the findIndex() function on that array.
//So the first item which is higher than 10 is 12, and its index is 1. So 1 is logged on the console.





//example 2

var array1 = [5, 12, 8, 130, 44]; 

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// 3

//In above example, we have defined an array and the call the findIndex() function on that array.
//So the first item which is higher than 13 is 130, and its index is 3. So 3 is logged on the console.
