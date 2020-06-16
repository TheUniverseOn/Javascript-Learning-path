Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer



function squareDigits(num){
  //may the code be with you

  let mapped = num.toString().split('').map(i => i* i).join('')
return +mapped

//after mapping, add + to the variable to turn the string into a number
}

Test.assertEquals(squareDigits(9119), 811181);
