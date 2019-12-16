
  const currencyChange = {
      today: {min:77.3, max: 79}, 
      tomorrow: {min: 80, max: 82}
  }; 

  function getTmrwCurrency(avgChange){
      "use strict"; 


  const{tomorrow: {max: maxtmrwCurrency}} = avgChange; 

  return maxtmrwCurrency; 

}

console.log(getTmrwCurrency(currencyChange));



//USing Destructuring Assignment to Assign Variables from Nested Objects
//Using destructuring assignment to max of obtain avgChange.tomorrow and assigning it to maxtmrwCurrency.
const {name, vehicle, color} = {"name": "tesla", "vehicle": "cybertruck", "color": "grey"}

// combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3]; 
console.log(a, b); //1., [2, 3]


//swap variables easily without temp 
var temp 
var  a = 1, b = 2; 

var temp = a 
a = b
b = temp; 
[b, a] = [a, b]; //destrcutured


//advcanced deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
//a = 1, b = 2, c = [[3, 4, 5], d = 6



// objects
var {user: x} = {user: 5}; //x: 5
console.log(x) //x is undefined




//fail-safe
var {user: x} = {userx: 5};
console.log(x) //x is undefined
