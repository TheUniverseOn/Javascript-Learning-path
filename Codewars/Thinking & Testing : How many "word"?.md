No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!


```

function testit(s){
return (s.match(/w.*?o.*?r.*?d/ig)|| []).length

}



```


//How many "word" in these sentence? Use your fingers and toes to count
Test.assertSimilar(testit("word"), 1, "");
Test.assertSimilar(testit("hello world"), 1, "");
Test.assertSimilar(testit("I love codewars."), 0, "");
Test.assertSimilar(testit("My cat waiting for a dog."), 1, "");
Test.assertSimilar(testit("We often read book, a word hidden in the book."), 2, "");
Test.assertSimilar(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2, "");
Test.assertSimilar(testit("This sentence have one word."), 1, "");
Test.assertSimilar(testit("This sentence have two word, not one word."), 2, "");
Test.assertSimilar(testit("One word + one word = three word ;-)"), 3, "");
Test.assertSimilar(testit("Can you find more word for me?"), 1, "");
//click "Submit" try more testcase...
