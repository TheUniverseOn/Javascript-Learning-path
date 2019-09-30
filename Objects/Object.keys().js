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