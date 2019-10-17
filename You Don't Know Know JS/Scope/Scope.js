/*Scope is where in memory to look for things. The rule for that is
is called scope*/

x  = 42; //Where in the memory is it(scope)
//console.log(y);//where does the y comes from



var language = "JS"; 

function otherLanguage(){
    language = 'CSS'; 
    topic = "flex-box"; 
    console.log('Awesome');
    console.log(topic)
}
otherLanguage(); 

console.log(language);
