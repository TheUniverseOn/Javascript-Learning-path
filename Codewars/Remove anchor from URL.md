


Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')


```
function removeUrlAnchor(url){
  // TODO: complete
  return url.split('#')[0]
  
}
```
### learnt
split returns an array (in this case it has two elements, 0 and 1), and [0] gets the first element of the returned array. 

Test.assertEquals(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
