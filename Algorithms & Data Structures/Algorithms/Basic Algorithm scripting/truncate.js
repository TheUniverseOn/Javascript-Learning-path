function truncating(str, num) {
  if(str.length > num){
    return str.slice(0, num) + "..."
  } else {
      return str;
  }
  
}

console.log(truncating('I am learning Algorithms and Data structures currently', 6)) //I am l...
