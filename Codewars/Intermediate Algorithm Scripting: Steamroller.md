Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.



```
function steamrollArray(arr) {
//return arr.flat(Infinity)

const finalArr= []; 
arr.forEach(item=> {
  if(Array.isArray(item)){
    //recursively call the func
    finalArr.push(...steamrollArray(item))
  }else {
    finalArr.push(item); 
  }
})
//i am steamroller 
console.log(finalArr)
return finalArr
}

steamrollArray([1, [2], [3, [[4]]]]);

```


12161734561279101118131581419
function steamrollArray(arr) {
//return arr.flat(Infinity)

const finalArr= []; 
arr.forEach(item=> {
  if(Array.isArray(item)){
    //recursively call the func
    finalArr.push(...steamrollArray(item))
  }else {
    finalArr.push(item); 
  }
})
//i am steamroller 
console.log(finalArr)
return finalArr
}

steamrollArray([1, [2], [3, [[4]]]]);

// running tests
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// tests completed

// console output

[ 'a' ]
[ 'a' ]
[ 'b' ]
[ 'b' ]
[ 'a', 'b' ]
[ 2 ]
[ 4 ]
[ 4 ]
[ 3, 4 ]
[ 1, 2, 3, 4 ]
[ 2 ]
[ 4 ]
[ 4 ]
[ 3, 4 ]
[ 1, 2, 3, 4 ]
[]
[ 4 ]
[ 4 ]
[ 3, 4 ]
[ 1, 3, 4 ]
[ 4 ]
[ 4 ]
[ 3, 4 ]
[ 1, {}, 3, 4 ]
