
/*Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding
elements of this object (converted to a String) starting at position. Otherwise returns false. */
var glue = "Glue is here From Switzerland."
console.log(glue.startsWith(glue))//false

var  glue = "Glue is here From Switzerland."
console.log(glue.startsWith('Glue')); //true
