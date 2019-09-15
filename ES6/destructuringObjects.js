
  const currencyChange = {
      today: {min:77.3, max: 79}, 
      tomorrow: {min: 80, max: 82}
  }; 

  function getTmrwCurrency(avgChange){
      "use strict"; 


  const{tomorrow: {max: maxtmrwCurrency}} = avgChange; 

  return maxtmrwCurrency; 

}

console.log(getTmrwCurrency(currencyChange));



//USing Destructuring Assignment to Assign Variables from Nested Objects
//Using destructuring assignment to max of obtain avgChange.tomorrow and assigning it to maxtmrwCurrency.
