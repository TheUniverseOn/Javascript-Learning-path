You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.




```
function otherAngle(a, b) {
 let sumOfTriangle = 180
 
return sumOfTriangle -b-a
}

```


Test.assertEquals(otherAngle(30, 60), 90);

Test.assertEquals(otherAngle(60, 60), 60);

Test.assertEquals(otherAngle(43, 78), 59);

Test.assertEquals(otherAngle(10, 20), 150);
