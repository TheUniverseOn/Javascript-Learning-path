//The filter() method creates a new array with all elements that pass the test implemented by 
//the provided function.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(result = words.filter(word => word.length > 10))


function bigEnough(value){
    return  value >=10
}

var filtered = [12, 5, 8, 130, 44].filter(bigEnough)
console.log(filtered)
