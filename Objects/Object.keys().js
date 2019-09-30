// Object.keys() creates an array containing the keys of an object 
//We can create an object and print the array of keys. 

const employees = {
    boss: 'Michael', 
    secretary: 'Pam', 
    sales: 'Jim', 
    accountant: 'Oscar'
};

const keys = Object.keys(employees) 
console.log(keys); //[ 'boss', 'secretary', 'sales', 'accountant' ] 

//Object.keys can be used to iterate through the keys and values of an object. 


//iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key]; 

    console.log( `${key}: ${value}`);
}); 
// boss: Michael
// secretary: Pam
// sales: Jim
// accountant: Oscar


// Object.keys is also useful for checking the lenght of an object. 
// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length); //4