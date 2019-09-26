
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); 
console.log(months)


//using the sort method with function expression to rearrange number
function sortedNum(a, b){
    return a -b
}
var array1 = [1, 30, 4, 21, 100000].sort(sortedNum);
console.log(array1)


var num = [1, 30, 4, 21, 100000]
function number(a, b){
    return a + b; 
}
console.log(num.sort(number))