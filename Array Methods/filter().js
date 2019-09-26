//The filter() method creates a new array with all elements that pass the test implemented by 
//the provided function.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(result = words.filter(word => word.length > 10)) //'destruction'


function bigEnough(value){
    return  value >=10
}

var filtered = [12, 5, 8, 130, 44].filter(bigEnough)
console.log(filtered) //[ 12, 130, 44 ]



// Appending new words
word = ['spray', 'limit', 'exuberant', 'destruction','elite', 'prsent'];
const Addwords = word.filter((word,index,array)=>{
array.push('new') 
return word.length < 6
})

/// Only three fits the condition even though the `words` itself now has a
//lot more words with character length less than 6
