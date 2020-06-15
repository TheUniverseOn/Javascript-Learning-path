Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.


function sumArray(array){

let biggest = Math.max.apply(Math, array)
let smallest = Math.min.apply(Math, array)


if(array === null || 0 || array.length <=1){
return 0
}
return array.reduce((total, accu)=> total+accu, 0) -biggest-smallest


}
