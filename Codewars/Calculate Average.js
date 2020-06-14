Write function avg which calculates average of numbers in given list.

//solution 


function find_average(array){

return array.reduce((total, acc) => total + acc, 0)/ array.length
}

Test.assertEquals(find_average([1,1,1]), 1);
Test.assertEquals(find_average([1,2,3]), 2);
