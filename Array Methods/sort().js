import { string } from "prop-types";

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



//sorting objects
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
 console.log(items.sort(function(a, b){
      return a.value - b.value
  }))

  console.log(items.sort(function(a, b){
     var nameA =  a.name.toUpperCase(); 
     var nameB = b.name.toUpperCase(); 
     if (nameA < nameB){
         return -1;
     }

     if(nameA > nameB){
     return 1; 
    }
    return 0;
  }));

  var stringArray = ['Blue', 'Humpback', 'Beluga'];
  var numericStringArray = ['80', '9', '700'];
  var numberArray = [40, 1, 5, 200];
  var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

  function compareTheNumber(a, b){
      return a - b; 
  }
  console.log('stringArray:', stringArray.join());
  console.log('Sorted: ', stringArray.sort());


console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort())
console.log('Sorted with compareTheNumner:', numberArray.sort(compareTheNumber))
console.log('Sorted without compareNumbers:', numberArray.sort())



console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareTheNumber)); 