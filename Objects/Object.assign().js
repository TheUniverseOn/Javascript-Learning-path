//Object.assign() is used to copy values from one object to another 
//we can create two objects and merge them with Object.assign()
//Initiliase an object 
const name = {
    firstName : 'Sophonias', 
    Location : 'London'
}; 
//initialise another details 
const details = {
job: 'Programmer and Entrepreuner', 
programmingLang: 'Javascript'

}; 

const character = Object.assign(name, details);
console.log(character)
/*{ firstName: 'Sophonias', 
  Location: 'London', 
  job: 'Programmer and Entrepreuner', 
  programmingLang: 'Javascript' }  */