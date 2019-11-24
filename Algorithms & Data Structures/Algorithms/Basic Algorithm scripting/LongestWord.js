function findLongestWordLength(str) {
    var word = str.split(' ');
    var maxLength = 0; 
      for(var i = 0; i< word.length; i++){
        if(word[i].length > maxLength){
          maxLength = word[i].length; 
        }
      }
    return maxLength
    }
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
