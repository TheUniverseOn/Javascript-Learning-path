/** A function this keyword behaves a little  differently in Javascript compared to to other languages.  It also has some idfferences between strict mode and non-strict mode 
 * 
 * In most cases. the value of this is determined by how a function is detailed(runtime binding) 
  */

  var test = {
      prop: 42, 
      func: function(){
          return this.prop; 
      }, 
  }; 

  console.log(test.func()); //42


function identify(){
    return this.name.toUpperCase(); 
}

function speak(){
    var greeting = "Hello, I'm " + identify.call( this); 
    console.log(greeting); //Hello, I'm Sophonias ​​​  //Hello, I'm READER ​
}

var me = {
    name: "Sophonias"
}; 

var you = {
    name: "Reader"
}; 
console.log(identify.call(me));//Sophonias
console.log(identify.call(you)); //reader

console.log(speak.call(me)); 
console.log(speak.call(you));

