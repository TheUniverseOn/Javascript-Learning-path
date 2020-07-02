Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby

### My solution
```
function shortcut(string){
return string.replace(/[aeiuo]/g, '')

}
```


### another solution 
function shortcut(string){
return string.split('').filter(vowel=> ['e','i','o','u','a'].indexOf(vowel) ==-1).join('')
}


### Tests

Test.expect(shortcut('hello') == 'hll', 'encode failed. Your result: '+shortcut('hello')+' Expected result: hll')
Test.expect(shortcut('how are you today?') == 'hw r y tdy?', 'shortcut did not work properly');
Test.expect(shortcut('complain') == 'cmpln', 'shortcut did not work properly');
Test.expect(shortcut('never') == 'nvr', 'shortcut did not work properly');
