
Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
  //..
  return [Math.min(...arr), Math.max(...arr)]
};

describe("Basic tests", function(){
Test.assertDeepEquals(getMinMax([1]),[1,1]);
Test.assertDeepEquals(getMinMax([1,2]),[1,2]);
Test.assertDeepEquals(getMinMax([2,1]),[1,2]);
});
