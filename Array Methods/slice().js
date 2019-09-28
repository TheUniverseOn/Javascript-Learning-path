
/* Zero-based index at which to begin extraction.
A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
If begin is undefined, slice begins from index 0.
If begin is greater than the length of the sequence, an empty array is returned.
end Optional
Zero-based index before which to end extraction. slice extracts up to but not including end.
For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
If end is omitted, slice extracts through the end of the sequence (arr.length).
If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:*/



function sliced(value){
    return value 
}
var stringArray = ['Blue', 'Humpback', 'Beluga'].slice(1, 2);
console.log(stringArray)//[ 'Humpback' ] 
