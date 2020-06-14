
iven an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//solution 
const countPositivesSumNegatives =(input) => {
if(!Array.isArray(input) || input.length === 0){
return [] 
}
if(input== null){
return []
}
 let negative = input.filter(item=> item <=0)  

let positive = input.filter(item => item >=1)
let final= [];
 final.push(positive.length)
final.push(negative.reduce((total, accu)=> total+ accu, 0))
console.log(final)
 return final 
}


describe("Example tests", function(){
    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    var actual = countPositivesSumNegatives(testData);
    var expected = [10, -65];

    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
    
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    
    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
});

