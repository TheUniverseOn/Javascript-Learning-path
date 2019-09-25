/*Checks if every element in an Array pass a test. 
Takes a callback function that implements a test 
Checks if all the elements pass the test. 
Returns true if every element passes the test
Returns false an element fails test */



function checked(value){
    return value < 20; 
}

array10=[ 20, 21, 23, 15, 2 ].every(checked)
console.log(array10)//false



let result = [10, 5, 20, 100].every(function(number){
    return number < 150
})
console.log(result) //true
