

function mixedNumbers(arr) {
    // change code below this line
   arr.push('VIII', 9); 
   arr.unshift('I', 2, 'Three' );
 
    return arr;
  }
  

  console.log(mixedNumbers(['IV', 5, 'six'])); //[ 'I', 2, 'Three', 'IV', 5, 'six', 'VIII', 9 ] 
  