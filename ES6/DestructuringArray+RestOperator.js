// Using Destructuring Assignment with Rest operator to assign array elements

//in come circumstances where array destructuring is involved, you might want to collect the rest of the elements into a separate array.

//The result is similar to Array.prototype.slice() as the code below shows */

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

//Using destructuring with the rest operator to perform an effective Array.prototype.slice()
//so that arr is a sub-array of the original array airplaneCount with the first two elements omitted 
 
const airplaneCount = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  
  const  [a, b, ...arr] = [1,2,3,4,5,6,7,8,9,10];
  return arr;
}
const arr = removeFirstTwo(airplaneCount);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(airplaneCount); // should be [1,2,3,4,5,6,7,8,9,10];
