


Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')

### My solution
```
function removeUrlAnchor(url){
  // TODO: complete
  return url.split('#')[0]
  ###split returns an array (in this case it has two elements, 0 and 1),[1]about and [0] gets the first element of the returned array. 
}
```
```
function removeUrlAnchor(url){
  // TODO: complete
  var index = url.indexOf('#')
  return index === -1 ? url : url.substring(0, index)
//if it's false just return url, else return from o, wherever # is found to.

}
```
### The substring() method returns the part of the string between the start and end indexes, or to the end of the string.


Test.assertEquals(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
