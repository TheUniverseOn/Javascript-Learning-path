

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.





```
const findLongest=(array)=> { 
return array.reduce((all, curr)=> `${curr}`.length > `${all}`.length ? curr : all);
}

```
//reduce sets up the first argument as a running "total" or "accumulator". so .reduce(a,b) - a is the accumulator which default is set to the first index making b the next index. (There are other cases where you can set up what the initial accumulator value is, but default I think it works like this, a index 0 and b index 1)
//so it compares ${b} which is b as a string.length against the accum, a. if length of b is greater than length of a ? return b : if not return a. Return as in set the current accumulator to that value. So given findLongest([7, 8999, 9000, 8, 800]). it checks if 8999.length > 7.length and sets the running accumulator to 8999. 
//then goes through and checks against all the remaining values. is 9000.length > 8999.length --- no. so set set accum as 8999. continue. is 8.length> 8999.length --- no and so on. checks the current accumulator against the next index.
```
const findLongest=(array)=> {
  let m = Math.max(...array);
  for (let i = 0; i < array.length; i++) if (m.toString().length == array[i].toString().length) ?  return array[i] )
  }
  ```
Test.assertEquals(findLongest([1, 10, 100]), 100)
Test.assertEquals(findLongest([9000, 8, 800]), 9000)
Test.assertEquals(findLongest([8, 900, 500,900]), 900) 

}
