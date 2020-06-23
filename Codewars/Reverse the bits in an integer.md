
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.

```

function reverseBits (n) {
 let bits=   n.toString(2)
 let reversed =  bits.split( "" ).reverse( ).join( '' )
return parseInt(reversed, 2)

}

```


const assert = require("chai").assert;

describe("Sample tests", function() {
  it("should work for some integers", function() {
    Test.assertEquals(reverseBits(417), 267);
    Test.assertEquals(reverseBits(267), 417); 
    Test.assertEquals(reverseBits(0), 0); 
    Test.assertEquals(reverseBits(2017), 1087); 
    Test.assertEquals(reverseBits(1023), 1023); 
    Test.assertEquals(reverseBits(1024), 1); 
    Test.assertEquals(reverseBits(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);   
  });
});
