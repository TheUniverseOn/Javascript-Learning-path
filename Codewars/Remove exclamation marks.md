

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.





```
function removeExclamationMarks(s) {
  return s.split('').filter(i=> i !== '!').join('')
}

```

Test.assertSimilar(removeExclamationMarks("Hello World!"), "Hello World");
