Finding the only element  between two arrays


function differentArray(arr1, arr2) {
  return arr1.concat(arr2)
.filter(element => !arr1.includes(element) || !arr2.includes(element));
  // Same, same; but different.
  return newArr;
}

differentArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  //4
