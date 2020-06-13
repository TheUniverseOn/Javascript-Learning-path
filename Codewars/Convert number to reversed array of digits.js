


Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]



//option 1
//function  digitize(n) {
// return [...n + ''].map(Number).reverse()
// }

function  digitize(n) {
return (n + '' ).split('').map((i) => {
return Number(i) 
}).reverse()

}


//the n + '' converts the number to string. Then the string is converted to an array using 
//split method. The each string letter is converted to Number. 


Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
