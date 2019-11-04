
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


/* To understand this binding, we have to understand the call-site: the location in code where
a function is called (not where it's decalred). We must inspect the call-site to answer the question 
 :What is this 'this' a reference to?
 
Finding the call site is generally "go locate" where  a function is called from" but it's not always 
that easy, as certain coding patterns can be obscure the true call-site. 

What is important is to think about the call-stack(the stack of functions that have been called 
to get us to the current moment in execution). The call-site we care about is in the inovation before 
the currently executing function. 

Let's demonstrate the call stack and call site: 




*/
function me() {
    //call -stack is: 'me'
    //so, our call-site is in the global scope
}

console.log(' me '); 
you();// call site for 'you'
}
function you(){
    //call-stack is 'me' => 'you'
    //so our call-site is in 'me'
    
    console.log('you'); 
    them(); <-- //call-site for 'them'
}

function them(){
    //call-stack is: 'me' => 'you => 'them'
   // so our call stack is in 'you'
}
me(); // <-- call-site for 'me'
    
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

    // In strict mode; the strict mode state of the call-site of them() is relevant; 
    function them(){
     console.log(this.a);    
    }
    
    var a = 2; 
    
    (function(){
        'use strict'; 
        
        them(); //2
    })(); 
    
    /* implicit Binding 
    Another rule to consider is whether the call-site has a context object, also referred 
    to as an owning or containing object, though these alternate terms could be slightly misleading 
    */
    
    function me(){
        console.log(this.a); 
    }
    
    var obj = {
        a: 2, 
        me: me
    }; 
    
    obj.me(); //2
    
    /* In the above exmaple, first, notice the manner is which me() is declared  and then later 
    added as a reference prooperty onto obj. Regardless of whether me() is initially declared on me, or 
    is added as a reference later(as the above snippet shows), in neither is the function really 
    'owned' or 'contained' by the obj object.
    However, the call-site uses the obj context to reference the function, so you say tjat obj object 
    ' owns' or 'contains' the function reference at the time the function is called.
    
    Whatever you choose to call this pattern, at the point that me() is called, it's preceeded by 
    an object reference to obj. When there is a context object for a function reference, the implicit 
    binding rule says that's it's that object that should be used for the function call's this binding.
    Because obj is the this for the me(), this.a is synomymous with obj.a
    
    Only the top/last level of an object property reference chain matters to the call-site. For instance: 
    */
    
    function me(){
        console.log(this.a); 
    }
    
    var obj1 = {
        a: 42, 
        me: me
    }; 
    var obj2 = {
        a: 2, 
        obj2: obj2
    }
    
    
    
    
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







function Vehicles(foundedDate) {
    console.log(this.carName, foundedDate) //Tesla was founded 1 July 2003 
    //Land Rover was founded in 1978 
    
}


var car1 = {
carName: "Tesla", 
Vehicles: Vehicles, 
}

var car2 = {
carName: "Land Rover", 
Vehicles: Vehicles, 
}


car1.Vehicles("was founded 1 July 2003")
car2.Vehicles("was founded in 1978") //
