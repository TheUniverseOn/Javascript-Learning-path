/* Instead of Using IIFE */

function repeat(fn, n){
    var result; 

    for(let i = 0; i< n; i++){
        result = fn( result, i); 
    }

    return result;
}