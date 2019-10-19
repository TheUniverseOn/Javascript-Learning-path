
function identify(){
    return this.name.toUpperCase();

}


function speak(){
    var greeting = 'Hello '+ identify.call(this); 
   return greeting;
}

var me = {
    name: "sophonias"
}

var you  ={
    name: "reader"
}; 

console.log(identify.call(me)); //SOPHONIAS
console.log(identify.call(you)); //READER


console.log(speak.call(me)); //Hello SOPHONIAS ​​​​​
console.log(speak.call(you));//Hello SOPHONIAS ​​​​​ 




function herro(num){
    console.log ("herro: " + num); 
       data.count++; 
}
var data = {
    count: 0
};


var i; 

for(i=0; i<10; i++){
    if(i > 5){
        herro(i);
    }
}

console.log(data.count);

/** A this-awarre function can thus have a different context 
 * each time it's called, which makes it more flexible and re
 * reusable 
  */

  var workshop = {
      teacher: 'sophonias', 
      ask(question){
 return (this.teacher, question); 
      }
  }

  console.log(workshop.ask('what is it?'))




   /** Implicit Binding 
       * Explicit Binding
       * new Binding 
       * Window Binding 
       * 
       * The first questions one need to ask when you are trying to 
       * figure out what this keyowrd is that, where is this function invoked?
       * 
       */


       /** Implicit `Binding 
        * Left of the Dot at Call Time 
        */

       var me = {
        name: 'sophonias', 
        age: 23, 
        sayName: function(){
          return (this.name);
        }
      }

    console.log(me.sayName());//sophonias



    var sayNameCom = function(obj){
        obj.sayName = function(){
            return (this.name);
        } ;

    };

    var me = {
        name: 'sophonias', 
        age: 23, 

    }; 

    var you = {
        name: 'Reader', 
        age: 23, 

    }; 

sayNameCom(me); 
sayNameCom(you)

console.log(me.sayName()); //sophonias
console.log(you.sayName());//Reader
