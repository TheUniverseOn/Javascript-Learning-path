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



Here we have done quite a lot of things firstly using backticks(`), not qoutes (", ')to be able wrap a string. 

next, if you have a look the string is multi line both in the actual code and also in the output. This means no more 
\n within strings which can be come messy. 

/*The ${variable} syntax used above is a placeholder which means I don't have to use concatenation with the + operator anymore. 
Hurray!. To add variables to strings, you just  insert the variable in a template string and wrap it up with ${ and }. Wait, the
template strings wonder has not finshe it. I  can also add other expressions in the string literal i.e ${name + age}. */
