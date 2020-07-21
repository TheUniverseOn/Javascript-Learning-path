In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

```
function solve(s){
    //..
  let uppercase = s.split('').filter(x=> x.match(/[A-Z]/)).length
  let lowercase = s.split('').filter(x=> x.match(/[a-z]/)).length
  return lowercase>=uppercase?s.toLowerCase():s.toUpperCase(); 
}
```

describe("Basic tests", function(){
Test.assertEquals(solve("code"),"code");
Test.assertEquals(solve("CODe"),"CODE");
Test.assertEquals(solve("COde"),"code");
Test.assertEquals(solve("Code"),"code");
});
