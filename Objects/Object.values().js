// Object.values() creates an array containing the values of an object 

//Initialise an Object 
const session = {
    id: 1, 
    time: `30-sept-2019`, 
    device: 'Mac', 
    broswer: 'Chrome'
}; 
const values = Object.values(session); 
console.log(values)//[ 1, '30-sept-2019', 'Mac', 'Chrome' ] 
// Object.keys() and Object.values() allow you to return the data from an object