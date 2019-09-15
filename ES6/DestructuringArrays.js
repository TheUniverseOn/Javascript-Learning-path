// Using destructuring assignment to swap the values of carDoor1 and carDoor2 so that carDoor1 receives the value stored in carDoor2, and carDoor2 receives the value stored in carDoor1.

//  Since the strict mode is applied inside the function, don’t try to use const because you will get reference error, because b is not defined inside the function. 


let carDoor1 = 8, carDoor2 = 6;
(() => {
  "use strict";
 
    [carDoor2,carDoor1] = [carDoor1,carDoor2];
   
 
})();
console.log(carDoor1); // should be 6
console.log(carDoor2); // should be 8
