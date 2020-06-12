//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
filtered = arr.filter(i => i > 0)

return  filtered.reduce((num,i ) => num + i, 0 )
}



Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);
