

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers){
let mapped=  numbers.map((item, accu) => item*(item)) // [ 1, 4 ] // [ 0, 9, 16, 25 ]
return mapped.reduce((total, accu)=> total+ accu, 0)
}



Test.assertEquals(squareSum([1,2]), 5)
Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
