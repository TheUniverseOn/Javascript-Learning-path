// A new feature that was introduced in ES6 is the template literal. This is unique type of string that 
//helps with code readibility and helps with creating complex strings easy by allowing me to create multi-line strinfs and 
//
const student = {
    name: "Haribo bobo", 
    age : 200, 
    studying: "German"
}; 

//here we use template literal with multi-line and string interoolation
const greeting = `Hallo,ich heiße ${student.name}! I am currently studying ${student.studying} 
as you can see and also using literal template. I am also ${student.age} years old LOL ;)`


console.log(greeting); 

//Hallo,ich heiße Haribo bobo! I am currently studying German  
as you can see and also using literal template. I am also 200 years old LOL ;) 
