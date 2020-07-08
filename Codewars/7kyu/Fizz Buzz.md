function fizzbuzz(n){
return Array.apply(null, new Array(n)).map((num, index)=> (++index % 3 ? ''  : 'Fizz' ) + (index % 5 ? '' : 'Buzz') || index)
}

Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less than 1).

C# ONLY: If N is smaller than or equal to 0, throw an ArgumentOutOfRangeException!
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
C# method calling example:

string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]
### My solution 
```
function fizzbuzz(n) {
  return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}
```
### Solution
```
function fizzbuzz(n) {
return Array.apply(null, new Array(n)).map((num, index)=> (++index % 3 ? ''  : 'Fizz' ) + (index % 5 ? '' : 'Buzz') || index)
}
```


describe('Fizzbuzz', function() {
  it('Should fizzify 10 numbers correctly', function() {
    var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
    Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
  });
});
