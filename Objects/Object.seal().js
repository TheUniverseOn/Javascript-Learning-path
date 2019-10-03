/*Object.seal() prevents new properties from being added to an object, but 
allows the modification of exisitn properties. This method is simialr to freeze().   */

//Initialise an object 
const user = {
    username: 'Sophonias JS', 
    password: 'JS123'
}; 

//Seal the object 
const newUser = Object.seal(user); 

newUser.password = '**********'; 
newUser.active = true; 
console.log(newUser)


//The new active property was not added to the sealed object, but the password property was
// successfuly changed 
