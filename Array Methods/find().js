
/*"Apart from the obvious (and noticeable) overhead, yes, the results might vary. filter runs till the end of the array, and invokes its callback on every item; in contrast to find which stops after having found one. When the callback throws an exception on one of these additionally iterated elements, the outcome is different.
I don't see any good reason not to use find." */
//example 1
var array1 = [5, 12, 8, 130, 44];
console.log(found = array1.find(element => element > 10)) //12

//example 2

function investigate(value){
    return value >= 100;
}

investigatedNum = [10, 20, 30, 101, 300, 400].find(investigate)
console.log(investigatedNum) //101


//vs filter

function investigate(value){
    return value >= 100;
}

investigatedNum = [10, 20, 30, 101, 300, 400].filter(investigate)
console.log(investigatedNum) //[ 101, 300, 400 ]
