var VCs = [
    {id: 20, name: "VC Pett"}, 
    {id: 24, name: "VC  ers"}, 
    {id: 56, name: "VC  Ozzol"}, 
    {id: 88, name: "VC  errod"}, 
    ];
    
  capitalists = []; 
  VCs.forEach(function(dealmakers){
      capitalists.push(dealmakers.name)
  }); 
  console.log(capitalists);



  var newcapitalist = VCs.map(function(MoneyMakers){
      return MoneyMakers.id
  }); 
  console.log(newcapitalist)


  var TheNewDeals = VCs.map(function(moneyPrinters){
      return moneyPrinters.id
  });
  console.log(TheNewDeals)

  funders = []; 
  VCs.forEach(function(enablers){
      funders.push(enablers.id)
  }); 
  console.log(funders)

  var stakers = VCs.map(function(equitypeople){
      return equitypeople.id
  });
console.log(stakers)


const stakerss = VCs.map(equitypeople => equitypeople.id);

const Deals = VCs.map(associates => associates.id);

console.log(Deals)


Newdealers = []; 
VCs.forEach(function(cashers){
    Newdealers.push(cashers.id)
});  

console.log(Newdealers)


var exits = VCs.map(succesfulStartups => succesfulStartups.name); 

console.log(exits)

var portfolio = VCs.map(function(allstartups){
    return allstartups.id
}); 

console.log(portfolio);





const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



  //create Array of company names 

  const cosE = companies.map(function(arr){
    return `${arr.name} [${arr.start} - ${arr.end}]`;


  }); 
    console.log(cosE);


    const companyNames = companies.map(companyarray => `${companyarray.name} + [${companyarray.start} -${companyarray.end}]`);
    console.log(companyNames)


    const ageSquared = ages.map(age => Math.sqrt(age)).map(age => age * 2); 
    console.log(ageSquared)

    const Mapped = ages.map(AgeNumber => Math.sqrt(AgeNumber)).map(AgeNumber => AgeNumber * 2)
    console.log(Mapped)

   companieName = []; 
   companies.forEach(function(startupname){
       companieName.push(startupname)
   })
   console.log(companieName)

coss = companies.filter(startups => startups.end - startups.start);
console.log(coss) 

years  = companies.reduce(function(yearOn){
    if(yearOn.start > 1990)
    return true;  

});
console.log(companies)