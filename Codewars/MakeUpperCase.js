Write a function which converts the input string to uppercase.


//answer
const makeUpperCase=(str) => str.toUpperCase()

describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    Test.assertEquals(makeUpperCase("hello"), "HELLO");
  });
});
