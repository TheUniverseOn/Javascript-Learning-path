Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.




```

function lovefunc(flower1, flower2){
  // moment of trut
 return flower1 % 2 === 0 && flower2 % 2 !== 0 ? true : flower2 % 2 !== 0 && flower1 % 2 !== 0 ? false :  
flower2 % 2 === 0 && flower1 % 2 === 0 ? false : flower1 % 2 !== 0 && flower2 % 2 === 0

}


```


Test.assertEquals(lovefunc(1,4), true)
Test.assertEquals(lovefunc(2,2), false)
Test.assertEquals(lovefunc(0,1), true)
Test.assertEquals(lovefunc(0,0), false)

