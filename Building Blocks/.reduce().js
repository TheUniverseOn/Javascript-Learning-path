/*Just like .map(), .reduce() also runs a callback for each element of an array. The main different between .map() and .reduce()
is that reduce passes the result of this callback(the accumulator) from one array element to the other array element. 

The Accumulator can be anything(integer, string, object etc) and must be instantiated or passed when calling .reduce(). 


Here is an Array containing Spies with their years of exprience.


*/
var Spies = [
    {
    id: 10, 
    name: 'Poe Dameron', 
    years: 14 
    }, 
    {
    id: 2, 
    name: "Temmin 'snap' wexley", 
    years: 30 
    }, 
    {
    id: 41, 
    name: "talisa monobo", 
    years: 16
    }, 
    {
    id: 99,  
    name: "Ello Asa", 
    years: 22, 
    }, 
    ]; 


/* If we need to get the years of exprience among all of them. With .reduce() we can do it in very simple way. 

var totalExprience = Spies.reduce(function(accumulator, spy){
return accumulator + spy.years.
}, 0); 

//arrow function 

var totalExprience = Spies.reduce((accumulator, spy) => accumulator + spy.years); 


console.log(totalExprience) // 82 


//Notice that starting value as 0) 


/*What if If my task is to find out which Spy is the most exprienced one, reduce comes in handy for that as well. */

var spyskinGame = Spies.reduce(function(accumulator, spy){
if(accumulator.years || 0) > spy.years ? accumulator : spy; 

}, {}); 


//{ id: 2, name: 'Temmin \'snap\' wexley', years: 30 }

/*I could have named my accumulator anything but decided just to name it accumulator. My callback compares the accumulator to 
each spy. If a spy has more years exprience that the the accumulator, then that spy becomes the new accumulator so that's the one 
that will be returned and result being Temmin \'snap\' wexley with 30 years of exprience. */



