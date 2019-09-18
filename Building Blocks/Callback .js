{
const x = 'hello'
console.log(x);
}
//Anything within the curly braces is a block. 


function myFunction(){
if(true){
const x = 25; 
}
console.log(myFunction);
}


const x = 'hello'
console.log(x);


function myFunction(){
    if(true){
    const x = 25; //25  //This is pretty much how block scoping works
    console.log(x);
    }
    console.log(x); //hello //Global scope 
    }
    myFunction(); 
    
    
    
    
    
    
    function add(x, y){
        return x + y 
    }
//function is a machine 
function addFive(z, addReference){
return addReference(z, 5)
}
console.log(addFive(10, add))



//I am trying to think of a callback function  as company hierchical strucuture. 

function CEOs(a, b){
    return a * b
}
function marketingDep(win, report){
    return report(win, 10)
}
console.log(marketingDep(10, CEOs)) //100



//callbacks are everywhere. You might have used them in this way 
console.log([10, 15, 20].map((i) => i * 3.14))_ //[ 31.400000000000002, 47.1, 62.800000000000004 ] 


