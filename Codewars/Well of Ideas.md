For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


Test.describe("Example tests",_=>{
Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
});


### My solution 
```
function well(x){
let wordLen =  x.filter(word=> word==='good').length 
return  wordLen >2 ? 'I smell a series!'  : wordLen > 0 ? 'Publish!' : 'Fail!' 

}

```


### another Solution 

function well(x){
const count = x.reduce((s, v)=> s+(v=='good'), 0)
return count ? count > 2 ? 'I smell a series!' : 'Publish!'  : 'Fail!'

}

