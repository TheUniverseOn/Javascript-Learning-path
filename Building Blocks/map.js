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

