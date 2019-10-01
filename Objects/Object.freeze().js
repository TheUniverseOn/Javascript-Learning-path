/* Object.freeze() prevents modification to properties and values of an object, and prevents 
properties from being added or removed from an object */



  //Initilise an object 

  const user = {
    firstName : 'Sophonias', 
    Location : 'London', 
    job: 'Programmer and Entrepreuner', 
programmingLang: 'Javascript'

}; 


const newUser = Object.freeze(user);
newUser.Location = 'Brighton';
newUser.active = true; 

console.log(newUser)



/* In the above example, we tried to override the Location 'London'with "Brighton ", but the location property stayed the same 
We also tried to add  a new property, active, but it was not added */
