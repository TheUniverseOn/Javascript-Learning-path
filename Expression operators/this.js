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
console.log(identify.call(me));//kyle
console.log(identify.call(you)); //reader

console.log(speak.call(me)); 
console.log(speak.call(you));

/** This code snippet allows the identify() and speak() functions to be reused against 
 * mulitple context objects(me and you), rather than needing a separate multiple context objects(me and you), 
 * rather than needing a separate version of the function for each object. 
 * 
 * instead of relying on this, you could have explicitl ypassed in a context object to both identify() and speak()
 */




 function foo(num){
     console.log('foo:' + num );

     this.count++; 
 }

 foo.count = 0; 

 var i; 
 for( i =0; i<10; i++){
     if(i > 5){
         foo (i); 
     }
 }

 console.log(foo.count); 


 const   Phonecost = 600;
 const tax = 0.08; 
var  accessory = 10
const SpendingRestriction = 700

var bankFund = 1000; 
var amount = 0; 


function calculateTax(amount){
 return amount * tax;  
    
 }

 function formatAmount(amount){
     return "$" + amount.toFixed(2); 
 }
 //keep buying while you still have money
while(amount <bankFund){
    amount = amount + Phonecost; 
}

//can we afford accessory?
if(amount < SpendingRestriction){
    amount = amount + accessory; 
}

amount = amount + calculateTax(amount); 
console.log('my purchase' + formatAmount(amount))

if (amount > bankFund) {    console.log("You can't afford this purchase. :("    );}