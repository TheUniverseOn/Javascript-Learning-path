In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats are considered UNeven for this kata.




```
function testEven(n) {
    //Your awesome code here!
   return  n % 2 ===0 ? true : false
}

```

Test.assertEquals(testEven(0), true, "testEven for 0");
Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
Test.assertEquals(testEven(1), false, "testEven for 1");
Test.assertEquals(testEven(2), true, "testEven for 2");
Test.assertEquals(testEven(-4), true, "testEven for 2");
