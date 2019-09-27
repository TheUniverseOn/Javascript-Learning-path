
/* So you may have received an array holding multiple objects inside it - each one representing a Venture capitalist. Your task is
only to get an array containing their IDs for each VC. 

There are many ways to achieve the task. You may start with a for each liek the first example   */



var VCs = [
    {id: 20, name: "VC Pett"}, 
    {id: 24, name: "VC  ers"}, 
    {id: 56, name: "VC  Ozzol"}, 
    {id: 88, name: "VC  errod"}, 
    ];
    

//forEach Vs Map.js

//forEach
  capitalists = []; 
  VCs.forEach(function(dealmakers){
      capitalists.push(dealmakers.name)
  }); 
  console.log(capitalists);


//.map
  var newcapitalist = VCs.map(function(moneyMakers){
      return moneyMakers.id
  }); 
  console.log(newcapitalist)

// arrow function 
var newcapitalist = VCs.map(moneyMakers => moneyMakers.id); 
  console.log(newcapitalist)



/* So How does .map() actually works? It takes 2 arguments, 
1. callback 
2.The optional context(which will be 
considered as this in the callback which we didn't use above).
The callback runs for each value in the array and returns each new value in the resulting
array*/
