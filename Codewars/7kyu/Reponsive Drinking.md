Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  =>  "1 glass of water"
"1 shot, 5 beers and 1 glass of wine"  =>  "7 glasses of water"
Notes
To keep the things simple, we'll consider that anything with a number in front of it is a drink: "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"
The number in front of each drink lies in range [1; 9]



```
function hydrate(s) {
  // your code here
  //return s.split("").filter(i=> typeof i === 'number')
   let filtered =  s.replace(/[^0-9]/g, '').split('').map(i=> +i).reduce((x,y)=> x+y)
   return filtered <= 1 ? `${filtered} glass of water` : `${filtered} glasses of water`
  
 // s.split('').reduce((accu, curr)=> accu+(isNan(+curr) ? 0 : +curr), 0)     
     //.reduce((accu, curr )=> accu+curr,0)+' glass of water' 
}
```


describe("Kata", () => {
  it("Basic tests", () => {
    assert.strictEqual(hydrate("1 beer"), "1 glass of water");
    assert.strictEqual(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
    assert.strictEqual(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
  });
});
