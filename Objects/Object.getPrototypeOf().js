// Object.getPrototypeOf() us used to get the internal hidden [[prototype]] of an Object, also 
// accessible through the __proto__ property. 

//in this example, we can create an array, which has access to the Array prototype 

const employees = ['Sep', 'Oct', 'Nov', 'Dec'];
console.log(Object.getPrototypeOf(employees)); 
console.log(Object.getPrototypeOf(employees) === Array.prototype);