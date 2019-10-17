/* A function expression a function that is assigned as a value somewhere */

var clickHandler = function (){
    //
}; //Anonymous function expresion 

var keyHandler = function keyHandler(){

}

//Named function expression 

/*   */

// var ids = people.map(person => person.id); //This arrow funciton can be read 
// //as an annymous function expression 

// var ids = people.map(function getId(person){
//     return person.id
// })

/*IIFEs

*/

var language = "JS"; 

(function otherLanguage(){
   var language = 'CSS'; 
    topic = "flex-box"; 
    console.log('Awesome'); //Awesome
    console.log(language) //CSS
    
})(); //() invokes the function 
otherLanguage(); //otherLanguage is not defined 

console.log(language);



//Block Scoping 

/* Instead of Using IIFE 

We can simply use the Let keyword */



var language = "JS"; 

{

   let language = 'CSS'; 
    topic = "flex-box"; 
    console.log('Let can replace IIFE'); //Let can replace IIFE
    console.log(language)
}
console.log(language) //JS




/* In the code below, the tmp variable only belongs in the if varriable
 */
function diff(x, y){
    if(x>y){
        let tmp = x; 
        x = y; 
        y = amp; 
    }

    return y - x; 
}



